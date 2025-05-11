// components/Navbar.tsx
"use client";

import { Home, Users, MessageSquare, Calendar, Image, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-3 shadow bg-white flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 text-white font-bold rounded-lg w-8 h-8 flex items-center justify-center">U</div>
          <span className="text-xl font-semibold text-purple-600">UnicornMeet</span>
        </div>
        <input
          type="text"
          placeholder="Search connections..."
          className="ml-4 px-4 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <Home className="text-gray-500" />
        <Users className="text-gray-500" />
        <MessageSquare className="text-gray-500" />
        <Calendar className="text-gray-500" />
        <Image className="text-gray-500" />
        <Bell className="text-gray-500" />
        
        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-medium">JD</div>
        
        <button className="border border-purple-300 px-3 py-1.5 rounded-md text-sm">Mentorship</button>
        <button className="bg-purple-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-purple-700">Sign In</button>
      </div>
    </header>
  );
}
