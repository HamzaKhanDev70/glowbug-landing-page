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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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

      <div className="relative aspect-[16/6] w-full mb-12">
        <Image
          src="/images/contactus-hero.png"
          alt="Contact Us"
          fill
          className="object-contain rounded-xl"
        />
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
                className="w-full bg-black text-white pl-10 p-3 rounded border border-gray-600"
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
                className="w-full bg-black text-white pl-10 p-3 rounded border border-gray-600"
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
                className="w-full bg-black text-white pl-10 p-3 rounded border border-gray-600"
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
                className="w-full bg-black text-white pl-10 p-3 rounded border border-gray-600"
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
                className="w-full bg-black text-white pl-10 pt-3 p-3 rounded border border-gray-600 resize-none"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className=" rounded-l p-6 w-[65%] max-w-md text-center relative border border-green-600 shadow-lg">
            {/* Close button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* Success Image */}
            <div className="w-full h-80 relative mb-4">
              <Image
                src="/images/success.png"
                alt="Success"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
