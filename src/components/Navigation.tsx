import { Link, useLocation } from 'react-router-dom';
import { Home, TreePine, BarChart3, Zap } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/case-story', label: 'Case Story', icon: TreePine },
    { path: '/decision-tree', label: 'Decision Tree', icon: Zap },
    { path: '/channel-analysis', label: 'Channels', icon: BarChart3 },
  ];

  return (
    <nav className="stone-block border-b-4 border-minecraft-stone-darker sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 grass-block border-2 border-minecraft-grass-darker pixel-pulse"></div>
            <span className="font-pixel text-lg-pixel text-white group-hover:text-minecraft-gold transition-colors">
              PCF Guide
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center space-x-2 px-4 py-2 
                    font-pixel text-sm-pixel transition-all duration-100
                    border-2 minecraft-button
                    ${
                      isActive
                        ? 'bg-minecraft-gold text-minecraft-dirt-darker border-minecraft-gold-darker transform translate-x-1 translate-y-1'
                        : 'text-white border-minecraft-dirt-darker hover:bg-minecraft-dirt hover:transform hover:translate-x-1 hover:translate-y-1'
                    }
                  `}
                >
                  <Icon size={12} className="pixelated" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="minecraft-button px-3 py-2 text-white font-pixel text-sm-pixel border-2 border-minecraft-dirt-darker">
              Menu
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden pb-4">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center justify-center space-x-2 px-3 py-2 
                    font-pixel text-xs-pixel transition-all duration-100
                    border-2 minecraft-button
                    ${
                      isActive
                        ? 'bg-minecraft-gold text-minecraft-dirt-darker border-minecraft-gold-darker'
                        : 'text-white border-minecraft-dirt-darker'
                    }
                  `}
                >
                  <Icon size={10} className="pixelated" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;