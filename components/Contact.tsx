import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiry: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, email, inquiry, message } = formData;
    const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nInquiry Type: ${inquiry}\n\nMessage:\n${message}`;
    const subject = `SeerStone Inquiry: ${inquiry || 'General'} - ${company || name}`;
    window.location.href = `mailto:contact@seerstone.vip?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative w-full py-32 md:py-44 bg-dark-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-400/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="flex items-center gap-5 mb-6"
            >
              <div className="divider-gold" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-warm-400">
                05 — Contact
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: EASE }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-warm-50 mb-8 leading-[1.05]"
            >
              Global{' '}
              <span className="italic text-warm-300">Inquiries.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
              className="text-base text-warm-100/40 leading-relaxed mb-16 font-light max-w-md"
            >
              SeerStone is selective with its partnerships. We operate with a focus on long-term value creation and operational alignment. If you represent an enterprise looking to modernize its supply chain or an investor seeking information, please utilize the secure form.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
              className="space-y-10 pt-10 border-t border-dark-600/30"
            >
              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-warm-400/60 mb-3">
                  Corporate Headquarters
                </h4>
                <p className="text-sm text-warm-100/30 font-light leading-relaxed">
                  46 Stafford St. Ste 2911<br />
                  Lawrence MA 01841<br />
                  United States
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-warm-400/60 mb-3">
                  Direct Lines
                </h4>
                <p className="text-sm text-warm-100/30 font-light font-mono">
                  contact@seerstone.vip<br />
                  investors@seerstone.vip
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="bg-dark-800/50 border border-dark-600/30 p-8 md:p-12"
          >
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label htmlFor="name" className="form-label block mb-3">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="form-label block mb-3">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Company name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label block mb-3">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="email@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="inquiry" className="form-label block mb-3">Inquiry Type</label>
                <select
                  id="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="form-input bg-transparent appearance-none"
                  required
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="" className="bg-dark-800 text-warm-100">Select a Department</option>
                  <option value="Logistics Partnership" className="bg-dark-800 text-warm-100">Logistics Partnership</option>
                  <option value="Investor Relations" className="bg-dark-800 text-warm-100">Investor Relations</option>
                  <option value="Talent Acquisition" className="bg-dark-800 text-warm-100">Talent Acquisition</option>
                  <option value="Media & Press" className="bg-dark-800 text-warm-100">Media & Press</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="form-label block mb-3">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input resize-none"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <button
                type="submit"
                className="magnetic-btn w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 text-[11px] tracking-[0.2em] uppercase font-semibold bg-warm-400 text-dark-950 hover:bg-warm-300 transition-colors duration-500"
              >
                Submit Inquiry
                <ArrowUpRight size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
