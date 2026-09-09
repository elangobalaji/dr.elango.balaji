import React, { useState } from 'react';
import { Bell, ChevronRight, Newspaper } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsProps {
  news: NewsItem[];
  isDark: boolean;
}

export const News: React.FC<NewsProps> = ({ news, isDark }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedNews = showAll ? news : news.slice(0, 4);

  return (
    <section id="news" className="py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              news
            </h2>
          </div>

          {news.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center space-x-0.5"
            >
              <span>{showAll ? 'show less' : 'view all announcements'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* al-folio Style News Table / List */}
        <div
          className={`rounded-lg border divide-y overflow-hidden text-sm ${
            isDark
              ? 'bg-slate-900/60 border-slate-800 divide-slate-800/80 text-slate-100'
              : 'bg-white border-slate-200 divide-slate-100 text-slate-700'
          }`}
        >
          {displayedNews.map((item) => (
            <div
              key={item.id}
              className="p-3 sm:px-4 sm:py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
            >
              {/* Date */}
              <div className="w-28 shrink-0 flex items-center space-x-2">
                <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                  {item.date}
                </span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      item.badge === 'Paper' || item.badge === 'Review'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                        : item.badge === 'Grant'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 text-xs sm:text-sm leading-relaxed">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
