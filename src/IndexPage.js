import React from 'react'
import App from './components/App'
import Navbar from './components/Navbar/Navbar'
import Footer from './components2/Footer/Footer'
import './IndexPage.css'


function IndexPage() {
    return (
        <div>
        <Navbar />
            <App />
            <Footer />
        </div>
    )
}

export default IndexPage
