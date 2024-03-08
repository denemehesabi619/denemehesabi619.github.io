import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

function App() {
  const [confetti, setConfetti] = useState(true)
  useEffect(() => {
    confetti &&
    setTimeout(() => {
      setConfetti(false)
    }, 10000)
  }, [])
  
  return (
    <div className='App'>
      {confetti && <Confetti/>}
      <Dashboard/>
    </div>
  );
}

export default App;
