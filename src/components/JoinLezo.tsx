
"use client";
import { useState } from "react";

export default function JoinForm({ onClose }: { onClose: () => void }) {
  const [role, setRole] = useState("founder");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose(); // Close modal after submit
  };

  return (
    <div className="text-xs sm:text-sm p-4 sm:p-6">
      <h1 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Join Our Community</h1>

      <form onSubmit={handleSubmit} >
        <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Full Name" type="text" required />
          <Input label="Email Address" type="email" required />

          <div>
            <Label text="Role" />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-purple-400"
            >
              <option value="founder">Founder</option>
              <option value="investor">Investor</option>
              <option value="mentor">Mentor</option>
              <option value="other">Other</option>
            </select>
          </div>

          {role === "founder" && (
            <>
              <Input label="Startup Name" />
              <div>
                <Label text="Startup Stage" />
                <select className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-purple-400">
                  <option>Idea</option>
                  <option>MVP</option>
                  <option>Pre-seed</option>
                  <option>Seed</option>
                  <option>Series A</option>
                </select>
              </div>
            </>
          )}

          {role === "investor" && (
            <>
              <div>
                <Label text="Investor Type" />
                <select className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-purple-400">
                  <option>Angel</option>
                  <option>VC</option>
                  <option>Syndicate</option>
                </select>
              </div>
              <Input label="Industries of Interest" placeholder="e.g. Healthtech, Fintech" />
            </>
          )}

          <Input label="Location" placeholder="City, Country" />
          <Input label="LinkedIn or Website" type="url" />
          <Textarea label="Short Bio or Intro" rows={3} />
        </div>

        <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm col-span-2 mt-2">
          <input type="checkbox" required />
          <label>I agree to the Terms and Privacy Policy</label>
        </div>

        <button
          type="submit"
          className="w-full button-bg-color hover:bg-color text-white py-2 rounded  transition mt-2"
        >
          Join Now
        </button>
      </form>
    </div>
  );
}

function Input({
  label,
  type = "text",
  required = false,
  placeholder = "",
}: {
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label text={label} />
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-purple-400"
      />
    </div>
  );
}

function Textarea({ label, rows = 3 }: { label: string; rows?: number }) {
  return (
    <div>
      <Label text={label} />
      <textarea
        rows={rows}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-purple-400"
      ></textarea>
    </div>
  );
}

function Label({ text }: { text: string }) {
  return <label className="block mb-1 font-medium text-gray-700">{text}</label>;
}

