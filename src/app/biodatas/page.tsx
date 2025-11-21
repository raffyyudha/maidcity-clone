'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Search, Heart } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { BiodataWorker } from '@/lib/supabase';

export default function Biodatas() {
  const [allWorkers, setAllWorkers] = useState<BiodataWorker[]>([]);
  const [filteredWorkers, setFilteredWorkers] = useState<BiodataWorker[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter states
  const [searchName, setSearchName] = useState('');
  const [filterNationality, setFilterNationality] = useState('All');
  const [filterSkill, setFilterSkill] = useState('All');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const workersPerPage = 8;

  useEffect(() => {
    fetchWorkers();
    
    // Check for search query in URL
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchName(searchParam);
    }
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchName, filterNationality, filterSkill, allWorkers]);

  const fetchWorkers = async () => {
    try {
      const { data, error } = await supabase
        .from('biodata_workers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAllWorkers(data || []);
      setFilteredWorkers(data || []);
    } catch (error) {
      console.error('Error fetching workers:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...allWorkers];

    // Filter by name
    if (searchName.trim()) {
      filtered = filtered.filter(worker =>
        worker.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    // Filter by nationality
    if (filterNationality !== 'All') {
      filtered = filtered.filter(worker =>
        worker.nationality.toLowerCase() === filterNationality.toLowerCase()
      );
    }

    // Filter by skill
    if (filterSkill !== 'All') {
      filtered = filtered.filter(worker =>
        worker.recommended_for && worker.recommended_for.includes(filterSkill)
      );
    }

    setFilteredWorkers(filtered);
  };

  const handleSearch = () => {
    applyFilters();
  };

  // Calculate pagination
  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = filteredWorkers.slice(indexOfFirstWorker, indexOfLastWorker);
  const totalPages = Math.ceil(filteredWorkers.length / workersPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <Link href="/contact-us" className="text-gray-700 hover:text-[#FB4D66]">Contact Us</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-[#FB4D66]">Jobs</Link>
              <Link href="/biodatas" className="text-[#FB4D66] font-medium border-b-2 border-[#FB4D66] pb-1">Biodata</Link>
            </nav>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Enter the name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
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
            <span className="text-[#FB4D66] font-medium">Biodata</span>
          </div>
        </div>
      </section>

      {/* Biodata Hero */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FB4D66] mb-6">Find Your Helper</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Domestic Workers</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Browse through our selection of qualified and experienced domestic workers. Find the perfect match for your family's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Advanced Search</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                  <select 
                    value={filterNationality}
                    onChange={(e) => setFilterNationality(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  >
                    <option>All</option>
                    <option>Filipino</option>
                    <option>Indonesian</option>
                    <option>Myanmar</option>
                    <option>Indian</option>
                    <option>Sri Lankan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                  <select 
                    value={filterSkill}
                    onChange={(e) => setFilterSkill(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  >
                    <option>All</option>
                    <option>Child Care</option>
                    <option>Elderly Care</option>
                    <option>Cooking</option>
                    <option>Baby Care</option>
                    <option>Housekeeping</option>
                    <option>Disable Care</option>
                    <option>Pet Care</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button 
                  onClick={handleSearch}
                  className="bg-[#FB4D66] text-white px-8 py-3 rounded-full hover:bg-[#d43940] font-medium inline-flex items-center gap-2 transition"
                >
                  <Search size={20} />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MDW List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Available MDWs</h2>
          
          {loading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FB4D66] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading workers...</p>
            </div>
          ) : filteredWorkers.length === 0 ? (
            <>
              {/* Empty State */}
              <div className="max-w-2xl mx-auto text-center py-16">
                <div className="bg-white rounded-lg shadow-lg p-12 border-t-4 border-[#FB4D66]">
                  <div className="text-gray-300 text-8xl mb-6">👥</div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Biodata Coming Soon</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We are currently updating our database with qualified domestic workers. Please check back soon or contact us directly for immediate assistance.
                  </p>
                  <Link 
                    href="/contact-us"
                    className="inline-block bg-[#FB4D66] text-white px-8 py-3 rounded-full hover:bg-[#d43940] font-medium"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Registration Notice */}
              <div className="max-w-3xl mx-auto mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-4">
                  To view MDW profiles, registration is required. In compliance with MOM (Ministry of Manpower, Singapore) policy to protect the privacy of MDWs.
                </p>
                <p className="text-gray-700">
                  Please register <Link href="/register" className="text-[#FB4D66] font-semibold hover:underline">here</Link>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {currentWorkers.map((worker: BiodataWorker) => (
                <Link
                  key={worker.id}
                  href={`/biodatas/${worker.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group"
                >
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
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-bold text-sm md:text-lg text-gray-800 mb-1 md:mb-2">{worker.name}</h3>
                    <div className="space-y-1 text-xs md:text-sm text-gray-600">
                      <p><span className="font-medium">Nationality:</span> {worker.nationality}</p>
                      <p><span className="font-medium">Language:</span> {worker.languages.map(l => l.language).join(', ')}</p>
                    </div>
                    <div className="mt-2 md:mt-4 text-[#FB4D66] font-medium text-xs md:text-sm group-hover:underline">
                      View Details →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-2 border rounded ${
                      currentPage === pageNum
                        ? 'bg-[#FB4D66] text-white border-[#FB4D66]'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
            </>
          )}
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
