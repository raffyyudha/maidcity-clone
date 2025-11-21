'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject}%0A%0A` +
      `*Message:*%0A${formData.message}`;
    
    // WhatsApp number: +65 9147 0227
    const whatsappUrl = `https://wa.me/6591470227?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo.avif"
                  alt="Sweet Home Logo"
                  width={150}
                  height={60}
                  className="h-auto"
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-[#FB4D66]">Home</Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[#FB4D66]">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#FB4D66]">Services</Link>
              <Link href="/contact-us" className="text-[#FB4D66] font-medium border-b-2 border-[#FB4D66] pb-1">Contact Us</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-[#FB4D66]">Jobs</Link>
              <Link href="/biodatas" className="text-gray-700 hover:text-[#FB4D66]">Biodata</Link>
            </nav>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-full px-4 py-2 text-sm w-48 hidden lg:block"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#FB4D66]">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#FB4D66] font-medium">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Us Hero */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FB4D66] mb-6">Get In Touch</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sweet Home Employment Agency</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're here to help you find the perfect domestic helper for your family. Contact us today for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Office Address */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Office Address</h2>
          
          <div className="max-w-2xl mx-auto">
            {/* Sweet Home Office */}
            <div className="bg-white rounded-lg shadow-lg p-10 border-t-4 border-[#FB4D66]">
              <h3 className="text-3xl font-bold text-[#FB4D66] mb-8 text-center">Sweet Home Employment Agency</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#FB4D66] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-gray-800 font-semibold text-lg">Address</p>
                    <p className="text-gray-700">14 Scotts Road #05-72</p>
                    <p className="text-gray-700">Far East Plaza</p>
                    <p className="text-gray-700">Singapore 228213</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-[#FB4D66] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-gray-800 font-semibold text-lg mb-2">Contact Numbers</p>
                    <p className="text-gray-700">Phone: <a href="tel:+6567343303" className="text-[#FB4D66] hover:underline">+(65) 6734 3303</a></p>
                    <p className="text-gray-700">WhatsApp: <a href="https://wa.me/6591470227" target="_blank" rel="noopener noreferrer" className="text-[#FB4D66] hover:underline">+65 9147 0227</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pt-4 border-t">
                  <Clock className="text-[#FB4D66] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-gray-800 font-semibold text-lg mb-2">Opening Hours</p>
                    <p className="text-gray-700">Monday - Friday: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Saturday - Sunday: 10:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Public Holidays: Closed</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-gray-600 text-sm">EA License: 14C7385</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7793087!2d103.830772!3d1.3071909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da198c55fc8563%3A0x1308691ca1f951ab!2sSweet%20Home%20Employment%20Agency!5e0!3m2!1sen!2ssg!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FB4D66]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FB4D66]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FB4D66]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FB4D66]"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message *"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FB4D66]"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#FB4D66] text-white px-12 py-4 rounded-full hover:bg-[#FB4D66] font-bold text-lg transition"
                >
                  SUBMIT NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#FB4D66] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Sweet Home Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-2">Sweet Home Employment Agency</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <div>
                    <p>14 Scotts Road #05-72</p>
                    <p>Far East Plaza</p>
                    <p>Singapore 228213</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:+6567343303" className="hover:underline">+(65) 6734 3303</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a href="https://wa.me/6591470227" target="_blank" rel="noopener noreferrer" className="hover:underline">+65 9147 0227</a>
                </div>
                <div className="pt-2 border-t border-white/30">
                  <p className="text-xs">EA License: 14C7385</p>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-2">Menu</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about-us" className="hover:underline">About Us</a></li>
                <li><a href="/services" className="hover:underline">Services</a></li>
                <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
                <li><a href="/jobs" className="hover:underline">Jobs</a></li>
                <li><a href="/biodatas" className="hover:underline">Biodata</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-2">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/services/migrant-domestic-worker" className="hover:underline">Migrant Domestic Worker</a></li>
                <li><a href="/services/advance-placement-scheme" className="hover:underline">Advance Placement Scheme (APS)</a></li>
                <li><a href="/services/transfer-mdws" className="hover:underline">Transfer MDWs</a></li>
                <li><a href="/services/direct-hiring" className="hover:underline">Direct Hiring</a></li>
                <li><a href="/services/work-permit-renewal" className="hover:underline">Work Permit Renewal</a></li>
                <li><a href="/services/passport-renewal" className="hover:underline">Passport Renewal</a></li>
                <li><a href="/services/insurance" className="hover:underline">Insurance</a></li>
                <li><a href="/services/home-leave-processing" className="hover:underline">Home Leave Processing</a></li>
                <li><a href="/services/repatriation" className="hover:underline">Repatriation</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/30 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.avif"
                  alt="Sweet Home Logo"
                  width={120}
                  height={48}
                />
              </div>
              <div className="text-center text-sm">
                <p>
                  <a href="#" className="hover:underline">Privacy Policy</a> |
                  <a href="#" className="hover:underline ml-1">Terms of Service</a>
                </p>
                <p className="mt-2">Copyright © Sweet Home | All Rights Reserved</p>
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
    </div>
  );
}
