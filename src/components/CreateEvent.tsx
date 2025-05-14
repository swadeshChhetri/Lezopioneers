// components/CreateEventForm.tsx
"use client";

import { useState } from "react";

export default function CreateEventForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    tags: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic
    console.log(formData);
    onClose(); // Close modal after submit
  };

  return (
    <div className="text-xs sm:text-sm p-4 sm:p-6">
      <h2 className="text-2xl font-semibold mb-6">Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Event Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Event Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-300"
            />
          </div>


          <div>
            <label className="block text-sm font-medium">Event Tags (comma separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-300"
            />
            <p className="text-sm text-gray-500">Enter tags separated by commas (e.g., Networking, Pitch, Investors).</p>
          </div>
        </div>
        <div>
          <div>
            <label className="block text-sm font-medium">Event Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className=" button-bg-color hover:bg-color text-white px-6 py-4 rounded-md w-full mt-4 "
          >
            Create Event
          </button>
        </div>

      </form>
    </div>
  );
}
