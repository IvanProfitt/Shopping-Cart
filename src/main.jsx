import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router'
import CartProvider from './components/CartLogic'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </React.StrictMode>,
)
