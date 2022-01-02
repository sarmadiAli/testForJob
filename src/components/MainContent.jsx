import React from 'react'
import Dashbord from './../pages/main/Dashbord'
import Persons from './../pages/main/Persons'
import Person from './../pages/main/Person'
import Products from './../pages/main/Products'
import Product from './../pages/main/Product'
import {
    Switch,
    Route,
} from "react-router-dom";

export default function MainContent() {
    return (
        <Switch>
            <Route path="/products" component={Products} />
            <Route path="/product/:id?" component={Product} />
            <Route exact path="/person/:id?" component={Person} />
            <Route exact path="/dashbord" component={Dashbord} />
            <Route path="/" component={Persons} />

        </Switch>
    )
}
