export default function App() {
  return <></>;
}

// App.jsx
import React from 'react';
import { useTheme } from './ThemeContext';
import Navbar from './Navbar';
import Specimen from './Specimen';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Navbar />
      <ul>
        <Specimen name="Example 1" shouldGlow={true} />
        <Specimen name="Example 2" shouldGlow={false} />
      </ul>
    </div>
  );
};

export default App;
