import {
  CaseStudy,
  JournalArticle,
  ServiceItem,
  IndustryItem,
  TeamMember,
  FAQItem,
  ComparisonPoint
} from '../types';

export const HERO_CONTENT = {
  h1: 'Turn Ad Spend Into Predictable Revenue',
  subheading: 'Get a free, no-obligation Growth Audit and see exactly where your Google Ads, Meta Ads, and tracking setup are leaking revenue — plus the fixes that would move the needle fastest.',
  badges: ['No Long-Term Contracts', '100% Performance Tracked', '24-Hour Response Time'],
  cta: 'Book a Strategy Call'
};

export const ABOUT_HOME_CONTENT = {
  title: "We got tired of watching good businesses waste spend on broken measurement.",
  paragraph: "Most “underperforming” ad accounts aren't actually underperforming — they're being optimized against the wrong data: undercounted conversions, misfired pixels, and dashboards nobody on the leadership team actually trusts.\n\nRevenue Craft Digital rebuilds the measurement layer first, then the media. It's a less exciting pitch than a flashy campaign relaunch — but it's the difference between guessing and knowing exactly what's driving revenue.",
  guidingPrinciples: [
    { title: 'Measurement before media', desc: 'We fix pixels, CAPI, and tracking before scaling ad spend.' },
    { title: 'Revenue over vanity metrics', desc: 'Clicks and impressions do not pay bills — pipeline and profit do.' },
    { title: 'Transparent, no black-box reporting', desc: 'Direct access to your data and real revenue-linked dashboards.' },
    { title: '90-day cycles, not lock-in contracts', desc: 'We earn renewal every 90 days through proven performance.' }
  ]
};

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Audit & Measurement',
    desc: 'We audit your tracking, accounts, and unit economics before recommending a single rupee of spend, so every decision after this point is grounded in accurate data.'
  },
  {
    step: '02',
    title: 'Strategy & Build',
    desc: 'We architect the tracking infrastructure, campaign structure, and testing roadmap, aligned to the metrics that actually move your business.'
  },
  {
    step: '03',
    title: 'Launch & Optimize',
    desc: 'Campaigns go live inside a structured testing cadence; creative, audience, and bidding decisions are all validated against real conversion data.'
  },
  {
    step: '04',
    title: 'Report & Compound',
    desc: 'Transparent, revenue-linked reporting each cycle, with a clear roadmap for the next 90 days of compounding improvement.'
  }
];

export const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    withoutPartner: 'Ad spend scattered across platforms with no unified view of what’s actually working',
    withRevenueCraft: 'One measurement layer connecting every platform to real, tracked revenue'
  },
  {
    withoutPartner: 'Reporting that shows clicks and impressions instead of pipeline or revenue',
    withRevenueCraft: 'Revenue-linked reporting your leadership team actually trusts'
  },
  {
    withoutPartner: 'Tracking gaps quietly inflating your cost per lead for months before anyone notices',
    withRevenueCraft: 'Audited, deduplicated conversion data from the first week'
  },
  {
    withoutPartner: 'Locked into 12-month contracts regardless of whether results show up',
    withRevenueCraft: 'Structured 90-day cycles, renewed on performance — not lock-in'
  },
  {
    withoutPartner: 'The same generic playbook copy-pasted across every account',
    withRevenueCraft: 'Strategy built around your unit economics, margin, and sales cycle'
  }
];

