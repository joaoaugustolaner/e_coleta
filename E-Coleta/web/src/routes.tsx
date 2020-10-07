import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CreatePoint from './pages/createpoint'
import Home from './pages/home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component= {Home} path="/" exact/>
            <Route component= {CreatePoint} path ="/create-point" />
        </BrowserRouter>
    )
}

export default Routes