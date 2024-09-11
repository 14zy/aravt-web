import Aravt from './components/aravt';
import Aravt2 from './components/aravt2';
import Aravt3 from './components/aravt3';
import Aravt4 from './components/aravt4';
import Aravt5 from './components/aravt5';
import Aravt6 from './components/aravt6';
import './App.css'
import {useEffect} from 'react';
import {useTelegram} from "./hooks/useTelegram";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // BrowserRouter
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])
  
  return (
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/ton-connect/demo-dapp-with-react-ui/master/public/tonconnect-manifest.json">
      <Router>
      <Routes>
        <Route path="/" element={<Aravt />} />
        <Route path="/aravt2" element={<Aravt2 />} />
        <Route path="/aravt3" element={<Aravt3 />} />
        <Route path="/aravt4" element={<Aravt4 />} />
        <Route path="/aravt5" element={<Aravt5 />} />
        <Route path="/aravt6" element={<Aravt6 />} />
      </Routes>
    </Router>
      </TonConnectUIProvider>
  );
}

export default App
