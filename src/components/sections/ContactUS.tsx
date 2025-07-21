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
            Please provide a form and email contact in this one and other details (if necessary).
            {/* <span className="text-[#FEE300]">hello@dreamstream.com</span> */}
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
     

            <div className=" fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative w-[90%] max-w-5xl h-[88%]">
        {/* SVG Background */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-0"
        >
          <polygon
            points="0,9 100,2 100,98 0,90"
            fill="#040404B2"
            stroke="#00774F"
            strokeWidth="0.8"
          />
        </svg>

        {/* Close Button */}
        <button
           onClick={() => setShowSuccessModal(false)}
          className="absolute top-5 right-[1%] z-60 w-8 h-8 hover:bg-black/70 text-white hover:text-gray-500 flex items-center justify-center text-lg"
        >
          ✕
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center px-6 py-4 gap:4 sm:gap-14 z-10">
        
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
