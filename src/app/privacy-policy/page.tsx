'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <Image src="/logo.avif" alt="Sweet Home Logo" width={150} height={60} className="h-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-[#FB4D66]">Home</Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[#FB4D66]">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#FB4D66]">Services</Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-[#FB4D66]">Contact Us</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-[#FB4D66]">Jobs</Link>
              <Link href="/biodatas" className="text-gray-700 hover:text-[#FB4D66]">Biodata</Link>
            </nav>
            <button className="bg-[#FB4D66] text-white px-8 py-2 rounded-full hover:bg-[#d43940] font-medium">LOGIN</button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#FB4D66]">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#FB4D66] font-medium">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-[#FB4D66] mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: November 2024</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Sweet Home Employment Agency ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may collect information about you in a variety of ways, including:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and other contact information</li>
                  <li><strong>Employment Information:</strong> Work history, references, qualifications, and certifications</li>
                  <li><strong>Financial Information:</strong> Payment information for service fees</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide and maintain our employment agency services</li>
                  <li>Match employers with suitable domestic workers</li>
                  <li>Process work permit applications and related documentation</li>
                  <li>Communicate with you about our services</li>
                  <li>Comply with legal obligations and Ministry of Manpower (MOM) requirements</li>
                  <li>Improve our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Disclosure of Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Government Authorities:</strong> Ministry of Manpower (MOM) and other regulatory bodies as required by law</li>
                  <li><strong>Employers/Employees:</strong> To facilitate employment matching services</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law, including compliance with MOM regulations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Under the Personal Data Protection Act (PDPA), you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Withdraw consent for data processing (subject to legal and contractual restrictions)</li>
                  <li>Request deletion of your data (subject to legal obligations)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to read their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-bold text-gray-800 mb-2">Sweet Home Employment Agency</p>
                  <p className="text-gray-700">14 Scotts Road #05-72, Far East Plaza</p>
                  <p className="text-gray-700">Singapore 228213</p>
                  <p className="text-gray-700 mt-2">Phone: +(65) 6734 3303</p>
                  <p className="text-gray-700">WhatsApp: +65 9147 0227</p>
                  <p className="text-gray-700 mt-2">EA License: 14C7385</p>
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
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about-us" className="hover:underline">About Us</a></li>
                <li><a href="/services" className="hover:underline">Services</a></li>
                <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
                <li><a href="/jobs" className="hover:underline">Jobs</a></li>
                <li><a href="/biodatas" className="hover:underline">Biodata</a></li>
                <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
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
          <div className="border-t border-white/30 pt-6 text-center text-sm">
            <p><a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | <a href="/terms-of-service" className="hover:underline">Terms of Service</a></p>
            <p className="mt-2">Copyright © Sweet Home | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
