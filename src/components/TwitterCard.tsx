import { ExternalLink, MessageSquare } from 'lucide-react';

const TwitterCard = () => {
  return (
    <div className="stone-block border-4 border-minecraft-stone-darker p-6 mb-8">
      <div className="flex items-start space-x-4">
        {/* Twitter Icon */}
        <div className="w-12 h-12 bg-minecraft-sky border-2 border-minecraft-sky-dark flex items-center justify-center">
          <MessageSquare size={20} className="text-white" />
        </div>
        
        {/* Tweet Content */}
        <div className="flex-1">
          <div className="mb-4">
            <p className="font-pixel text-sm-pixel text-white leading-relaxed">
              &quot;Tried 20+ channels. Burned $200M+ cash. Burned out. Then we found product-channel fit — and growth took off. Here's what we tried (and what actually worked):&quot;
            </p>
          </div>
          
          {/* PCF Framework Image */}
          <div className="mb-4">
                <img 
                  src="/pcf.png" 
                  alt="Product Channel Fit Framework" 
                  className="w-full max-w-md mx-auto rounded-lg border-2 border-gray-600"
                />
              </div>
          
          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-minecraft-gold border-2 border-minecraft-gold-darker flex items-center justify-center">
                <span className="font-pixel text-xs-pixel text-minecraft-dirt-darker">CC</span>
              </div>
              <div>
                <p className="font-pixel text-xs-pixel text-minecraft-gold">Chang Chen</p>
                <p className="font-pixel text-xs-pixel text-minecraft-stone">@ChangChen_CC</p>
              </div>
            </div>
            
            {/* External Link */}
            <a
              href="https://x.com/ChangChen_CC/status/1950375812324295053"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button px-3 py-2 text-white border-2 border-minecraft-dirt-darker hover:bg-minecraft-dirt flex items-center space-x-2"
            >
              <ExternalLink size={12} />
              <span className="font-pixel text-xs-pixel">View Tweet</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Attribution */}
      <div className="mt-4 pt-4 border-t-2 border-minecraft-stone-darker">
        <p className="font-pixel text-xs-pixel text-minecraft-stone text-center">
          This educational tool is based on the insights shared in the above tweet
        </p>
      </div>
    </div>
  );
};

export default TwitterCard;