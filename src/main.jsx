import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ScrollProvider } from "./context/ScrollContext"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './utils/store/store.js'
import { UserProvider } from './context/UserContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <UserProvider>
    <BrowserRouter>
    <ScrollProvider>
      <App />
        </ScrollProvider>
          </BrowserRouter>
        </UserProvider>
        </PersistGate>
      </Provider>
  </React.StrictMode>
)
