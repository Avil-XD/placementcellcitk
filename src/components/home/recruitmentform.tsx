"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface RecruitmentFormProps {
  setShowRecruitmentForm: (show: boolean) => void;
}

export default function RecruitmentForm({ setShowRecruitmentForm }: RecruitmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    position: "",
    requirements: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      setShowRecruitmentForm(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg max-w-lg w-full mx-auto relative">
      <button
        onClick={() => setShowRecruitmentForm(false)}
        className="absolute right-4 top-4 p-2 hover:bg-muted rounded-full transition-colors"
        aria-label="Close form"
      >
        <FaTimes className="w-5 h-5" />
      </button>

      <div className="mb-6 text-center">
        <h2 className="text-2xl font-heading font-bold text-gradient mb-2">
          Start Recruitment
        </h2>
        <p className="text-muted-foreground">
          Fill out the form below to initiate the recruitment process
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="companyName" className="text-sm font-medium">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter company name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter email address"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter phone number"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="position" className="text-sm font-medium">
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter position"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="requirements" className="text-sm font-medium">
            Requirements
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
            rows={4}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Enter job requirements"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <motion.div
                className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>Submitting...</span>
            </div>
          ) : (
            "Submit"
          )}
        </motion.button>
      </form>
    </div>
  );
}
