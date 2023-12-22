import React from 'react';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {BackgroundNotFound} from "../components/BackgroundNotFound";



export const NotFoundView = () => {
    return (
        <div>
            <Header/>
            <BackgroundNotFound/>
            <Footer/>
        </div>

    );
}
