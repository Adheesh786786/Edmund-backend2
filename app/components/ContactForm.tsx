"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Here you would typically send the data to your API endpoint
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // In a real app, you'd do something like:
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6 text-black dark:text-zinc-50">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-400 focus:border-transparent transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-400 focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-400 focus:border-transparent transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-400 focus:border-transparent transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-3 px-6 rounded-full bg-red-600 dark:bg-red-500 text-white font-medium hover:bg-red-700 dark:hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting"
            ? "Sending..."
            : status === "success"
            ? "Message Sent!"
            : status === "error"
            ? "Error - Try Again"
            : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-sm text-green-600 dark:text-green-400 text-center">
            Thank you! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 dark:text-red-400 text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

