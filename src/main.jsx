import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { debugContextDevtool } from 'react-context-devtool'
import App from './App'
import './index.css'
import LoadableApp from './LoadableApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <LoadableApp /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

debugContextDevtool(root, { debugReducer: true, debugState: true, debugEffect: true, debugLayoutEffect: true, debugContext: true, debugOnMount: true, debugOnUpdate: true, debugOnUnmount: true });
