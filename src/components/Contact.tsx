import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS'>('IDLE');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = 'sogolodonald11@gmail.com';
  const phoneNumber = '07074164745';
  const intlPhone = '+234 707 416 4745';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('SENDING');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '06864fa9-b88d-4a11-8280-5a3b2b814e6b',
          name,
          email,
          subject: subject || 'Portfolio Contact Inquiry — Sogolo Donaldson',
          message,
          to_email: emailAddress
        })
      });

      const result = await response.json();
      if (response.ok || result.success) {
        setStatus('SUCCESS');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        triggerMailtoFallback();
      }
    } catch {
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject || 'Inquiry from Portfolio — Sogolo Donaldson'
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setStatus('SUCCESS');
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mb-2">
            // 05. CONTACT & COLLABORATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-xl">
            Available for engineering roles, backend API projects, AI chatbot platforms, and autonomous systems integration.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 space-y-6">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                  DIRECT CONTACT
                </span>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                  Sogolo O. Donaldson
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Abuja, Nigeria • Available for Remote & On-Site</span>
                </p>
              </div>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-between gap-3 shadow-2xs">
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-zinc-400 block">EMAIL ADDRESS</span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate block hover:underline"
                  >
                    {emailAddress}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-zinc-900 dark:text-white" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Box */}
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-between gap-3 shadow-2xs">
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-zinc-400 block">PHONE / WHATSAPP</span>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate block hover:underline"
                  >
                    {phoneNumber} ({intlPhone})
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-zinc-900 dark:text-white" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Professional Links */}
              <div className="pt-2 space-y-2">
                <a
                  href="https://www.linkedin.com/in/donaldsogolo/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-850 transition-all flex items-center justify-between group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white block">
                        LinkedIn Profile
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        linkedin.com/in/donaldsogolo
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="https://github.com/Saint-void"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-850 transition-all flex items-center justify-between group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white block">
                        GitHub Repositories
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        github.com/Saint-void
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40">
            <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-1">
              Direct Message
            </h3>
            <p className="text-xs font-mono text-zinc-500 mb-6">
              Transmits directly to sogolodonald11@gmail.com
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-500 uppercase">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-500 uppercase">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-500 uppercase">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Software Engineering Inquiry / Vella AI Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none transition-colors shadow-2xs"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-500 uppercase">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none transition-colors resize-none shadow-2xs"
                />
              </div>

              {status === 'SUCCESS' && (
                <div className="p-3.5 rounded-xl bg-zinc-200/80 dark:bg-zinc-800 text-xs font-mono text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Message delivered successfully! Donaldson will respond shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'SENDING'}
                className="w-full py-3.5 px-6 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-xs font-mono tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 shadow-xs"
              >
                {status === 'SENDING' ? (
                  <span>DISPATCHING...</span>
                ) : (
                  <>
                    <span>DISPATCH MESSAGE</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
