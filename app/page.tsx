"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  async function handleSearch(company: string) {
    try {
      setLoading(true);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company,
        }),
      });

      const data = await response.json();
      const parsed = JSON.parse(data.result);
      setAnalysis(parsed);
      console.log(parsed);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Header />

        <SearchBar
          onSearch={handleSearch}
          loading={loading}
        />

        {analysis && (
          <div className="mt-10 space-y-6">

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Company Overview
              </h2>

              <p className="text-gray-700 leading-7">
                {analysis.overview}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Strengths
              </h2>

              <ul className="list-disc ml-6">
                {analysis.strengths.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="text-gray-700 mb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Risks
              </h2>

              <ul className="list-disc ml-6">
                {analysis.risks.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="text-gray-700 mb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Recommendation
              </h2>

              <p className="text-green-600 font-bold text-xl">
                {analysis.recommendation}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Confidence
              </h2>

              <p className="text-xl font-semibold text-blue-600">
                {analysis.confidence}%
              </p>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}