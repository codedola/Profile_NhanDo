import React from "react";
import "./App.css";
import Home from "./pages/HomePage/Home";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
