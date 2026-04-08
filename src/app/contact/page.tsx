"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const showSuccessToast = () => {
    console.log("Showing success toast...");
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Message sent successfully!",
      text: "We'll get back to you soon.",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      background: "#1A3263",
      color: "#ffffff",
      iconColor: "#17A891",
      customClass: {
        popup: "custom-toast-popup",
        title: "custom-toast-title",
        htmlContainer: "custom-toast-text",
      },
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  const showErrorToast = (errorMessage?: string) => {
    console.log("Showing error toast...", errorMessage);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: "Failed to send message",
      text: errorMessage || "Please try again or email us directly.",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      background: "#1A3263",
      color: "#ffffff",
      iconColor: "#ff4444",
      customClass: {
        popup: "custom-toast-popup",
        title: "custom-toast-title",
        htmlContainer: "custom-toast-text",
      },
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Form submitted");
    console.log("Environment variables:", {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? "Set" : "Not set",
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? "Set" : "Not set",
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? "Set" : "Not set",
    });

    // Check if environment variables are set
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials not configured");
      showErrorToast("EmailJS not configured. Please add credentials to .env.local");
      setIsLoading(false);
      return;
    }

    try {
      console.log("Sending email via EmailJS...");
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      console.log("EmailJS response:", response);
      showSuccessToast();
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Email send error:", error);
      showErrorToast(error?.text || "Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Test button to verify SweetAlert works
  const testToast = () => {
    console.log("Testing toast...");
    showSuccessToast();
  };

  return (
    <>
      <style jsx global>{`
        .custom-toast-popup {
          border-radius: 16px !important;
          padding: 20px !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
        }
        .custom-toast-title {
          font-size: 16px !important;
          font-weight: 600 !important;
          margin-bottom: 4px !important;
        }
        .custom-toast-text {
          font-size: 14px !important;
          opacity: 0.9 !important;
        }
        .swal2-timer-progress-bar {
          background: #17A891 !important;
        }
      `}</style>

      <main className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] tracking-tight">Let's Connect</h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full mb-8 shadow-[0_0_10px_rgba(23,168,145,0.5)]" />
            <p className="text-lg md:text-xl text-brand-beige opacity-80 max-w-2xl mx-auto">
              Ready to engineer the future? Drop us a line regarding AI integrations, VLSI scaling, or Next-Gen Web setups and we will be in touch instantly.
            </p>
          </motion.div>

          {/* Centered Glassmorphism Form container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#111]/60 backdrop-blur-xl rounded-[3rem] p-8 md:p-14 shadow-[0_0_50px_rgba(23,168,145,0.1)] border border-white/10 max-w-3xl mx-auto overflow-hidden"
          >
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Custom Input Group */}
                <div className="group">
                  <label htmlFor="name" className="block text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-muted mb-2 group-focus-within:text-brand-accent transition-colors">
                    Full Name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-brand-muted/30 focus:ring-0 focus:outline-none focus:border-brand-accent transition-all duration-300 text-white font-bold text-lg placeholder-brand-muted/40"
                    placeholder="[NAME]"
                  />
                </div>
                {/* Custom Input Group */}
                <div className="group">
                  <label htmlFor="email" className="block text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-muted mb-2 group-focus-within:text-brand-accent transition-colors">
                    Email Address <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-brand-muted/30 focus:ring-0 focus:outline-none focus:border-brand-accent transition-all duration-300 text-white font-bold text-lg placeholder-brand-muted/40"
                    placeholder="[EMAIL_ADDRESS]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Custom Input Group */}
                <div className="group">
                  <label htmlFor="phone" className="block text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-muted mb-2 group-focus-within:text-brand-accent transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-brand-muted/30 focus:ring-0 focus:outline-none focus:border-brand-accent transition-all duration-300 text-white font-bold text-lg placeholder-brand-muted/40"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                {/* Custom Input Group */}
                <div className="group">
                  <label htmlFor="subject" className="block text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-muted mb-2 group-focus-within:text-brand-accent transition-colors">
                    Subject <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-brand-muted/30 focus:ring-0 focus:outline-none focus:border-brand-accent transition-all duration-300 text-white font-bold text-lg placeholder-brand-muted/40"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              {/* Custom TextArea Group */}
              <div className="group">
                <label htmlFor="message" className="block text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-muted mb-2 group-focus-within:text-brand-accent transition-colors">
                  Message <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-brand-muted/30 focus:ring-0 focus:outline-none focus:border-brand-accent transition-all duration-300 text-white font-bold text-lg placeholder-brand-muted/40 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="pt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 bg-brand-dark hover:bg-brand-accent text-white rounded-[1.5rem] shadow-[0_10px_30px_rgba(26,50,99,0.3)] hover:shadow-[0_15px_40px_rgba(23,168,145,0.4)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 text-lg font-bold tracking-wide"
                >
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-[3px] border-white border-t-transparent rounded-full animate-spin"></div>
                      Encrypting & Sending...
                    </>
                  ) : (
                    <>
                      Launch Message
                      <Send className="w-5 h-5 ml-1" />
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>

          {/* Map or Additional Info Section */}
          <div className="mt-16 bg-[#111]/80 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-white/10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-brand-beige opacity-70 mb-6 font-mono text-sm">
                Whether you need AI integration, VLSI design, or IoT solutions, our team of experts is ready to bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
                  <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">AI & ML</span>
                </div>
                <div className="px-6 py-3 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
                  <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">VLSI Design</span>
                </div>
                <div className="px-6 py-3 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
                  <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">IoT Solutions</span>
                </div>
                <div className="px-6 py-3 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
                  <span className="text-brand-accent font-bold text-sm uppercase tracking-wider">Full Stack Dev</span>
                </div>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}
