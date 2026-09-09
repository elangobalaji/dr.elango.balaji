import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowUpRight, ChevronRight, X } from 'lucide-react';
import { ArticleItem } from '../types';

interface WritingProps {
  articles: ArticleItem[];
  isDark: boolean;
}

export const Writing: React.FC<WritingProps> = ({ articles, isDark }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section
      id="writing"
      className={`py-20 border-t ${
        isDark ? 'bg-slate-950/60 border-slate-850' : 'bg-slate-50/50 border-rule'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            <span className="w-6 h-[1.5px] bg-indigo-600 dark:bg-indigo-400 inline-block" />
            <span>Articles & Notes</span>
          </div>
          <h2
            id="writing-section-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-white"
          >
            Technical Writings & Perspectives
          </h2>
          <p className="text-base text-ink-soft dark:text-slate-400 mt-2">
            Notes and reflections on software performance, systems design, developer tooling, and
            CI/CD infrastructure.
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className={`p-6 rounded-xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                isDark
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  : 'bg-surface border-rule hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted dark:text-slate-400 mb-3">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-ink dark:text-white tracking-tight leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-soft dark:text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-ink-soft'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center space-x-1 shrink-0 ml-2"
                >
                  <span>Read Synopsis</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Article Preview Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className={`relative w-full max-w-xl rounded-2xl border p-6 sm:p-8 shadow-2xl ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-slate-100'
                : 'bg-surface border-rule text-ink'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-xs text-indigo-500 font-medium mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{selectedArticle.date}</span>
              <span>·</span>
              <Clock className="w-3.5 h-3.5" />
              <span>{selectedArticle.readTime}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink dark:text-white">
              {selectedArticle.title}
            </h3>

            <div className="mt-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <p className="font-medium mb-2">Abstract & Key Takeaway:</p>
              <p>{selectedArticle.excerpt}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {selectedArticle.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-rule dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
