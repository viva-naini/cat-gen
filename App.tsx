import React, { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the prompt
    console.log('User prompt:', prompt);
  };

  return (
    <div className="catgen-container">
      <div className="catgen-center">
        <h1 className="catgen-title">What can I help with?</h1>
        <form className="catgen-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            className="catgen-input"
            type="text"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="Describe your image: Object, Time Period, Art Style, Color Scheme, Vibe (e.g. 'A cat as a 1920s jazz musician in cubist style, blue and gold, chill vibe')"
            required
          />
          <button className="catgen-generate" type="submit">Generate</button>
        </form>
      </div>
    </div>
  );
}

export default App;
