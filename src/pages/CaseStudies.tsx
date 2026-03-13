import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const cases = [
    {
      id: 'the-villages',
      title: 'The Villages',
      location: 'Miami, FL',
      category: 'Residential Development',
      image: 'https://picsum.photos/seed/villages/800/600',
      challenge: 'Creating a cohesive cultural narrative across a multi-building residential complex that honors the neighborhood\'s history while appealing to modern residents.',
      solution: 'A series of large-scale exterior murals and curated interior lobby art that tells the story of the local community\'s evolution.',
      outcome: 'Increased community buy-in during the zoning phase and a 15% faster lease-up rate attributed to the building\'s strong cultural identity.'
    },
    {
      id: 'pinnacle-housing',
      title: 'Pinnacle Housing Public Art',
      location: 'Atlanta, GA',
      category: 'Affordable Housing',
      image: 'https://picsum.photos/seed/pinnacle/800/600',
      challenge: 'Integrating high-quality, meaningful public art into an affordable housing development with strict budget constraints and grant requirements.',
      solution: 'Collaborative community workshops leading to a central legacy portrait mural that reflects the faces and stories of the residents.',
      outcome: 'Award-winning development recognized for its commitment to community-centered storytelling and placemaking.'
    },
    {
      id: 'liberty-city',
      title: 'Liberty City Family Album',
      location: 'Liberty City, FL',
      category: 'Community Art Initiative',
      image: 'https://picsum.photos/seed/liberty/800/600',
      challenge: 'Preserving the rich, often overlooked history of a historic neighborhood facing rapid gentrification.',
      solution: 'A "Family Album" concept featuring monumental legacy portraits of local heroes and everyday citizens painted on key transit corridors.',
      outcome: 'Transformed the streetscape into an outdoor museum, fostering immense local pride and becoming a focal point for cultural tours.'
    },
    {
      id: '7th-avenue',
      title: '7th Avenue Transit Building',
      location: 'Charlotte, NC',
      category: 'Municipal / Transit',
      image: 'https://picsum.photos/seed/transit/800/600',
      challenge: 'Activating a stark, utilitarian transit hub to make it feel safe, welcoming, and reflective of the city\'s vibrant energy.',
      solution: 'Dynamic, colorful murals wrapping the building\'s exterior, incorporating themes of movement, progress, and connectivity.',
      outcome: 'Significant reduction in vandalism, increased ridership satisfaction, and the building became a recognizable city landmark.'
    }
  ];

  return (
    <div className="flex flex-col bg-stone-50">
      {/* Header */}
      <section className="bg-stone-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              Explore how we have partnered with developers, municipalities, and communities to create art that transforms spaces and tells powerful stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {cases.map((study, index) => (
            <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {study.category}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                  {study.title}
                </h2>
                <p className="text-stone-500 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {study.location}
                </p>
                
                <div className="space-y-4 pt-4 border-t border-stone-200">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-1">The Challenge</h4>
                    <p className="text-stone-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-1">The Art Solution</h4>
                    <p className="text-stone-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-1">The Outcome</h4>
                    <p className="text-stone-600 font-medium text-amber-700">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Ready to discuss your project?</h2>
          <p className="text-stone-300 mb-8 text-lg">
            Whether you are in the early planning stages or need an art program curated for an active construction site, we are ready to collaborate.
          </p>
          <Link
            to="/contact"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors inline-block"
          >
            Start a Building Art Program
          </Link>
        </div>
      </section>
    </div>
  );
}
