import React, { useState } from 'react';
import { COMPANY_INFO } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Toast, ToastMessage } from '@/components/ui/Toast';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setToast({
        id: Date.now().toString(),
        type: 'success',
        title: 'Communication Dispatched',
        message:
          'Your inquiry has been routed to our corporate administration desk in Jos, Plateau State. We will respond promptly.',
      });
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-900 min-h-screen">
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Page Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="gold">Corporate Directory</Badge>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-stone-900 uppercase tracking-tight mt-4 mb-6">
            CONTACT ARIEL MINES
          </h1>
          <p className="text-base sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Connect directly with our corporate headquarters and operational processing hub in Jos, Plateau State, Nigeria.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Official Directory & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Address Box */}
            <div className="p-8 rounded-sm bg-[#F3EFEA] border border-gold/40 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white border border-gold/40 flex items-center justify-center shadow-sm">
                  <Building className="w-5 h-5 text-gold-deep" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-black text-stone-900 uppercase">
                    Central Operations
                  </h3>
                  <span className="text-[10px] font-mono text-gold-deep uppercase font-bold block">
                    Headquarters & Plant Grounds
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-deep shrink-0 mt-1" />
                  <div className="space-y-0.5">
                    <span className="text-stone-500 block uppercase">Physical Location</span>
                    <address className="not-italic text-stone-900 font-semibold leading-relaxed">
                      {COMPANY_INFO.address}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold-deep shrink-0 mt-1" />
                  <div className="space-y-0.5">
                    <span className="text-stone-500 block uppercase">Direct Line & WhatsApp</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="text-stone-900 font-bold hover:text-gold-deep block"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold-deep shrink-0 mt-1" />
                  <div className="space-y-0.5">
                    <span className="text-stone-500 block uppercase">Corporate Correspondence</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-stone-900 font-semibold hover:text-gold-deep block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-deep shrink-0 mt-1" />
                  <div className="space-y-0.5">
                    <span className="text-stone-500 block uppercase">Operational Hours</span>
                    <span className="text-stone-900 font-semibold block">
                      Mon – Sat: 08:00 – 18:00 (WAT)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp & Direct Ingestion */}
            <div className="p-6 rounded-sm bg-white border border-stone-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-gold-deep font-mono font-bold text-xs uppercase">
                <MessageSquare className="w-4 h-4 text-gold-deep" />
                <span>Urgent Mineral Consignments</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                For time-sensitive mineral consignment valuations, direct deliveries, or urgent industrial off-take inquiries, contact our management team directly via WhatsApp or phone.
              </p>
              <Button
                href={`https://wa.me/${COMPANY_INFO.phoneClean.replace('+', '')}`}
                isExternal
                variant="gold-outline"
                size="sm"
                className="w-full justify-center"
              >
                Chat on WhatsApp ({COMPANY_INFO.phone})
              </Button>
            </div>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 p-8 sm:p-10 rounded-sm shadow-lg">
            <Badge variant="gold">Inquiry Dispatch</Badge>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 uppercase mt-3 mb-2">
              TRANSMIT A MESSAGE
            </h2>
            <p className="text-xs text-stone-600 font-mono mb-8">
              All commercial, partnership, and institutional inquiries receive prioritized review by corporate leadership.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-800 mb-2">
                    Your Name <span className="text-gold-deep">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aliyu Garba"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-800 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Industrial Materials Corp"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-800 mb-2">
                    Email Address <span className="text-gold-deep">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 ..."
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-800 mb-2">
                  Inquiry Topic / Subject <span className="text-gold-deep">*</span>
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-stone-900 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm"
                >
                  <option value="">Select an Inquiry Type</option>
                  <option value="Supplier Partnership">Supplier & Ore Sourcing</option>
                  <option value="Industrial Off-take">Industrial Commodity Purchase / Off-take</option>
                  <option value="Processing & Beneficiation">Custom Beneficiation / Toll Processing</option>
                  <option value="Corporate & Investment">Corporate / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-800 mb-2">
                  Message Details <span className="text-gold-deep">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide context regarding your requirements, quantities, specifications, or inquiry details."
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-gold-deep shrink-0" />
                  <span>Direct routing to corporate office.</span>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Transmitting...' : 'Dispatch Message'}</span>
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
