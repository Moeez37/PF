'use client';
import React from "react";
import homeContent from "@/content/homeContent";
import Button from "@/components/common/Button";

const ContactForm = () => {
  const { title, subtitle, form } = homeContent.contact;
  // Assume fields: [name, email, serviceType, phone, message]
  const [field1, field2, field3, field4, ...restFields] = form.fields;
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{title}</h3>
      <p className="text-muted mb-8">{subtitle}</p>
      <form className="bg-card-dark/80 backdrop-blur-lg rounded-2xl shadow-glass p-8 max-w-2xl mx-auto flex flex-col gap-6 border border-border-dark">
        {/* First row: field1 & field2 */}
        <div className="flex flex-col md:flex-row gap-6">
          {[field1, field2].map((field) => (
            <div key={field.name} className="flex-1 flex flex-col gap-2">
              <label htmlFor={field.name} className="font-medium text-muted">
                {field.label}
                {field.required && <span className="text-primary">*</span>}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                className="px-4 py-2 rounded-lg border border-border-dark bg-card-dark text-foreground focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          ))}
        </div>
        {/* Second row: field3 & field4 */}
        <div className="flex flex-col md:flex-row gap-6">
          {[field3, field4].map((field) => (
            <div key={field.name} className="flex-1 flex flex-col gap-2">
              <label htmlFor={field.name} className="font-medium text-muted">
                {field.label}
                {field.required && <span className="text-primary">*</span>}
              </label>
              {field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  className="px-4 py-2 rounded-lg border border-border-dark bg-card-dark text-foreground focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="">Select...</option>
                  {(field.options || []).map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="px-4 py-2 rounded-lg border border-border-dark bg-card-dark text-foreground focus:ring-2 focus:ring-primary outline-none"
                />
              )}
            </div>
          ))}
        </div>
        {/* Textarea (message) */}
        {restFields.map((field) =>
          field.type === "textarea" ? (
            <div key={field.name} className="flex flex-col gap-2">
              <label htmlFor={field.name} className="font-medium text-muted">
                {field.label}
                {field.required && <span className="text-primary">*</span>}
              </label>
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                rows={5}
                className="px-4 py-2 rounded-lg border border-border-dark bg-card-dark text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
              />
            </div>
          ) : null
        )}
        <Button type="submit" variant="primary" className="mt-2">
          {form.submit.label}
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;