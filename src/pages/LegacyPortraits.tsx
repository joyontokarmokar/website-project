import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function LegacyPortraits() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-stone-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Legacy Portraits
              </h1>
              <p className="text-xl text-stone-300 mb-8">
                Museum-quality cultural works preserving meaningful family and community legacies. Commission a piece that tells your story for generations.
              </p>
              <Link
                to="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors inline-block"
              >
                Commission a Legacy Portrait
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <img 
                src="https://picsum.photos/seed/legacy/800/1000" 
                alt="Legacy Portrait Example" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Capturing the Soul of a Legacy</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            A legacy portrait is more than a likeness; it is a historical document, a cultural artifact, and a deeply personal narrative. CJ Latimore specializes in creating profound, emotionally resonant portraits that honor the struggles, triumphs, and enduring spirit of individuals and families.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            Using a blend of classical techniques and contemporary cultural storytelling, these portraits are designed to be heirloom pieces—anchoring a family's history or a community's heritage in a tangible, beautiful form.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
                  <img 
                    src={`https://picsum.photos/seed/portrait${i}/600/800`} 
                    alt={`Portrait ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif font-bold text-stone-900">Portrait Study {i}</h3>
                <p className="text-sm text-stone-500">Oil on Canvas</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
