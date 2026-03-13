import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Palette, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/mural/1920/1080?blur=2" 
            alt="Background Art" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm md:text-base font-medium tracking-widest uppercase mb-4 text-stone-300">
              Legacy Portrait Artist • Cultural Storyteller • Art for Buildings & Communities
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Telling Stories Through <br className="hidden md:block" />
              <span className="text-amber-500">Art & Architecture</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto mb-10">
              CJ Latimore collaborates with developers, architects, and communities to create curated art programs that give buildings a stronger cultural identity and sense of place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                to="/art-for-developers"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
              >
                Start a Building Art Program
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-stone-100 py-12 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-stone-500 uppercase tracking-widest mb-8">
            Trusted by cultural institutions, schools, and development partners
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
            {/* Placeholder logos */}
            <div className="flex items-center gap-2 font-serif text-xl font-bold"><Building2 /> Pinnacle Housing</div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold"><Users /> Urban League</div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold"><Palette /> The Villages</div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Portfolio Categories</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Explore specialized art solutions tailored for different environments and client needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Art for Developers',
                desc: 'End-to-end placemaking and cultural identity for real estate projects.',
                img: 'https://picsum.photos/seed/developer/600/800',
                link: '/art-for-developers'
              },
              {
                title: 'Legacy Portraits',
                desc: 'Museum-quality cultural works preserving meaningful family and community legacies.',
                img: 'https://picsum.photos/seed/portrait/600/800',
                link: '/legacy-portraits'
              },
              {
                title: 'Interior Art Programs',
                desc: 'Curated art collections for residential, corporate, and hospitality interiors.',
                img: 'https://picsum.photos/seed/interior/600/800',
                link: '/interior-art-programs'
              },
              {
                title: 'Public / Community Art',
                desc: 'Large-scale murals and installations that strengthen community connection.',
                img: 'https://picsum.photos/seed/public/600/800',
                link: '/gallery'
              }
            ].map((category, idx) => (
              <Link key={idx} to={category.link} className="group block">
                <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={category.img} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-stone-600 text-sm">
                  {category.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition / Placemaking */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                More than decoration. <br />
                <span className="text-amber-500">A development asset.</span>
              </h2>
              <p className="text-lg text-stone-300 mb-8">
                We help developers, architects, and property groups create one-of-a-kind spaces and a memorable sense of place. Art is integrated into the project strategy to strengthen community connection and support proposal presentations.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Strengthen community connection and cultural identity',
                  'Support proposal presentations and zoning approvals',
                  'Curate interior art programs while construction is underway',
                  'Reduce perceived risk with professional installation and insurance'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={20} />
                    <span className="text-stone-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/art-for-developers"
                className="inline-flex items-center gap-2 text-amber-500 font-medium hover:text-amber-400 transition-colors"
              >
                Learn about our developer services <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/placemaking/800/1000" 
                  alt="Placemaking Art" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white text-stone-900 p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="font-serif text-xl font-bold mb-2">"A memorable sense of place."</p>
                <p className="text-sm text-stone-600">Transforming buildings into cultural landmarks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg className="mx-auto h-12 w-12 text-stone-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          <p className="text-2xl md:text-3xl font-serif font-medium text-stone-900 mb-8 leading-relaxed">
            "CJ Latimore doesn't just paint walls; he uncovers the soul of a community and embeds it into the architecture. His work gave our development a profound cultural identity that resonated with the neighborhood from day one."
          </p>
          <div className="font-medium text-stone-900">Sarah Jenkins</div>
          <div className="text-stone-500 text-sm">Director of Development, Pinnacle Housing</div>
        </div>
      </section>
    </div>
  );
}
