# Product-Channel Fit Guide

An interactive educational platform that helps entrepreneurs and product managers choose the most suitable growth channels. Through an intelligent questionnaire system, it provides personalized marketing channel strategy recommendations for users.

## 🚀 Features

### 📊 Smart Decision Tree Questionnaire
- Multi-dimensional assessment based on product characteristics
- Intelligent path planning with results in maximum 4 questions
- Real-time progress display and terminology explanations
- Support for restart and result analysis

### 📈 Channel Analysis System
- Detailed channel performance comparison
- Cost-benefit analysis charts
- Channel applicability assessment
- Implementation difficulty and timeline guidance

### 📚 Case Story Library
- Real growth case sharing
- Successful practices from different industries
- Strategy implementation details and performance data

### 🎯 Personalized Recommendations
- Precise recommendations based on questionnaire results
- Multi-channel combination strategies
- Priority ranking and implementation suggestions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 3
- **Charts**: Recharts 3
- **State Management**: Zustand 5
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Utilities**: clsx, tailwind-merge

## 📦 Installation and Setup

### Requirements
- Node.js 20.18.1+
- npm or yarn

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Development Mode
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the application

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Code Linting
```bash
npm run lint
# or
yarn lint
```

### Type Checking
```bash
npm run check
# or
yarn check
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.tsx   # Navigation component
│   ├── PixelButton.tsx  # Pixel-style button
│   ├── TwitterCard.tsx  # Twitter card component
│   └── Empty.tsx        # Empty state component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── DecisionTree.tsx # Decision tree questionnaire
│   ├── ChannelAnalysis.tsx # Channel analysis
│   └── CaseStory.tsx   # Case stories
├── hooks/              # Custom Hooks
│   └── useTheme.ts     # Theme management
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities
└── assets/             # Static assets
```

## 🎨 Design Features

- **Pixel Style**: Retro pixel art design aesthetic
- **Responsive Layout**: Perfect adaptation for desktop and mobile devices
- **User-Friendly**: Intuitive user interface and smooth interactive experience
- **Terminology Guide**: Built-in professional terminology dictionary to lower learning barriers

## 📊 Supported Channel Types

- **Viral Growth**: Community recommendations, PLG, viral content
- **Content Marketing**: SEO, pSEO, organic social content
- **Paid Advertising**: Social ads, search engine marketing
- **Partnerships**: Affiliate marketing, influencer collaborations
- **Direct Sales**: Cold outreach, founder-led sales
- **Event Marketing**: Conferences, offline events

## 🔧 Development Guide

### Adding New Questionnaire Questions
1. Add new questions to the `questions` object in `DecisionTree.tsx`
2. Update corresponding result mappings
3. Ensure question path logic is correct

### Adding New Channel Analysis
1. Add channel data in `ChannelAnalysis.tsx`
2. Update chart configurations
3. Add corresponding descriptions and recommendations

### Custom Styling
- Use Tailwind CSS class names
- Follow existing design system
- Maintain pixel style consistency

## 📄 License

This project is for educational and research purposes only.

## 🤝 Contributing

Welcome to submit Issues and Pull Requests to improve this project!

---

**Built with ❤️ using React + TypeScript + Vite**
