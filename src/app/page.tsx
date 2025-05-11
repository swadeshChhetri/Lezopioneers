'use client'
// import { useState } from "react";
import { Users, MessageSquare, Calendar, Bell } from "lucide-react";
// import { Users, Image, Calendar } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { ImageIcon, CalendarDays, Heart, MessageCircle, Share2 } from 'lucide-react';
import Image from "next/image";

const events = [
  {
    tags: ['Pitch', 'Networking', 'Investors'],
    title: 'Startup Pitch Night',
    date: 'May 15, 2025',
    location: 'San Francisco, CA',
    description: 'Present your startup to a panel of investors and receive valuable feedback.',
    attendees: 120,
  },
  {
    tags: ['VC', 'Funding', 'Networking'],
    title: 'Venture Capital Summit',
    date: 'May 22, 2025',
    location: 'New York, NY',
    description: 'Connect with leading VC firms and learn about the latest investment trends.',
    attendees: 250,
  },
  {
    tags: ['Founders', 'Discussion', 'Learning'],
    title: 'Founder Fireside Chat',
    date: 'May 30, 2025',
    location: 'Austin, TX',
    description: 'Intimate discussion with successful founders sharing their journey and insights.',
    attendees: 85,
  },
];

const posts = [
  {
    user: 'Sarah Johnson',
    title: 'Founder & CEO at TechSolutions',
    time: '2 hours ago',
    content:
      "Excited to announce that we’ve just closed our Series A funding round of $5M led by Acme Ventures! This is a major milestone for our team and we’re looking forward to accelerating our growth.",
    image: '/post-1.jpg',
    likes: 238,
    comments: 42,
    shares: 17,
    initials: 'SJ',
  },
  {
    user: 'David Chen',
    title: 'Angel Investor',
    time: '5 hours ago',
    content:
      "Just met with an amazing founder working on AI solutions for healthcare. If you're building in this space, I’d love to connect and explore potential synergies.",
    likes: 126,
    comments: 28,
    shares: 5,
    initials: 'DC',
  },
  {
    user: 'Maya Patel',
    title: 'VC at Innovation Capital',
    time: '1 day ago',
    content:
      "We’re hosting a pitch day for early-stage startups next month. Looking for innovative ideas in fintech, healthtech, and sustainability. DM me if you’re interested in presenting!",
    image: '/post-2.jpg',
    likes: 189,
    comments: 56,
    shares: 34,
    initials: 'MP',
  },
];

const mentors = [
  {
    initials: 'ER',
    name: 'Elena Rodriguez',
    title: 'Serial Entrepreneur, 3x Founder',
    tags: ['Fundraising', 'Growth', 'Product Strategy'],
    reviews: 87,
    rating: 4.9,
    price: 249
  },
  {
    initials: 'MC',
    name: 'Michael Chang',
    title: 'Angel Investor, Former CTO',
    tags: ['Tech Leadership', 'Scaling', 'Investor Relations'],
    reviews: 62,
    rating: 4.8,
    price: 299
  },
  {
    initials: 'AJ',
    name: 'Aisha Johnson',
    title: 'VC Partner at Growth Fund',
    tags: ['Pitch Decks', 'Fundraising', 'Market Expansion'],
    reviews: 41,
    rating: 5.0,
    price: 349
  }
];



export default function Home() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const [hoveredContent, setHoveredContent] = useState("");

  return (
    <div className="font-main">
      <header className="w-full px-6 py-3 shadow bg-white flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/lezopioneers.jpg"
              alt="Lezo Pioneers Logo"
              // layout="fill"
              // objectFit="cover"
              width={200}
              height={200}
              className="rounded max-w-[43%]"
            />
          </div>
          <input
            type="text"
            placeholder="Search connections..."
            className="ml-56 px-4 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* <Homes className="text-gray-500" /> */}
          <Users className="text-gray-500" />
          <MessageSquare className="text-gray-500" />
          <Calendar className="text-gray-500" />
          {/* <Image className="text-gray-500" /> */}
          <Bell className="text-gray-500" />

          <div className="w-8 h-8 rounded-full bg-color text-color flex items-center justify-center text-sm font-medium">JD</div>

          <button className="font-main border border-purple-300 px-3 py-1.5 rounded-md text-sm">Mentorship</button>
          <button className="button-bg-color text-white px-4 py-1.5 rounded-md text-sm hover:bg-color">Sign In</button>
        </div>
      </header>

      <section className="text-center py-20 px-4">
        {/* Gradient background accent */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-200 via-white to-purple-100 opacity-20 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="font-dancing text-4xl sm:text-5xl font-bold text-gray-900">
            <span className="text-color font-dancing">Connect</span> with Investors &amp; Founders
          </h1>

          {/* Subtitle */}
          <p className="font-main mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Build your network, share your journey, find mentors, and discover events in the startup ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="button-bg-color hover:bg-color text-white font-medium px-6 py-2 rounded-md text-sm shadow">
              Join LezoPioneers
            </button>
            <button className="border border-gray-300 text-black px-6 py-2 rounded-md text-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <Users className="text-color" />,
              title: "Connect",
              desc: "Build meaningful connections with investors, founders, and industry experts."
            },
            {
              // icon: <Image className="text-purple-600" />,
              title: "Share",
              desc: "Post updates, milestones, and showcase your journey with an engaged community."
            },
            {
              icon: <Calendar className="text-color" />,
              title: "Events",
              desc: "Discover and create networking events, pitches, and founder meetups."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-left">
              <div className="w-10 h-10 flex items-center justify-center bg-color rounded-md mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="font-dancing text-color font-[14px]">Featured</span> Events
              </h2>
              <p className="mt-2 text-gray-500">
                Discover upcoming opportunities to connect and learn
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex gap-3">
              <button className="border border-gray-300 px-4 py-2 rounded-md text-sm">
                View All
              </button>
              <button className="button-bg-color hover:bg-color text-white px-4 py-2 rounded-md text-sm">
                + Create Event
              </button>
            </div>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-yellow-100">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, i) => (
                    <span key={i} className="bg-color text-color text-xs px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>

                {/* Date and Location */}
                <div className="flex items-center text-sm text-gray-500 mt-2 gap-2">
                  <CalendarDays className="w-4 h-4 text-color" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1 gap-2">
                  <MapPin className="w-4 h-4 text-color" />
                  <span>{event.location}</span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-gray-600">{event.description}</p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-color" />
                    <span>{event.attendees} attending</span>
                  </div>
                  <button className="border border-gray-300 px-4 py-1 rounded-md text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Latest from the <span className=" text-color font-dancing">Community</span>
          </h2>

          {/* Share box */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-color text-color font-semibold flex items-center justify-center rounded-full">JD</div>
              <input
                type="text"
                placeholder="Share your update..."
                className="flex-1 border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none"
              />
              <button className="button-bg-color hover:bg-color text-white px-4 py-2 rounded-md text-sm">Post</button>
            </div>
            <div className="flex gap-4 mt-3 text-sm text-gray-600 px-12">
              <button className="flex items-center gap-1"><ImageIcon className="w-4 h-4" /> Photo</button>
              <button className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Event</button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-6 text-sm font-medium text-gray-600">
            <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-color">All Posts</button>
            <button className="px-3 py-1 rounded-md bg-white border border-gray-200">Founders</button>
            <button className="px-3 py-1 rounded-md bg-white border border-gray-200">Investors</button>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                {/* User Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-color text-color font-semibold flex items-center justify-center rounded-full">
                    {post.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{post.user}</p>
                    <p className="text-xs text-gray-500">{post.title} · {post.time}</p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm text-gray-700 mb-3">{post.content}</p>

                {/* Image */}
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="rounded-md mb-3"
                  />
                )}

                {/* Stats */}
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.likes} likes</span>
                  <div className="flex gap-3">
                    <span>{post.comments} comments</span>
                    <span>{post.shares} shares</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-around border-t border-gray-100 pt-2 text-sm text-gray-600">
                  <button className="flex items-center gap-1"><Heart className="w-4 h-4" /> Like</button>
                  <button className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> Comment</button>
                  <button className="flex items-center gap-1"><Share2 className="w-4 h-4" /> Share</button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="px-6 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100">
              Load More
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl font-bold text-gray-900">
            Premium <span className="text-color font-dancing">Mentorship</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Get personalized guidance from industry leaders, successful founders, and experienced investors to accelerate your journey.
          </p>

          {/* Mentor Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {/* Mentor Card */}
            {mentors.map((mentor, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-color text-color rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {mentor.initials}
                  </div>
                  <div className="absolute top-0 right-0 bg-color text-white text-xs px-2 py-0.5 rounded-full">
                    ⭐ {mentor.rating}
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{mentor.name}</h3>
                <p className="text-sm text-gray-500">{mentor.title}</p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-3 mb-3">
                  {mentor.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-2">{mentor.reviews} mentee reviews</p>
                <p className="text-xl font-semibold text-color mb-4">${mentor.price} <span className="text-sm font-normal text-gray-500">per session</span></p>

                <button className="button-bg-color hover:bg-color text-white text-sm px-4 py-2 rounded-md w-full mb-2">
                  Book Session
                </button>
                <button className="text-sm border border-gray-200 text-gray-700 py-2 rounded-md w-full hover:bg-gray-50">
                  View Profile
                </button>
              </div>
            ))}
          </div>

          {/* Explore More */}
          <div className="mt-10">
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-100">
              Explore All Mentors
            </button>
          </div>
        </div>
      </section>

      <footer className="button-bg-color text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* <div className="bg-white text-purple-800 font-bold w-8 h-8 flex items-center justify-center rounded"> */}
                <Image
                  src="/lezopioneers.jpg"
                  alt="Lezo Pioneers Logo"
                  width={200}
                  height={200}
                  className="rounded"
                />
              {/* </div> */}
            </div>
            <p className="text-sm text-purple-200">
              Connecting founders and investors to build the next generation of unicorns.
            </p>
            <p className="text-xs text-purple-300 mt-4">© 2025 UnicornMeet. All rights reserved.</p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-3">Platform</h3>
            <ul className="space-y-2 text-purple-200 text-sm">
              <li><a href="#">Network</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Posts</a></li>
              <li><a href="#">Mentorship</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-purple-200 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-purple-200 text-sm">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Community Guidelines</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
