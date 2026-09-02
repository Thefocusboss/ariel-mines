import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { SupplierInquiryForm } from '@/components/sections/SupplierInquiryForm';
import {
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const SuppliersPage: React.FC = () => {
  const workflow = [
    {
      step: '01',
      title: 'Material Submission',
      desc: 'Submit your resource details, estimated quantities, and deposit location using the form below.',
    },
    {
      step: '02',
      title: 'Sampling & Verification',
      desc: 'Our technical team reviews physical samples and conducts laboratory assay tests to determine grade purity.',
    },
    {
      step: '03',
      title: 'Commercial Agreement',
      desc: 'We structure transparent purchase terms based on verified mineral contents and current market rates.',
    },
    {
      step: '04',
      title: 'Logistics & Settlement',
      desc: 'Arranged batch delivery to our Sabon Barki, Jos facility with reliable, on-time payment settlement.',
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="gold">Supplier Ingestion Desk</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-stone-900 uppercase tracking-tight mt-4 mb-4">
            BECOME PART OF OUR SUPPLY NETWORK
          </h1>
          <p className="text-sm sm:text-base font-mono font-bold tracking-widest text-gold-deep uppercase mb-6">
            WE'RE LOOKING FOR QUALITY RESOURCES.
          </p>
          <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Connect with Ariel Mines and Koncepts to explore dependable purchase agreements and long-term partnerships within our raw geological material sourcing network.
          </p>
        </div>
      </section>

      {/* Supplier Workflow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Simple & Transparent"
          subtitle="Partnership Lifecycle"
          title="HOW WE WORK WITH SUPPLIERS"
          description="A clear four-stage onboarding process designed to protect miner interests and ensure rapid settlement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="p-6 sm:p-8 bg-white border border-stone-200 hover:border-gold/60 rounded-sm transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-card-hover"
            >
              <div>
                <span className="text-2xl font-mono font-black text-gold-deep block mb-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-heading font-black text-stone-900 uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-stone-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-deep" />
                <span>Standard Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Form and Direct Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Col (7 cols) */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 uppercase mb-2">
              SUBMIT SUPPLIER INQUIRY
            </h2>
            <p className="text-sm text-stone-600 mb-8 font-mono">
              Complete the verified procurement inquiry below. All submissions are treated with strict commercial confidentiality.
            </p>
            <SupplierInquiryForm />
          </div>

          {/* Sourcing Desk Contact Col (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-white border border-gold/40 rounded-sm space-y-4 shadow-sm">
              <Badge variant="gold">Direct Sourcing Desk</Badge>
              <h3 className="text-xl font-heading font-black text-stone-900 uppercase">
                Speak to Procurement
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                If you have active mineral consignments ready for immediate inspection or prefer direct phone communication:
              </p>

              <div className="space-y-3 pt-2 text-xs font-mono text-stone-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                  <span className="text-stone-600 leading-snug">{COMPANY_INFO.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-deep shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-gold-deep text-stone-950 font-bold">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold-deep shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-deep text-stone-950 font-semibold">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#F3EFEA] border border-stone-200 rounded-sm space-y-3 shadow-sm">
              <h4 className="text-sm font-heading font-bold text-stone-900 uppercase tracking-wider">
                Supplier Commitments
              </h4>
              <ul className="space-y-2 text-xs font-mono text-stone-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                  <span>Transparent weighing and grading</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                  <span>Fair market-indexed pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                  <span>Fast, reliable commercial settlement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                  <span>Long-term off-take security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
