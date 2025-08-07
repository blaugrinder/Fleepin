import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import Home from './components/Home'
import WhyChooseUs from './components/WhyChooseUs'
import Stats from './components/StatsPage'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Home />
        <WhyChooseUs />
        <Stats />
      </main>
    </>
  )
}

export default App
