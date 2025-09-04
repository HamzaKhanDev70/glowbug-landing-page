"use client";
import { Mail, User, List } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .max(15, "Full name must be 15 characters or less"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  reason: Yup.string().required("Reason for contact is required"),
  message: Yup.string()
    .required("Message is required")
    .test("wordCount", "Message must not exceed 300 words", (value) => {
      if (!value) return true;
      return value.trim().split(/\s+/).length <= 300;
    }),
  agree: Yup.boolean().oneOf([true], "You must agree to the terms"),
});

export default function ContactUs() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    if (showFormModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showFormModal]);

  return (
    <section className="px-4 sm:px-6 lg:px-12 overflow-visible" id="find-us">
      {/* Top Image */}
      <div className="flex justify-center mb-6">
        <div className="relative w-[95vw] aspect-[18/9]">
          <Image
            src="/images/contactus-hero.png"
            alt="contact Us"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 90vw border-4 border-white"
          />
        </div>
      </div>

      {/* Content */}
      <div className=" grid-cols-1 lg:grid-cols-2 gap-12 items-center flex justify-start">
        {/* Left Column */}
        <div className="pl-32 mt-4">
          <h2
            className="text-[#FEE300] heading-s sm:heading-m font-normal mb-4"
            style={{ fontFamily: '"Right Grotesk Medium", sans-serif' }}
          >
            Let’s Get In Touch.
          </h2>
          <p className="body-normal">
            Please provide a form and email contact in this one and other details (if
            necessary).
          </p>
               <button
            onClick={() => setShowFormModal(true)}
            className="bg-blue-500 body-normal uppercase px-4 py-2 rounded-2xl mt-4"
          >
            Contact us
          </button>
        </div>
      </div>

      {/* FORM MODAL */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 "  ref={modalRef}
         >
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl bg-[#2F2F2F] rounded-lg p-4 sm:p-6 shadow-lg min-h-fit h-[50%] thin-scrollbar overflow-y-auto chat-scrollbar p-20">
            {/* Close Button */}
            <button
              onClick={() => setShowFormModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-400 text-2xl"
            >
              ✕
            </button>

            {/* Form */}
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phone: "",
                reason: "",
                message: "",
                agree: false,
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setLoading(true);
                setErrorMsg("");
                try {
                  const res = await fetch("/api/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      to: values.email,
                      subject: "You're on the list – DreamStream is LIVE!",
                      body: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #ffffff; color: #333; border: 1px solid #eee;">
                          <h2 style="color: #2B2D42;">Welcome to <span style="color: #F72585;">DreamStream</span></h2>
                          <p>Hi ${values.fullName || "there"},</p>
                          <p>Thanks for joining us on this exciting journey.</p>
                          <p>We're thrilled to welcome you to <strong>DreamStream – Magic in Motion</strong>.</p>
                          <p>Our mission is to keep you connected and entertained, no matter where your journey takes you.</p>
                          <p>Stay tuned,</p>
                          <p style="font-weight: bold;">The DreamStream Team<br/>Powered by NKU Technologies</p>
                          <hr style="margin: 40px 0;"/>
                          <small style="color: #888;">You received this email because you signed up on our website.<br/>If you didn’t, you can ignore this email.</small>
                        </div>
                      `,
                      fullName: values.fullName,
                      phone: values.phone,
                      reason: values.reason,
                      message: values.message,
                    }),
                  });
                  if (!res.ok) throw new Error("Failed to send email");
                  setShowFormModal(false);
                  setShowSuccessModal(true);
                  resetForm();
                } catch (err) {
                  console.error(err);
                  setErrorMsg("Something went wrong. Please try again.");
                } finally {
                  setLoading(false);
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting, values, setFieldValue }) => (
                <Form className="space-y-3 text-white">
                  {/* Full Name */}
                  <div>
                    <label className="body-normal">Full Name</label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                      <Field
                        type="text"
                        name="fullName"
                        placeholder="Enter Your Full Name..."
                        className="w-full bg-black text-white pl-10 p-3 rounded-xl border border-gray-600"
                      />
                      <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="body-normal">Email Address</label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full bg-black text-white pl-10 p-3 rounded-xl border border-gray-600"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="body-normal">Phone Number</label>
                    <PhoneInput
                      country={"us"}
                      value={values.phone}
                      onChange={(phone) => setFieldValue("phone", phone)}
                      inputStyle={{
                        width: "100%",
                        backgroundColor: "black",
                        color: "gray",
                        paddingLeft: "48px",
                        height: "48px",
                        borderRadius: "12px",
                      }}
                      buttonStyle={{
                        backgroundColor: "black",
                        borderRight: "1px solid #4B5563",
                      }}
                      dropdownStyle={{ backgroundColor: "gray", color: "white" }}
                      containerStyle={{ width: "100%" }}
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="body-normal">Reason for Contact</label>
                    <div className="relative mt-2">
                      <List className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                      <Field
                        as="select"
                        name="reason"
                        className="w-full bg-black text-white pl-10 p-3 rounded-xl border border-gray-600"
                      >
                        <option value="" disabled>
                          Select reason...
                        </option>
                        <option value="Request a Demo">Request a Demo</option>
                        <option value="Advertising">Advertising or Sponsorship</option>
                        <option value="Feedback">Feedback or Suggestion</option>
                        <option value="General">General Inquiry</option>
                        <option value="Other">Other</option>
                      </Field>
                      <ErrorMessage name="reason" component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="body-normal">Message</label>
                    <Mail className="absolute left-3 top-12 transform -translate-y-1/2 w-5 h-5" />
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your Message (300 words max)"
                      rows={3}
                      className="w-full bg-black text-white pl-10 pt-3 p-3 rounded-xl border border-gray-600 resize-none"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center space-x-2">
                    <Field type="checkbox" name="agree" className="w-4 h-4 focus:ring-yellow-400" />
                    <label className="body-normal text-white">
                      I hereby agree to our{" "}
                      <a href="#" className="underline text-blue-600">
                        Privacy Policy
                      </a>{" "}
                      terms.
                    </label>
                  </div>
                  <ErrorMessage name="agree" component="div" className="text-red-500 text-sm" />

                  {/* Error */}
                  {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading || isSubmitting}
                    className="w-full bg-yellow-400 text-black text-xl py-3 rounded font-normal hover:bg-yellow-500 transition"
                  >
                    {loading ? "Submitting..." : "Submit Form"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
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
            <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center px-6 py-4 sm:gap-14 z-10">
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
      )}
    </section>
  );
}
