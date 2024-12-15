import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

// In development, React.StrictMode can cause double mounting
// which might affect Clippy initialization
const AppWrapper = import.meta.env.DEV 
  ? ({ children }: { children: React.ReactNode }) => children
  : StrictMode;

createRoot(root).render(
  <AppWrapper>
    <App />
  </AppWrapper>
);