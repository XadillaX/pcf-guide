import React, { useState } from 'react';
import { Search, DollarSign, Clock, TrendingUp, Users, Target, Star } from 'lucide-react';
import PixelButton from '@/components/PixelButton';

interface Channel {
  id: string;
  name: string;
  category: 'paid' | 'organic' | 'sales' | 'partnerships';
  costLevel: 'low' | 'medium' | 'high';
  timeToResults: 'immediate' | 'short' | 'medium' | 'long';
  scalability: 1 | 2 | 3 | 4 | 5;
  difficulty: 1 | 2 | 3 | 4 | 5;
  description: string;
  bestFor: string[];
  successCase: string;
  failureCase: string;
  keyMetrics: string[];
}

const ChannelAnalysis = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  const channels: Channel[] = [
    {
      id: 'google-ads',
      name: 'Google Ads (SEM)',
      category: 'paid',
      costLevel: 'high',
      timeToResults: 'immediate',
      scalability: 5,
      difficulty: 3,
      description: 'Pay-per-click advertising on Google search results and display network.',
      bestFor: ['High LTV products', 'Clear search intent', 'Competitive markets'],
      successCase: 'SaaS company achieved 300% ROI with targeted long-tail keywords',
      failureCase: 'E-commerce store burned $50K due to poor keyword selection and low conversion rates',
      keyMetrics: ['CPC', 'CTR', 'Quality Score', 'ROAS'],
    },
    {
      id: 'seo',
      name: 'SEO & Content Marketing',
      category: 'organic',
      costLevel: 'medium',
      timeToResults: 'long',
      scalability: 5,
      difficulty: 4,
      description: 'Organic search optimization and content creation for long-term visibility.',
      bestFor: ['Long sales cycles', 'Educational products', 'B2B services'],
      successCase: 'B2B startup grew from 0 to 100K monthly visitors in 18 months',
      failureCase: 'Company spent 2 years on content with no clear strategy, saw minimal traffic growth',
      keyMetrics: ['Organic traffic', 'Keyword rankings', 'Backlinks', 'Content engagement'],
    },
    {
      id: 'social-media-ads',
      name: 'Social Media Advertising',
      category: 'paid',
      costLevel: 'medium',
      timeToResults: 'immediate',
      scalability: 4,
      difficulty: 3,
      description: 'Paid advertising on Facebook, Instagram, LinkedIn, and other social platforms.',
      bestFor: ['B2C products', 'Visual products', 'Younger demographics'],
      successCase: 'Fashion brand achieved 5x ROAS with Instagram video ads',
      failureCase: 'B2B software company wasted $30K on Facebook ads targeting wrong audience',
      keyMetrics: ['CPM', 'CTR', 'CPA', 'ROAS', 'Engagement rate'],
    },
    {
      id: 'influencer-marketing',
      name: 'Influencer Marketing',
      category: 'partnerships',
      costLevel: 'medium',
      timeToResults: 'short',
      scalability: 3,
      difficulty: 3,
      description: 'Partnerships with social media influencers and content creators.',
      bestFor: ['Consumer products', 'Lifestyle brands', 'Visual products'],
      successCase: 'Beauty brand generated $500K revenue from single influencer campaign',
      failureCase: 'Tech startup partnered with lifestyle influencer, saw zero conversions',
      keyMetrics: ['Reach', 'Engagement rate', 'Conversion rate', 'Brand mentions'],
    },
    {
      id: 'cold-outreach',
      name: 'Cold Email/LinkedIn Outreach',
      category: 'sales',
      costLevel: 'low',
      timeToResults: 'short',
      scalability: 3,
      difficulty: 2,
      description: 'Direct outreach to potential customers via email or LinkedIn.',
      bestFor: ['B2B services', 'High-touch sales', 'Niche markets'],
      successCase: 'Consulting firm generated $2M pipeline with targeted LinkedIn outreach',
      failureCase: 'SaaS startup sent 10K generic emails, got 0.1% response rate',
      keyMetrics: ['Open rate', 'Response rate', 'Meeting booking rate', 'Conversion rate'],
    },
    {
      id: 'partnerships',
      name: 'Strategic Partnerships',
      category: 'partnerships',
      costLevel: 'low',
      timeToResults: 'medium',
      scalability: 4,
      difficulty: 4,
      description: 'Collaborations with complementary businesses for mutual benefit.',
      bestFor: ['B2B products', 'Ecosystem plays', 'Enterprise sales'],
      successCase: 'API company grew 10x through integration partnerships',
      failureCase: 'Startup spent 6 months on partnerships that never materialized',
      keyMetrics: ['Partner-sourced revenue', 'Joint opportunities', 'Integration adoption'],
    },
    {
      id: 'community',
      name: 'Community Building',
      category: 'organic',
      costLevel: 'medium',
      timeToResults: 'long',
      scalability: 4,
      difficulty: 4,
      description: 'Building and nurturing a community around your product or industry.',
      bestFor: ['Developer tools', 'Network effect products', 'Educational content'],
      successCase: 'Developer platform built 50K community, 30% became customers',
      failureCase: 'Company created community but never engaged, it became inactive',
      keyMetrics: ['Community size', 'Engagement rate', 'User-generated content', 'Conversion rate'],
    },
    {
      id: 'pr',
      name: 'Public Relations',
      category: 'organic',
      costLevel: 'medium',
      timeToResults: 'medium',
      scalability: 3,
      difficulty: 3,
      description: 'Media coverage and thought leadership to build brand awareness.',
      bestFor: ['Newsworthy products', 'B2B brands', 'Thought leadership'],
      successCase: 'AI startup got TechCrunch coverage, 10x website traffic in one week',
      failureCase: 'Company hired expensive PR agency, got coverage but no customers',
      keyMetrics: ['Media mentions', 'Share of voice', 'Website traffic', 'Brand awareness'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Channels', icon: Target },
    { id: 'paid', label: 'Paid Advertising', icon: DollarSign },
    { id: 'organic', label: 'Organic Growth', icon: TrendingUp },
    { id: 'sales', label: 'Sales Channels', icon: Users },
    { id: 'partnerships', label: 'Partnerships', icon: Star },
  ];

  const filteredChannels = channels.filter(channel => {
    const matchesCategory = selectedCategory === 'all' || channel.category === selectedCategory;
    const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         channel.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCostColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-minecraft-grass';
      case 'medium': return 'text-minecraft-gold';
      case 'high': return 'text-minecraft-redstone';
      default: return 'text-white';
    }
  };

  const getTimeColor = (time: string) => {
    switch (time) {
      case 'immediate': return 'text-minecraft-grass';
      case 'short': return 'text-minecraft-gold';
      case 'medium': return 'text-minecraft-sky';
      case 'long': return 'text-minecraft-redstone';
      default: return 'text-white';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={i < rating ? 'text-minecraft-gold fill-current' : 'text-minecraft-stone'}
      />
    ));
  };

  if (selectedChannel) {
    return (
      <div className="min-h-screen grass-texture">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Back Button */}
          <div className="mb-8">
            <PixelButton 
              variant="secondary" 
              size="md" 
              onClick={() => setSelectedChannel(null)}
            >
              ← Back to Channels
            </PixelButton>
          </div>

          {/* Channel Detail */}
          <div className="stone-block border-4 border-minecraft-stone-darker p-8 mb-8">
            <h1 className="font-pixel text-2xl-pixel text-minecraft-gold mb-6">{selectedChannel.name}</h1>
            <p className="font-pixel text-base-pixel text-white leading-relaxed mb-8">
              {selectedChannel.description}
            </p>

            {/* Channel Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="dirt-texture border-2 border-minecraft-dirt-darker p-4 text-center">
                <DollarSign size={24} className={`mx-auto mb-2 ${getCostColor(selectedChannel.costLevel)}`} />
                <div className="font-pixel text-sm-pixel text-white mb-1">Cost Level</div>
                <div className={`font-pixel text-base-pixel ${getCostColor(selectedChannel.costLevel)}`}>
                  {selectedChannel.costLevel.toUpperCase()}
                </div>
              </div>
              <div className="dirt-texture border-2 border-minecraft-dirt-darker p-4 text-center">
                <Clock size={24} className={`mx-auto mb-2 ${getTimeColor(selectedChannel.timeToResults)}`} />
                <div className="font-pixel text-sm-pixel text-white mb-1">Time to Results</div>
                <div className={`font-pixel text-base-pixel ${getTimeColor(selectedChannel.timeToResults)}`}>
                  {selectedChannel.timeToResults.toUpperCase()}
                </div>
              </div>
              <div className="dirt-texture border-2 border-minecraft-dirt-darker p-4 text-center">
                <TrendingUp size={24} className="mx-auto mb-2 text-minecraft-gold" />
                <div className="font-pixel text-sm-pixel text-white mb-1">Scalability</div>
                <div className="flex justify-center">
                  {renderStars(selectedChannel.scalability)}
                </div>
              </div>
              <div className="dirt-texture border-2 border-minecraft-dirt-darker p-4 text-center">
                <Target size={24} className="mx-auto mb-2 text-minecraft-redstone" />
                <div className="font-pixel text-sm-pixel text-white mb-1">Difficulty</div>
                <div className="flex justify-center">
                  {renderStars(selectedChannel.difficulty)}
                </div>
              </div>
            </div>

            {/* Best For */}
            <div className="mb-8">
              <h3 className="font-pixel text-lg-pixel text-minecraft-gold mb-4">Best For:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedChannel.bestFor.map((item, index) => (
                  <span key={index} className="gold-block border-2 border-minecraft-gold-darker px-3 py-1 font-pixel text-sm-pixel text-minecraft-dirt-darker">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="mb-8">
              <h3 className="font-pixel text-lg-pixel text-minecraft-gold mb-4">Key Metrics to Track:</h3>
              <div className="grid md:grid-cols-2 gap-2">
                {selectedChannel.keyMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-minecraft-gold mr-2"></div>
                    <span className="font-pixel text-sm-pixel text-white">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success & Failure Cases */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grass-block border-4 border-minecraft-grass-darker p-6">
                <h4 className="font-pixel text-base-pixel text-white mb-4">✓ Success Case</h4>
                <p className="font-pixel text-sm-pixel text-white leading-relaxed">
                  {selectedChannel.successCase}
                </p>
              </div>
              <div className="bg-minecraft-redstone border-4 border-red-800 p-6">
                <h4 className="font-pixel text-base-pixel text-white mb-4">✗ Failure Case</h4>
                <p className="font-pixel text-sm-pixel text-white leading-relaxed">
                  {selectedChannel.failureCase}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grass-texture">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-pixel text-2xl-pixel md:text-4xl text-white mb-6">
            Marketing Channel Analysis
          </h1>
          <p className="font-pixel text-base-pixel text-minecraft-gold max-w-3xl mx-auto leading-relaxed">
            Explore different marketing channels, their costs, effectiveness, and real-world case studies.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-minecraft-stone" />
              <input
                type="text"
                placeholder="Search channels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 font-pixel text-sm-pixel bg-minecraft-stone border-4 border-minecraft-stone-darker text-white placeholder-minecraft-stone focus:outline-none focus:border-minecraft-gold"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 font-pixel text-sm-pixel
                    border-2 transition-all duration-100
                    ${
                      selectedCategory === category.id
                        ? 'gold-block border-minecraft-gold-darker text-minecraft-dirt-darker'
                        : 'stone-block border-minecraft-stone-darker text-white hover:bg-minecraft-stone'
                    }
                  `}
                >
                  <Icon size={16} />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChannels.map((channel) => (
            <div
              key={channel.id}
              className="stone-block border-4 border-minecraft-stone-darker p-6 cursor-pointer transition-all duration-100 hover:transform hover:translate-x-1 hover:translate-y-1"
              onClick={() => setSelectedChannel(channel)}
            >
              <h3 className="font-pixel text-lg-pixel text-minecraft-gold mb-4">{channel.name}</h3>
              <p className="font-pixel text-sm-pixel text-white leading-relaxed mb-4">
                {channel.description.substring(0, 100)}...
              </p>
              
              {/* Quick Stats */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-xs-pixel text-minecraft-stone">Cost:</span>
                  <span className={`font-pixel text-xs-pixel ${getCostColor(channel.costLevel)}`}>
                    {channel.costLevel.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-xs-pixel text-minecraft-stone">Time:</span>
                  <span className={`font-pixel text-xs-pixel ${getTimeColor(channel.timeToResults)}`}>
                    {channel.timeToResults.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-xs-pixel text-minecraft-stone">Scalability:</span>
                  <div className="flex">
                    {renderStars(channel.scalability)}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <span className="font-pixel text-xs-pixel text-minecraft-gold">Click to learn more →</span>
              </div>
            </div>
          ))}
        </div>

        {filteredChannels.length === 0 && (
          <div className="text-center py-12">
            <p className="font-pixel text-base-pixel text-minecraft-stone">
              No channels found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelAnalysis;