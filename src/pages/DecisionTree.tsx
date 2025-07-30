import React, { useState } from 'react';
import { ChevronRight, Target, RotateCcw, Zap, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PixelButton from '../components/PixelButton';

interface Question {
  id: string;
  text: string;
  options: {
    label: string;
    value: string;
    nextQuestion?: string;
    result?: string;
  }[];
}

interface Result {
  id: string;
  title: string;
  description: string;
  channels: string[];
  priority: 'high' | 'medium' | 'low';
}

const DecisionTree: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState<string>('q1');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  // Term definitions
  const termDefinitions: Record<string, string> = {
    'NPS': 'Net Promoter Score: A customer loyalty metric ranging from -100 to 100, calculated by asking customers how likely they are to recommend the product.',
    'LTV': 'Lifetime Value: The total revenue a customer generates for a business throughout their entire relationship.',
    'CPC': 'Cost Per Click: The amount paid for each user click in paid advertising campaigns.',
    'CVR': 'Conversion Rate: The percentage of visitors who complete a desired action (such as purchasing or signing up).',
    'PLG': 'Product-Led Growth: A growth strategy that uses the product itself to acquire, activate, and retain customers.',
    'SEO': 'Search Engine Optimization: Techniques and strategies to improve a website\'s ranking in search engine results.',
    'pSEO': 'Programmatic SEO: Automated creation of pages targeting specific keywords at scale.',
    'ABM': 'Account-Based Marketing: Personalized marketing strategy targeting specific high-value customer accounts.',
    'SEM': 'Search Engine Marketing: Marketing approach to increase website visibility through paid search advertising.'
  };

  // Extract terms from question text
  const extractTermsFromText = (text: string): string[] => {
    const terms = [];
    if (text.includes('NPS')) terms.push('NPS');
    if (text.includes('LTV/CPC')) {
      terms.push('LTV');
      terms.push('CPC');
    }
    if (text.includes('conversion rate')) terms.push('CVR');
    return terms;
  };

  const questions: Record<string, Question> = {
    q1: {
      id: 'q1',
      text: 'Can users try your product self-serve?',
      options: [
        { label: 'Yes', value: 'yes', nextQuestion: 'q2' },
        { label: 'No', value: 'no', nextQuestion: 'q3' },
      ],
    },
    q2: {
      id: 'q2',
      text: 'Does your product have built-in network effects?',
      options: [
        { label: 'Yes', value: 'yes', result: 'viral-growth' },
        { label: 'No', value: 'no', nextQuestion: 'q4' },
      ],
    },
    q3: {
      id: 'q3',
      text: 'Does your product have high average order value?',
      options: [
        { label: 'Yes', value: 'yes', nextQuestion: 'q10' },
        { label: 'No', value: 'no', nextQuestion: 'q11' },
      ],
    },
    q4: {
      id: 'q4',
      text: 'Does your product have multi-user collaboration features?',
      options: [
        { label: 'Yes', value: 'yes', nextQuestion: 'q5' },
        { label: 'No', value: 'no', nextQuestion: 'q6' },
      ],
    },
    q5: {
      id: 'q5',
      text: 'Can your product create viral content?',
      options: [
        { label: 'Yes', value: 'yes', result: 'community-content' },
        { label: 'No', value: 'no', result: 'fundraising-social' },
      ],
    },
    q6: {
      id: 'q6',
      text: 'Is your free-to-paid conversion rate > 2%?',
      options: [
        { label: 'Yes', value: 'yes', nextQuestion: 'q7' },
        { label: 'No', value: 'no', result: 'affiliate-marketing' },
      ],
    },
    q7: {
      id: 'q7',
      text: 'Is your NPS > 30?',
      options: [
        { label: 'Yes', value: 'yes', nextQuestion: 'q8' },
        { label: 'No', value: 'no', result: 'organic-social' },
      ],
    },
    q8: {
      id: 'q8',
      text: 'Is your LTV/CPC ratio > 200?',
      options: [
        { label: 'Yes', value: 'yes', nextQuestion: 'q9' },
        { label: 'No', value: 'no', result: 'seo-influencers' },
      ],
    },
    q9: {
      id: 'q9',
      text: 'Is your LTV/CPC ratio > 400?',
      options: [
        { label: 'Yes', value: 'yes', result: 'social-paid' },
        { label: 'No', value: 'no', result: 'seo-influencers' },
      ],
    },
    q10: {
      id: 'q10',
      text: 'Does your founding team have a strong industry network?',
      options: [
        { label: 'Yes', value: 'yes', result: 'high-value-strong-network' },
        { label: 'No', value: 'no', result: 'high-value-weak-network' },
      ],
    },
    q11: {
      id: 'q11',
      text: 'Does your product have a long sales cycle?',
      options: [
        { label: 'Yes', value: 'yes', result: 'long-cycle-low-value' },
        { label: 'No', value: 'no', result: 'affiliate-marketing' },
      ],
    },
  };

  const results: Record<string, Result> = {
    'viral-growth': {
      id: 'viral-growth',
      title: 'Viral Growth Channels',
      description: 'Your product has network effects and self-service capability. Focus on viral and community-driven growth.',
      channels: ['Community recommendations', 'PLG (Product-Led Growth)', 'Viral organic content', 'Influencer marketing'],
      priority: 'high',
    },
    'community-content': {
      id: 'community-content',
      title: 'Community + Content Channels',
      description: 'Multi-user collaboration with viral content potential. Build community and create shareable content.',
      channels: ['Community building', 'PLG', 'Viral organic content', 'Influencer marketing'],
      priority: 'high',
    },
    'fundraising-social': {
      id: 'fundraising-social',
      title: 'PR & Social Impact Channels',
      description: 'Collaboration features without viral content. Focus on PR and social proof.',
      channels: ['PR campaigns', 'SEO & pSEO', 'Organic social content'],
      priority: 'medium',
    },
    'affiliate-marketing': {
      id: 'affiliate-marketing',
      title: 'Affiliate Marketing Channels',
      description: 'Low conversion or short sales cycle. Focus on performance-based marketing.',
      channels: ['Cold outreach', 'Affiliate marketing', 'Paid advertising', 'Influencer marketing'],
      priority: 'medium',
    },
    'organic-social': {
      id: 'organic-social',
      title: 'Organic Social Content',
      description: 'Good conversion but lower NPS. Focus on organic content and search marketing.',
      channels: ['Organic social content', 'Affiliate marketing', 'SEM'],
      priority: 'medium',
    },
    'seo-influencers': {
      id: 'seo-influencers',
      title: 'SEO & Influencer Marketing',
      description: 'High NPS and good LTV/CPC ratio. Invest in long-term organic growth.',
      channels: ['SEO & pSEO', 'Influencer marketing'],
      priority: 'high',
    },
    'social-paid': {
      id: 'social-paid',
      title: 'Social Paid Advertising',
      description: 'Excellent LTV/CPC ratio. You can afford premium paid channels.',
      channels: ['Social paid advertising', 'Premium influencer partnerships'],
      priority: 'high',
    },
    'high-value-strong-network': {
      id: 'high-value-strong-network',
      title: 'High-Value Strong Network Channels',
      description: 'High-value product with strong founding team network. Leverage relationships and authority.',
      channels: ['Partnerships', 'Founder-led sales', 'Founder IP social media', 'PR', 'Influencer marketing', 'Paid advertising'],
      priority: 'high',
    },
    'high-value-weak-network': {
      id: 'high-value-weak-network',
      title: 'High-Value Weak Network Channels',
      description: 'High-value product but limited network. Build authority and use multiple channels.',
      channels: ['Events/conferences', 'Direct sales', 'SEO', 'pSEO', 'ABM', 'Partnerships', 'Founder-led sales', 'Cold outreach', 'Affiliate marketing', 'Paid advertising', 'Influencer marketing'],
      priority: 'medium',
    },
    'long-cycle-low-value': {
      id: 'long-cycle-low-value',
      title: 'Long Cycle Low-Value Channels',
      description: 'Low-value product with long sales cycle. Focus on nurturing and relationship building.',
      channels: ['SEO', 'pSEO', 'ABM', 'Partnerships', 'Founder-led sales', 'Cold outreach', 'Affiliate marketing', 'Paid advertising', 'Influencer marketing'],
      priority: 'medium',
    },
  };

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    const question = questions[questionId];
    const selectedOption = question.options.find(opt => opt.value === answer);

    if (selectedOption?.result) {
      setResult(selectedOption.result);
    } else if (selectedOption?.nextQuestion) {
      setCurrentQuestion(selectedOption.nextQuestion);
    }
  };

  const resetTree = () => {
    setCurrentQuestion('q1');
    setAnswers({});
    setResult(null);
  };

  const getProgressPercentage = () => {
    // Calculate progress based on actual path taken, not total questions
    // Most users will answer 3-4 questions maximum
    const answeredQuestions = Object.keys(answers).length;
    const estimatedTotalQuestions = 4; // Maximum questions in any path
    return Math.min(Math.round((answeredQuestions / estimatedTotalQuestions) * 100), 100);
  };

  if (result) {
    const resultData = results[result];
    return (
      <div className="min-h-screen grass-texture">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Result Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 gold-block border-4 border-minecraft-gold-darker flex items-center justify-center">
              <Target size={32} className="text-minecraft-dirt-darker" />
            </div>
            <h1 className="font-pixel text-2xl-pixel text-minecraft-gold mb-4">
              Your Recommended Channels
            </h1>
            <div className="stone-block border-4 border-minecraft-stone-darker p-6">
              <h2 className="font-pixel text-xl-pixel text-white mb-4">{resultData.title}</h2>
              <p className="font-pixel text-base-pixel text-minecraft-stone leading-relaxed">
                {resultData.description}
              </p>
            </div>
          </div>

          {/* Channels Grid */}
          <div className="mb-12">
            <h3 className="font-pixel text-lg-pixel text-minecraft-gold mb-6 text-center">
              Recommended Marketing Channels
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {resultData.channels.map((channel, index) => (
                <div key={index} className="dirt-texture border-4 border-minecraft-dirt-darker p-4 text-center">
                  <div className="w-8 h-8 mx-auto mb-2 bg-minecraft-gold border-2 border-minecraft-gold-darker flex items-center justify-center">
                    <span className="font-pixel text-xs-pixel text-minecraft-dirt-darker">{index + 1}</span>
                  </div>
                  <p className="font-pixel text-sm-pixel text-white leading-relaxed">{channel}</p>
                </div>
              ))}
            </div>
            
            {/* Channel Terms Dictionary */}
            <div className="bg-minecraft-dirt border-2 border-minecraft-dirt-darker p-4 rounded">
              <div className="flex items-center mb-3">
                <HelpCircle size={16} className="text-minecraft-gold mr-2" />
                <span className="font-pixel text-sm-pixel text-minecraft-gold">Channel Terms Dictionary</span>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {Object.entries(termDefinitions).map(([term, definition]) => (
                  <div key={term} className="text-xs-pixel">
                    <span className="font-pixel text-minecraft-gold font-bold">{term}:</span>
                    <span className="font-pixel text-white ml-1">{definition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Priority Indicator */}
          <div className="text-center mb-8">
            <div className={`inline-block px-6 py-3 border-4 ${
              resultData.priority === 'high' 
                ? 'bg-minecraft-gold border-minecraft-gold-darker text-minecraft-dirt-darker'
                : resultData.priority === 'medium'
                ? 'bg-minecraft-sky border-minecraft-sky-dark text-white'
                : 'stone-block border-minecraft-stone-darker text-white'
            }`}>
              <span className="font-pixel text-base-pixel">
                Priority: {resultData.priority.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PixelButton variant="secondary" size="lg" icon={RotateCcw} onClick={resetTree}>
              Start Over
            </PixelButton>
            <PixelButton variant="gold" size="lg" onClick={() => navigate('/channel-analysis')}>
              Learn More About These Channels
            </PixelButton>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen grass-texture">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-pixel text-2xl-pixel md:text-4xl text-white mb-6">
            Product-Channel Fit Decision Tree
          </h1>
          <p className="font-pixel text-base-pixel text-minecraft-gold max-w-2xl mx-auto leading-relaxed">
            Answer a few questions about your product to discover the best marketing channels for your business.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-pixel text-sm-pixel text-white">Progress</span>
            <span className="font-pixel text-sm-pixel text-minecraft-gold">{getProgressPercentage()}%</span>
          </div>
          <div className="w-full h-4 stone-block border-2 border-minecraft-stone-darker">
            <div 
              className="h-full bg-minecraft-gold transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="stone-block border-4 border-minecraft-stone-darker p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 mr-4 bg-minecraft-redstone border-2 border-red-800 flex items-center justify-center animate-redstone-glow">
              <Zap size={20} className="text-white" />
            </div>
            <h2 className="font-pixel text-xl-pixel text-minecraft-gold">
              Question {currentQuestion.replace('q', '')}
            </h2>
          </div>
          
          <div className="mb-8">
            <p className="font-pixel text-lg-pixel text-white mb-4 leading-relaxed">
              {currentQ.text}
            </p>
            
            {/* 术语解释区域 */}
            {extractTermsFromText(currentQ.text).length > 0 && (
              <div className="bg-minecraft-dirt border-2 border-minecraft-dirt-darker p-4 rounded">
                <div className="flex items-center mb-2">
                  <HelpCircle size={16} className="text-minecraft-gold mr-2" />
                  <span className="font-pixel text-sm-pixel text-minecraft-gold">术语解释</span>
                </div>
                <div className="space-y-2">
                  {extractTermsFromText(currentQ.text).map((term, index) => (
                    <div key={index} className="text-xs-pixel">
                      <span className="font-pixel text-minecraft-gold font-bold">{term}:</span>
                      <span className="font-pixel text-white ml-2">{termDefinitions[term]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQuestion, option.value)}
                className="w-full p-4 dirt-texture border-4 border-minecraft-dirt-darker text-left transition-all duration-100 hover:transform hover:translate-x-1 hover:translate-y-1 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-base-pixel text-white group-hover:text-minecraft-gold">
                    {option.label}
                  </span>
                  <ChevronRight size={20} className="text-minecraft-gold" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <div className="text-center mb-8">
          <PixelButton variant="secondary" size="md" icon={RotateCcw} onClick={resetTree}>
            Start Over
          </PixelButton>
        </div>
        
        {/* Terms Guide - Moved to bottom */}
        <div className="max-w-3xl mx-auto bg-minecraft-dirt border-2 border-minecraft-dirt-darker p-6 rounded text-left">
          <div className="flex items-center mb-4 justify-center">
            <HelpCircle size={20} className="text-minecraft-gold mr-2" />
            <span className="font-pixel text-base-pixel text-minecraft-gold">Common Terms Guide</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(termDefinitions).slice(0, 6).map(([term, definition]) => (
              <div key={term} className="text-xs-pixel">
                <span className="font-pixel text-minecraft-gold font-bold">{term}:</span>
                <span className="font-pixel text-white ml-1">{definition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionTree;