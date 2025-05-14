'use client'

import { Users, MessageSquare, Calendar, Bell, Search } from "lucide-react";
// import { Users, Image, Calendar } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { ImageIcon, CalendarDays, Heart, MessageCircle, Share2, GalleryHorizontal } from 'lucide-react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useState} from 'react';
import ScrollUpReveal from "@/components/ScrollUpRevel";
import Modal from "@/components/Model";
import JoinForm from "@/components/JoinLezo";
import CreateEventForm from "../components/CreateEvent";
import MentorBookingForm from "@/components/MentorBooking";





// interface Mentor {
//   initials: string;
//   name: string;
//   title: string;
//   tags: string[];
//   image: string;
//   rating: number;
//   reviews: number;
//   price: number;
// }

interface Event {
  tags: string[];
  title: string;
  date: string;
  location: string;
  description: string;
  attendees: number;
}

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
  {
    tags: ['Pitch', 'Networking', 'Investors'],
    title: 'Startup Pitch Night',
    date: 'May 15, 2025',
    location: 'San Francisco, CA',
    description: 'Present your startup to a panel of investors and receive valuable feedback.',
    attendees: 120,
  },
  {
    tags: ['Pitch', 'Networking', 'Investors'],
    title: 'Startup Pitch Night',
    date: 'May 15, 2025',
    location: 'San Francisco, CA',
    description: 'Present your startup to a panel of investors and receive valuable feedback.',
    attendees: 120,
  },
  {
    tags: ['Pitch', 'Networking', 'Investors'],
    title: 'Startup Pitch Night',
    date: 'May 15, 2025',
    location: 'San Francisco, CA',
    description: 'Present your startup to a panel of investors and receive valuable feedback.',
    attendees: 120,
  },
  {
    tags: ['Pitch', 'Networking', 'Investors'],
    title: 'Startup Pitch Night',
    date: 'May 15, 2025',
    location: 'San Francisco, CA',
    description: 'Present your startup to a panel of investors and receive valuable feedback.',
    attendees: 120,
  },
];

const posts = [
  {
    user: 'Sarah Johnson',
    title: 'Founder & CEO at TechSolutions',
    time: '2 hours ago',
    content:
      "Excited to announce that we’ve just closed our Series A funding round of $5M led by Acme Ventures! This is a major milestone for our team and we’re looking forward to accelerating our growth.",
    image: '/logo1.png',
    post: '/post1.jpg',
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
    image: '/logo2.png',
    post: '/post2.jpg',
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
    image: '/logo3.png',
    post: '/post3.jpg',
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
    image: '/logo1.png',
    reviews: 87,
    rating: 4.9,
    price: 249
  },
  {
    initials: 'MC',
    name: 'Michael Chang',
    title: 'Angel Investor, Former CTO',
    tags: ['Tech Leadership', 'Scaling', 'Investor Relations'],
    image: '/logo2.png',
    reviews: 62,
    rating: 4.8,
    price: 299
  },
  {
    initials: 'AJ',
    name: 'Aisha Johnson',
    title: 'VC Partner at Growth Fund',
    tags: ['Pitch Decks', 'Fundraising', 'Market Expansion'],
    image: '/logo3.png',
    reviews: 41,
    rating: 5.0,
    price: 349
  },
  {
    initials: 'MC',
    name: 'Michael Chang',
    title: 'Angel Investor, Former CTO',
    tags: ['Tech Leadership', 'Scaling', 'Investor Relations'],
    image: '/logo4.png',
    reviews: 62,
    rating: 4.8,
    price: 299
  },
  {
    initials: 'MC',
    name: 'Michael Chang',
    title: 'Angel Investor, Former CTO',
    tags: ['Tech Leadership', 'Scaling', 'Investor Relations'],
    image: '/logo3.png',
    reviews: 62,
    rating: 4.8,
    price: 299
  },
  {
    initials: 'MC',
    name: 'Michael Chang',
    title: 'Angel Investor, Former CTO',
    tags: ['Tech Leadership', 'Scaling', 'Investor Relations'],
    image: '/logo1.png',
    reviews: 62,
    rating: 4.8,
    price: 299
  },
];

