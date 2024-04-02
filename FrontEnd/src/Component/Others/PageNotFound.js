import React from 'react'
import { Navbar } from 'react-bootstrap'
import FooterComp from '../FooterComp'

const PageNotFound = () => {
    return (
        <div>
        <h1 style={{ textAlign: 'center', marginTop: '50px' ,color: 'orange' }} >FluentFusion</h1>
            <Navbar />
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
            
                <h2 style={{ color: 'red' }}>404 Page Not Found</h2>
                <p style={{ fontSize: '18px' }}>We are sorry, but the page you are looking for does not exist.</p>
                <a href='/'>Go to  FluentFusion Home Page</a>
            </div>

            <FooterComp/>

        </div>
    )
}

export default PageNotFound
