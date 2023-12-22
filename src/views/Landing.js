import React from 'react';
import {Footer} from '../components/Footer';
import {BackgroundLanding} from "../components/BackgroundLanding";
import {ButtonsLanding} from "../components/ButtonsLanding";


export const Landing = () => {
    return (
        <div>
            <BackgroundLanding>
                <ButtonsLanding/>
            </BackgroundLanding>
            <Footer/>
        </div>

    );
}
