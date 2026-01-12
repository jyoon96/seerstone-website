import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiry: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, email, inquiry, message } = formData;
    
    // Construct email body
    const body = `Name: ${name}
Company: ${company}
Email: ${email}
Inquiry Type: ${inquiry}

Message:
${message}`;

    const subject = `SeerStone Inquiry: ${inquiry || 'General'} - ${company || name}`;
    const mailtoLink = `mailto:contact@seerstone.vip?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Context */}
        <div>
          <span className="block text-sm font-bold uppercase tracking-widest text-navy mb-4">05 — Contact</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-jet mb-6">
            Global Inquiries.
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-12 font-light max-w-md">
            SeerStone is selective with its partnerships. We operate with a focus on long-term value creation and operational alignment.
            <br /><br />
            If you represent an enterprise looking to modernize its supply chain or an investor seeking information, please utilize the secure form.
          </p>

          <div className="space-y-8 pt-8 border-t border-light-grey">
             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-jet mb-2">Corporate Headquarters</h4>
               <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                 46 Stafford St. Ste 2911<br />
                 Lawrence MA 01841<br />
                 United States
               </p>
             </div>
             
             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-jet mb-2">Direct Lines</h4>
               <p className="text-sm text-charcoal/60 font-light font-mono">
                 contact@seerstone.vip<br />
                 investors@seerstone.vip
               </p>
             </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-light-grey/10 p-8 md:p-12 border border-light-grey rounded-sm">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-charcoal/50 font-semibold">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-charcoal/20 py-2 text-jet focus:outline-none focus:border-navy transition-colors placeholder-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-xs uppercase tracking-widest text-charcoal/50 font-semibold">Company</label>
                <input 
                  type="text" 
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-charcoal/20 py-2 text-jet focus:outline-none focus:border-navy transition-colors placeholder-transparent"
                  placeholder="Acme Corp"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-charcoal/50 font-semibold">Email Address</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-charcoal/20 py-2 text-jet focus:outline-none focus:border-navy transition-colors placeholder-transparent"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiry" className="text-xs uppercase tracking-widest text-charcoal/50 font-semibold">Inquiry Type</label>
              <select 
                id="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-charcoal/20 py-2 text-jet focus:outline-none focus:border-navy transition-colors"
                required
              >
                <option value="">Select a Department</option>
                <option value="Logistics Partnership">Logistics Partnership</option>
                <option value="Investor Relations">Investor Relations</option>
                <option value="Talent Acquisition">Talent Acquisition</option>
                <option value="Media & Press">Media & Press</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-charcoal/50 font-semibold">Message</label>
              <textarea 
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-charcoal/20 py-2 text-jet focus:outline-none focus:border-navy transition-colors placeholder-transparent resize-none"
                placeholder="How can we help?"
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full md:w-auto">
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};