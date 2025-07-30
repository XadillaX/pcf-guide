import { TrendingDown, TrendingUp, DollarSign, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import PixelButton from '@/components/PixelButton';
import { Link } from 'react-router-dom';

const CaseStory = () => {
  const failedChannels = [
    { name: 'Google Ads', cost: '$50M', duration: '18 months', reason: 'High CPC, low conversion' },
    { name: 'Facebook Ads', cost: '$30M', duration: '12 months', reason: 'Poor targeting, ad fatigue' },
    { name: 'LinkedIn Ads', cost: '$25M', duration: '8 months', reason: 'Expensive, wrong audience' },
    { name: 'Content Marketing', cost: '$20M', duration: '24 months', reason: 'No clear ROI, slow growth' },
    { name: 'Influencer Marketing', cost: '$15M', duration: '6 months', reason: 'Misaligned audience' },
    { name: 'Cold Email', cost: '$10M', duration: '12 months', reason: 'Low response rates' },
    { name: 'Trade Shows', cost: '$25M', duration: '18 months', reason: 'High cost per lead' },
    { name: 'PR Campaigns', cost: '$15M', duration: '12 months', reason: 'No direct conversions' },
  ];

  const successMetrics = [
    { label: 'Customer Acquisition Cost', before: '$500', after: '$50', improvement: '90% reduction' },
    { label: 'Monthly Growth Rate', before: '2%', after: '25%', improvement: '12.5x increase' },
    { label: 'Conversion Rate', before: '0.5%', after: '8%', improvement: '16x increase' },
    { label: 'Time to Product-Market Fit', before: '36 months', after: '6 months', improvement: '6x faster' },
  ];

  return (
    <div className="min-h-screen grass-texture">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-pixel text-2xl-pixel md:text-4xl text-white mb-8">
            The $200M Lesson
          </h1>
          <p className="font-pixel text-base-pixel text-minecraft-gold max-w-3xl mx-auto leading-relaxed">
            A real story of how trying everything led to burning millions, 
            and how finding product-channel fit changed everything.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="font-pixel text-xl-pixel text-minecraft-gold mb-8 text-center">
            The Journey: From Failure to Success
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-minecraft-redstone"></div>
            
            {/* Phase 1: The Struggle */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-minecraft-redstone border-2 border-red-800 rounded-full flex items-center justify-center">
                  <AlertTriangle size={16} className="text-white" />
                </div>
              </div>
              <div className="stone-block border-4 border-minecraft-stone-darker p-6 mx-auto max-w-2xl">
                <h3 className="font-pixel text-lg-pixel text-minecraft-redstone mb-4 text-center">
                  Phase 1: The Struggle (0-36 months)
                </h3>
                <p className="font-pixel text-sm-pixel text-white leading-relaxed text-center">
                  Tried every channel we could think of. Spent millions on ads, hired expensive agencies, 
                  attended countless conferences. Growth was slow, costs were high, and the team was burning out.
                </p>
              </div>
            </div>
            
            {/* Phase 2: The Breakthrough */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-minecraft-gold border-2 border-minecraft-gold-darker rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-minecraft-dirt-darker" />
                </div>
              </div>
              <div className="gold-block border-4 border-minecraft-gold-darker p-6 mx-auto max-w-2xl">
                <h3 className="font-pixel text-lg-pixel text-minecraft-dirt-darker mb-4 text-center">
                  Phase 2: The Breakthrough (Month 37+)
                </h3>
                <p className="font-pixel text-sm-pixel text-minecraft-dirt-darker leading-relaxed text-center">
                  Finally understood our product characteristics and matched them to the right channels. 
                  Growth exploded, costs plummeted, and everything clicked into place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Failed Channels Grid */}
        <div className="mb-16">
          <h2 className="font-pixel text-xl-pixel text-minecraft-redstone mb-8 text-center">
            What Didn't Work: $200M+ Burned
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {failedChannels.map((channel, index) => (
              <div key={index} className="stone-block border-4 border-minecraft-stone-darker p-4">
                <div className="flex items-center mb-2">
                  <TrendingDown size={16} className="text-minecraft-redstone mr-2" />
                  <h3 className="font-pixel text-sm-pixel text-minecraft-redstone">{channel.name}</h3>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <DollarSign size={12} className="text-white mr-1" />
                    <span className="font-pixel text-xs-pixel text-white">{channel.cost}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={12} className="text-white mr-1" />
                    <span className="font-pixel text-xs-pixel text-white">{channel.duration}</span>
                  </div>
                  <p className="font-pixel text-xs-pixel text-minecraft-stone leading-relaxed">
                    {channel.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="font-pixel text-xl-pixel text-minecraft-gold mb-8 text-center">
            What Changed: The Results
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="dirt-texture border-4 border-minecraft-dirt-darker p-6">
                <h3 className="font-pixel text-base-pixel text-minecraft-gold mb-4">{metric.label}</h3>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-center">
                    <div className="font-pixel text-sm-pixel text-minecraft-redstone mb-1">Before</div>
                    <div className="font-pixel text-lg-pixel text-white">{metric.before}</div>
                  </div>
                  <TrendingUp size={24} className="text-minecraft-gold" />
                  <div className="text-center">
                    <div className="font-pixel text-sm-pixel text-minecraft-gold mb-1">After</div>
                    <div className="font-pixel text-lg-pixel text-white">{metric.after}</div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="font-pixel text-xs-pixel text-minecraft-gold">{metric.improvement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="mb-16">
          <h2 className="font-pixel text-xl-pixel text-minecraft-gold mb-8 text-center">
            Key Insights Learned
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="stone-block border-4 border-minecraft-stone-darker p-6">
              <h3 className="font-pixel text-base-pixel text-minecraft-gold mb-4">Product First</h3>
              <p className="font-pixel text-sm-pixel text-white leading-relaxed">
                Understanding your product's characteristics is the foundation. 
                Self-service capability, network effects, and order value determine everything.
              </p>
            </div>
            <div className="stone-block border-4 border-minecraft-stone-darker p-6">
              <h3 className="font-pixel text-base-pixel text-minecraft-gold mb-4">Channel Match</h3>
              <p className="font-pixel text-sm-pixel text-white leading-relaxed">
                Not all channels work for all products. The right channel depends on your specific 
                product characteristics and target audience.
              </p>
            </div>
            <div className="stone-block border-4 border-minecraft-stone-darker p-6">
              <h3 className="font-pixel text-base-pixel text-minecraft-gold mb-4">Test Smart</h3>
              <p className="font-pixel text-sm-pixel text-white leading-relaxed">
                Use a systematic approach to test channels. Start with the most likely fits 
                based on your product characteristics.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-pixel text-xl-pixel text-white mb-6">
            Ready to Find Your Product-Channel Fit?
          </h2>
          <p className="font-pixel text-base-pixel text-minecraft-stone mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't repeat our mistakes. Use our decision tree to find the right channels for your product.
          </p>
          <Link to="/decision-tree">
            <PixelButton variant="gold" size="lg">
              Start Decision Tree
            </PixelButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStory;