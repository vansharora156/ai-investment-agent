"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (company: string) => void;
  loading: boolean;
}

export default function SearchBar({
  onSearch,
  loading,
}: SearchBarProps) {
  const [company, setCompany] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!company.trim()) return;

    onSearch(company);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col md:flex-row gap-4"
    >
      <input
        type="text"
        placeholder="Enter company name (e.g. Apple, Tesla, Microsoft)"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 bg-white px-5 py-4 text-lg text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </form>
  );
}