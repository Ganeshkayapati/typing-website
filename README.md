# Typing Speed & Accuracy Tracker

A React + Vite typing website where users can take typing tests, measure their speed (WPM) and accuracy, log in to view their results.

## Features
- **Typing Test**: Real-time typing challenge with a random or chosen passage.
- **Speed & Accuracy Calculation**: Calculates Words Per Minute (WPM) and accuracy percentage at the end of each test.
- **User Authentication**: Sign up / log in (e.g., via Firebase Auth) to save your test results.
- **Dashboard**: After logging in, users can view their history of tests, with timestamps, WPM, accuracy, and number of characters typed.
- **Theme Support**: Light/dark or custom themes via a ThemeContext.
- **Responsive UI**: Built with MUI (Material UI) and responsive layouts.
- **Charts & Visualization**: Display past performance over time (e.g., line charts of WPM).

## Tech Stack
- **Frontend**:
  - React (with functional components & hooks)
  - Vite (fast dev server, HMR)
  - Material UI (@mui/material, @mui/icons-material) for UI components
  - react-google-button (Google sign-in)
  - react-router-dom for routing (e.g., home, typing test, dashboard, compare)
  - react-firebase-hooks for auth state
  - Chart.js + react-chartjs-2 for data visualization
- **Authentication & Backend**:
  - Firebase Auth for signup/login (email/password, Google)
  - Firebase Firestore (or Realtime Database) for storing user results
- **Context & State**:
  - ThemeContext for light/dark themes
  - Context or Redux (optional) for global state if needed
- **Utilities**:
  - react-toastify for notifications
  - date-fns (optional) for date formatting
- **Bundler/Linter**:
  - Vite
  - ESLint / Prettier with React rules

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or Yarn
- A Firebase project configured with Auth and Firestore enabled

### Environment Variables
Create a `.env` file at project root (or use `.env.local` depending on setup). Prefix with `VITE_` for Vite:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
