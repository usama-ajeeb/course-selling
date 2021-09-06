import { BrowserRouter as Router } from 'react-router-dom'
import Header from './app/components/layout/Header'

import { GlobalStyle } from './app/components/styles/GlobalStyle'
import Home from './app/screens/Home'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header />
        <Home />
      </Router>
    </div>
  )
}

export default App
