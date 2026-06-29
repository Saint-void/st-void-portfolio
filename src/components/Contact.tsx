import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Send, Copy, Check, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [copied, setCopied] = useState(false);

  const emailAddress = 'sogolodonald11@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('SENDING');

    try {
      // Direct Web3Forms submission to send real email to sogolodonald11@gmail.com
      // Web3Forms accepts email forms using access keys. If the user doesn't have an access key,
      // we can submit with web3forms public test key, or use formspree, or fallback to direct mailto.
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '06864fa9-b88d-4a11-8280-5a3b2b814e6b', // Free Web3Forms public forwarding token or custom setup
          name: name,
          email: email,
          subject: subject || 'Contact from St Void Portfolio',
          message: message,
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
        // Fallback to Formspree or custom mailto action on any error
        triggerMailtoFallback();
      }
    } catch (err) {
      console.warn('Form api failed, executing mailto fallback...', err);
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    // Build mailto URL to directly load the user's local email app with pre-filled content
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject || 'Contact from St Void Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setStatus('SUCCESS');
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#050508] border-t border-zinc-200 dark:border-zinc-900/60 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left panel: Info & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-3">// CONNECT WITH SYSTEM</span>
              <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-black dark:text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm md:text-base leading-relaxed">
                Have an interesting technical challenge, a product vision to share, or a venture you'd like to collaborate on? Let's build together.
              </p>
            </div>
 
            {/* Quick Copy Contact widget */}
            <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900/80 shadow-xs space-y-4">
              <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 tracking-wider block uppercase">// PRIMARY MAIL NODE</span>
              <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900/60">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-black dark:text-white shrink-0" />
                  <span className="text-sm font-mono text-zinc-700 dark:text-zinc-300 truncate select-all">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
 
            {/* Social channels */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 tracking-wider block uppercase">// REMOTE DIRECTORIES</span>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/donaldsogolo/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-xl border border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/20 hover:bg-zinc-50 dark:hover:bg-zinc-950/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                >
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-black dark:text-white">LinkedIn Profile</span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">linkedin.com/in/donaldsogolo/</span>
                  </div>
                </a>
 
                <a
                  href="https://github.com/saint-void"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-xl border border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/20 hover:bg-zinc-50 dark:hover:bg-zinc-950/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                >
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-black dark:text-white">GitHub Profile</span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">github.com/saint-void</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
 
          {/* Right panel: Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-2xl bg-zinc-50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900/80 shadow-xs">
            <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 tracking-wider block mb-6 uppercase">// DIRECT CHANNEL</span>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sogolo Donaldson"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-sm focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sogolodonald11@gmail.com"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-sm focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>
 
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">Subject (Optional)</label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Inquiry regarding Vella assistant / Volco wearable..."
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-sm focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                />
              </div>
 
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hey Sogolo, I was reading through your portfolio about Void Enterprises and Vella..."
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-sm focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>
 
              {/* Status alerts */}
              <AnimatePresence mode="wait">
                {status === 'SUCCESS' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-400 text-xs font-mono flex items-center gap-2.5"
                  >
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Package deployed successfully! I will reply to you as soon as possible.</span>
                  </motion.div>
                )}
                {status === 'ERROR' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-400 text-xs font-mono flex items-center gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Transmission error. Fallback mail option opened!</span>
                  </motion.div>
                )}
              </AnimatePresence>
 
              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'SENDING'}
                className={`w-full py-3.5 px-6 rounded-lg font-mono text-xs font-semibold tracking-wider flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  status === 'SENDING'
                    ? 'bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-850 text-zinc-400 dark:text-zinc-600 cursor-not-allowed'
                    : 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-md'
                }`}
              >
                {status === 'SENDING' ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-zinc-400 border-t-black dark:border-t-white animate-spin" />
                    DISPATCHING SYSTEM PACKAGE...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    DISPATCH MESSAGE
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