export default function Home() {

  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const [isCreateEventModalOpen, setCreateEventModalOpen] = useState(false);
  const [isMentorBookingModalOpen, setMentorBookingModalOpen] = useState(false);
  // const [isViewProfileModalOpen, setViewProfileModalOpen] = useState(false);


  // Connect with investors & founders
  // const [showModal, setShowModal] = useState(false);
  // const [role, setRole] = useState('founder');
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Send form data via fetch/Axios or router.push
  //   alert('Form submitted!'); // Replace with actual logic
  // };

  // useEffect(() => {
  //   if (showModal) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [showModal]);

  // State to track selected event

  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   date: '',
  //   location: '',
  //   tags: '',
  // });

  const closeModal = () => {
    setSelectedEvent(null); // Close the modal
  };



  //  Create Events
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true); // Open the modal
  // const closeModal1 = () => setIsModalOpen(false); // Close the modal
  // const handleSubmit1 = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Event Created:', formData);
  //   setIsModalOpen(false); // Close modal after submission
  //   setFormData({
  //     title: '',
  //     description: '',
  //     date: '',
  //     location: '',
  //     tags: '',
  //   }); // Reset form data
  // };
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };


  //  Featured Events Details
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const handleViewDetails = (event: Event) => {
    setSelectedEvent(event);
  };


  // Premium Mentorship
  // const openModal2 = (mentor: Mentor) => {
  //   setSelectedMentor(mentor);
  //   setIsModalOpen2(true);
  // };
  // const closeModal2 = () => {
  //   setIsModalOpen2(false);
  //   setSelectedMentor(null);
  // };


  //Booking session
  // const [isModalOpen2, setIsModalOpen2] = useState(false);
  // const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  // const [formData2, setFormData2] = useState({
  //   name: '',
  //   email: '',
  //   date: '',
  //   time: '',
  //   message: '',
  // });

  // const handleChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData2((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit2 = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Booking Submitted:', formData);
  //   setIsModalOpen(false); // Close the modal after submission
  // };


  // Modal for Mentor Profile
  // const [isModalOpen3, setIsModalOpen3] = useState(false);
  // const [selectedMentor3, setSelectedMentor3] = useState<Mentor | null>(null);

  // const openModal3 = (mentor: Mentor) => {
  //   setSelectedMentor3(mentor);
  //   setIsModalOpen3(true);
  // };

  // const closeModal3 = () => {
  //   setIsModalOpen3(false);
  //   setSelectedMentor3(null);
  // };
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  date: '',
  time: '',
  message: '',
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // submit logic
};






  return (
    <div className="font-main bg-gradient-to-r from-yellow-50 via-white to-yellow-10">
      <header className="w-full px-6 py-3 shadow bg-white flex justify-between items-center relative z-10">
        {/* Left Section */}
        <div className="flex items-center">
          <Image
            src="/lezopioneers.jpg"
            alt="Lezo Pioneers Logo"
            // layout="fill"
            // objectFit="cover"
            width={230}
            height={230}
            className="rounded max-w-[43%]"
          />
        </div>

        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search connections..."
            className="pl-10 pr-4 py-1.5 w-full border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
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

          <button className="font-main border border-yellow-300 px-3 py-1.5 rounded-md text-sm hover:bg-gray-100 text-black">Mentorship</button>
          <button className="button-bg-color text-white px-4 py-1.5 rounded-md text-sm hover:bg-color">Sign In</button>
        </div>

      </header>

      <main className="p-6">
        {/* Connect with Investors & founders  */}
        <ScrollUpReveal>
          <section>
            {/* Gradient background accent */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br opacity-20 z-0"></div> */}
            <div className="flex">
              <div className="relative z-10 max-w-3xl">
                {/* Heading */}
                <h1 className="font-dancing text-4x1 sm:text-6xl, md:text-7xl, lg:text-6xl font-bold text-gray-900 pt-20">
                  <span className="text-color ">Connect</span> with <br /> Investors &amp; Founders
                </h1>

                {/* Subtitle */}
                <p className="font-main mt-8 text-gray-500 text-2xl max-w-2xl mx-auto">
                  Build your network, share your journey, find mentors, <br /> and discover events in the startup ecosystem.
                </p>

                {/* CTA Buttons */}
                <div className="mt-20 flex gap-4 flex-wrap">
                  <button className="button-bg-color hover:bg-color text-white font-medium px-6 py-3 rounded-md text-xl shadow" onClick={() => setJoinModalOpen(true)}>
                    Join LezoPioneers
                  </button>

                  <button className="border border-gray-300 text-black px-6 py-2 rounded-md text-xl hover:bg-gray-100">
                    Learn More
                  </button>
                </div>


              </div>
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <Image
                  src="/connect.jpeg"
                  alt="Startup community"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

          </section>

        </ScrollUpReveal>
        {isJoinModalOpen && (
          <Modal onClose={() => setJoinModalOpen(false)}>
            <JoinForm onClose={() => setJoinModalOpen(false)} />
          </Modal>
        )}

        {/* Feature Cards */}
        <ScrollUpReveal>
          <section className="mt-36">
            <div className="relative z-0 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
              {[
                {
                  icon: <Users className="text-color" />,
                  title: "Connect",
                  desc: "Build meaningful connections with investors, founders, and industry experts."
                },
                {
                  icon: <GalleryHorizontal className="text-color" />,
                  title: "Share",
                  desc: "Post updates, milestones, and showcase your journey with an engaged community."
                },
                {
                  icon: <Calendar className="text-color" />,
                  title: "Events",
                  desc: "Discover and create networking events, pitches, and founder meetups."
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl text-left">
                  <div className="w-10 h-10 flex items-center justify-center bg-color rounded-md mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-xl">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollUpReveal>

        {/* Featured Events */}
        <ScrollUpReveal>
          <section className="py-8 mt-36">
            <div className="w-full  relative">
              {/* Header */}
              <div className="items-center mb-20">
                <div className="text-center">
                  <h2 className="text-6xl font-bold text-gray-900">
                    <span className="font-dancing text-color">Featured</span> Events
                  </h2>
                  <p className="mt-2 text-gray-500 text-xl">
                    Discover upcoming opportunities to connect and learn
                  </p>
                </div>

                <div className="pt-12 sm:mt-0 flex gap-3 float-right">
                  <button className="border border-gray-300 px-4 py-2 rounded-md text-xl hover:bg-gray-100 text-black">
                    View All
                  </button>
                  <button className="button-bg-color hover:bg-color text-white px-4 py-2 rounded-md text-xl" onClick={() => setCreateEventModalOpen(true)}>
                    + Create Event
                  </button>
                </div>


                {/* Modal for Create Event Form */}
                {/* {isModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
                    <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh] relative">
                      <button
                        onClick={closeModal1}
                        className="absolute top-3 right-3 text-gray-500 hover:text-black"
                      >
                        ✕
                      </button>

                      <h2 className="text-2xl font-semibold mb-6">Create Event</h2>

                      <form onSubmit={handleSubmit1} className="space-y-6">
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
                            // value={formData.tags.join(', ')}
                            // onChange={handleTagChange}
                            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-300"
                          />
                          <p className="text-sm text-gray-500">Enter tags separated by commas (e.g., Networking, Pitch, Investors).</p>
                        </div>

                        <button
                          type="submit"
                          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                        >
                          Create Event
                        </button>
                      </form>
                    </div>
                  </div>
                )} */}
              </div>


              {/* Event Cards */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="py-3 mt-32 h-full pb-8 "
              >
                {events.map((event, idx) => (
                  <SwiperSlide key={idx} className="pb-16">
                    <div className="min-h-[400px] flex flex-col justify-between bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl border border-yellow-100 pb-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.map((tag, i) => (
                          <span key={i} className="bg-color text-color text-xs px-3 py-1 rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-gray-900">{event.title}</h3>

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
                      <p className="mt-4 text-lg text-gray-600">{event.description}</p>

                      {/* Footer */}
                      <div className="mt-6 flex items-center justify-between text-lg text-gray-600">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-color" />
                          <span>{event.attendees} attending</span>
                        </div>
                        <button className="border border-gray-300 px-4 py-1 rounded-md text-lg hover:bg-gray-100" onClick={() => handleViewDetails(event)}>
                          View Details
                        </button>
                      </div>


                    </div>
                  </SwiperSlide>
                ))}
                {/* Modal for Event Details */}
                {selectedEvent && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
                    <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh] relative">
                      <button
                        onClick={closeModal}
                        className="absolute top-3 right-3 text-gray-500 hover:text-black"
                      >
                        ✕
                      </button>
                      <h1 className="text-2xl font-semibold mb-6">{selectedEvent.title}</h1>

                      <div className="mb-4">
                        <p className="text-lg font-medium">Date: {selectedEvent.date}</p>
                        <p className="text-lg font-medium">Location: {selectedEvent.location}</p>
                      </div>

                      <p className="text-sm text-gray-600 mb-6">{selectedEvent.description}</p>

                      <div className="mb-4">
                        <h3 className="font-semibold text-lg">Tags:</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedEvent.tags.map((tag, i) => (
                            <span key={i} className="bg-color text-color text-xs px-3 py-1 rounded-full font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-color" />
                          <span>{selectedEvent.attendees} attending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Swiper>

              <div className="absolute top-[60%] -translate-y-1/2 w-full flex justify-between z-10 pointer-events-none">
                <button className="custom-prev pointer-events-auto bg-gradient-to-r from-[#0060d1] to-[#044fa7] hover:brightness-105 text-white  p-3 rounded-full shadow-lg transition duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="custom-next pointer-events-auto bg-gradient-to-r from-[#0060d1] to-[#044fa7] hover:brightness-105 text-white p-3 rounded-full shadow-lg transition duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Custom Navigation Styles */}

            </div>
          </section>
        </ScrollUpReveal>
        {isCreateEventModalOpen && (
          <Modal onClose={() => setCreateEventModalOpen(false)}>
            <CreateEventForm onClose={() => setCreateEventModalOpen(false)} />
          </Modal>
        )}

        {/* Letest from the community */}
        <ScrollUpReveal>
          <section className="mt-12 p-28">
            <div className="">
              {/* Header */}
              <h2 className="text-5xl font-bold text-center text-gray-900 mb-6">
                Latest from the <span className=" text-color font-dancing">Community</span>
              </h2>

              {/* Share box */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-6 mt-12 pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-color text-color font-semibold flex items-center justify-center rounded-full">
                    {/* <div className="w-full md:w-1/2 h-64 md:h-auto"> */}
                    <Image
                      src="/logo1.png"
                      alt="Startup community"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Share your update..."
                    className="flex-1 border border-gray-200 rounded-md px-4 py-2 text-xl focus:outline-none text-black"
                  />
                  <button className="button-bg-color hover:bg-color text-white px-4 py-2 rounded-md text-xl">Post</button>
                </div>
                <div className="flex gap-4 mt-3 text-xl text-gray-600 px-12">
                  <button className="flex items-center gap-1"><ImageIcon className="w-4 h-4" /> Photo</button>
                  <button className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Event</button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-4 mb-6 text-xl font-medium text-gray-600">
                <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-color">All Posts</button>
                <button className="px-3 py-1 rounded-md bg-white border border-gray-200">Founders</button>
                <button className="px-3 py-1 rounded-md bg-white border border-gray-200">Investors</button>
              </div>


              {posts.map((post, index) => (
                <div key={index}>
                  <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 p-10 pt-10 mt-8">
                    {/* User Info */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-color text-color font-semibold flex items-center justify-center rounded-full">
                        <Image
                          src={post.image}
                          alt="Startup community"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-gray-800">{post.user}</p>
                        <p className="text-xs text-gray-500">{post.title} · {post.time}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-sm text-gray-700 mb-3">{post.content}</p>


                    {/* Image */}
                    {post.image && (
                      <Image
                        src={post.post}
                        alt="Startup community"
                        width={800}
                        height={600}
                        className="w-full max-h-100 object-cover rounded-lg"
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
                </div>

              ))}


              {/* Load More */}
              <div className="text-center mt-8">
                <button className="px-6 text-black py-2 border border-gray-300 rounded-md text-xl hover:bg-gray-100">
                  Load More
                </button>
              </div>
            </div>

          </section >
        </ScrollUpReveal>

        {/* Premium Mentorship */}
        <ScrollUpReveal>
          <section className="mt-36">
            <div className="text-center">
              {/* Header */}
              <h2 className="text-6xl font-bold text-gray-900">
                Premium <span className="text-color font-dancing ">Mentorship</span>
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-xl">
                Get personalized guidance from industry leaders, successful founders, and experienced investors to accelerate your journey.
              </p>

              {/* Mentor Cards */}
              {/* <div className="p-18"> */}
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 min-h-[500px]">
                {/* Mentor Card */}
                {mentors.map((mentor, idx) => (
                  <SwiperSlide key={idx} className="bg-white rounded-xl border border-gray-200 flex flex-col items-center p-6 text-center shadow-lg hover:shadow-2xl">

                    <div className=" relative">
                      <div className=" ml-[8rem] w-16 h-16 bg-color text-color rounded-full flex items-center justify-center font-bold text-xl mb-4">
                        <Image
                          src={mentor.image}
                          alt="Startup community"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="absolute top-0 right-0 text-black text-xs px-2 py-0.5 rounded-full border border-yellow-400">
                        ⭐ {mentor.rating}
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-500">{mentor.title}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mt-3 mb-3">
                      {mentor.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>

                    <p className="text-lg text-gray-500 mb-2">{mentor.reviews} mentee reviews</p>
                    <p className="text-lg font-semibold text-color mb-4">${mentor.price} <span className="text-sm font-normal text-gray-500">per session</span></p>

                    <button className="button-bg-color hover:bg-color text-white text-xl px-4 py-2 rounded-md w-full mb-2" onClick={() => setMentorBookingModalOpen(true)}>
                      Book Session
                    </button>
                    <button className="text-xl border border-gray-200 text-gray-700 py-2 rounded-md w-full hover:bg-gray-50" >
                      View Profile
                    </button>

                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute top-[50%] -translate-y-1/2 w-full flex justify-between z-10 px-4 pointer-events-none">
                <button className="custom-prev pointer-events-auto bg-gradient-to-r from-[#0060d1] to-[#044fa7] hover:brightness-105 text-white p-3 rounded-full shadow-lg transition duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="custom-next pointer-events-auto bg-gradient-to-r from-[#0060d1] to-[#044fa7] hover:brightness-105 text-white p-3 rounded-full shadow-lg transition duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* </div> */}

              {/* Modal for Booking Session */}

              {/* Modal for Mentor Profile
              {isModalOpen3 && selectedMentor3 && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
                  <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 overflow-y-auto relative">
                    <button
                      onClick={closeModal3}
                      className="absolute top-3 right-3 text-gray-500 hover:text-black"
                    >
                      ✕
                    </button>

                    <h2 className="text-2xl font-semibold mb-4">{selectedMentor3.name}</h2>

                    <div className="text-sm text-gray-500 mb-2">{selectedMentor3.title}</div>

                    <div className="text-gray-700 mb-6">
                      <h3 className="text-lg font-semibold">Bio:</h3>
                      {/* <p>{selectedMentor3.bio}</p> *
                    </div>

                    <div className="flex gap-4 mb-6">
                      <div>
                        <h4 className="font-medium">Rating:</h4>
                        <span>{selectedMentor3.rating} ⭐</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Reviews:</h4>
                        <span>{selectedMentor3.reviews} Mentee Reviews</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Price:</h4>
                        <span>${selectedMentor3.price} per session</span>
                      </div>
                    </div>

                    <div className="mt-4">\
                      <button
                        onClick={() => alert(`You booked a session with ${selectedMentor3.name}!`)} // Simulate booking
                        className="bg-blue-600 text-white text-sm px-6 py-2 rounded-md hover:bg-blue-700"
                      >
                        Book a Session
                      </button>
                    </div>\
                  </div>
                </div>
              )} */}

              {/* Explore More */}
              <div className="mt-10">
                <button className="px-6 py-2 text-black bg-white border border-gray-300 rounded-md text-xl hover:bg-gray-100">
                  Explore All Mentors
                </button>
              </div>
            </div>
          </section>
        </ScrollUpReveal>
        {isMentorBookingModalOpen && (
          <Modal onClose={() => setMentorBookingModalOpen(false)}>
            <MentorBookingForm
              mentorName="Rohan" // or a variable like selectedMentor.name
              formData={formData}
              onChange={handleInputChange}
              onSubmit={handleFormSubmit}
              onClose={() => setMentorBookingModalOpen(false)}
            />
          </Modal>
        )}

      </main>

      <footer className="bg-gradient-to-r from-[#5162c3] via-[#17367a] to-[#142967] text-black mt-36 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 p-6">
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
    </div >
  );
}
