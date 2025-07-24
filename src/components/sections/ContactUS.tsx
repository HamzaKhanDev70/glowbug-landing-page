"use client";
import { Mail, Phone, User, MessageSquare, List } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactUs() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";

    setFormData((prev) => ({
      ...prev,
      [name]:
        isCheckbox && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setLoading(true);
    const payload = {
      to: formData.email,
      subject: "You're on the list – DreamStream is LIVE!",
      body: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #ffffff; color: #333; border: 1px solid #eee;">
      <h2 style="color: #2B2D42;">Welcome to <span style="color: #F72585;">DreamStream</span> </h2>

      <p>Hi ${formData.fullName || "there"},</p>

      <p>Thanks for joining us on this exciting journey.</p>

      <p>We're thrilled to welcome you to <strong>DreamStream – Magic in Motion</strong>.</p>

      <p>We’re bringing you a next-generation platform that transforms your travel experience with:</p>
      <ul>
        <li> Seamless entertainment across buses, trains, ferries, and flights</li>
        <li> Entertainment you’ll love, anywhere you go</li>
      </ul>

      <p>Our mission is to keep you connected and entertained, no matter where your journey takes you.</p>

      <p>Thanks for being a part of the future of travel.</p>

      <p>Stay tuned,</p>

      <p style="font-weight: bold;">The DreamStream Team<br/>Powered by NKU Technologies</p>

      <hr style="margin: 40px 0;"/>

      <small style="color: #888;">You received this email because you signed up on our website.<br/>
      If you didn’t, you can ignore this email.</small>
    </div>
  `,
      fullName: formData.fullName,
      phone: formData.phone,
      reason: formData.reason,
      message: formData.message,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send email");
      const data = await res.json();
      setSuccessMsg("Email sent successfully ");
      setShowSuccessModal(true);

      setEmail("");
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Something went wrong ");
    } finally {
      setLoading(false);
    }
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
            Please provide a form and email contact in this one and other
            details (if necessary).
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
            <PhoneInput
              country={"pk"}
              value={formData.phone}
              onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
              inputStyle={{
                width: "100%",
                backgroundColor: "black",
                color: "gray",
                paddingLeft: "48px",
                height: "48px",
                borderRadius: "12px",
                // border: "1px solid #4B5563", // Tailwind's border-gray-600
              }}
              buttonStyle={{
                backgroundColor: "black",
                borderRight: "1px solid #4B5563",
              }}
              dropdownStyle={{ backgroundColor: "gray", color: "white" }}
              containerStyle={{ width: "100%" }}
            />
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
            disabled={loading}
            className="w-full bg-yellow-400 text-black text-xl py-3 rounded font-normal hover:bg-yellow-500 transition"
          >
            {loading ? "Submitting..." : "Submit Form"}
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
