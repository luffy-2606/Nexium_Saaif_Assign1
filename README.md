# Quote Generator Web App

A simple quote generator built with Next.js and TypeScript. This app allows users to select a topic and get 3 random quotes related to that topic.

## Features

- **Topic Selection**: Choose from 4 different topics (Inspiration, Success, Motivation, Life)
- **Random Quotes**: Get 3 random quotes for your selected topic
- **Responsive Design**: Works on desktop and mobile devices
- **Clean UI**: Simple and beginner-friendly interface

## How to Use

1. Select a topic from the dropdown menu
2. Click "Get 3 Random Quotes" button
3. View the 3 randomly selected quotes for your chosen topic

## Available Topics

- **Inspiration**: Motivational quotes to inspire you
- **Success**: Quotes about achieving success
- **Motivation**: Quotes to keep you motivated
- **Life**: General life wisdom and philosophy

## Technology Stack

- **Next.js 14**: React framework for web development
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **Local JSON Data**: Quotes stored in `/data/quotes.json`

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
assignment-1/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── data/
│   └── quotes.json          # Local quotes data
├── package.json             # Project dependencies
└── README.md               # This file
```

## How It Works

1. **Data Storage**: Quotes are stored in `data/quotes.json` organized by topics
2. **Form Handling**: Users select a topic using a dropdown form
3. **Random Selection**: When submitted, the app randomly selects 3 quotes from the chosen topic
4. **Display**: Selected quotes are displayed in a clean, card-based layout

This is a beginner-friendly project that demonstrates basic Next.js concepts, TypeScript usage, and local data handling. 