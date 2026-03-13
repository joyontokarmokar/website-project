import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArtForDevelopers() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-stone-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              End-to-End Placemaking for Real Estate Developers
            </h1>
            <p className="text-xl text-stone-300">
              Transform your development into a cultural landmark. We collaborate with developers to create artwork and curated art programs that give buildings a stronger cultural identity and sense of place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Value of Art in Real Estate */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
                Art as a Development Asset
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                In today's competitive real estate market, standard amenities are no longer enough. Authentic cultural integration and community-centered storytelling create measurable value for your project.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Strengthen Community Connection',
                    desc: 'Art that reflects local history and culture builds goodwill and community support.'
                  },
                  {
                    title: 'Support Proposal Presentations',
                    desc: 'Compelling visual art concepts can be the differentiator in winning bids and zoning approvals.'
                  },
                  {
                    title: 'Create Cultural Identity',
                    desc: 'Give your building a unique narrative that attracts tenants and drives PR.'
                  },
                  {
                    title: 'Seamless Integration',
                    desc: 'We curate interior and exterior art programs while construction is underway, ensuring timely delivery.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-amber-100 p-2 rounded-full h-fit">
                      <Building className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                      <p className="text-stone-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/dev1/400/600" alt="Development Art" className="rounded-2xl w-full h-full object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/dev2/400/600?blur=1" alt="Development Art" className="rounded-2xl w-full h-full object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">How Developer Art Projects Begin</h2>
            <p className="text-lg text-stone-600">
              A streamlined, professional process designed to reduce uncertainty and align with your construction schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Share Your Goals',
                desc: 'Schedule a discovery call to discuss your building\'s identity, community context, and project timeline.'
              },
              {
                step: '02',
                title: 'Review Concepts & Budget',
                desc: 'We provide conceptual directions and align on a budget range that fits your development pro forma.'
              },
              {
                step: '03',
                title: 'Approve Visual Direction',
                desc: 'Detailed sketches and renderings are provided for your approval and stakeholder presentations.'
              },
              {
                step: '04',
                title: 'Installation Plan',
                desc: 'Professional execution with full insurance coverage, adhering to your site\'s safety and delivery standards.'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-5xl font-serif font-bold text-stone-200 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                <ShieldCheck className="text-amber-500" size={32} />
                Professional Standards & Insurance
              </h2>
              <p className="text-stone-300">
                We understand the complexities of active construction sites. Our team carries comprehensive liability insurance, adheres to OSHA standards, and coordinates seamlessly with your general contractors to ensure art installation never delays your critical path.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors inline-block"
              >
                Schedule a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
