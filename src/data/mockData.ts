import { CaseStudy, ExpertisePillar, JournalArticle } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aura-jewelry',
    title: 'Aura Fine Jewelry',
    client: 'Aura Fine Jewelry',
    sector: 'E-Commerce Scale',
    summary: 'Re-architecting the digital acquisition funnel for a heritage luxury brand, resulting in unprecedented online conversion parity with flagship physical stores.',
    description: 'Aura Fine Jewelry needed to align its digital experience with the high-touch, white-glove service of its Fifth Avenue flagship. Revenue Craft Digital developed an algorithmic bidding model combined with custom LTV scoring.',
    keyMetricLabel: 'Digital Revenue',
    keyMetricValue: '+215%',
    keyMetricSubtext: 'Digital Revenue',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuB5OTDGEbEMUtns8fAhNRpQBq8ILP4rlHdPycJMRtlUqOPvu4BEh7mV5Pts76WGHsfUuUqgLxVTOszAa7AweoJ2PB-adjovqndd3bbUSSXKzW7MwvoU3EJKBJ6p9wFW793JyWlIAGwTu5Lt5uyqYJ9WY6B5Kh7txb6TZ8FPMjAqmXBN4p_kBIKw9FHUphSWoVhGv8W1ku9LI1AyjZicYryOwIJUV2ieA33lIpy-MOBkVqMK5vfuj_wA',
    isFeatured: true,
    challenge: 'Legacy customer acquisition channels had stagnated, yielding high CAC and failing to capture high-net-worth buyers online.',
    solution: 'Engineered a multi-touch attribution engine that scored prospective clients based on digital intent signals before allocating programmatic media spend.',
    results: [
      { label: 'E-Commerce Conversion Rate', value: '4.8%', change: '+180%' },
      { label: 'Average Order Value (AOV)', value: '$3,450', change: '+42%' },
      { label: 'Return on Ad Spend (ROAS)', value: '6.2x', change: '+110%' }
    ],
    quote: {
      text: "Revenue Craft Digital built an invisible growth engine that didn't just boost traffic—it attracted the exact clientele we cater to in our private salons.",
      author: 'Eleanor Vance',
      title: 'Chief Commercial Officer, Aura Fine Jewelry'
    }
  },
  {
    id: 'nexus-analytics',
    title: 'Nexus Analytics',
    client: 'Nexus Analytics',
    sector: 'SaaS Growth',
    summary: 'Enterprise lead generation overhaul.',
    description: 'Transforming enterprise pipeline velocity by connecting product-led intent data directly to RevOps routing and automated outbound sequences.',
    keyMetricLabel: 'ARR Growth',
    keyMetricValue: '+140%',
    keyMetricSubtext: 'ARR Growth',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN3Qcqf9_SHC4twADO_UzsmKVOzVYBpNrdazYlC3S8O3-4qVN70GS5ZtsthaWsG4GqRy5tNZ2fkiYQcSfDygWPWdITAAgyIPV26S6tNWvVv60qBe4mWFlXGrkHbWNtZwoA52inwMNASkmtCPZLnFMrHs-87J1QcNAYKe87cLTYsKU4OD0kZaccPtIEVpiqEyPIiq368EQ0ILvg7eAENJ7zM4db2puQAg0s8jeJEAIc_tfB7Upje1mrCw',
    challenge: 'Long 9-month sales cycles and disconnected marketing automation tools created friction between MQLs and enterprise deal closures.',
    solution: 'Designed an integrated Revenue Operations engine with instant account qualification and predictive deal scoring.',
    results: [
      { label: 'Pipeline Velocity', value: '38 Days', change: '-55% Sales Cycle' },
      { label: 'SQL Conversion Rate', value: '31%', change: '+95%' },
      { label: 'Annual Recurring Revenue', value: '$28.4M', change: '+140%' }
    ],
    quote: {
      text: 'Their RevOps model eliminated thousands of manual qualification hours and immediately drove 8-figure pipeline expansion.',
      author: 'Marcus Vance',
      title: 'VP of Global Revenue, Nexus Analytics'
    }
  },
  {
    id: 'quantum-capital',
    title: 'Quantum Capital',
    client: 'Quantum Capital',
    sector: 'FinTech',
    summary: 'Institutional client acquisition strategy.',
    description: 'A sophisticated digital posture for an institutional asset manager, establishing digital authority among ultra-high-net-worth family offices.',
    keyMetricLabel: 'AUM Increase',
    keyMetricValue: '3.2x',
    keyMetricSubtext: 'AUM Increase',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPlaR85ESaCPv23zIrOFpsk4RaGKhs4Uy8WTcLpTRKC3kiz7o6UaBg4oNVrx9JyG_hsShk-Zi__IDOssa8prBP3Varjq9ua9YFyc8qC0BC8wB_9t-Jub3-foA1brtag-0udkh1G7VWWLVUCdah8YZWY0AOl3lvvN6QJkwHyU7u26DKxzyPS3iTYa3AoU-uOFE53DBYzUZ_Lvw1UJ5JvwJ_A7LMHffkst02OdmnNBIuvZBcfUFUyrbsdg',
    challenge: 'Traditional institutional sales networks were shrinking while digital decision-makers demanded whitepaper rigor and privacy-first interaction.',
    solution: 'Built an exclusive content vault and automated LP onboarding portal powered by intent telemetry.',
    results: [
      { label: 'Assets Under Management', value: '$1.42B', change: '+220%' },
      { label: 'LP Inquiries', value: '420+', change: '+310%' },
      { label: 'Acquisition Cost per LP', value: '$1,200', change: '-45%' }
    ],
    quote: {
      text: 'Revenue Craft Digital proved that institutional capital allocation can be accelerated through precision digital architecture.',
      author: 'Julian Thorne',
      title: 'Managing Director, Quantum Capital'
    }
  },
  {
    id: 'vanguard-logistics',
    title: 'Vanguard Logistics',
    client: 'Vanguard Logistics',
    sector: 'Global Rebrand',
    summary: 'Positioning a traditional shipping giant for the digital era, transforming their corporate identity and digital touchpoints into an invisible, frictionless ecosystem.',
    description: 'Vanguard Logistics required a complete brand & digital transformation to reposition its cross-border freight services as a technology-first logistics engine.',
    keyMetricLabel: 'Process Efficiency',
    keyMetricValue: '85%',
    keyMetricSubtext: 'Process Efficiency',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIgdg9VqbMurNOyETCPNoQ6gOuJJvXnFJgnHdqd-IqumOKB0Bd9YFOD5Kbmwb8g01K8wQROMOE63_zzo-CAfGLcy1FiuxWmP8LetvEr5krWGDIRDTyN47OQS1AM_xfC6IC0UXy2ehdUV3IJZNC815u0Mg7x6h-6doQZTOu5FAGG1K4X2vMR2Nsjp1cFduDvL9mfowEDeW9DDtuLQusMzRmwGBfNNCiXUPKR11zYwfgnUg1bHqr4Yyulw',
    isOffset: true,
    challenge: 'Siloed regional dispatch hubs and fragmented corporate branding created high churn among enterprise shippers.',
    solution: 'Overhauled global brand posture, deployed unified client portal, and automated quote-to-contract RevOps workflows.',
    results: [
      { label: 'Contract Signing Speed', value: '4 Hours', change: 'Formerly 3 Days' },
      { label: 'Enterprise Retention Rate', value: '96.2%', change: '+28%' },
      { label: 'Operational Efficiency', value: '85%', change: '+85%' }
    ],
    quote: {
      text: 'The transformation converted our legacy brand into a category-defining digital freight power.',
      author: 'Siddharth Mehta',
      title: 'Group CEO, Vanguard Logistics'
    }
  }
];

