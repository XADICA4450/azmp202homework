
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { FavoritesProvider } from './context/FavoritesContext.jsx'


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
    <FavoritesProvider> 
      <App />
    </FavoritesProvider>
    </BrowserRouter>

  </HelmetProvider>


)
