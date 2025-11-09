"use client";

import React from "react";

export interface ProductsFilterPanelProps {
    companies: string[];
    equipmentTypes: string[];
    selectedCompany: string;
    selectedType: string;
    searchTerm: string;
    onCompanyChange: (value: string) => void;
    onTypeChange: (value: string) => void;
    onSearchChange: (value: string) => void;
    clearFilters: () => void;
}

export default function ProductsFilterPanel({
                                                companies,
                                                equipmentTypes,
                                                selectedCompany,
                                                selectedType,
                                                searchTerm,
                                                onCompanyChange,
                                                onTypeChange,
                                                onSearchChange,
                                                clearFilters,
                                            }: ProductsFilterPanelProps) {
    const hasActive =
        selectedCompany !== "All" || selectedType !== "All" || !!searchTerm;

    return (
        <aside
            className="rounded-2xl bg-gradient-to-b from-white to-slate-50 shadow-sm ring-1 ring-slate-200 p-6 lg:p-7 h-fit lg:sticky lg:top-6 self-start"
            aria-label="Product filters"
        >
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 text-blue-700 px-2 py-1 ring-1 ring-blue-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span className="text-[11px] font-semibold tracking-wide">FILTERS</span>
                    </div>
                    <h2 className="mt-2 text-lg font-bold text-slate-900">Refine results</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Brand, type, or keywords</p>
                </div>
                <button
                    onClick={clearFilters}
                    className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white/70 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    aria-label="Reset all filters"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-70" aria-hidden="true">
                        <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Reset
                </button>
            </div>

            {/* Divider */}
            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="mt-6 space-y-6">
                {/* Search */}
                <fieldset className="grid gap-2">
                    <legend className="sr-only">Search products</legend>
                    <label htmlFor="search" className="text-sm font-medium text-slate-800">
                        Search
                    </label>
                    <div className="relative group">
                        <input
                            id="search"
                            type="text"
                            placeholder="Product name or description"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 pl-10 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500 transition-shadow"
                        />
                        <svg
                            aria-hidden="true"
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600"
                            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="7" strokeWidth="2" />
                            <path d="M20 20l-3.5-3.5" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {searchTerm && (
                            <button
                                type="button"
                                onClick={() => onSearchChange("")}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 hover:bg-slate-100 text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                aria-label="Clear search"
                                title="Clear search"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                                    <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        )}
                    </div>
                </fieldset>

                {/* Company */}
                <fieldset className="grid gap-2">
                    <legend className="sr-only">Filter by company</legend>
                    <label htmlFor="company" className="text-sm font-medium text-slate-800">
                        Company
                    </label>
                    <div className="relative">
                        <select
                            id="company"
                            value={selectedCompany}
                            onChange={(e) => onCompanyChange(e.target.value)}
                            className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 py-3 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500 transition-shadow"
                        >
                            <option value="All">All Companies</option>
                            {companies.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                        <svg
                            aria-hidden="true"
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        >
                            <path d="m6 9 6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </fieldset>

                {/* Equipment Type */}
                <fieldset className="grid gap-2">
                    <legend className="sr-only">Filter by equipment type</legend>
                    <label htmlFor="type" className="text-sm font-medium text-slate-800">
                        Equipment Type
                    </label>
                    <div className="relative">
                        <select
                            id="type"
                            value={selectedType}
                            onChange={(e) => onTypeChange(e.target.value)}
                            className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 py-3 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500 transition-shadow"
                        >
                            <option value="All">All Equipment Types</option>
                            {equipmentTypes.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                        <svg
                            aria-hidden="true"
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        >
                            <path d="m6 9 6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </fieldset>

                {/* Active filters */}
                <div className="pt-1">
                    <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-slate-500">Active Filters</div>
                        {hasActive && (
                            <button
                                onClick={clearFilters}
                                className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-blue-700 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                aria-label="Clear all filters"
                            >
                                Clear all
                            </button>
                        )}
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                        {selectedCompany !== "All" && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200">
                Company: {selectedCompany}
                                <button
                                    onClick={() => onCompanyChange("All")}
                                    className="ml-1.5 rounded-full p-0.5 hover:bg-blue-100 text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                    aria-label="Clear company filter"
                                    title="Clear company filter"
                                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </span>
                        )}

                        {selectedType !== "All" && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-200">
                Type: {selectedType}
                                <button
                                    onClick={() => onTypeChange("All")}
                                    className="ml-1.5 rounded-full p-0.5 hover:bg-indigo-100 text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                    aria-label="Clear type filter"
                                    title="Clear type filter"
                                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </span>
                        )}

                        {searchTerm && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200">
                Search: {searchTerm}
                                <button
                                    onClick={() => onSearchChange("")}
                                    className="ml-1.5 rounded-full p-0.5 hover:bg-emerald-100 text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                    aria-label="Clear search filter"
                                    title="Clear search filter"
                                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </span>
                        )}

                        {!hasActive && (
                            <span className="text-xs text-slate-400">No active filters</span>
                        )}
                    </div>

                    {/* Mobile reset */}
                    {hasActive && (
                        <button
                            onClick={clearFilters}
                            className="mt-3 inline-flex w-full sm:hidden items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                                <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Clear all filters
                        </button>
                    )}
                </div>
            </div>
        </aside>
    );
}