export const EXPERTISE_PILLARS: ExpertisePillar[] = [
  {
    id: 'performance-marketing',
    code: '01',
    title: 'Performance Marketing',
    description: 'Algorithmic optimization and sophisticated media buying to acquire high-LTV customers at scale.',
    icon: 'trending_up',
    subItems: [
      { name: 'Algorithmic Customer Acquisition', detail: 'Real-time bidding models leveraging custom predictive LTV scoring.' },
      { name: 'High-LTV Media Buying', detail: 'Targeting high-net-worth and enterprise decision-maker segments.' },
      { name: 'Cross-Channel Attribution', detail: 'Multi-touch attribution models removing reliance on platform default pixels.' },
      { name: 'Creative Testing Matrix', detail: 'Continuous high-velocity creative variations backed by conversion science.' }
    ]
  },
  {
    id: 'revenue-operations',
    code: '02',
    title: 'Revenue Operations',
    description: 'Aligning sales, marketing, and customer success tech stacks to eliminate friction and accelerate velocity.',
    icon: 'hub',
    subItems: [
      { name: 'Tech Stack Rationalization', detail: 'Auditing and integrating complex CRM, MAP, and CDP infrastructures.' },
      { name: 'CRM & Funnel Automation', detail: 'Automating lead distribution, deal scoring, and instant pipeline routing.' },
      { name: 'Pipeline Velocity Optimization', detail: 'Identifying bottlenecks in sales stages to collapse deal closing times.' },
      { name: 'Custom Data Pipeline Engineering', detail: 'Building bi-directional data synchronizations between product and sales.' }
    ]
  },
  {
    id: 'growth-strategy',
    code: '03',
    title: 'Growth Strategy',
    description: 'Board-level advisory translating complex market dynamics into executable, high-ROI growth roadmaps.',
    icon: 'account_tree',
    subItems: [
      { name: 'Market Definition & Posture', detail: 'Identifying untapped market segments and calibrating authoritative posture.' },
      { name: 'Competitive Displacement Mapping', detail: 'Engineered strategies to systematically conquer market share from competitors.' },
      { name: 'Category Design & Naming', detail: 'Establishing new market categories where your brand holds monopoly mindshare.' },
      { name: 'Pricing Architecture', detail: 'Value-metric optimization to maximize net revenue retention and ARR expansion.' }
    ]
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'Data Science over Intuition',
    subtitle: 'Precision Measurement',
    description: 'Every strategic move must be anchored in mathematical certainty. We replace opinion with high-frequency telemetry and predictive LTV modeling.'
  },
  {
    number: '02',
    title: 'Enterprise Scale from Day One',
    subtitle: 'Architectural Resilience',
    description: 'We construct growth systems designed to withstand 10x traffic and transaction volume without friction or operational decay.'
  },
  {
    number: '03',
    title: 'Invisible Architecture',
    subtitle: 'Frictionless Experience',
    description: 'The highest converting digital engines feel seamless. The technology recedes, leaving pure brand authority and high-intent engagement.'
  },
  {
    number: '04',
    title: 'Compounding Revenue Flywheels',
    subtitle: 'Sustainable Velocity',
    description: 'We avoid one-off growth hacks. We engineer interconnected flywheels where acquisition feeds retention, and retention fuels enterprise expansion.'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'death-of-generic-performance',
    category: 'PERFORMANCE SCIENCE',
    date: 'AUGUST 2026',
    readTime: '6 MIN READ',
    title: 'The Death of Generic Performance Marketing in 2026',
    excerpt: 'Why traditional ad platform auto-targeting is eroding enterprise margins, and how bespoke algorithmic bidding models are taking over.',
    content: [
      'In an era where platform algorithms treat every advertiser with identical broad-match logic, luxury brands and enterprise SaaS companies are paying a hidden tax.',
      'Relying on out-of-the-box ad network bidding yields commoditized audience pools and declining lifetime customer value.',
      'Revenue Craft introduces the concept of Bespoke First-Party Bidding: injecting private LTV predictions into platform APIs before the bid is even cast.'
    ],
    author: {
      name: 'Alexander Sterling',
      role: 'Head of Quantitative Strategy'
    }
  },
  {
    id: 'revops-convergence',
    category: 'REVENUE OPERATIONS',
    date: 'JULY 2026',
    readTime: '8 MIN READ',
    title: 'RevOps Convergence: Unifying LTV and CAC at Scale',
    excerpt: 'How aligning sales engineering, customer success telemetry, and marketing spend eliminates the 30% revenue leakage common in mid-market tech.',
    content: [
      'Most enterprise tech stacks resemble an archaeological dig—layers of disconnected CRMs, analytics tools, and customer support channels.',
      'When marketing spend operates independently of sales pipeline velocity, Customer Acquisition Cost (CAC) balloons.',
      'We outline the blueprint for unified revenue operations: establishing single-source data truth across the entire buyer lifecycle.'
    ],
    author: {
      name: 'Elena Rostova',
      role: 'VP of Systems Architecture'
    }
  },
  {
    id: 'pricing-architecture-saas',
    category: 'GROWTH STRATEGY',
    date: 'JUNE 2026',
    readTime: '10 MIN READ',
    title: 'Algorithmic Pricing Architecture for Enterprise SaaS',
    excerpt: 'Re-evaluating feature gating, consumption metrics, and tier boundaries to unlock hidden 20%+ net revenue retention.',
    content: [
      'Monetization is the single strongest leverage point for SaaS growth, yet it is often revisited only once every two years.',
      'By analyzing user consumption friction points and willingness-to-pay gradients across buyer personas, enterprise firms can structure expansion mechanics into core usage.',
      'Discover how custom pricing metrics naturally drive account expansion without aggressive sales pressure.'
    ],
    author: {
      name: 'Marcus Vance',
      role: 'Managing Director'
    }
  }
];
