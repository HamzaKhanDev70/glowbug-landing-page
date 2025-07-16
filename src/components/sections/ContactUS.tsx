"use client";
import { Mail, Phone, User, MessageSquare, List } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
    agree: false,
  });

  const [error, setError] = useState("");

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

 
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;
  const isCheckbox = type === "checkbox";

  setFormData((prev) => ({
    ...prev,
    [name]: isCheckbox && e.target instanceof HTMLInputElement
      ? e.target.checked
      : value,
  }));
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      setError("You must agree to the terms.");
      return;
    }

    const wordCount = countWords(formData.message);
    if (wordCount > 300) {
      setError("Message exceeds 300 word limit.");
      return;
    }

    setError("");
    console.log("Form Data:", formData);
    setShowSuccessModal(true);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 overflow-visible">
      {/* Top Image */}
      <div className="flex justify-center mb-6">
        <div className="relative w-[95vw] aspect-[18/9]">
          <Image
            src="/images/contactus-hero.png"
            alt="contact Us"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 90vw"
          />
        </div>
      </div>

      {/* Content & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div className="pl-4 mt-4">
          <button className="bg-blue-500 heading-s font-normal px-4 py-2 rounded-2xl mb-4">
            Get in Touch
          </button>
          <h2 className="text-[#FEE300] heading-s sm:heading-l font-normal mb-4">
            Let’s Get In Touch.
          </h2>
          <p className="body-normal">
            Or just reach out manually to{" "}
            <span className="text-[#FEE300]">hello@dreamstream.com</span>
          </p>
        </div>

        {/* Right Column - Form */}

        <form
          onSubmit={handleSubmit}
          className="bg-[#2F2F2F] p-6 shadow-md space-y-5 text-white"
        >
          {/* Full Name */}
          <div className="relative">
            <label className="body-normal">Full Name</label>
            <div className="relative mt-2">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2  w-5 h-5" />
              <input
                type="text"
                name="fullName"
                placeholder="Enter Your Full Name..."
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-black text-white pl-10 p-3 rounded-xl border border-gray-600"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="body-normal">Email Address</label>
            <div className="relative mt-2">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2  w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black text-white pl-10 p-3 rounded-xl border border-gray-600"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="body-normal">Phone Number</label>
            <div className="relative mt-2">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2  w-5 h-5" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-black text-white pl-10 p-3 rounded-xl border border-gray-600"
              />
            </div>
          </div>

          {/* Reason for Contact - Dropdown */}
          <div className="relative">
            <label className="body-normal">Reason for Contact</label>
            <div className="relative mt-2">
              <List className="absolute left-3 top-1/2 transform -translate-y-1/2  w-5 h-5" />
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full bg-black text-white pl-10 p-3 rounded-xl border border-gray-600"
              >
                <option value="" disabled>
                  Select reason...
                </option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label className="body-normal">Message</label>
            <div className="relative mt-2">
              <textarea
                name="message"
                placeholder="Your Message (300 words max)"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-black text-white pl-10 pt-3 p-3 rounded-xl border border-gray-600 resize-none"
                required
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-4 h-4  focus:ring-yellow-400"
            />
            <label className="body-normal text-white">
              I hereby agree to our
              <a href="#" className="underline text-blue-600">
                Privacy Policy
              </a>
              terms.
            </label>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black text-xl py-3 rounded font-normal hover:bg-yellow-500 transition"
          >
            Submit Form
          </button>
        </form>
      </div>

      {/* success modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl mx-auto">
           
            <div
              className="relative z-10 w-full min-h-[510px] rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/images/rectangle-59.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            
              }}
            >
            
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-[10%] right-[13%] z-30 text-white hover:text-gray-400 text-xl bg-black/50 hover:bg-black/80 rounded-full w-8 h-8 flex items-center justify-center transition-all"
              >
                ✕
              </button>
              <div className="absolute inset-0 flex items-center justify-center p-4 ">
                <div className="relative w-full h-full max-w-3xl">
                  <Image
                    src="/images/success.png"
                    alt="Success"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
