import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

function Project() {
    return (
        <>
            <Header />

            <main>

                <Hero preHeadering='Quality. Integrity. Value.'
                    heading='Services'
                    text='We offer a diverse array of construction services,
                  spanning residential, commercial, and industrial projects.'/>

            </main>


            <Footer />
        </>
    )
}

export default Project