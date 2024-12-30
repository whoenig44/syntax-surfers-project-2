import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Automatically resolves to App.tsx

// Type the root element to ensure it's not null
const rootElement = document.getElementById('root') as HTMLElement | null;

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
