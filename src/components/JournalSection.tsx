import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/mockData';
import { JournalArticle } from '../types';
import { Clock, ArrowUpRight, X } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 border-t border-white/10">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="block font-mono-custom text-xs uppercase tracking-[0.4em] text-orange-500 font-bold mb-3">
          RESEARCH & INSIGHTS
        </span>
        <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
          RESEARCH & PAPERS<span className="text-orange-500">.</span>
        </h2>
        <p className="font-geist text-base sm:text-lg text-white/60 leading-relaxed">
          Proprietary algorithmic media research, conversion engineering teardowns, and growth architectures published by our data team.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {JOURNAL_ARTICLES.map((article) => (
          <div
            key={article.id}
            onClick={() => setActiveArticle(article)}
            className="group bg-[#111111] border border-white/10 p-8 rounded-none hover:border-orange-500 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono-custom text-white/50 mb-4 font-bold">
                <span className="text-orange-500 uppercase tracking-widest">{article.category}</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-orange-500" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h3 className="font-syne text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                {article.title}
              </h3>

              <p className="font-geist text-xs text-white/60 leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono-custom text-white/70 group-hover:text-orange-500">
              <span className="uppercase tracking-widest font-bold">READ WHITEPAPER</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#111111] border border-orange-500 max-w-3xl w-full p-8 sm:p-12 relative shadow-2xl space-y-6 my-8">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 font-mono-custom text-xs text-white/40 hover:text-white uppercase tracking-widest p-2 border border-white/10 flex items-center space-x-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
              <span>CLOSE</span>
            </button>

            <div className="flex items-center space-x-3 text-orange-500 font-mono-custom text-xs uppercase tracking-widest font-bold">
              <span>{activeArticle.category}</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
            </div>

            <h2 className="font-syne text-3xl sm:text-4xl font-black text-white uppercase leading-tight tracking-tight">
              {activeArticle.title}
            </h2>

            <div className="flex items-center space-x-3 border-y border-white/10 py-4">
              <div className="w-10 h-10 bg-orange-500 text-black font-mono-custom text-sm font-black flex items-center justify-center">
                {activeArticle.author.name.charAt(0)}
              </div>
              <div>
                <span className="font-geist text-sm text-white font-bold block">
                  {activeArticle.author.name}
                </span>
                <span className="font-geist text-xs text-white/50">
                  {activeArticle.author.role}
                </span>
              </div>
            </div>

            <div className="space-y-4 font-geist text-sm sm:text-base text-white/70 leading-relaxed pt-2">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="font-mono-custom text-xs text-white/40 uppercase font-bold">
                REVENUE CRAFT DIGITAL RESEARCH DESK
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="bg-white text-black font-mono-custom text-xs uppercase tracking-widest font-black px-6 py-3 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
              >
                DONE READING
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
