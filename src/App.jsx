import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import Home from './components/Home'
import WhyChooseUs from './components/WhyChooseUs'

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
      </main>
    </>
  )
}

export default App
