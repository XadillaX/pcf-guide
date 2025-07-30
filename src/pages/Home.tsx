import { Link } from 'react-router-dom';
import { Zap, TrendingUp, Target, BookOpen } from 'lucide-react';
import TwitterCard from '@/components/TwitterCard';
import PixelButton from '@/components/PixelButton';

export default function Home() {
  return (
    <div className="min-h-screen grass-texture">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Twitter Source Attribution */}
          <TwitterCard />
          
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <h1 className="font-pixel text-2xl-pixel md:text-4xl text-white mb-8 pixel-pulse">
              Product-Channel Fit
            </h1>
            <h2 className="font-pixel text-xl-pixel md:text-2xl text-minecraft-gold mb-8">
              Guide
            </h2>
            <p className="font-pixel text-base-pixel text-white max-w-4xl mx-auto leading-relaxed mb-12">
              Learn how to find the perfect match between your product and marketing channels. 
              Avoid burning cash on wrong channels and discover what actually works.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/decision-tree">
                <PixelButton variant="gold" size="lg" icon={Zap}>
                  Start Decision Tree
                </PixelButton>
              </Link>
              <Link to="/case-story">
                <PixelButton variant="secondary" size="lg" icon={BookOpen}>
                  Read Case Story
                </PixelButton>
              </Link>
            </div>
          </div>
          
          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="stone-block border-4 border-minecraft-stone-darker p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 gold-block border-2 border-minecraft-gold-darker flex items-center justify-center">
                <Target size={24} className="text-minecraft-dirt-darker" />
              </div>
              <h3 className="font-pixel text-lg-pixel text-minecraft-gold mb-4">Find Your Fit</h3>
              <p className="font-pixel text-sm-pixel text-white leading-relaxed">
                Use our interactive decision tree to discover the right channels for your product
              </p>
            </div>
            
            <div className="stone-block border-4 border-minecraft-stone-darker p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-minecraft-redstone border-2 border-red-800 flex items-center justify-center animate-redstone-glow">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="font-pixel text-lg-pixel text-minecraft-gold mb-4">Avoid Burnout</h3>
              <p className="font-pixel text-sm-pixel text-white leading-relaxed">
                Learn from real failures and successes to save time and money
              </p>
            </div>
            
            <div className="stone-block border-4 border-minecraft-stone-darker p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 grass-block border-2 border-minecraft-grass-darker flex items-center justify-center">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="font-pixel text-lg-pixel text-minecraft-gold mb-4">Take Action</h3>
              <p className="font-pixel text-sm-pixel text-white leading-relaxed">
                Get practical, actionable recommendations based on your product characteristics
              </p>
            </div>
          </div>
          
          {/* Key Statistics */}
          <div className="dirt-texture border-4 border-minecraft-dirt-darker p-8 text-center">
            <h3 className="font-pixel text-xl-pixel text-minecraft-gold mb-8">Why Product-Channel Fit Matters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="font-pixel text-2xl-pixel text-minecraft-redstone mb-2">$200M+</div>
                <div className="font-pixel text-sm-pixel text-white">Cash Burned on Wrong Channels</div>
              </div>
              <div>
                <div className="font-pixel text-2xl-pixel text-minecraft-redstone mb-2">20+</div>
                <div className="font-pixel text-sm-pixel text-white">Channels Tried Before Success</div>
              </div>
              <div>
                <div className="font-pixel text-2xl-pixel text-minecraft-gold mb-2">1</div>
                <div className="font-pixel text-sm-pixel text-white">Right Fit Changed Everything</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}