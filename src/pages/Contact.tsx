import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col bg-stone-50 min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                Let's Discuss Your Project
              </h1>
              <p className="text-lg text-stone-600 mb-12">
                Whether you are a developer looking to integrate art into your next building, or an individual seeking a legacy portrait, we would love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-stone-200 p-3 rounded-full text-stone-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Email</h3>
                    <p className="text-stone-600">inquiries@cjlatimore.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-stone-200 p-3 rounded-full text-stone-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Phone</h3>
                    <p className="text-stone-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-stone-200 p-3 rounded-full text-stone-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Studio</h3>
                    <p className="text-stone-600">Available by appointment only.<br/>Miami, FL</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200"
            >
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Schedule a Consultation</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-stone-700 mb-1">Project Type</label>
                  <select id="projectType" className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white">
                    <option>Art for Developers / Placemaking</option>
                    <option>Legacy Portrait Commission</option>
                    <option>Interior Art Program</option>
                    <option>Public / Community Art</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Project Details</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none" placeholder="Tell us about your building, community, or portrait goals..."></textarea>
                </div>

                <button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-3 rounded-lg transition-colors">
                  Send Inquiry
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
