'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle2, Briefcase } from 'lucide-react';

export default function DirectHiring() {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <Image src="/logo.avif" alt="Sweet Home Logo" width={150} height={60} className="h-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-[#FB4D66]">Home</Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[#FB4D66]">About Us</Link>
              <Link href="/services" className="text-[#FB4D66] font-medium">Services</Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-[#FB4D66]">Contact Us</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-[#FB4D66]">Jobs</Link>
              <Link href="/biodatas" className="text-gray-700 hover:text-[#FB4D66]">Biodata</Link>
            </nav>
            <button className="bg-[#FB4D66] text-white px-8 py-2 rounded-full hover:bg-[#d43940] font-medium">LOGIN</button>
          </div>
        </div>
      </header>

      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#FB4D66]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="text-gray-600 hover:text-[#FB4D66]">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#FB4D66] font-medium">Direct Hiring</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-[#FB4D66] rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="text-white" size={40} />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-[#FB4D66] mb-6">Direct Hiring</h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Hire domestic workers directly with our comprehensive documentation support.
                </p>
              </div>
              <div>
                <Image src="/about us.avif" alt="Direct Hiring" width={600} height={400} className="rounded-2xl shadow-xl w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Direct Hiring Service</h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Direct hiring allows you to employ a foreign domestic worker (FDW) from overseas without going through the traditional agency recruitment process. This option is ideal if you already know someone suitable for the position, such as a friend's or relative's recommendation.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Sweet Home Employment Agency provides complete documentation support to ensure your direct hiring process is smooth and compliant with all MOM regulations.
              </p>
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Direct Hiring Services:</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Work Permit Application</h4>
                  <p className="text-gray-600">Complete assistance with MOM work permit application</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Document Preparation</h4>
                  <p className="text-gray-600">Help with all required documentation and forms</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Medical Examination</h4>
                  <p className="text-gray-600">Arrangement of required medical check-ups</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Insurance Coverage</h4>
                  <p className="text-gray-600">Assistance with mandatory insurance requirements</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Security Bond</h4>
                  <p className="text-gray-600">Guidance on security bond requirements</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Orientation Support</h4>
                  <p className="text-gray-600">Pre-arrival and post-arrival orientation assistance</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl border border-pink-100 mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Requirements for Direct Hiring</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={20} />
                  <span>Helper must be between 23-50 years old</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={20} />
                  <span>Employer must meet MOM's eligibility criteria</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={20} />
                  <span>Helper must pass medical examination</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={20} />
                  <span>Valid passport with at least 6 months validity</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#FB4D66] flex-shrink-0 mt-1" size={20} />
                  <span>Complete all required training and orientation</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact-us" className="inline-block bg-[#FB4D66] text-white px-8 py-4 rounded-full hover:bg-[#d43940] font-bold text-lg shadow-lg transition">
                Contact Us for Direct Hiring
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#FB4D66] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-2">Sweet Home Employment Agency</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <div><p>14 Scotts Road #05-72</p><p>Far East Plaza</p><p>Singapore 228213</p></div>
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
                <div className="pt-2 border-t border-white/30"><p className="text-xs">EA License: 14C7385</p></div>
              </div>
            </div>
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
          <div className="border-t border-white/30 pt-6 text-center text-sm">
            <p>&copy; 2024 Sweet Home Employment Agency. All rights reserved. EA License: 14C7385</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
