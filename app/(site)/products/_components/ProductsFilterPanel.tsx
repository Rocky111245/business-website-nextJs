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
    return (
        <aside
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm ring-1 ring-slate-200 p-6 lg:p-7 h-fit lg:sticky lg:top-6 self-start"
            aria-label="Product filters"
        >
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-base font-semibold text-slate-900">Filters</h2>
                        <p className="text-xs text-slate-500 mt-0.5">Brand, type, or keywords</p>
                    </div>
                    <button
                        onClick={clearFilters}
                        className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-70">
                            <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Reset
                    </button>
                </div>

                <div className="h-px w-full bg-slate-200/70" />

                {/* Search */}
                <div className="grid gap-2">
                    <label htmlFor="search" className="text-sm font-medium text-slate-700">
                        Search
                    </label>
                    <div className="relative">
                        <input
                            id="search"
                            type="text"
                            placeholder="Product name or description"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 pl-10 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <svg
                            aria-hidden
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="7" strokeWidth="2" />
                            <path d="M20 20l-3.5-3.5" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Company */}
                <div className="grid gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700">
                        Company
                    </label>
                    <div className="relative">
                        <select
                            id="company"
                            value={selectedCompany}
                            onChange={(e) => onCompanyChange(e.target.value)}
                            className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 py-3 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="All">All Companies</option>
                            {companies.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                        <svg
                            aria-hidden
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path d="m6 9 6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Equipment Type */}
                <div className="grid gap-2">
                    <label htmlFor="type" className="text-sm font-medium text-slate-700">
                        Equipment Type
                    </label>
                    <div className="relative">
                        <select
                            id="type"
                            value={selectedType}
                            onChange={(e) => onTypeChange(e.target.value)}
                            className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 py-3 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="All">All Equipment Types</option>
                            {equipmentTypes.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                        <svg
                            aria-hidden
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path d="m6 9 6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Active filters */}
                <div className="pt-2">
                    <div className="text-xs font-semibold text-slate-500 mb-2">Active Filters</div>
                    <div className="flex flex-wrap gap-2">
                        {selectedCompany !== "All" && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200">
                Company: {selectedCompany}
                                <button
                                    onClick={() => onCompanyChange("All")}
                                    className="ml-2 rounded-full p-0.5 hover:bg-blue-100"
                                    aria-label="Clear company filter"
                                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </span>
                        )}
                        {selectedType !== "All" && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200">
                Type: {selectedType}
                                <button
                                    onClick={() => onTypeChange("All")}
                                    className="ml-2 rounded-full p-0.5 hover:bg-emerald-100"
                                    aria-label="Clear type filter"
                                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </span>
                        )}
                        {searchTerm && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-200">
                Search: {searchTerm}
                                <button
                                    onClick={() => onSearchChange("")}
                                    className="ml-2 rounded-full p-0.5 hover:bg-amber-100"
                                    aria-label="Clear search"
                                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </span>
                        )}
                        {selectedCompany === "All" && selectedType === "All" && !searchTerm && (
                            <span className="text-xs text-slate-400">No active filters</span>
                        )}
                    </div>

                    {/* Mobile reset */}
                    {(selectedCompany !== "All" || selectedType !== "All" || searchTerm) && (
                        <button
                            onClick={clearFilters}
                            className="mt-3 inline-flex w-full sm:hidden items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
