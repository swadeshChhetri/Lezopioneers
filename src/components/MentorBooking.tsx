"use client";
import { FormEvent } from "react";

type MentorBookingFormProps = {
  mentorName: string;
  formData: {
    name: string;
    email: string;
    date: string;
    time: string;
    message: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
};

export default function MentorBookingForm({
  mentorName,
  // formData,
  onChange,
  onSubmit,
}: MentorBookingFormProps) {
  return (
    <div className="text-xs sm:text-sm p-4 sm:p-6">
      <h2 className="text-2xl font-semibold mb-6">Book a Session with {mentorName}</h2>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Your Name"
            name="name"
            type="text"
            value='Rahhul'
            onChange={onChange}
            required
          />

          <Input
            label="Your Email"
            name="email"
            type="email"
            // value={formData.email}
            value='Rahhul'
            onChange={onChange}
            required
          />

          <Input
            label="Session Date"
            name="date"
            type="date"
            // value={formData.date}
            value='Rahhul'
            onChange={onChange}
            required
          />

          <Input
            label="Session Time"
            name="time"
            type="time"
            // value={formData.time}
            value='Rahhul'
            onChange={onChange}
            required
          />
        </div>


          <div>

            <Textarea
              label="Message (Optional)"
              name="message"
              // value={formData.message}
              value='Rahhul'
              onChange={onChange}
            />

            <button
              type="submit"
              className="button-bg-color hover:bg-color text-white px-6 py-4 rounded-md w-full"
            >
              Book Session
            </button>
          </div>
      </form>
    </div>
  );
}

// Reusable Input
function Input({
  label,
  name,
  type,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
}

// Reusable Textarea
function Textarea({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-300"
        rows={4}
      />
    </div>
  );
}

