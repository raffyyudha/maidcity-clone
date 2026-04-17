'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    'https://ext.same-assets.com/2534731685/2702934896.png',
    'https://ext.same-assets.com/2534731685/1045672884.png',
    'https://ext.same-assets.com/2534731685/1325382293.png',
    'https://ext.same-assets.com/2534731685/3525528857.png',
  ];

  const testimonials = [
    {
      text: "I had a really good experience with this agency. A special shoutout to Nang, who has been extremely attentive and supportive throughout the whole process. She is always quick to respond, very patient with all my questions, and goes the extra mile to ensure everything runs smoothly. It really gave me peace of mind knowing I could rely on her. Highly recommend this agency, and especially Nang, if you're looking for someone trustworthy and professional to assist you!",
      author: "Gevin Yaneza",
      date: "25 September 2025"
    },
    {
      text: "MaidCity is a great agency. Serene was very knowledgeable and guided us, first time employers, through all the steps.",
      author: "Colin Tan",
      date: "22 September 2025"
    },
    {
      text: "Got a Myanmar maid from maidcity kovan, I was attended by Shirley, excellent customer service, she answered all queries for me and promptly reply my text. Thank you Shirley. I will recommend this agency to my friends.",
      author: "Jasmine S",
      date: "07 September 2025"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Top Contact Banner */}
      <div className="bg-[#e34a50] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-3 text-xs md:text-sm gap-2">
            <div className="flex flex-wrap gap-3 md:gap-8 justify-center md:justify-start">
              <a href="tel:62606261" className="hover:opacity-80 whitespace-nowrap">Clementi - 62606261</a>
              <a href="tel:62416566" className="hover:opacity-80 whitespace-nowrap">Kovan - 62416566</a>
              <a href="tel:67346735" className="hover:opacity-80 whitespace-nowrap">Toa Payoh - 67346735</a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/maidcity" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://plus.google.com/105420983500050215511" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="Google Plus">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83C10.47 5.69 8.89 5 7 5c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16H7zm0 0l17 2h-3v3h-2v-3h-3v-2h3V8h2v3h3v2z"/>
                </svg>
              </a>
              <a href="https://twitter.com/JobuzzC" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://www.linkedin.com/in/jobuzz-c-108475150/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="https://ext.same-assets.com/2534731685/614317222.png"
                alt="Maidcity Logo"
                width={150}
                height={60}
                className="h-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[#e34a50] font-medium border-b-2 border-[#e34a50] pb-1">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[#e34a50]">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-[#e34a50]">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-[#e34a50]">Contact Us</a>
              <a href="#jobs" className="text-gray-700 hover:text-[#e34a50]">Jobs</a>
              <a href="#biodata" className="text-gray-700 hover:text-[#e34a50]">Biodata</a>
            </nav>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Enter the name"
                className="border border-gray-300 rounded-full px-4 py-2 text-sm w-48 hidden lg:block"
              />
              <button className="bg-[#e34a50] text-white px-8 py-2 rounded-full hover:bg-[#d43940] font-medium">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-br from-pink-50 to-white overflow-hidden" style={{ minHeight: '650px' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover md:object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-[#e34a50]">WELCOME TO </span>
              <span className="text-[#e34a50]">MAIDCITY</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">Lic No. 21C0694</p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-[#e34a50] text-white px-6 py-3 rounded hover:bg-[#d43940] font-medium uppercase">
                Our Services
              </button>
              <button className="border-2 border-[#e34a50] text-[#e34a50] px-6 py-3 rounded hover:bg-[#e34a50] hover:text-white font-medium uppercase">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white z-20 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white z-20 transition"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-gray-700" />
        </button>
      </section>

      {/* APS Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://ext.same-assets.com/2534731685/2008420859.jpeg"
                alt="Family"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#e34a50] mb-6">
                Advance Placement Scheme (APS)
              </h2>
              <div className="bg-gray-50 border-l-4 border-[#e34a50] p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  The Advance Placement Scheme (APS) for Foreign Domestic Workers (FDWs) is a
                  scheme facilitated by the Ministry of Manpower (MOM) to enable faster placement
                  and better matching of FDWs for employers with caregiving needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <ChevronRight className="text-[#e34a50]" size={20} />
                  <span>Face to Face Interview</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <ChevronRight className="text-[#e34a50]" size={20} />
                  <span>Better Matching</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <ChevronRight className="text-[#e34a50]" size={20} />
                  <span>Fast deployment (3 days)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <ChevronRight className="text-[#e34a50]" size={20} />
                  <span>By Ministry of Manpower (MOM)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <h3 className="text-3xl font-bold text-[#e34a50] mb-8">Maidcity</h3>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                We connect families in Singapore with qualified foreign domestic workers.
                We work closely with you to understand your needs and find the best domestic
                worker for your family.
              </p>
              <button className="bg-[#e34a50] text-white px-6 py-3 rounded hover:bg-[#d43940] font-medium">
                Find Out More
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition">
                <div className="mb-4">
                  <Image
                    src="https://ext.same-assets.com/2534731685/1458700756.jpeg"
                    alt="Caregiver Course"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800">Caregiver Course</h4>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition">
                <div className="mb-4">
                  <Image
                    src="https://ext.same-assets.com/2534731685/3704241669.jpeg"
                    alt="Repatriation"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800">Repatriation</h4>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition">
                <div className="mb-4">
                  <Image
                    src="https://ext.same-assets.com/2534731685/1015321554.jpeg"
                    alt="Home Leave Processing"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800">Home Leave Processing</h4>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition">
                <div className="mb-4">
                  <Image
                    src="https://ext.same-assets.com/2534731685/2067422028.jpeg"
                    alt="Insurance"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800">Insurance</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended MDWs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#e34a50] text-center mb-12">
            RECOMMENDED MDWS
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { name: "NAW MA HLA", img: "https://ext.same-assets.com/2534731685/2200301433.jpeg" },
              { name: "NAW ZO WAR NAR", img: "https://ext.same-assets.com/2534731685/2152111703.jpeg" },
              { name: "YOON NADI KHAING", img: "https://ext.same-assets.com/2534731685/3027083751.jpeg" },
              { name: "NAW KHAING HNIN WAI", img: "https://ext.same-assets.com/2534731685/910461651.jpeg" }
            ].map((mdw, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={mdw.img}
                    alt={mdw.name}
                    fill
                    className="object-cover blur-sm"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Image
                      src="https://ext.same-assets.com/2534731685/2936725162.png"
                      alt="Myanmar Flag"
                      width={30}
                      height={20}
                    />
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">MDW</span>
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">APS</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#e34a50] mb-2">{mdw.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">Login/Register to view MDWs profile</p>
                  <button className="w-full bg-[#e34a50] text-white py-2 rounded hover:bg-[#d43940]">
                    Login/Register
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-[#e34a50] text-white px-8 py-3 rounded-full hover:bg-[#d43940] font-medium inline-flex items-center gap-2">
              SEE MORE
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#e34a50] text-center mb-12">
            WHAT OUR EMPLOYERS SAY
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#2a2d2d] text-white p-8 rounded-lg">
                  <div className="text-6xl text-[#e34a50] mb-4">"</div>
                  <p className="mb-6 text-sm leading-relaxed">
                    {testimonial.text.substring(0, 150)}
                    {testimonial.text.length > 150 && <span className="text-[#e34a50] cursor-pointer">...read more</span>}
                  </p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#e34a50] mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Branch Info */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Clementi</h3>
                <div className="space-y-3 text-gray-700">
                  <p>Blk 432 Clementi Avenue 3, #01-288, Singapore 120432</p>
                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>62606261</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>98806978</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} />
                    <span>clementi@maidcity.com.sg</span>
                  </div>
                  <div className="flex items-start gap-3 pt-2 border-t">
                    <Clock size={18} className="mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Opening Hours</p>
                      <p className="text-sm">Mon - Fri: 10am-7pm</p>
                      <p className="text-sm">Sat - Sun: 10am-5pm</p>
                      <p className="text-sm">PH: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Kovan</h3>
                <div className="space-y-3 text-gray-700">
                  <p>Blk 205 Hougang Street 21 #02-33 Heartland Mall Singapore 530205</p>
                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>62416566</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>98806978</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} />
                    <span>kovan@maidcity.com.sg</span>
                  </div>
                  <div className="flex items-start gap-3 pt-2 border-t">
                    <Clock size={18} className="mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Opening Hours</p>
                      <p className="text-sm">Mon - Fri: 11am-8.30pm</p>
                      <p className="text-sm">Sat - Sun & PH: 11am-8pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Toa Payoh</h3>
                <div className="space-y-3 text-gray-700">
                  <p>Blk 85 Lorong 4 Toa Payoh, #01-316 Singapore 310085</p>
                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>67346735</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} />
                    <span>98806978</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} />
                    <span>toapayoh@maidcity.com.sg</span>
                  </div>
                  <div className="flex items-start gap-3 pt-2 border-t">
                    <Clock size={18} className="mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Opening Hours</p>
                      <p className="text-sm">Mon - Fri: 10am-7pm</p>
                      <p className="text-sm">Sat - Sun: 10am-5pm</p>
                      <p className="text-sm">PH: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    className="border border-gray-300 rounded px-4 py-3 w-full"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-mail *"
                    className="border border-gray-300 rounded px-4 py-3 w-full"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone *"
                    className="border border-gray-300 rounded px-4 py-3 w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Subject *"
                    className="border border-gray-300 rounded px-4 py-3 w-full"
                    required
                  />
                </div>
                <textarea
                  placeholder="Message *"
                  rows={6}
                  className="border border-gray-300 rounded px-4 py-3 w-full"
                  required
                ></textarea>

                <div className="mb-4">
                  <p className="font-semibold mb-2">Please select your prefered branch to attend to your enquiry:</p>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Kovan</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Clementi</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Toa Payoh</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e34a50] text-white py-4 rounded-full hover:bg-[#d43940] font-bold text-lg"
                >
                  SUBMIT NOW
                </button>
              </form>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg overflow-hidden" style={{ height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7698!2d103.7644!3d1.3221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTknMTkuNiJOIDEwM8KwNDUnNTIuMCJF!5e0!3m2!1sen!2ssg!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e34a50] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Clementi */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-2">Clementi</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <p>Blk 432 Clementi Avenue 3, #01-288, Singapore 120432</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>62606261</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>98806978</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>clementi@maidcity.com.sg</span>
                </div>
              </div>
            </div>

            {/* Kovan */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-2">Kovan</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <p>Blk 205 Hougang Street 21 #02-33 Heartland Mall Singapore 530205</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>62416566</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>98806978</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>kovan@maidcity.com.sg</span>
                </div>
              </div>
            </div>

            {/* Toa Payoh */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-2">Toa Payoh</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <p>Blk 85 Lorong 4 Toa Payoh, #01-316 Singapore 310085</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>67346735</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>98806978</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>toapayoh@maidcity.com.sg</span>
                </div>
              </div>
            </div>

            {/* Menu & Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-2">Menu</h3>
              <ul className="space-y-2 text-sm mb-6">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Jobs</a></li>
                <li><a href="#" className="hover:underline">Biodata</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>

              <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-2">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Migrant Domestic Worker</a></li>
                <li><a href="#" className="hover:underline">Advance Placement Scheme (APS)</a></li>
                <li><a href="#" className="hover:underline">Transfer MDWs</a></li>
                <li><a href="#" className="hover:underline">Direct Hiring</a></li>
                <li><a href="#" className="hover:underline">Work Permit Renewal</a></li>
                <li><a href="#" className="hover:underline">Passport Renewal</a></li>
                <li><a href="#" className="hover:underline">Caregiver</a></li>
                <li><a href="#" className="hover:underline">Insurance</a></li>
                <li><a href="#" className="hover:underline">Home Leave Processing</a></li>
                <li><a href="#" className="hover:underline">Repatriation</a></li>
                <li><a href="#" className="hover:underline">Caregiver Course</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/30 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="https://ext.same-assets.com/2534731685/614317222.png"
                  alt="Maidcity Logo"
                  width={120}
                  height={48}
                />
              </div>
              <div className="text-center text-sm">
                <p>
                  <a href="#" className="hover:underline">Privacy Policy</a> |
                  <a href="#" className="hover:underline ml-1">Terms of Service</a>
                </p>
                <p className="mt-2">Copyright © Maidcity | All Rights Reserved</p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83C10.47 5.69 8.89 5 7 5c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16H7zm0 0l17 2h-3v3h-2v-3h-3v-2h3V8h2v3h3v2z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/6562606261"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a
          href="http://m.me/168854079877381"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0084FF] text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
