// src/App.jsx

import Index from './pages/index'; // Import the main page component from src/pages/index.jsx

function App() {
  // The App component can be used for things like context providers,
  // routing (if you had multiple pages), etc.
  // For this simple portfolio, it primarily acts as a wrapper for the main page component.
  return (
    // Render the Index component which contains all the portfolio sections
    <Index />
  );
}

export default App;