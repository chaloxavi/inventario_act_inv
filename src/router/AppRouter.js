import React from 'react';
import {Route, Routes} from "react-router";
import {Landing} from "../views/Landing";
import {PrincipalView} from "../views/PrincipalView";
import {BrowserRouter} from "react-router-dom";
import {MovieView} from "../views/MovieView";
import {MovieProvider} from "../context/MovieContext";
import {NotFoundView} from "../views/NotFoundView";


export const AppRouter = () => {

    return (
        <BrowserRouter>
            <div>
                <MovieProvider>
                    <Routes>
                        <Route path="/Principal" element={<PrincipalView/>}/>
                        <Route path="/MovieView/:name" element={<MovieView/>}/>
                        <Route path="/Landing" element={<Landing/>}/>
                        <Route path="/*" element={<NotFoundView/>}/>
                    </Routes>
                </MovieProvider>
            </div>
        </BrowserRouter>

    )


}