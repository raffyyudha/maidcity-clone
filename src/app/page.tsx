'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { BiodataWorker } from '@/lib/supabase';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';
import ScaleIn from '@/components/animations/ScaleIn';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recommendedWorkers, setRecommendedWorkers] = useState<BiodataWorker[]>([]);

  useEffect(() => {
    fetchRecommendedWorkers();
  }, []);

  const fetchRecommendedWorkers = async () => {
    try {
      const { data, error } = await supabase
        .from('biodata_workers')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(4);

      if (error) throw error;
      setRecommendedWorkers(data || []);
    } catch (error) {
      console.error('Error fetching recommended workers:', error);
    }
  };

  const testimonials = [
    {
      text: "Excellent service from Sweet Home! The staff was very professional and helped us find the perfect helper for our family. The process was smooth and they were always available to answer our questions. Highly recommended!",
      author: "Sarah Lim",
      date: "November 2024",
      rating: 5
    },
    {
      text: "Very satisfied with Sweet Home Employment Agency. They are reliable and trustworthy. Our helper has been with us for 6 months now and we couldn't be happier. Thank you for the excellent service!",
      author: "Michael Chen",
      date: "October 2024",
      rating: 5
    },
    {
      text: "Great experience with Sweet Home! The team was patient and understanding of our needs. They matched us with a wonderful helper who fits perfectly with our family. Professional service from start to finish.",
      author: "Priya Kumar",
      date: "September 2024",
      rating: 5
    },
    {
      text: "Sweet Home made the entire process so easy. Their staff is knowledgeable and helpful. We found our helper through them and she has been amazing. Would definitely recommend to friends and family!",
      author: "David Tan",
      date: "August 2024",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="/logo.avif"
                alt="Sweet Home Logo"
                width={150}
                height={60}
                className="h-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-[#FB4D66] font-medium border-b-2 border-[#FB4D66] pb-1">Home</a>
              <a href="/about-us" className="text-gray-700 hover:text-[#FB4D66]">About Us</a>
              <a href="/services" className="text-gray-700 hover:text-[#FB4D66]">Services</a>
              <a href="/contact-us" className="text-gray-700 hover:text-[#FB4D66]">Contact Us</a>
              <a href="/jobs" className="text-gray-700 hover:text-[#FB4D66]">Jobs</a>
              <a href="/biodatas" className="text-gray-700 hover:text-[#FB4D66]">Biodata</a>
            </nav>

            <div className="flex items-center gap-4">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    window.location.href = `/biodatas?search=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                className="hidden lg:block"
              >
                <input
                  type="text"
                  placeholder="Search workers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 rounded-full px-4 py-2 text-sm w-48"
                />
              </form>

              {/* Mobile Menu Button - Right Side */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-[#FB4D66]"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="/" className="text-[#FB4D66] font-medium py-2">Home</a>
              <a href="/about-us" className="text-gray-700 hover:text-[#FB4D66] py-2">About Us</a>
              <a href="/services" className="text-gray-700 hover:text-[#FB4D66] py-2">Services</a>
              <a href="/contact-us" className="text-gray-700 hover:text-[#FB4D66] py-2">Contact Us</a>
              <a href="/jobs" className="text-gray-700 hover:text-[#FB4D66] py-2">Jobs</a>
              <a href="/biodatas" className="text-gray-700 hover:text-[#FB4D66] py-2">Biodata</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Desktop Hero Image */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/HEROIMAGE.avif"
            alt="Sweet Home Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile Hero Image */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/android.avif"
            alt="Sweet Home Hero Mobile"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-start pt-[255px] md:pt-[195px]">
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/services">
              <button className="bg-[#FB4D66] text-white px-6 py-3 rounded hover:bg-[#d43940] font-medium uppercase shadow-lg transition">
                OUR SERVICES
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="border-2 border-[#FB4D66] bg-white text-[#FB4D66] px-6 py-3 rounded hover:bg-gray-50 font-medium uppercase shadow-lg transition">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended MDWs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FB4D66] mb-4">
              RECOMMENDED MDWS
            </h2>
            <p className="text-lg text-gray-600">
              Browse our selection of qualified domestic workers
            </p>
          </FadeIn>

          <div className="max-w-7xl mx-auto">
            {recommendedWorkers.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {recommendedWorkers.map((worker, index) => (
                  <ScaleIn key={worker.id} delay={index * 0.1}>
                  <Link
                    key={worker.id}
                    href={`/biodatas/${worker.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group"
                  >
                    {/* Photo - Blurred */}
                    <div className="relative h-48 md:h-64 bg-gray-200 overflow-hidden">
                      {worker.photo_url ? (
                        <div className="relative h-full">
                          <Image
                            src={worker.photo_url}
                            alt={worker.name}
                            fill
                            className="object-cover blur-2xl"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                            <div className="text-center text-white">
                              <div className="text-4xl mb-2">🔒</div>
                              <p className="text-xs font-medium">Contact to view</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                      
                      {/* Nationality Flag Badge */}
                      <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded shadow-sm">
                        <span className="text-xs font-semibold">{worker.nationality}</span>
                      </div>
                    </div>

                    {/* Worker Info */}
                    <div className="p-3 md:p-4">
                      <h3 className="font-bold text-sm md:text-lg text-[#FB4D66] mb-1 md:mb-2 uppercase">{worker.name}</h3>
                      <div className="space-y-1 text-xs md:text-sm text-gray-600">
                        <p><span className="font-medium">Nationality:</span> {worker.nationality}</p>
                        <p><span className="font-medium">Language:</span> {worker.languages.map((l: any) => l.language).join(', ')}</p>
                      </div>
                    </div>
                  </Link>
                  </ScaleIn>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Loading recommended workers...</p>
              </div>
            )}

            {/* See More Button */}
            <div className="text-center mt-12">
              <Link
                href="/biodatas"
                className="inline-flex items-center gap-2 bg-[#FB4D66] text-white px-8 py-3 rounded-full hover:bg-[#d43940] font-medium transition"
              >
                SEE MORE
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APS Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#FB4D66] mb-4">
                Advance Placement Scheme (APS)
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Advance Placement Scheme (APS) for Foreign Domestic Workers (FDWs) is a
                scheme facilitated by the Ministry of Manpower (MOM) to enable faster placement
                and better matching of FDWs for employers with caregiving needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="w-12 h-12 bg-[#FB4D66] rounded-full flex items-center justify-center mb-4">
                      <ChevronRight className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Face to Face Interview</h3>
                    <p className="text-sm text-gray-600">Meet candidates personally before hiring</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="w-12 h-12 bg-[#FB4D66] rounded-full flex items-center justify-center mb-4">
                      <ChevronRight className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Better Matching</h3>
                    <p className="text-sm text-gray-600">Find the perfect fit for your family</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="w-12 h-12 bg-[#FB4D66] rounded-full flex items-center justify-center mb-4">
                      <ChevronRight className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Fast Deployment</h3>
                    <p className="text-sm text-gray-600">Get your helper in just 3 days</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="w-12 h-12 bg-[#FB4D66] rounded-full flex items-center justify-center mb-4">
                      <ChevronRight className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">MOM Approved</h3>
                    <p className="text-sm text-gray-600">Certified by Ministry of Manpower</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/helper.avif"
                  alt="Domestic Helper"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
              <h3 className="text-2xl font-bold text-[#FB4D66] mb-6">Sweet Home</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                We connect families in Singapore with qualified foreign domestic workers.
                We work closely with you to understand your needs and find the best domestic
                worker for your family.
              </p>
              <button className="bg-[#FB4D66] text-white px-8 py-3 rounded-full hover:bg-[#d43940] font-medium shadow-lg">
                Find Out More
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center border border-pink-100">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-[#FB4D66] rounded-full flex items-center justify-center">
                    <Image
                      src="https://ext.same-assets.com/2534731685/3704241669.jpeg"
                      alt="Repatriation"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Repatriation</h4>
                <p className="text-gray-600 text-sm">Complete assistance for helper repatriation process</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center border border-pink-100">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-[#FB4D66] rounded-full flex items-center justify-center">
                    <Image
                      src="https://ext.same-assets.com/2534731685/1015321554.jpeg"
                      alt="Home Leave Processing"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Home Leave Processing</h4>
                <p className="text-gray-600 text-sm">Hassle-free home leave arrangements for your helper</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center border border-pink-100">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-[#FB4D66] rounded-full flex items-center justify-center">
                    <Image
                      src="https://ext.same-assets.com/2534731685/2067422028.jpeg"
                      alt="Insurance"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Insurance</h4>
                <p className="text-gray-600 text-sm">Comprehensive insurance coverage for peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Caregiver Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Caregiver Positions
            </h2>
            <p className="text-gray-600 text-lg">Find the perfect helper for your family</p>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white border-2 border-pink-200 rounded-2xl p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Looking for Ex-Singapore helpers</h3>
              <p className="text-gray-600 mb-6">
                We are looking for experienced helpers who have worked in Singapore before.
              </p>
              <Link 
                href="/biodatas"
                className="inline-flex items-center gap-2 text-[#FB4D66] font-semibold hover:underline"
              >
                View Details
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-pink-200 rounded-2xl p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Take care of elderly</h3>
              <p className="text-gray-600 mb-6">
                Seeking compassionate caregivers to take care of elderly patients.
              </p>
              <Link 
                href="/biodatas"
                className="inline-flex items-center gap-2 text-[#FB4D66] font-semibold hover:underline"
              >
                View Details
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FB4D66] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">Real experiences from families we've helped</p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-t-4 border-[#FB4D66]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[120px]">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#FB4D66] mb-4">Get In Touch</h2>
              <p className="text-gray-600 text-lg">We're here to help you find the perfect domestic helper</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Sweet Home Employment Agency</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#FB4D66] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">14 Scotts Road #05-72</p>
                      <p className="text-gray-600">Far East Plaza</p>
                      <p className="text-gray-600">Singapore 228213</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-[#FB4D66] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <a href="tel:+6567343303" className="text-gray-600 hover:text-[#FB4D66]">+(65) 6734 3303</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="text-[#FB4D66] mt-1 flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <a href="https://wa.me/6591470227" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FB4D66]">+65 9147 0227</a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-pink-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">EA License:</span> 14C7385
                    </p>
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
                      className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:border-[#FB4D66] focus:outline-none"
                      required
                    />
                    <input
                      type="email"
                      placeholder="E-mail *"
                      className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:border-[#FB4D66] focus:outline-none"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone *"
                      className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:border-[#FB4D66] focus:outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Subject *"
                      className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:border-[#FB4D66] focus:outline-none"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Message *"
                    rows={6}
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:border-[#FB4D66] focus:outline-none"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-[#FB4D66] text-white py-4 rounded-full hover:bg-[#d43940] font-bold text-lg shadow-lg transition"
                >
                  SUBMIT NOW
                </button>
              </form>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg overflow-hidden" style={{ height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7793087!2d103.830772!3d1.3071909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da198c55fc8563%3A0x1308691ca1f951ab!2sSweet%20Home%20Employment%20Agency!5e0!3m2!1sen!2ssg!4v1234567890"
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
                <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
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
          <div className="border-t border-white/30 pt-6 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <Image
                  src="/logo.avif"
                  alt="Sweet Home Logo"
                  width={150}
                  height={60}
                  className="h-auto"
                />
              </div>
              <div className="text-center md:text-right text-sm">
                <p>
                  <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                  <span className="mx-2">|</span>
                  <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
                </p>
                <p className="mt-2">Copyright Sweet Home | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6591470227"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
