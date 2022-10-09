import React from 'react'
import Header from './components/Header'
import SecOne from './components/SecOne'
import SecTwo from './components/SecTwo'
import SecThree from './components/SecThree'
import SecFour from './components/SecFour'
import SecFive from './components/SecFive'
import SecSix from './components/SecSix'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <Header />
    <main>
        <SecOne />
        <SecTwo />
        <SecThree />
        <SecFour />
        <SecFive />
        <SecSix />
    </main>
    <Footer />
    </div>
  )
}

export default App