export const HOME_FAQS: FAQItem[] = [
  {
    question: 'How is Revenue Craft Digital different from a typical marketing vendor?',
    answer: 'We rebuild your measurement layer before we touch media spend, so every campaign decision after that point is grounded in accurate, trusted data — not vanity metrics.'
  },
  {
    question: 'Which platforms do you work across?',
    answer: 'Google Ads, Meta Ads, GA4, Google Tag Manager, and the tracking and CRM infrastructure that connects them — channel-agnostic by design.'
  },
  {
    question: 'How quickly can we expect results?',
    answer: 'Every engagement starts with a measurement audit, so timelines vary — but our 90-day cycle is built to show early tracking fixes fast and compounding performance gains from there.'
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'No. We run structured 90-day cycles that renew on performance, not lock-in.'
  },
  {
    question: 'What size of ad budget do you typically work with?',
    answer: 'We work with a range of budgets — the right fit depends on your goals and unit economics, which is exactly what the free Growth Audit is designed to assess.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Navath Kumar',
    role: 'Founder',
    bio: 'Started Revenue Craft Digital after seeing too many businesses spend on ads without ever knowing what was actually working. Leads strategy and makes sure every engagement stays tied to revenue, not vanity metrics.'
  },
  {
    name: 'Hari Krishna Shetty',
    role: 'Co-Founder',
    bio: 'Leads execution across every engagement — campaign builds, tracking infrastructure, and the reporting that makes results verifiable. Believes better decisions start with cleaner data.'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  // Paid Media
  {
    id: 'google-ads',
    category: 'Paid Media',
    title: 'Google Ads',
    url: 'https://www.revenuecraftdigital.com/services/google-ads',
    metaTitle: 'Google Ads Management Services | Revenue Craft Digital',
    metaDescription: 'Data-driven Google Ads management across Search, Shopping & Performance Max. Every campaign tied to tracked revenue, not clicks. Book a free audit.',
    h1: 'Google Ads Management Built Around Revenue, Not Clicks',
    shortDesc: 'Search, Shopping, and Performance Max campaigns engineered for intent-driven revenue.',
    fullDesc: 'We build and manage Google Ads accounts around one objective: profitable, repeatable revenue. Every campaign structure, bid strategy, and creative asset is tied back to verified conversions — not vanity clicks or impressions — so budget moves toward what\'s actually closing business.',
    whatYouGet: [
      'Lower cost per qualified lead through intent-first keyword and audience structuring',
      'Higher Quality Score from tighter ad-to-landing-page relevance',
      'Scalable Performance Max structure built on clean first-party conversion data',
      'Full account transparency — no black-box bidding decisions'
    ],
    ourApproach: [
      'Audit existing account and tracking',
      'Rebuild campaign architecture around qualified conversions',
      'Test, scale, and report against revenue'
    ],
    faq: [
      {
        q: 'Do you manage Search, Shopping, and Performance Max?',
        a: 'Yes — we build and manage all three, structured to feed a single measurement layer so budget shifts to whichever format is actually driving revenue.'
      },
      {
        q: 'What if our conversion tracking is broken?',
        a: 'We audit and rebuild it first. Optimizing Google Ads against inaccurate data almost always makes performance worse, not better.'
      }
    ],
    ctaText: 'Talk to us about Google Ads'
  },
  {
    id: 'meta-ads',
    category: 'Paid Media',
    title: 'Meta Ads',
    url: 'https://www.revenuecraftdigital.com/services/meta-ads',
    metaTitle: 'Meta Ads Management (Facebook & Instagram) | Revenue Craft Digital',
    metaDescription: 'Meta Ads campaigns built on first-party signal and structured creative testing. Scale Facebook & Instagram ad spend without eroding margin.',
    h1: 'Meta Ads Campaigns Built on Clean Signal and Creative Testing',
    shortDesc: 'Facebook and Instagram campaigns built on first-party signal and creative testing systems.',
    fullDesc: 'Facebook and Instagram campaigns live or die on signal quality and creative velocity. We build Meta Ads programs on first-party data — Pixel plus Conversions API — and run a structured testing cadence so every creative decision is validated against real conversion performance.',
    whatYouGet: [
      'Deduplicated, server-verified conversion signal for accurate optimization',
      'Structured creative testing cadence instead of ad-hoc guesswork',
      'Audience and placement strategy built for iOS 14+ and cookieless reality',
      'Scaling frameworks that protect margin, not just chase ROAS'
    ],
    ourApproach: [
      'Audit Pixel and CAPI signal quality',
      'Build creative testing system and audience architecture',
      'Scale winning combinations against tracked revenue'
    ],
    faq: [
      {
        q: 'How do you handle iOS 14+ and signal loss?',
        a: 'We implement Conversions API alongside the Pixel and deduplicate events server-side, so optimization data stays accurate even as browser-level tracking degrades.'
      },
      {
        q: 'How often do you test new creative?',
        a: 'Cadence depends on budget and volume, but every account runs a structured testing rhythm — never a set-and-forget campaign.'
      }
    ],
    ctaText: 'Talk to us about Meta Ads'
  },
  {
    id: 'performance-marketing',
    category: 'Paid Media',
    title: 'Performance Marketing',
    url: 'https://www.revenuecraftdigital.com/services/performance-marketing',
    metaTitle: 'Channel-Agnostic Performance Marketing | Revenue Craft Digital',
    metaDescription: 'Performance marketing strategy that allocates budget across Google, Meta, and other channels based on what provably drives revenue — not platform loyalty.',
    h1: 'Performance Marketing Strategy, Allocated by What Actually Works',
    shortDesc: 'Channel-agnostic strategy that allocates budget to whatever provably drives revenue.',
    fullDesc: 'Most agencies sell you the channel they specialize in. We start with your unit economics and measurement layer, then allocate budget across Google, Meta, and other paid channels based on what\'s provably driving revenue — reallocating as the data changes.',
    whatYouGet: [
      'Cross-channel budget allocation based on tracked outcomes, not platform bias',
      'One unified measurement layer across every platform you advertise on',
      'Unit-economics-driven strategy tied to margin and sales cycle',
      'Quarterly reallocation built into every 90-day cycle'
    ],
    ourApproach: [
      'Map unit economics and current channel mix',
      'Architect a channel-agnostic measurement layer',
      'Allocate and reallocate budget every 90-day cycle'
    ],
    faq: [
      {
        q: 'Do you specialize in one platform?',
        a: 'No. We\'re channel-agnostic by design — our job is to find where your next dollar performs best, even if that means shifting away from a channel you\'ve relied on.'
      },
      {
        q: 'How do you decide budget allocation?',
        a: 'Against a single revenue-linked measurement layer that compares cost per qualified outcome across every channel you run.'
      }
    ],
    ctaText: 'Talk to us about Performance Marketing'
  },

  // Tracking & Analytics
  {
    id: 'conversion-tracking',
    category: 'Tracking & Analytics',
    title: 'Conversion Tracking',
    url: 'https://www.revenuecraftdigital.com/services/conversion-tracking',
    metaTitle: 'Conversion Tracking Setup & Audits | Revenue Craft Digital',
    metaDescription: 'Accurate, deduplicated conversion tracking across every ad platform you use. Stop optimizing campaigns against broken data.',
    h1: 'Conversion Tracking You Can Actually Trust',
    shortDesc: 'Accurate, deduplicated conversion data across every platform you advertise on.',
    fullDesc: 'Most "underperforming" campaigns are actually being optimized against broken measurement — undercounted conversions, duplicate events, and misfired pixels. We audit and rebuild conversion tracking across every platform you advertise on, so your ad accounts finally optimize against reality.',
    whatYouGet: [
      'Full tracking audit across Google, Meta, and any other ad platforms in use',
      'Deduplicated, cross-platform conversion data',
      'Offline and CRM conversion imports connected to ad platforms',
      'Documentation your team can audit anytime — nothing hidden'
    ],
    ourApproach: [
      'Audit every conversion event and tag across platforms',
      'Rebuild and deduplicate tracking end to end',
      'Validate against CRM/revenue data before touching media'
    ],
    faq: [
      {
        q: 'How do you know our tracking is broken?',
        a: 'In our audits, undercounted or duplicated conversions are the norm, not the exception — misfired pixels, missing server-side events, and broken CRM handoffs are the most common causes.'
      },
      {
        q: 'Will this disrupt live campaigns?',
        a: 'We validate the rebuilt tracking against historical data before switching optimization over, so live campaigns aren\'t flying blind during the transition.'
      }
    ],
    ctaText: 'Talk to us about Conversion Tracking'
  },
  {
    id: 'google-analytics-4',
    category: 'Tracking & Analytics',
    title: 'Google Analytics 4',
    url: 'https://www.revenuecraftdigital.com/services/google-analytics-4',
    metaTitle: 'GA4 Implementation & Setup Services | Revenue Craft Digital',
    metaDescription: 'GA4 implementations that connect marketing spend to real business outcomes — not just sessions and pageviews.',
    h1: 'GA4 Implementations That Connect Spend to Revenue',
    shortDesc: 'GA4 implementations that connect marketing spend to real business outcomes.',
    fullDesc: 'A default GA4 install tells you traffic showed up. It doesn\'t tell you which campaigns drove revenue. We configure GA4 event tracking, conversions, and audiences around your actual business outcomes, then connect it to the ad platforms and CRM data that make it useful.',
    whatYouGet: [
      'Custom event and conversion configuration mapped to your revenue events',
      'Clean, deduplicated data feeding Google Ads and other platforms',
      'Audience building for remarketing and lookalike targeting',
      'Dashboards your leadership team can actually read'
    ],
    ourApproach: [
      'Audit existing GA4 configuration and data gaps',
      'Rebuild events, conversions and audiences around revenue',
      'Connect GA4 to ad platforms and reporting'
    ],
    faq: [
      {
        q: 'We already have GA4 installed — do we still need this?',
        a: 'Most installs we inherit are tracking pageviews and generic events, not the specific actions that predict revenue. We rebuild the configuration around what your business actually needs to measure.'
      },
      {
        q: 'Does this work with our CRM?',
        a: 'Yes — we connect GA4 to CRM and offline conversion data wherever an integration path exists, so online behavior maps to closed revenue.'
      }
    ],
    ctaText: 'Talk to us about Google Analytics 4'
  },
  {
    id: 'google-tag-manager',
    category: 'Tracking & Analytics',
    title: 'Google Tag Manager',
    url: 'https://www.revenuecraftdigital.com/services/google-tag-manager',
    metaTitle: 'Google Tag Manager Setup & Audits | Revenue Craft Digital',
    metaDescription: 'A single, auditable source of truth for every tag, pixel, and tracking script — implemented and documented properly.',
    h1: 'One Clean, Auditable Home for Every Tag You Run',
    shortDesc: 'A single, auditable source of truth for every tag, pixel, and tracking script.',
    fullDesc: 'Tag sprawl is one of the quietest ways ad accounts lose accuracy — duplicate pixels, undocumented scripts, and tags nobody remembers adding. We consolidate every tracking tag into a single, documented Google Tag Manager container that your team can actually audit.',
    whatYouGet: [
      'Full audit and cleanup of existing tags, triggers, and variables',
      'Documented container structure — no undocumented or orphaned tags',
      'Faster, more reliable page load from tag consolidation',
      'Version control and change history for every future update'
    ],
    ourApproach: [
      'Audit existing container and flag conflicts or duplicates',
      'Rebuild container structure with clear naming and documentation',
      'Hand over a container your team can maintain'
    ],
    faq: [
      {
        q: 'We already use GTM — why would we need an audit?',
        a: 'Containers accumulate undocumented tags over time. Our audits routinely surface duplicate pixels and broken triggers nobody realized were still firing.'
      },
      {
        q: 'Do you train our team to use it after?',
        a: 'Yes — we document the container structure and can walk your team through making safe updates going forward.'
      }
    ],
    ctaText: 'Talk to us about Google Tag Manager'
  },
  {
    id: 'meta-pixel-conversions-api',
    category: 'Tracking & Analytics',
    title: 'Meta Pixel & Conversions API',
    url: 'https://www.revenuecraftdigital.com/services/meta-pixel-conversions-api',
    metaTitle: 'Meta Pixel & Conversions API Setup | Revenue Craft Digital',
    metaDescription: 'Pixel and Conversions API implementations built for iOS 14+ and a cookieless reality — accurate signal for Meta Ads optimization.',
    h1: 'Pixel + Conversions API, Built for a Cookieless Reality',
    shortDesc: 'Pixel and Conversions API implementations built for iOS 14+ and cookieless reality.',
    fullDesc: 'Browser-only Pixel tracking loses meaningful signal on every iOS device. We implement Meta Pixel alongside server-side Conversions API, deduplicated and event-matched, so Meta\'s algorithm optimizes against your real conversion volume — not a shrinking, browser-dependent sample.',
    whatYouGet: [
      'Server-side Conversions API implementation, deduplicated against browser Pixel events',
      'Improved event match quality for stronger algorithmic optimization',
      'Custom conversion events mapped to your actual funnel',
      'Built to hold up as browser tracking continues to erode'
    ],
    ourApproach: [
      'Audit current Pixel setup and event match quality',
      'Implement and deduplicate Conversions API',
      'Validate signal quality before scaling spend'
    ],
    faq: [
      {
        q: 'What\'s the difference between Pixel and Conversions API?',
        a: 'Pixel tracks from the browser and is increasingly blocked or limited; Conversions API sends the same events directly from your server, closing the gap browser tracking leaves behind.'
      },
      {
        q: 'Will this improve our ad costs?',
        a: 'Better signal quality typically improves Meta\'s ability to find converters, which tends to lower cost per result — though the size of the impact depends on your starting point.'
      }
    ],
    ctaText: 'Talk to us about Meta Pixel & Conversions API'
  },
  {
    id: 'server-side-tracking',
    category: 'Tracking & Analytics',
    title: 'Server-Side Tracking',
    url: 'https://www.revenuecraftdigital.com/services/server-side-tracking',
    metaTitle: 'Server-Side Tracking Implementation | Revenue Craft Digital',
    metaDescription: 'First-party, server-hosted tracking infrastructure built for accuracy and durability against ad blockers and browser restrictions.',
    h1: 'First-Party Tracking Infrastructure That Doesn\'t Erode Over Time',
    shortDesc: 'First-party, server-hosted tracking infrastructure built for accuracy and durability.',
    fullDesc: 'Browser-based tags are increasingly blocked, throttled, or lost to privacy restrictions. We build server-side tracking infrastructure — first-party, self-hosted, and durable — so your conversion data stays accurate as the browser landscape keeps changing around it.',
    whatYouGet: [
      'Server-side container setup (e.g. server-side GTM) on first-party infrastructure',
      'Reduced data loss from ad blockers, ITP, and browser restrictions',
      'Faster site performance from lighter client-side tag load',
      'Long-term durability as third-party tracking continues to erode'
    ],
    ourApproach: [
      'Assess current client-side tracking exposure',
      'Architect and deploy server-side infrastructure',
      'Migrate and validate events against existing data'
    ],
    faq: [
      {
        q: 'Is server-side tracking only for large enterprises?',
        a: 'No — it\'s increasingly relevant for any business with meaningful ad spend, since data loss from browser restrictions affects accounts of every size.'
      },
      {
        q: 'What\'s the setup effort involved?',
        a: 'It requires more upfront engineering than a browser-only setup, but we handle the architecture and implementation end to end.'
      }
    ],
    ctaText: 'Talk to us about Server-Side Tracking'
  },

  // Conversion & CRO
  {
    id: 'landing-page-optimization',
    category: 'Conversion & CRO',
    title: 'Landing Page Optimization',
    url: 'https://www.revenuecraftdigital.com/services/landing-page-optimization',
    metaTitle: 'Landing Page Optimization Services | Revenue Craft Digital',
    metaDescription: 'High-intent landing pages engineered around a single conversion action — built to match ad intent, not a generic template.',
    h1: 'Landing Pages Built Around One Conversion Action',
    shortDesc: 'High-intent landing experiences engineered around a single conversion action.',
    fullDesc: 'A landing page with five competing calls to action converts none of them well. We design landing experiences around a single, ad-matched conversion action — message match, page speed, and layout all working toward one outcome instead of splitting attention.',
    whatYouGet: [
      'Message-matched pages built for specific campaigns and audiences',
      'Single, clear conversion action per page — no competing CTAs',
      'Page speed and mobile experience optimized for ad traffic',
      'Built for ongoing A/B testing, not a one-time launch'
    ],
    ourApproach: [
      'Audit current landing pages against ad intent',
      'Design and build message-matched, single-action pages',
      'Test and iterate against conversion data'
    ],
    faq: [
      {
        q: 'Do you build new pages or optimize existing ones?',
        a: 'Both — depending on what the audit finds, we either rebuild pages from scratch or restructure existing ones around a single conversion goal.'
      },
      {
        q: 'How does this connect to the CRO work you do?',
        a: 'Landing page builds create the starting point; ongoing conversion rate optimization is the structured testing program that improves them over time.'
      }
    ],
    ctaText: 'Talk to us about Landing Page Optimization'
  },
  {
    id: 'conversion-rate-optimization',
    category: 'Conversion & CRO',
    title: 'Conversion Rate Optimization',
    url: 'https://www.revenuecraftdigital.com/services/conversion-rate-optimization',
    metaTitle: 'Conversion Rate Optimization (CRO) Services | Revenue Craft Digital',
    metaDescription: 'Structured CRO testing programs that compound conversion rate improvements over time — not one-off redesigns.',
    h1: 'Structured CRO Programs That Compound Over Time',
    shortDesc: 'Structured testing programs that compound conversion rate improvements over time.',
    fullDesc: 'A single redesign rarely fixes conversion rate — sustainable gains come from a structured testing program. We run ongoing CRO cycles across your highest-traffic pages, prioritized by revenue impact and validated with real conversion data, not opinion.',
    whatYouGet: [
      'Prioritized testing roadmap based on traffic and revenue impact',
      'Structured A/B and multivariate testing, not guesswork redesigns',
      'Funnel-level analysis, not just single-page optimization',
      'Compounding improvements built into every 90-day cycle'
    ],
    ourApproach: [
      'Audit funnel and identify highest-impact test opportunities',
      'Build and run a prioritized testing roadmap',
      'Validate, implement winners, and compound next cycle'
    ],
    faq: [
      {
        q: 'How long before we see results?',
        a: 'Individual tests typically resolve within a few weeks depending on traffic volume; the compounding benefit of a CRO program builds across multiple 90-day cycles.'
      },
      {
        q: 'Do you need a minimum amount of traffic?',
        a: 'Statistically valid testing needs a baseline of traffic — we\'ll assess this during the audit and recommend qualitative methods first if volume is too low for reliable A/B testing.'
      }
    ],
    ctaText: 'Talk to us about Conversion Rate Optimization'
  },

  // Automation & AI
  {
    id: 'crm-integration',
    category: 'Automation & AI',
    title: 'CRM Integration',
    url: 'https://www.revenuecraftdigital.com/services/crm-integration',
    metaTitle: 'CRM Integration for Marketing & Ad Platforms | Revenue Craft Digital',
    metaDescription: 'Closed-loop reporting that connects ad spend to pipeline and closed revenue by integrating your CRM with every ad platform.',
    h1: 'Closed-Loop Reporting from Ad Spend to Closed Revenue',
    shortDesc: 'Closed-loop reporting that connects ad spend to pipeline and closed revenue.',
    fullDesc: 'Clicks and leads mean nothing if you can\'t trace them to closed revenue. We connect your CRM to every platform you advertise on, so lead quality, pipeline, and closed-won data flow back into the same reporting your media decisions are based on.',
    whatYouGet: [
      'Two-way sync between your CRM and ad platforms',
      'Offline conversion imports so ad platforms optimize toward closed revenue',
      'Closed-loop reporting from first click to closed-won',
      'Sales and marketing finally looking at the same numbers'
    ],
    ourApproach: [
      'Audit CRM data structure and current handoff gaps',
      'Build integration between CRM and ad platforms',
      'Validate closed-loop reporting against actual pipeline'
    ],
    faq: [
      {
        q: 'Which CRMs do you work with?',
        a: 'We\'ve integrated with most major CRM and pipeline tools — the right approach depends on your platform\'s API and automation capabilities, which we\'ll assess upfront.'
      },
      {
        q: 'Does this replace our CRM?',
        a: 'No — we connect and configure the CRM you already use rather than replacing it, unless a platform migration is genuinely warranted.'
      }
    ],
    ctaText: 'Talk to us about CRM Integration'
  },
  {
    id: 'marketing-automation',
    category: 'Automation & AI',
    title: 'Marketing Automation',
    url: 'https://www.revenuecraftdigital.com/services/marketing-automation',
    metaTitle: 'Marketing Automation & Lead Nurture Systems | Revenue Craft Digital',
    metaDescription: 'Automated nurture, scoring, and follow-up systems that shorten sales cycles and stop leads from going cold.',
    h1: 'Automated Nurture Systems That Shorten Sales Cycles',
    shortDesc: 'Automated nurture, scoring, and follow-up systems that shorten sales cycles.',
    fullDesc: 'Leads that don\'t get followed up within minutes go cold fast. We build automated nurture, scoring, and follow-up systems that respond instantly, qualify leads before your team engages, and keep prospects warm through longer sales cycles.',
    whatYouGet: [
      'Instant, automated first response to every new lead',
      'Lead scoring that prioritizes your sales team\'s time',
      'Multi-step nurture sequences tailored to funnel stage',
      'Automation built to integrate with your existing CRM'
    ],
    ourApproach: [
      'Map current lead flow and response gaps',
      'Build scoring, nurture and follow-up automation',
      'Connect automation to CRM and measure impact on cycle time'
    ],
    faq: [
      {
        q: 'Will automation feel impersonal to leads?',
        a: 'Well-built automation is designed to feel timely and relevant, not robotic — the goal is faster, more consistent follow-up, not replacing human conversations entirely.'
      },
      {
        q: 'What platforms do you build automation in?',
        a: 'We work within whatever marketing automation or CRM platform you\'re already using, or recommend one if you don\'t have a system in place yet.'
      }
    ],
    ctaText: 'Talk to us about Marketing Automation'
  },
  {
    id: 'whatsapp-lead-generation',
    category: 'Automation & AI',
    title: 'WhatsApp Lead Generation',
    url: 'https://www.revenuecraftdigital.com/services/whatsapp-lead-generation',
    metaTitle: 'WhatsApp Lead Generation Services | Revenue Craft Digital',
    metaDescription: 'Conversation-first lead capture built on the WhatsApp Business API — for markets where WhatsApp drives buying decisions.',
    h1: 'Conversation-First Lead Capture on WhatsApp',
    shortDesc: 'Conversation-first lead capture built for markets where WhatsApp drives decisions.',
    fullDesc: 'In markets where WhatsApp is the primary channel for buying decisions, a contact form isn\'t enough. We build lead generation and qualification flows on the WhatsApp Business API, capturing and qualifying leads inside the conversation they\'re already having.',
    whatYouGet: [
      'Click-to-WhatsApp ad campaigns tied to qualification flows',
      'Automated qualification before a human ever joins the chat',
      'WhatsApp data connected back to your CRM and reporting',
      'Built for markets and audiences where WhatsApp is the default channel'
    ],
    ourApproach: [
      'Map current lead capture and channel behavior',
      'Build click-to-WhatsApp campaigns and qualification flow',
      'Connect WhatsApp data to CRM and reporting'
    ],
    faq: [
      {
        q: 'Do you run the ads that drive WhatsApp conversations?',
        a: 'Yes — we build the paid campaigns (typically Meta) that drive click-to-WhatsApp traffic as well as the qualification flow that receives it.'
      },
      {
        q: 'Is this only relevant outside the US?',
        a: 'It\'s most valuable in markets where WhatsApp adoption is highest, but the underlying conversation-first qualification approach applies wherever your audience already uses messaging apps.'
      }
    ],
    ctaText: 'Talk to us about WhatsApp Lead Generation'
  },
  {
    id: 'ai-powered-marketing-solutions',
    category: 'Automation & AI',
    title: 'AI-Powered Marketing Solutions',
    url: 'https://www.revenuecraftdigital.com/services/ai-powered-marketing-solutions',
    metaTitle: 'AI-Powered Marketing Solutions | Revenue Craft Digital',
    metaDescription: 'AI-assisted creative, bidding, and audience systems layered on top of clean first-party data — not AI for its own sake.',
    h1: 'AI Layered on Clean Data, Not Used to Cover for Bad Data',
    shortDesc: 'AI-assisted creative, bidding, and audience systems layered on clean first-party data.',
    fullDesc: 'AI-powered bidding and creative tools are only as good as the data feeding them. We layer AI-assisted creative testing, bidding, and audience systems on top of the clean, first-party measurement infrastructure we build first — so the automation has something accurate to learn from.',
    whatYouGet: [
      'AI-assisted creative testing and generation at scale',
      'Automated bidding systems built on verified first-party conversion data',
      'Audience and lookalike modeling refined by clean signal',
      'AI applied where it improves outcomes, not as a buzzword layer'
    ],
    ourApproach: [
      'Ensure measurement foundation is clean before layering AI',
      'Implement AI-assisted bidding, creative and audience systems',
      'Monitor and validate AI-driven decisions against revenue'
    ],
    faq: [
      {
        q: 'Doesn\'t AI bidding work automatically without all this setup?',
        a: 'AI bidding systems optimize against whatever data you feed them — if that data is inaccurate, automation will scale the wrong decisions faster.'
      },
      {
        q: 'Will AI replace the strategic decisions you make for us?',
        a: 'No — we use AI to handle scale and repetition; strategy, unit economics, and budget allocation stay under human judgment.'
      }
    ],
    ctaText: 'Talk to us about AI-Powered Marketing Solutions'
  },
  {
    id: 'ai-powered-pre-sales',
    category: 'Automation & AI',
    title: 'AI-Powered Pre-Sales',
    url: 'https://www.revenuecraftdigital.com/services/ai-powered-pre-sales',
    metaTitle: 'AI-Powered Pre-Sales & Lead Qualification | Revenue Craft Digital',
    metaDescription: 'AI tools that qualify and engage every lead before your sales team ever picks up the phone.',
    h1: 'AI That Qualifies Every Lead Before Sales Picks Up the Phone',
    shortDesc: 'AI tools that qualify and engage every lead before your team ever picks up the phone.',
    fullDesc: 'Sales teams lose hours chasing unqualified leads. We deploy AI-powered pre-sales tools that engage, qualify, and route every inbound lead automatically — so your team\'s first conversation is with a prospect who\'s already worth their time.',
    whatYouGet: [
      'Automated, AI-driven lead qualification before human handoff',
      'Consistent qualifying questions applied to every lead, no exceptions',
      'Faster response times than manual first-contact processes',
      'Qualified leads routed directly into CRM with context attached'
    ],
    ourApproach: [
      'Define qualification criteria aligned to your sales process',
      'Build and deploy AI pre-sales qualification flow',
      'Route qualified leads into CRM with full context'
    ],
    faq: [
      {
        q: 'Does this replace our sales development reps?',
        a: 'It\'s designed to handle the repetitive first-pass qualification so your team spends time on genuinely sales-ready conversations, not to replace human selling.'
      },
      {
        q: 'How is this different from a chatbot?',
        a: 'It\'s built specifically around your qualification criteria and sales process, not generic FAQ answering — the objective is a qualified handoff, not just a conversation.'
      }
    ],
    ctaText: 'Talk to us about AI-Powered Pre-Sales'
  },

  // Video & Brand Production
  {
    id: 'video-brand-production',
    category: 'Video & Brand Production',
    title: 'Video & Brand Production',
    url: 'https://www.revenuecraftdigital.com/services/video-brand-production',
    metaTitle: 'Video & Brand Production Services | Revenue Craft Digital',
    metaDescription: 'Product and service video shoots engineered to generate leads and build market presence — built to feed paid media, not just a reel.',
    h1: 'Video Production Engineered to Feed Your Paid Campaigns',
    shortDesc: 'Product and service video shoots engineered to generate leads and build market presence.',
    fullDesc: 'Most brand video gets made once and forgotten. We produce product and service video built specifically to feed paid media — the formats, lengths, and hooks that perform in Meta and YouTube campaigns — so production spend compounds into ad performance.',
    whatYouGet: [
      'Video shoots planned around ad platform formats and specs',
      'Multiple cutdowns per shoot for ongoing creative testing',
      'Brand and product storytelling that still performs as a direct-response asset',
      'Production scheduled to match your campaign testing cadence'
    ],
    ourApproach: [
      'Plan shoot around campaign and platform requirements',
      'Produce and edit multiple format-specific cutdowns',
      'Feed assets directly into live creative testing'
    ],
    faq: [
      {
        q: 'Is this brand video or performance video?',
        a: 'Both — we build assets that hold brand quality while being structured for direct-response performance in paid campaigns.'
      },
      {
        q: 'How many assets come out of one shoot?',
        a: 'Typically several cutdowns and formats per shoot day, so a single production session can feed multiple campaigns and platforms.'
      }
    ],
    ctaText: 'Talk to us about Video & Brand Production'
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'startups',
    title: 'Startups',
    url: 'https://www.revenuecraftdigital.com/industries/startups',
    metaTitle: 'Performance Marketing for Startups | Revenue Craft Digital',
    metaDescription: 'Capital-efficient go-to-market and paid acquisition systems for startups — built to prove product-market fit without burning runway.',
    h1: 'Paid Acquisition Built for Capital-Efficient Growth',
    shortDesc: 'Startups can\'t afford to learn measurement lessons on paid media budget.',
    challenges: [
      'Limited runway for trial-and-error spend',
      'Need for fast, reliable signal on what channels actually work',
      'Tracking infrastructure that scales as the business and stack change'
    ],
    relevantServices: ['Google Ads', 'Performance Marketing', 'Conversion Tracking'],
    ctaText: 'Talk to us about Startups'
  },
  {
    id: 'saas-companies',
    title: 'SaaS Companies',
    url: 'https://www.revenuecraftdigital.com/industries/saas-companies',
    metaTitle: 'Performance Marketing for SaaS Companies | Revenue Craft Digital',
    metaDescription: 'Demand generation engineered around trial starts, activation, and expansion revenue — not just marketing qualified leads.',
    h1: 'Demand Generation Tied to Trial Starts and Expansion Revenue',
    shortDesc: 'MQLs don\'t pay the bills — trial-to-paid conversion and expansion revenue do.',
    challenges: [
      'Disconnected GA4/CRM handoff hiding true trial-to-paid performance',
      'Long, multi-touch sales cycles that are hard to attribute',
      'Balancing new-logo acquisition with expansion revenue'
    ],
    relevantServices: ['Google Ads', 'Marketing Automation', 'CRM Integration'],
    ctaText: 'Talk to us about SaaS Companies'
  },
  {
    id: 'local-businesses',
    title: 'Local Businesses',
    url: 'https://www.revenuecraftdigital.com/industries/local-businesses',
    metaTitle: 'Performance Marketing for Local Businesses | Revenue Craft Digital',
    metaDescription: 'Location-based campaigns that convert nearby search intent into booked visits, calls, and in-store traffic.',
    h1: 'Turning Nearby Search Intent Into Booked Visits',
    shortDesc: 'Local intent converts fast when the tracking and campaigns are built for it.',
    challenges: [
      'Attributing offline visits and calls back to ad spend',
      'Competing for local intent against national budgets',
      'Managing multiple locations without losing consistency'
    ],
    relevantServices: ['Google Ads', 'Meta Ads', 'Conversion Tracking'],
    ctaText: 'Talk to us about Local Businesses'
  },
  {
    id: 'franchises',
    title: 'Franchises',
    url: 'https://www.revenuecraftdigital.com/industries/franchises',
    metaTitle: 'Performance Marketing for Franchises | Revenue Craft Digital',
    metaDescription: 'Multi-location campaign frameworks with centralized reporting and local flexibility, built for franchise networks.',
    h1: 'One Reporting Layer, Local Flexibility Across Every Location',
    shortDesc: 'Consistent brand standards across the network with local flexibility on the ground.',
    challenges: [
      'Fragmented reporting across dozens of locations',
      'Balancing brand consistency with local market relevance',
      'Giving franchisees visibility into what\'s actually working'
    ],
    relevantServices: ['Performance Marketing', 'Conversion Tracking', 'Marketing Automation'],
    ctaText: 'Talk to us about Franchises'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    url: 'https://www.revenuecraftdigital.com/industries/healthcare',
    metaTitle: 'Performance Marketing for Healthcare | Revenue Craft Digital',
    metaDescription: 'Compliant patient acquisition strategies built around appointment bookings — not vanity impressions.',
    h1: 'Compliant Patient Acquisition Built Around Booked Appointments',
    shortDesc: 'Healthcare marketing has to perform under real compliance constraints.',
    challenges: [
      'Advertising platform restrictions on health-related targeting and creative',
      'Tracking appointment bookings accurately across scheduling systems',
      'Multi-location reporting for group practices'
    ],
    relevantServices: ['Google Ads', 'Conversion Tracking', 'CRM Integration'],
    ctaText: 'Talk to us about Healthcare'
  },
  {
    id: 'education',
    title: 'Education',
    url: 'https://www.revenuecraftdigital.com/industries/education',
    metaTitle: 'Performance Marketing for Education | Revenue Craft Digital',
    metaDescription: 'Enrollment funnels engineered for admissions cycles and program inquiries — built around your intake calendar.',
    h1: 'Enrollment Funnels Built Around Your Admissions Calendar',
    shortDesc: 'Education marketing lives and dies by cyclical intake deadlines.',
    challenges: [
      'Seasonal, deadline-driven demand instead of steady-state volume',
      'Long inquiry-to-enrollment cycles that are hard to attribute',
      'Multiple programs competing for the same budget'
    ],
    relevantServices: ['Google Ads', 'Marketing Automation', 'Landing Page Optimization'],
    ctaText: 'Talk to us about Education'
  },
  {
    id: 'e-commerce',
    title: 'E-commerce',
    url: 'https://www.revenuecraftdigital.com/industries/e-commerce',
    metaTitle: 'Performance Marketing for E-commerce | Revenue Craft Digital',
    metaDescription: 'Full-funnel acquisition and retention systems built around profitable ROAS, not top-line revenue alone.',
    h1: 'Full-Funnel Acquisition Built Around Profitable ROAS',
    shortDesc: 'Scaling e-commerce ad spend without protecting margin just moves the problem downstream.',
    challenges: [
      'Scaling spend without eroding contribution margin',
      'iOS 14+ and cookieless tracking degrading Meta signal',
      'Balancing new customer acquisition with retention and LTV'
    ],
    relevantServices: ['Meta Ads', 'Server-Side Tracking', 'Conversion Rate Optimization'],
    ctaText: 'Talk to us about E-commerce'
  },
  {
    id: 'd2c-brands',
    title: 'D2C Brands',
    url: 'https://www.revenuecraftdigital.com/industries/d2c-brands',
    metaTitle: 'Performance Marketing for D2C Brands | Revenue Craft Digital',
    metaDescription: 'Creative-led performance campaigns tuned for repeat purchase and LTV, not just first-order ROAS.',
    h1: 'Creative-Led Campaigns Tuned for Repeat Purchase, Not Just First Order',
    shortDesc: 'A D2C brand\'s real economics show up in repeat purchase and LTV.',
    challenges: [
      'Creative fatigue requiring constant testing velocity',
      'First-order ROAS masking true LTV economics',
      'Signal loss from iOS 14+ and cookie restrictions'
    ],
    relevantServices: ['Meta Ads', 'Meta Pixel & Conversions API', 'Video & Brand Production'],
    ctaText: 'Talk to us about D2C Brands'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    url: 'https://www.revenuecraftdigital.com/industries/real-estate',
    metaTitle: 'Performance Marketing for Real Estate | Revenue Craft Digital',
    metaDescription: 'Lead generation systems built around inventory, listings, and buyer intent — for agencies, developers, and brokerages.',
    h1: 'Lead Generation Built Around Inventory and Buyer Intent',
    shortDesc: 'Real estate leads are only valuable if tied to the right inventory and intent stage.',
    challenges: [
      'Inventory that changes faster than campaigns can keep up',
      'Long, multi-touchpoint buyer journeys',
      'Lead quality varying widely by source and intent stage'
    ],
    relevantServices: ['Google Ads', 'WhatsApp Lead Generation', 'CRM Integration'],
    ctaText: 'Talk to us about Real Estate'
  },
  {
    id: 'b2b-companies',
    title: 'B2B Companies',
    url: 'https://www.revenuecraftdigital.com/industries/b2b-companies',
    metaTitle: 'Performance Marketing for B2B Companies | Revenue Craft Digital',
    metaDescription: 'Pipeline-focused campaigns aligned to sales cycles and account-based targeting — measured in pipeline, not leads.',
    h1: 'Pipeline-Focused Campaigns Aligned to Your Sales Cycle',
    shortDesc: 'B2B success is measured in pipeline and closed revenue, often months after the first click.',
    challenges: [
      'Long sales cycles making last-click attribution misleading',
      'Proving marketing\'s contribution to pipeline, not just lead volume',
      'Aligning campaigns to account-based targeting and sales priorities'
    ],
    relevantServices: ['Google Ads', 'CRM Integration', 'Marketing Automation'],
    ctaText: 'Talk to us about B2B Companies'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'northwind-saas',
    title: 'Northwind SaaS',
    client: 'Northwind SaaS',
    sector: 'SaaS',
    summary: 'Rebuilding measurement first, then rebuilding growth.',
    description: 'A broken GA4 and CRM handoff meant Northwind couldn\'t see which campaigns drove trial-to-paid conversion. We rebuilt tracking end to end before touching a single campaign.',
    keyMetricLabel: 'Cost per Qualified Lead',
    keyMetricValue: '-33%',
    keyMetricSubtext: 'Cost per Qualified Lead Reduction',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    challenge: 'Broken GA4 and CRM handoffs hid true trial-to-paid conversions and acquisition efficiency.',
    solution: 'Engineered complete server-side event tracking and CRM sync before restructuring media spend.',
    results: [
      { label: 'Cost per Qualified Lead', value: '-33%', change: '33% Reduction' },
      { label: 'Trial-to-Paid Conversion', value: '+21%', change: '21% Increase' },
      { label: 'Time to Clean Reporting', value: '3 Weeks', change: 'Audit & Build' }
    ],
    quote: {
      text: 'Revenue Craft Digital rebuilt our tracking before touching a single campaign. Within two months our cost per qualified lead dropped by a third and, for the first time, we trusted the numbers.',
      author: 'Priya Shenoy',
      title: 'VP Growth, Northwind SaaS'
    }
  },
  {
    id: 'fieldstone',
    title: 'Fieldstone',
    client: 'Fieldstone',
    sector: 'D2C / E-commerce',
    summary: 'Creative testing systems that scaled ROAS profitably.',
    description: 'Fieldstone needed to scale Meta Ads spend without eroding margins. A structured creative testing cadence and clean Conversions API data got them there.',
    keyMetricLabel: 'Return on Ad Spend',
    keyMetricValue: '4.2x',
    keyMetricSubtext: 'Blended ROAS Scaled',
    bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Scaling Meta Ads spend eroded gross margins due to poor signal quality and unvetted creative.',
    solution: 'Implemented Meta Conversions API and a high-velocity weekly creative testing framework.',
    results: [
      { label: 'Return on Ad Spend', value: '4.2x', change: 'Maintained at scale' },
      { label: 'Ad Spend Scaled', value: '+65%', change: 'MoM Expansion' },
      { label: 'Blended CAC', value: '-18%', change: 'Cost Savings' }
    ],
    quote: {
      text: 'They think in unit economics, not impressions. Every recommendation was tied back to what it meant for our margins — that\'s rare in performance marketing.',
      author: 'Marcus Ade',
      title: 'Founder, Fieldstone'
    }
  },
  {
    id: 'vantage-health',
    title: 'Vantage Health',
    client: 'Vantage Health Group',
    sector: 'Healthcare',
    summary: 'One reporting layer across twelve franchise locations.',
    description: 'Vantage needed centralized reporting with local campaign flexibility across a multi-location footprint. We built a franchise-ready measurement and reporting framework.',
    keyMetricLabel: 'Booked Appointments',
    keyMetricValue: '+44%',
    keyMetricSubtext: 'Network Appointment Growth',
    bgImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    challenge: 'Fragmented local patient scheduling and non-compliant ad spend across 12 locations.',
    solution: 'Deployed a centralized HIPAA-aware conversion tracking engine with local campaign controls.',
    results: [
      { label: 'Locations Onboarded', value: '12', change: 'Network-wide' },
      { label: 'Booked Appointments', value: '+44%', change: 'Network-wide' },
      { label: 'Reporting Hours Saved', value: '6 hrs/wk', change: 'Automated' }
    ],
    quote: {
      text: 'Our franchise locations finally have a consistent lead engine with local flexibility. The reporting alone saved our team hours every week.',
      author: 'Elena Cruz',
      title: 'Director of Marketing, Vantage Health Group'
    }
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'article-1',
    category: 'GOOGLE ADS & DATA',
    date: 'AUGUST 2026',
    readTime: '5 MIN READ',
    title: 'Why Your Google Ads Account Is Optimizing Against the Wrong Data',
    excerpt: 'Undercounted conversions and broken offline imports lead algorithms to optimize for the wrong traffic. Here is how to fix it.',
    content: [
      'Most "underperforming" Google Ads accounts suffer from inaccurate signal feed. When Smart Bidding gets low-quality or incomplete conversion data, it shifts budget away from your highest-value prospects.',
      'To resolve this, advertisers must audit pixel firing triggers, configure server-side conversion validation, and pass qualified offline CRM events directly back into Google Ads.'
    ],
    author: {
      name: 'Navath Kumar',
      role: 'Founder'
    }
  },
  {
    id: 'article-2',
    category: 'GA4 & ANALYTICS',
    date: 'AUGUST 2026',
    readTime: '6 MIN READ',
    title: 'GA4 vs. Universal Analytics: What Actually Changed for Marketers',
    excerpt: 'Beyond the new UI, GA4 changes how events, session scopes, and conversion modeling interact with ad platforms.',
    content: [
      'Universal Analytics relied heavily on session-based metrics. GA4 pivots entirely to event-based data streams.',
      'This shift requires marketers to deliberately architect custom event definitions and user properties that reflect true customer journeys rather than pageviews.'
    ],
    author: {
      name: 'Hari Krishna Shetty',
      role: 'Co-Founder'
    }
  },
  {
    id: 'article-3',
    category: 'TRACKING INFRASTRUCTURE',
    date: 'JULY 2026',
    readTime: '7 MIN READ',
    title: 'Server-Side Tracking, Explained Without the Jargon',
    excerpt: 'How moving tracking tags from the client browser to a cloud server protects signal quality and improves site performance.',
    content: [
      'Browser ad blockers, Apple Safari ITP, and third-party cookie deprecation degrade standard pixel accuracy by up to 30%.',
      'By running a server-side Tag Manager container, event signals route directly from your cloud infrastructure to Meta and Google, bypassing client-side interference.'
    ],
    author: {
      name: 'Hari Krishna Shetty',
      role: 'Co-Founder'
    }
  },
  {
    id: 'article-4',
    category: 'META ADS SIGNAL',
    date: 'JULY 2026',
    readTime: '5 MIN READ',
    title: 'The Real Cost of a Broken Meta Pixel (and How to Audit Yours)',
    excerpt: 'Missing Event Match Quality parameters inflate CAC. Here is a step-by-step audit framework for Meta Ads accounts.',
    content: [
      'Meta\'s AI ad delivery algorithm requires robust user identifiers (email, phone, IP, user agent) to match conversions back to ad impressions.',
      'Without proper event deduplication and Conversions API integration, Meta loses visibility, driving up Cost Per Lead.'
    ],
    author: {
      name: 'Navath Kumar',
      role: 'Founder'
    }
  },
  {
    id: 'article-5',
    category: 'PAID MEDIA STRATEGY',
    date: 'JULY 2026',
    readTime: '6 MIN READ',
    title: 'Performance Max: What It\'s Actually Good For (and What It Isn\'t)',
    excerpt: 'PMax can unlock massive scale when fed first-party signals, but burns budget if left unconstrained without negative keyword lists.',
    content: [
      'Performance Max combines Search, Display, YouTube, and Discovery into one automated campaign type.',
      'We break down how to properly structure asset groups, supply audience signals, and enforce brand safety exclusions.'
    ],
    author: {
      name: 'Navath Kumar',
      role: 'Founder'
    }
  },
  {
    id: 'article-6',
    category: 'SIGNAL & PRIVACY',
    date: 'JUNE 2026',
    readTime: '6 MIN READ',
    title: 'Conversions API 101: Why Browser-Only Tracking Isn\'t Enough Anymore',
    excerpt: 'A foundational look at server-to-server tracking protocols and why modern paid social campaigns require CAPI.',
    content: [
      'Mobile operating system privacy features continue to restrict browser cookies. Conversions API (CAPI) sends data directly from your server to Meta.',
      'Combining browser Pixel and CAPI with server-side deduplication guarantees 100% signal coverage.'
    ],
    author: {
      name: 'Hari Krishna Shetty',
      role: 'Co-Founder'
    }
  },
  {
    id: 'article-7',
    category: 'GROWTH FRAMEWORKS',
    date: 'JUNE 2026',
    readTime: '8 MIN READ',
    title: 'How to Build a 90-Day Performance Marketing Testing Roadmap',
    excerpt: 'Move away from ad-hoc changes. Establish disciplined 90-day cycles with clear hypothesis testing and milestone reviews.',
    content: [
      'High-performing growth teams operate on structured sprint cycles. Month 1 focuses on measurement and foundation; Month 2 tests audience and creative variations; Month 3 scales winning combinations.'
    ],
    author: {
      name: 'Navath Kumar',
      role: 'Founder'
    }
  },
  {
    id: 'article-8',
    category: 'METRICS & ECONOMICS',
    date: 'JUNE 2026',
    readTime: '5 MIN READ',
    title: 'Blended CAC vs. Platform ROAS: Which Number Should You Trust?',
    excerpt: 'Why relying exclusively on platform-reported ROAS creates blind spots, and how to evaluate true business profitability.',
    content: [
      'Every ad platform claims credit for the same conversions. Blended CAC evaluates total marketing spend divided by total net new revenue, protecting your unit economics.'
    ],
    author: {
      name: 'Navath Kumar',
      role: 'Founder'
    }
  },
  {
    id: 'article-9',
    category: 'AUDIT PLAYBOOK',
    date: 'MAY 2026',
    readTime: '7 MIN READ',
    title: 'A Founder\'s Guide to Reading a Google Ads Account Audit',
    excerpt: 'Key questions leadership teams must ask to spot wasted ad spend, broad match leakage, and inflated conversion metrics.',
    content: [
      'Founders don\'t need to click buttons in Google Ads, but they must understand Search Terms reports, Quality Score distribution, and conversion action settings.'
    ],
    author: {
      name: 'Hari Krishna Shetty',
      role: 'Co-Founder'
    }
  },
  {
    id: 'article-10',
    category: 'FRANCHISE GROWTH',
    date: 'MAY 2026',
    readTime: '6 MIN READ',
    title: 'Franchise Marketing: Centralized Reporting Without Losing Local Relevance',
    excerpt: 'How multi-location networks manage brand guardrails while giving local store owners localized campaign control.',
    content: [
      'Franchises often struggle with fragmented local marketing. We detail how a single measurement hub balances brand consistency with regional ad targeting.'
    ],
    author: {
      name: 'Navath Kumar',
      role: 'Founder'
    }
  },
  {
    id: 'article-11',
    category: 'MESSAGING & CONVERSIONS',
    date: 'MAY 2026',
    readTime: '5 MIN READ',
    title: 'WhatsApp Business API for Lead Gen: A Practical Setup Guide',
    excerpt: 'Using Click-to-WhatsApp ads to double conversion rates in mobile-first markets.',
    content: [
      'In messaging-first markets, sending ad traffic to traditional landing page forms reduces intent. Routing directly into an automated WhatsApp qualification flow dramatically increases conversion.'
    ],
    author: {
      name: 'Hari Krishna Shetty',
      role: 'Co-Founder'
    }
  },
  {
    id: 'article-12',
    category: 'ARTIFICIAL INTELLIGENCE',
    date: 'APRIL 2026',
    readTime: '8 MIN READ',
    title: 'What ‘AI-Powered Marketing’ Actually Means (and When It Helps)',
    excerpt: 'Cutting through hype: where machine learning delivers real leverage in creative testing and predictive bidding.',
    content: [
      'AI tools perform best at repetitive tasks and statistical calculations. However, without clean first-party data and human strategic oversight, automated bidding models fail.'
    ],
    author: {
      name: 'Navath Kumar',
      role: 'Founder'
    }
  }
];
