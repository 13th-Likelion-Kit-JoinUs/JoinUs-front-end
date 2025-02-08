import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter 추가


createRoot(document.getElementById('root')!).render(
	<StrictMode>
    <BrowserRouter basename="/~s20231073/"> {/* basename 설정 */}
      <App />
    </BrowserRouter>
  </StrictMode>,

);
