import './default.scss'

import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__wrapper">
        <Homepage />
      </div>
      <Footer />
    </div>
  )
}

export default App