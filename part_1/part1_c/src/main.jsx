export default App

import ReactDOM from 'react-dom/client'
import App from './App'

// Ensure this block is executed only once
const rootElement = document.getElementById('root')
if (!rootElement.hasChildNodes()) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}