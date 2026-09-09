import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Award,
  Mic,
  ExternalLink,
  Copy,
  Check,
  Search,
  Filter,
  Code,
  FileText,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { PublicationItem, GrantItem, PresentationItem } from '../types';

interface PublicationsProps {
  publications: PublicationItem[];
  grants: GrantItem[];
  presentations: PresentationItem[];
  isDark: boolean;
}

export const Publications: React.FC<PublicationsProps> = ({
  publications,
  grants,
  presentations,
  isDark,
}) => {
  const [activeTab, setActiveTab] = useState<'publications' | 'grants' | 'presentations'>('publications');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLeadAuthor, setFilterLeadAuthor] = useState(false);
  const [expandedBibtex, setExpandedBibtex] = useState<string | null>(null);
  const [expandedAbstract, setExpandedAbstract] = useState<string | null>(null);
  const [copiedBibtexId, setCopiedBibtexId] = useState<string | null>(null);

  const handleCopyBibtex = (pub: PublicationItem) => {
    const bibtex =
      pub.bibtex ||
      `@article{balaji${pub.year}${pub.id.replace('pub-', '')},
  title={${pub.title}},
  author={${pub.authors}},
  journal={${pub.journal}},
  year={${pub.year}},
  doi={${pub.doi || ''}}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedBibtexId(pub.id);
    setTimeout(() => setCopiedBibtexId(null), 2000);
  };

  // Filter publications
  const filteredPubs = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        searchQuery === '' ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.year.toString().includes(searchQuery);

      const matchesLead = !filterLeadAuthor || pub.leadAuthor;
      return matchesSearch && matchesLead;
    });
  }, [publications, searchQuery, filterLeadAuthor]);

  // Group publications by year (classic al-folio layout)
  const pubsByYear = useMemo(() => {
    const groups: { [year: string]: PublicationItem[] } = {};
    for (const pub of filteredPubs) {
      const y = pub.year.toString();
      if (!groups[y]) groups[y] = [];
      groups[y].push(pub);
    }
    // Sort years descending
    return Object.keys(groups)
      .sort((a, b) => Number(b) - Number(a))
      .map((year) => ({ year, items: groups[year] }));
  }, [filteredPubs]);

  // Highlight user's name in author strings
  const formatAuthors = (authorsStr: string) => {
    const parts = authorsStr.split(/(Elango Balaji T|Balaji, E\.|E\. Balaji|Elango Balaji)/gi);
    return (
      <>
        {parts.map((part, i) =>
          /^(Elango Balaji T|Balaji, E\.|E\. Balaji|Elango Balaji)$/i.test(part) ? (
            <strong key={i} className="text-ink dark:text-white font-semibold underline decoration-blue-500/50">
              {part}
            </strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <section id="publications" className="py-12 border-t border-rule dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Navigation Tabs (al-folio style) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-2 border-b border-rule dark:border-slate-800 gap-4">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setActiveTab('publications')}
              className={`text-xl font-bold tracking-tight pb-1 border-b-2 transition-colors ${
                activeTab === 'publications'
                  ? 'text-terracotta dark:text-blue-400 border-blue-600 dark:border-blue-400'
                  : 'text-muted dark:text-slate-400 border-transparent hover:text-ink dark:hover:text-white'
              }`}
            >
              publications ({publications.length})
            </button>

            <button
              onClick={() => setActiveTab('grants')}
              className={`text-xl font-bold tracking-tight pb-1 border-b-2 transition-colors ${
                activeTab === 'grants'
                  ? 'text-terracotta dark:text-blue-400 border-blue-600 dark:border-blue-400'
                  : 'text-muted dark:text-slate-400 border-transparent hover:text-ink dark:hover:text-white'
              }`}
            >
              grants ({grants.length})
            </button>

            <button
              onClick={() => setActiveTab('presentations')}
              className={`text-xl font-bold tracking-tight pb-1 border-b-2 transition-colors ${
                activeTab === 'presentations'
                  ? 'text-terracotta dark:text-blue-400 border-blue-600 dark:border-blue-400'
                  : 'text-muted dark:text-slate-400 border-transparent hover:text-ink dark:hover:text-white'
              }`}
            >
              talks ({presentations.length})
            </button>
          </div>

          {activeTab === 'publications' && (
            <div className="flex items-center space-x-2">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="filter papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-8 pr-3 py-1 text-xs rounded border transition-colors ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-slate-200 placeholder-slate-500 focus:border-blue-400'
                      : 'bg-surface border-slate-300 text-ink placeholder-slate-400 focus:border-blue-600'
                  }`}
                />
              </div>

              {/* Lead Author Toggle */}
              <button
                onClick={() => setFilterLeadAuthor(!filterLeadAuthor)}
                className={`al-folio-btn text-xs ${
                  filterLeadAuthor
                    ? '!border-blue-500 !text-terracotta dark:!text-blue-400 font-semibold'
                    : ''
                }`}
              >
                <span>first author</span>
              </button>
            </div>
          )}
        </div>

        {/* Tab 1: Publications List (Authentic al-folio Year Grouping) */}
        {activeTab === 'publications' && (
          <div className="space-y-8">
            {pubsByYear.length === 0 ? (
              <p className="text-sm text-muted py-8 text-center">
                No publications match your filter query.
              </p>
            ) : (
              pubsByYear.map(({ year, items }) => (
                <div key={year} className="space-y-4">
                  {/* Year Heading (al-folio standard) */}
                  <h3 className="text-lg font-bold font-mono tracking-tight text-ink dark:text-white border-b border-rule dark:border-slate-800 pb-1">
                    {year}
                  </h3>

                  <ol className="space-y-5 text-sm">
                    {items.map((pub, idx) => {
                      const isBibtexOpen = expandedBibtex === pub.id;
                      const isAbstractOpen = expandedAbstract === pub.id;
                      const isCopied = copiedBibtexId === pub.id;

                      const defaultBibtex =
                        pub.bibtex ||
                        `@article{balaji${pub.year},
  title={${pub.title}},
  author={${pub.authors}},
  journal={${pub.journal}},
  year={${pub.year}},
  doi={${pub.doi || ''}}
}`;

                      return (
                        <li
                          key={pub.id}
                          className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 pl-1"
                        >
                          {/* Entry Index */}
                          <span className="font-mono text-xs text-slate-400 shrink-0 w-8">
                            [{idx + 1}]
                          </span>

                          <div className="flex-1 space-y-1.5">
                            {/* Paper Title */}
                            <div className="font-bold text-ink dark:text-white leading-snug">
                              {pub.title}
                            </div>

                            {/* Authors */}
                            <div className="text-xs sm:text-sm text-ink-soft dark:text-slate-300">
                              {formatAuthors(pub.authors)}
                            </div>

                            {/* Journal Citation & Badges */}
                            <div className="text-xs text-ink-soft dark:text-slate-300 flex flex-wrap items-center gap-2">
                              <em className="text-blue-700 dark:text-blue-400 font-medium">
                                {pub.journal}
                              </em>
                              <span>({pub.year})</span>

                              {pub.citations && (
                                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                                  {pub.citations} citations
                                </span>
                              )}

                              {pub.leadAuthor && (
                                <span className="text-[10px] px-1.5 py-0.2 rounded bg-orange-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-orange-200 dark:border-blue-800 font-medium">
                                  lead author
                                </span>
                              )}
                            </div>

                            {/* Action Buttons (al-folio pill buttons) */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              {/* BibTeX toggle */}
                              <button
                                onClick={() =>
                                  setExpandedBibtex(isBibtexOpen ? null : pub.id)
                                }
                                className="al-folio-btn"
                              >
                                <span>bibtex</span>
                                {isBibtexOpen ? (
                                  <ChevronUp className="w-3 h-3" />
                                ) : (
                                  <ChevronDown className="w-3 h-3" />
                                )}
                              </button>

                              {/* DOI / HTML link */}
                              {pub.doi && (
                                <a
                                  href={`https://doi.org/${pub.doi}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="al-folio-btn"
                                >
                                  <span>doi</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}

                              {/* Abstract Toggle */}
                              {pub.abstract && (
                                <button
                                  onClick={() =>
                                    setExpandedAbstract(isAbstractOpen ? null : pub.id)
                                  }
                                  className="al-folio-btn"
                                >
                                  <span>abstract</span>
                                  {isAbstractOpen ? (
                                    <ChevronUp className="w-3 h-3" />
                                  ) : (
                                    <ChevronDown className="w-3 h-3" />
                                  )}
                                </button>
                              )}
                            </div>

                            {/* Expandable BibTeX Box */}
                            {isBibtexOpen && (
                              <div className="mt-2 p-3 rounded bg-slate-900 text-slate-200 text-xs font-mono relative border border-slate-700">
                                <button
                                  onClick={() => handleCopyBibtex(pub)}
                                  className="absolute top-2 right-2 inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300"
                                >
                                  {isCopied ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-400" />
                                      <span>copied</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>copy</span>
                                    </>
                                  )}
                                </button>
                                <pre className="overflow-x-auto whitespace-pre-wrap pr-16">
                                  {defaultBibtex}
                                </pre>
                              </div>
                            )}

                            {/* Expandable Abstract Box */}
                            {isAbstractOpen && pub.abstract && (
                              <div className="mt-2 p-3 rounded bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs leading-relaxed border border-rule dark:border-slate-700">
                                <span className="font-semibold text-ink dark:text-white">
                                  Abstract:{' '}
                                </span>
                                {pub.abstract}
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Successful Grants & Proposals */}
        {activeTab === 'grants' && (
          <div className="space-y-4">
            <p className="text-xs text-ink-soft dark:text-slate-400 mb-4">
              Direct proposal architecture, mechanistic hypotheses, scientific diagrams, and experimental designs contributing to national and international research funding.
            </p>

            <div className="space-y-4">
              {grants.map((grant) => (
                <div
                  key={grant.id}
                  className={`p-4 rounded-lg border transition-colors ${
                    isDark
                      ? 'bg-slate-900/60 border-slate-800'
                      : 'bg-surface border-rule'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h4 className="text-base font-bold text-ink dark:text-white">
                      {grant.title}
                    </h4>
                    <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {grant.amount}
                    </span>
                  </div>

                  <div className="text-xs text-terracotta dark:text-blue-400 font-medium mb-2">
                    {grant.agency} · {grant.period} · Role: {grant.role}
                  </div>

                  <p className="text-xs sm:text-sm text-ink-soft dark:text-slate-200 leading-relaxed">
                    {grant.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Conference Presentations */}
        {activeTab === 'presentations' && (
          <div className="space-y-4">
            <p className="text-xs text-ink-soft dark:text-slate-300 mb-4">
              Selected oral and poster presentations at international battery symposia and materials societies.
            </p>

            <div
              className={`rounded-lg border divide-y overflow-hidden text-sm ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 divide-slate-800 text-slate-200'
                  : 'bg-surface border-rule divide-slate-100 text-slate-700'
              }`}
            >
              {presentations.map((pres) => (
                <div key={pres.id} className="p-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-ink dark:text-white">
                      {pres.title}
                    </span>
                    <span className="text-xs font-mono text-muted dark:text-slate-400">
                      {pres.date}
                    </span>
                  </div>

                  <div className="text-xs text-terracotta dark:text-blue-400 font-medium">
                    {pres.conference} · {pres.location} ({pres.type})
                  </div>

                  {pres.description && (
                    <p className="text-xs text-ink-soft dark:text-slate-300 pt-1">
                      {pres.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
