'use client';

import { useState } from 'react';
import quotesData from '../data/quotes.json';

// Define the type for our quote
type Quote = {
  text: string;
  author: string;
};

// Define available topics
type Topic = 'inspiration' | 'success' | 'motivation' | 'life';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<Topic>('inspiration');
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [showQuotes, setShowQuotes] = useState(false);

  // Function to get 3 random quotes from the selected topic
  const getRandomQuotes = (topic: Topic): Quote[] => {
    const topicQuotes = quotesData[topic];
    const shuffled = [...topicQuotes].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomQuotes = getRandomQuotes(selectedTopic);
    setQuotes(randomQuotes);
    setShowQuotes(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Quote Generator
        </h1>
        
        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                Choose a Topic:
              </label>
              <select
                id="topic"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value as Topic)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="inspiration">Inspiration</option>
                <option value="success">Success</option>
                <option value="motivation">Motivation</option>
                <option value="life">Life</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Get 3 Random Quotes
            </button>
          </form>
        </div>

        {/* Display Quotes */}
        {showQuotes && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              {selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1)} Quotes
            </h2>
            
            {quotes.map((quote, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "{quote.text}"
                </blockquote>
                <p className="text-right text-gray-600 font-medium">
                  — {quote.author}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 