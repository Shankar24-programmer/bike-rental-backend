import React from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login'
import Image from '../Components/Image'
import OfferCard from '../Components/OfferCard'
import DescCard from './DescCard'
import Testimonials from './Testimonials'
import City from '../Components/City'
import Footer from '../Components/Footer'
function App() {
  return (
    <div className="App">
        <Navbar />
        <Image />
        <OfferCard />
        <DescCard />
        <Testimonials />
        <City />
        <Footer />
    </div>
  );
}

export default App;