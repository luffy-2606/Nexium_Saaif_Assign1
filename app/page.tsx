'use client';

import { useState } from 'react';
import quotesData from '../data/quotes.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select a Topic</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="topic">Choose a Topic:</Label>
                <Select value={selectedTopic} onValueChange={(value) => setSelectedTopic(value as Topic)}>
                  <SelectTrigger id="topic">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inspiration">Inspiration</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="motivation">Motivation</SelectItem>
                    <SelectItem value="life">Life</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full">
                Get 3 Random Quotes
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Display Quotes */}
        {showQuotes && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              {selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1)} Quotes
            </h2>
            
            {quotes.map((quote, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "{quote.text}"
                  </blockquote>
                  <p className="text-right text-gray-600 font-medium">
                    — {quote.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 