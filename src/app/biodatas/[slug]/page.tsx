'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Heart, Share2, Star, Check, X as XIcon } from 'lucide-react';
import { use } from 'react';
import { supabase } from '@/lib/supabase';
import type { BiodataWorker } from '@/lib/supabase';

export default function BiodataDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [worker, setWorker] = useState<BiodataWorker | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorker();
  }, [slug]);

  const fetchWorker = async () => {
    try {
      const { data, error } = await supabase
        .from('biodata_workers')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      setWorker(data);
    } catch (error) {
      console.error('Error fetching worker:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FB4D66]"></div>
      </div>
    );
  }

  if (!worker) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Worker Not Found</h1>
          <Link href="/biodatas" className="text-[#FB4D66] hover:underline">
            Back to Biodata List
          </Link>
        </div>
      </div>
    );
  }

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
              <Link href="/contact-us" className="text-gray-700 hover:text-[#FB4D66]">Contact Us</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-[#FB4D66]">Jobs</Link>
              <Link href="/biodatas" className="text-[#FB4D66] font-medium border-b-2 border-[#FB4D66] pb-1">Biodata</Link>
            </nav>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Enter the name"
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
            <Link href="/biodatas" className="text-gray-600 hover:text-[#FB4D66]">Biodata</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#FB4D66] font-medium">Biodata Details</span>
          </div>
        </div>
      </section>

      {/* Biodata Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#FB4D66] mb-8 text-center">Biodata Details</h1>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <a 
              href={`https://wa.me/6591470227?text=Hi%2C%20I%27m%20interested%20in%20worker%20${encodeURIComponent(worker.ref_no || '')}%20-%20${encodeURIComponent(worker.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FB4D66] text-white px-6 py-3 rounded-full hover:bg-[#d43940] font-medium transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.14 1.526 5.956L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Speak to an Agent
            </a>
            <button className="inline-flex items-center gap-2 border-2 border-[#FB4D66] text-[#FB4D66] px-6 py-3 rounded-full hover:bg-[#FB4D66] hover:text-white font-medium transition">
              <Heart size={20} />
              Save To Favourite
            </button>
            <button className="inline-flex items-center gap-2 border-2 border-[#FB4D66] text-[#FB4D66] px-6 py-3 rounded-full hover:bg-[#FB4D66] hover:text-white font-medium transition">
              <Share2 size={20} />
              Share
            </button>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Info Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-[#FB4D66]">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Photo - Blurred for privacy */}
                <div className="md:col-span-1">
                  <div className="bg-gray-100 rounded-lg overflow-hidden relative">
                    {worker.photo_url ? (
                      <div className="relative">
                        <Image
                          src={worker.photo_url}
                          alt={worker.name}
                          width={400}
                          height={500}
                          className="w-full h-auto object-cover blur-2xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <div className="text-center text-white">
                            <div className="text-6xl mb-2">🔒</div>
                            <p className="text-sm font-medium">Contact us to view</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-80 flex items-center justify-center">
                        <div className="text-gray-400 text-9xl">👤</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Table - Limited Info for Privacy */}
                <div className="md:col-span-2">
                  <div className="space-y-2">
                    {/* Only show Name, Nationality, Language - Hide others */}
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Ref No</span>
                      <span className="text-gray-400 blur-sm select-none">●●●●●●</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Name</span>
                      <span className="text-gray-800 font-semibold">{worker.name}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Date Of Birth/Age</span>
                      <span className="text-gray-400 blur-sm select-none">●●/●●/●●●● ●● years old</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Height</span>
                      <span className="text-gray-400 blur-sm select-none">●●●cm</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Weight</span>
                      <span className="text-gray-400 blur-sm select-none">●●kg</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Passport</span>
                      <span className="text-gray-400 blur-sm select-none">●●●</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">No of Siblings</span>
                      <span className="text-gray-400 blur-sm select-none">●</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Marital Status</span>
                      <span className="text-gray-400 blur-sm select-none">●●●●●●</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">No of Children</span>
                      <span className="text-gray-400 blur-sm select-none">●</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Age of Children</span>
                      <span className="text-gray-400 blur-sm select-none">●●</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Nationality</span>
                      <span className="text-gray-800 font-semibold">{worker.nationality}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Religion</span>
                      <span className="text-gray-400 blur-sm select-none">●●●●●●</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Education</span>
                      <span className="text-gray-400 blur-sm select-none">●●●●●●●●</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Off-days</span>
                      <span className="text-gray-400 blur-sm select-none">● day/month</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Basic Salary</span>
                      <span className="text-gray-400 blur-sm select-none">$●●●</span>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Language</span>
                      <div className="space-y-1">
                        {worker.languages.map((lang, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-gray-800 font-semibold">{lang.language}:</span>
                            {renderStars(lang.proficiency)}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 border-b py-2">
                      <span className="font-semibold text-gray-700">Special Mention</span>
                      <span className="text-gray-400 blur-sm select-none">●●●●●●●●●●●●●●●●</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maid Introduction - Hidden for privacy */}
              <div className="mt-8 bg-gray-100 border-l-4 border-gray-400 p-4 relative">
                <div className="blur-sm select-none pointer-events-none">
                  <h3 className="font-bold text-gray-800 mb-2">Maid Introduction</h3>
                  <p className="text-gray-700">Contact us to view full details and introduction</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔒</div>
                    <p className="text-sm font-medium text-gray-600">Contact us for details</p>
                  </div>
                </div>
              </div>

              {/* Recommended For - Hidden */}
              <div className="mt-6 blur-sm select-none">
                <h3 className="font-bold text-gray-800 mb-3">This Helper Is Recommended For</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 bg-gray-200 border border-gray-300 px-3 py-1 rounded text-sm">●●●●●●</span>
                  <span className="inline-flex items-center gap-1 bg-gray-200 border border-gray-300 px-3 py-1 rounded text-sm">●●●●●●</span>
                  <span className="inline-flex items-center gap-1 bg-gray-200 border border-gray-300 px-3 py-1 rounded text-sm">●●●●●●</span>
                </div>
              </div>
            </div>

            {/* Medical History - Hidden */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-8 mb-8 relative min-h-[200px]">
              <div className="blur-sm select-none">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">Medical History / Dietary Restrictions</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-sm">Hidden</div>
                  <div className="text-sm">Hidden</div>
                  <div className="text-sm">Hidden</div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🔒</div>
                  <p className="text-sm font-medium text-gray-600">Contact us for full medical history</p>
                </div>
              </div>
            </div>

            {/* Work Experience - Hidden */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-8 mb-8 relative min-h-[200px]">
              <div className="blur-sm select-none">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">Work Experience</h2>
                <div className="space-y-2">
                  <p className="text-sm">Hidden for privacy</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🔒</div>
                  <p className="text-sm font-medium text-gray-600">Contact us for work experience details</p>
                </div>
              </div>
            </div>

            {worker.medical_conditions && (
              <div className="hidden">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">Medical History / Dietary Restrictions</h2>
                <p className="text-sm text-gray-600 italic mb-4">
                  Past and existing illnesses (including chronic ailments and illnesses requiring medication):
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {Object.entries(worker.medical_conditions).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between border-b pb-2">
                      <span className="text-sm capitalize">{key.replace(/_/g, ' ')}</span>
                      {value ? (
                        <XIcon size={16} className="text-red-500" />
                      ) : (
                        <span className="text-gray-300">-</span>
                      )}
                    </div>
                  ))}
                </div>
                
                {worker.food_handling && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Food Handling Preferences</h3>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" checked={worker.food_handling.no_beef} disabled className="w-4 h-4" />
                        <span className="text-sm">No Beef</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" checked={worker.food_handling.no_pork} disabled className="w-4 h-4" />
                        <span className="text-sm">No Pork</span>
                      </label>
                      {worker.food_handling.other && (
                        <span className="text-sm">Other: {worker.food_handling.other}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Work Experience - HIDDEN - Already shown above with lock */}


            {/* CTA */}
            <div className="bg-[#FB4D66] text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Interested in this helper?</h2>
              <p className="mb-6">Contact us today to arrange an interview or get more information.</p>
              <Link 
                href="/contact-us"
                className="inline-block bg-white text-[#FB4D66] px-8 py-3 rounded-full hover:bg-gray-100 font-bold"
              >
                Contact Us Now
              </Link>
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
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.14 1.526 5.956L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
                <li><Link href="/services/migrant-domestic-worker" className="hover:underline">Migrant Domestic Worker</Link></li>
                <li><Link href="/services/advance-placement-scheme" className="hover:underline">Advance Placement Scheme (APS)</Link></li>
                <li><Link href="/services/transfer-mdws" className="hover:underline">Transfer MDWs</Link></li>
                <li><Link href="/services/direct-hiring" className="hover:underline">Direct Hiring</Link></li>
                <li><Link href="/services/work-permit-renewal" className="hover:underline">Work Permit Renewal</Link></li>
                <li><Link href="/services/passport-renewal" className="hover:underline">Passport Renewal</Link></li>
                <li><Link href="/services/insurance" className="hover:underline">Insurance</Link></li>
                <li><Link href="/services/home-leave-processing" className="hover:underline">Home Leave Processing</Link></li>
                <li><Link href="/services/repatriation" className="hover:underline">Repatriation</Link></li>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
