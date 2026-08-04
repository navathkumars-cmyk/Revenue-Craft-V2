import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/mockData';
import { JournalArticle, NavSection } from '../types';
import { Clock, ArrowUpRight, X } from 'lucide-react';

interface JournalSectionProps {
  onNavigate?: (section: NavSection) => void;
  theme?: 'dark' | 'light';
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onNavigate, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="insights" className={`max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t ${
      isLight ? 'border-neutral-200' : 'border-white/10'
    }`}>
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3">
          05 // PERSPECTIVES & RESEARCH
        </span>
        <h2 className={`font-syne text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 ${
          isLight ? 'text-black' : 'text-white'
        }`}>
          INSIGHTS<span className="text-orange-500">.</span>
        </h2>
        <p className={`font-geist text-base sm:text-lg leading-relaxed ${
          isLight ? 'text-neutral-600' : 'text-white/60'
        }`}>
          Long-form breakdowns on tracking, conversion optimization, and channel strategy — practical, no fluff, written from real engagements.
        </p>
      </div>

      {/* 12 Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {JOURNAL_ARTICLES.map((article) => (
          <div
            key={article.id}
            onClick={() => setActiveArticle(article)}
            className={`group border p-7 rounded-none hover:border-orange-500 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl ${
              isLight ? 'bg-white border-neutral-200 text-neutral-900' : 'bg-[#111111] border-white/10 text-white'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono-custom mb-4 font-bold">
                <span className="text-orange-500 uppercase tracking-widest">{article.category}</span>
                <span className={`flex items-center space-x-1 ${isLight ? 'text-neutral-500' : 'text-white/50'}`}>
                  <Clock className="w-3 h-3 text-orange-500" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h3 className={`font-syne text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors leading-tight ${
                isLight ? 'text-black' : 'text-white'
              }`}>
                {article.title}
              </h3>

              <p className={`font-geist text-xs leading-relaxed mb-6 ${
                isLight ? 'text-neutral-600' : 'text-white/60'
              }`}>
                {article.excerpt}
              </p>
            </div>

            <div className={`pt-4 border-t flex justify-between items-center text-xs font-mono-custom group-hover:text-orange-500 ${
              isLight ? 'border-neutral-200 text-neutral-700' : 'border-white/10 text-white/70'
            }`}>
              <span className="uppercase tracking-widest font-bold">READ ARTICLE</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className={`border border-orange-500 max-w-3xl w-full p-8 sm:p-12 relative shadow-2xl space-y-6 my-8 ${
            isLight ? 'bg-white text-neutral-900' : 'bg-[#111111] text-white'
          }`}>
            <button
              onClick={() => setActiveArticle(null)}
              className={`absolute top-6 right-6 font-mono-custom text-xs uppercase tracking-widest p-2 border flex items-center space-x-1 cursor-pointer font-bold ${
                isLight ? 'border-neutral-300 text-neutral-700 hover:text-black' : 'border-white/10 text-white/40 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
              <span>CLOSE</span>
            </button>

            <div className="flex items-center space-x-3 text-orange-500 font-mono-custom text-xs uppercase tracking-widest font-bold">
              <span>{activeArticle.category}</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
            </div>

            <h2 className={`font-syne text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight ${
              isLight ? 'text-black' : 'text-white'
            }`}>
              {activeArticle.title}
            </h2>

            <div className={`flex items-center space-x-3 border-y py-4 ${
              isLight ? 'border-neutral-200' : 'border-white/10'
            }`}>
              <div className="w-10 h-10 bg-orange-500 text-black font-mono-custom text-sm font-black flex items-center justify-center">
                {activeArticle.author.name.charAt(0)}
              </div>
              <div>
                <span className={`font-geist text-sm font-bold block ${isLight ? 'text-black' : 'text-white'}`}>
                  {activeArticle.author.name}
                </span>
                <span className={`font-geist text-xs ${isLight ? 'text-neutral-500' : 'text-white/50'}`}>
                  {activeArticle.author.role}
                </span>
              </div>
            </div>

            <div className={`space-y-4 font-geist text-sm sm:text-base leading-relaxed pt-2 ${
              isLight ? 'text-neutral-700' : 'text-white/70'
            }`}>
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className={`font-mono-custom text-xs uppercase font-bold ${
                isLight ? 'text-neutral-500' : 'text-white/40'
              }`}>
                REVENUE CRAFT DIGITAL INSIGHTS
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className={`font-mono-custom text-xs uppercase tracking-widest font-black px-6 py-3 transition-colors cursor-pointer ${
                  isLight ? 'bg-black text-white hover:bg-orange-500' : 'bg-white text-black hover:bg-orange-500 hover:text-white'
                }`}
              >
                DONE READING
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Closing Article CTA */}
      <div className={`p-8 border border-orange-500 flex flex-col sm:flex-row justify-between items-center gap-6 ${
        isLight ? 'bg-white' : 'bg-[#111111]'
      }`}>
        <p className={`font-syne text-lg font-bold uppercase ${isLight ? 'text-black' : 'text-white'}`}>
          BOOK A CALL AND WE'LL WALK YOU THROUGH WHAT'S WORKING RIGHT NOW.
        </p>
        <button
          onClick={() => onNavigate && onNavigate('contact')}
          className={`font-mono-custom text-xs uppercase tracking-widest font-black px-8 py-4 shrink-0 transition-colors cursor-pointer ${
            isLight ? 'bg-black text-white hover:bg-orange-500' : 'bg-white text-black hover:bg-orange-500 hover:text-white'
          }`}
        >
          BOOK A STRATEGY CALL &rarr;
        </button>
      </div>
    </section>
  );
};
