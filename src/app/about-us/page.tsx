'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
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
              <Link href="/about-us" className="text-[#FB4D66] font-medium border-b-2 border-[#FB4D66] pb-1">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#FB4D66]">Services</Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-[#FB4D66]">Contact Us</Link>
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
            <span className="text-[#FB4D66] font-medium">About Us</span>
          </div>
        </div>
      </section>

      {/* About Us Hero */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FB4D66] mb-6">About Sweet Home</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Over 15 years of experience in providing the best foreign domestic helpers to families
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Two experienced and driven women, <span className="font-semibold text-[#FB4D66]">Cindy Ardiani</span> and <span className="font-semibold text-[#FB4D66]">Crystal Chan</span>, established Sweet Home Employment Agency in 2015 with the hopes of wanting to be able to provide the best foreign domestic helpers to families in need of an extra helping hand.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Apart from hiring new and skilled domestic helpers, Sweet Home Employment Agency also provides board and lodging services along with repatriation of helpers as well. On top of that, they offer counseling services, open to all their helpers.
                </p>
              </div>
              <div>
                <Image
                  src="/about us.avif"
                  alt="Sweet Home Founders"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/about us2.avif"
                  alt="Sweet Home Vision"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With over 15 years of experience in this industry, Cindy and Crystal had a great headstart as they were proficiently skilled for this trade. While their years of experience enhanced their tradeskills, they kept an extraordinary vision close to heart when establishing their business.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cindy and Crystal shared a vision to <span className="font-semibold text-[#FB4D66]">strive to achieve warmth and harmony in every home</span>, thus the name of the company, Sweet Home, originated from that initiative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Sweet Home is an employment agency like no other, where the needs of both the employers and domestic helpers matter equally. As women themselves, they aspire to reach out to other women from lesser-developed countries to make an honest living out of them.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  By being able to become the source of the income for these women who come to Singapore in search of a decent livelihood, helps to support and turn them into financially independent women.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  They believe that communication aids in fostering a stronger employer-employee relationship. Which is why the counseling sessions with their helpers fills them with positive encouragement, giving them a sense of reassurance.
                </p>
              </div>
              <div>
                <Image
                  src="/about us 3.avif"
                  alt="Sweet Home Mission"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#FB4D66] text-center mb-4">
              Sweet Home's Unbiased Practice
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              Based on Honesty, Humility and Warmth - Our Distinguishing Factor
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FB4D66]">
                <div className="w-16 h-16 bg-[#FB4D66] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle2 className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Honesty</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We ensure fairness to our customers and helpers. If we don't have a suitable helper, we won't blindly assign anyone for profit. We are honest to our clients.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FB4D66]">
                <div className="w-16 h-16 bg-[#FB4D66] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle2 className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Humility</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We treat all our helpers equally and maintain a friendship where customers and helpers share a comfort level with us.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FB4D66]">
                <div className="w-16 h-16 bg-[#FB4D66] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle2 className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Warmth</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We provide counseling services and support to help our helpers feel at home, ensuring both employers and helpers are satisfied with our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Achievement</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              When asked what their proudest achievements were, they credited it to the satisfaction they got when both their helpers and customers are happy with their services. They have established a friendship where their customers and helpers share a comfort level with them. These act as a great achievement that makes Sweet Home Employment Agency proud.
            </p>
            <p className="text-xl font-semibold text-[#FB4D66]">
              Today, Sweet Home Employment has achieved tremendous business success. With all that Cindy and Crystal have acquired for their company thus far, there is no stopping this duo in the time to come.
            </p>
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
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                <li><Link href="/services" className="hover:underline">Services</Link></li>
                <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
                <li><Link href="/jobs" className="hover:underline">Jobs</Link></li>
                <li><Link href="/biodatas" className="hover:underline">Biodata</Link></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-2">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Migrant Domestic Worker</a></li>
                <li><a href="#" className="hover:underline">Advance Placement Scheme (APS)</a></li>
                <li><a href="#" className="hover:underline">Transfer MDWs</a></li>
                <li><a href="#" className="hover:underline">Direct Hiring</a></li>
                <li><a href="#" className="hover:underline">Work Permit Renewal</a></li>
                <li><a href="#" className="hover:underline">Passport Renewal</a></li>
                <li><a href="#" className="hover:underline">Insurance</a></li>
                <li><a href="#" className="hover:underline">Home Leave Processing</a></li>
                <li><a href="#" className="hover:underline">Repatriation</a></li>
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
