import React from "react";
import "./App.css";
import Home from "./Components/Home";
import EventsPage from "./pages/events"
import Bands from "./pages/bands"
import Archive from "./pages/archive"
import Teams from "./pages/teams"
import {Route, Routes} from "react-router-dom";
import Registration from "./pages/registration";


function App(){
    return (
    <div className="App">
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/registration" element={<Registration />}/> 
            <Route path="/events" element={<EventsPage />}/>
            <Route path="/archive" element={<Archive />}/>
            <Route path="/bands" element={<Bands />}/>
            <Route path="/teams" element={<Teams />}/>
        </Routes>
    </div>
    )
}

export default App;