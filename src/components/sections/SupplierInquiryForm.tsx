import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Toast, ToastMessage } from '@/components/ui/Toast';
import { ShieldCheck, FileText } from 'lucide-react';

export const SupplierInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    location: '',
    materialType: '',
    estimatedVolume: '',
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
        title: 'Inquiry Transmitted',
        message:
          'Your supplier submission has been logged. Our procurement team in Jos, Plateau State will review your material specifications and contact you directly.',
      });
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        location: '',
        materialType: '',
        estimatedVolume: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-10 shadow-lg relative">
      <Toast toast={toast} onClose={() => setToast(null)} />

      <div className="flex items-center gap-2 mb-6 text-gold-deep font-mono font-bold text-xs uppercase tracking-wider">
        <FileText className="w-4 h-4 text-gold-deep" />
        <span>Official Supplier Ingestion Desk</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2">
              Full Name <span className="text-gold-deep">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ibrahim Danladi"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
            />
          </div>

          {/* Company / Enterprise */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2">
              Company / Mining Group
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Plateau Mineral Syndicate"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2">
              Corporate Email <span className="text-gold-deep">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@organization.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
            />
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2">
              Phone / WhatsApp <span className="text-gold-deep">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 800 000 0000"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
            />
          </div>

          {/* Location of Ore / Resource */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2">
              Resource Origin / Location <span className="text-gold-deep">*</span>
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Barkin Ladi, Plateau State"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
            />
          </div>

          {/* Material Category */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2">
              Mineral / Material Type <span className="text-gold-deep">*</span>
            </label>
            <input
              type="text"
              name="materialType"
              required
              value={formData.materialType}
              onChange={handleChange}
              placeholder="e.g. Raw Cassiterite / Columbite / Tantalite / Zinc Ore / Other"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
            />
          </div>
        </div>

        {/* Estimated Volume / Staged Tonnage */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2">
            Available / Recurring Volume
          </label>
          <input
            type="text"
            name="estimatedVolume"
            value={formData.estimatedVolume}
            onChange={handleChange}
            placeholder="e.g. 5–20 Metric Tonnes monthly / Single 10 Tonne Batch"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
          />
        </div>

        {/* Message / Specifications */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-2">
            Material Specifications & Additional Details
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe ore state (raw lump, crushed, pre-concentrate), assay results if available, and proposed delivery or off-take terms."
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm resize-y"
          />
        </div>

        {/* Confidentiality notice & Submit */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
            <ShieldCheck className="w-4 h-4 text-gold-deep shrink-0" />
            <span>Strict commercial confidentiality & direct valuation.</span>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading}
            className="w-full sm:w-auto"
            withArrow
          >
            {loading ? 'Transmitting...' : 'Submit Supplier Inquiry'}
          </Button>
        </div>
      </form>
    </div>
  );
};
