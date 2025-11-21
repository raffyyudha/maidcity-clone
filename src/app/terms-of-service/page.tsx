'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export default function TermsOfService() {
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
            <span className="text-[#FB4D66] font-medium">Terms of Service</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-[#FB4D66] mb-8">Terms of Service</h1>
            <p className="text-sm text-gray-600 mb-8">Last Updated: November 2024</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using the services of Sweet Home Employment Agency (EA License: 14C7385), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Services Provided</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Sweet Home Employment Agency provides:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Foreign Domestic Worker (FDW) recruitment and placement services</li>
                  <li>Work permit application and renewal assistance</li>
                  <li>Transfer of domestic workers between employers</li>
                  <li>Direct hiring documentation support</li>
                  <li>Insurance and other related services for FDWs</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Employer Obligations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">As an employer using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Comply with all Ministry of Manpower (MOM) regulations and Employment Act requirements</li>
                  <li>Provide accurate and complete information during the application process</li>
                  <li>Pay all agreed service fees in a timely manner</li>
                  <li>Treat the domestic worker fairly and in accordance with Singapore laws</li>
                  <li>Provide adequate food, accommodation, and medical care for the FDW</li>
                  <li>Maintain valid insurance coverage for the FDW throughout employment</li>
                  <li>Pay the FDW's salary on time and in full</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Service Fees</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Service fees are payable according to our fee schedule provided at the time of engagement. Fees may include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Agency placement fee</li>
                  <li>Work permit application and processing fees</li>
                  <li>Medical examination fees</li>
                  <li>Insurance premiums</li>
                  <li>Training and orientation costs</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  All fees must be paid before the commencement of services unless otherwise agreed in writing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Replacement Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We offer a replacement guarantee period as specified in your service agreement. Replacement is subject to terms and conditions, including valid reasons for replacement as defined by MOM regulations. The replacement guarantee does not apply in cases of employer misconduct or breach of employment terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cancellation and Refund Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cancellation and refund policies vary depending on the stage of the application process:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Cancellations before work permit approval may be eligible for partial refund</li>
                  <li>Cancellations after FDW arrival in Singapore are generally non-refundable</li>
                  <li>Administrative fees and third-party costs are non-refundable</li>
                  <li>Specific refund terms will be outlined in your service agreement</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Sweet Home Employment Agency acts as an intermediary between employers and FDWs. We are not liable for any disputes, damages, or losses arising from the employment relationship. Our liability is limited to the service fees paid for our agency services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Compliance with Laws</h2>
                <p className="text-gray-700 leading-relaxed">
                  All parties must comply with Singapore's Employment of Foreign Manpower Act, Employment Act, and other relevant legislation. Any violation of these laws may result in termination of services and legal consequences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed">
                  We maintain strict confidentiality of all personal information provided by employers and FDWs, in accordance with the Personal Data Protection Act (PDPA). Information will only be shared with relevant parties necessary for service provision and regulatory compliance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising from these Terms of Service shall be resolved through mediation or arbitration in Singapore. Both parties agree to make good faith efforts to resolve disputes amicably before pursuing legal action.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Termination of Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to terminate services if there is a breach of these terms, non-payment of fees, or violation of Singapore laws. Termination does not relieve the client of payment obligations for services already rendered.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Amendments</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service are governed by the laws of Singapore. Any legal proceedings shall be conducted in the courts of Singapore.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">14. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions regarding these Terms of Service, please contact us:
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

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
                <p className="text-gray-800 font-semibold mb-2">Important Notice:</p>
                <p className="text-gray-700 text-sm">
                  By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you have any questions or concerns, please contact us before proceeding with our services.
                </p>
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
