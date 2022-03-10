import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import OnTop from './components/OnTop';
import React from 'react';

export default function DacSanApp(){
    return(
        <>
            {/*<ScrollToTop/>*/}
            <Header />
            <main>
                <Body />
            </main>
            <Footer/>
            <OnTop/>
        </>
    )
}
