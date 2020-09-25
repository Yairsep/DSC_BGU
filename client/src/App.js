import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import {FirebaseAppProvider} from "reactfire";
import {firebaseConfig} from "./firebaseConfig";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import Members from "./pages/Members";
import Spinner from "react-bootstrap/Spinner";

function App() {
    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <div className="App">
                    <Router>
                        <NavigationBar/>
                        <Suspense fallback={<div><Spinner animation="border" variant="primary" /></div>}>
                        <Switch>
                            <Route path="/Home">
                                <Home/>
                            </Route>
                            <Route path="/Partners">
                                <Partners/>
                            </Route>
                            <Route path="/Members">
                                <Members/>
                            </Route>
                            <Route path="/Events">
                                <Events/>
                            </Route>
                            <Route path="/Projects">
                                <Projects/>
                            </Route>
                            <Route path="/Apply">
                                <Apply/>
                            </Route>
                            <Route path="/Contact">
                                <Contact/>
                            </Route>
                        </Switch>
                        </Suspense>
                    </Router>
            </div>
        </FirebaseAppProvider>
    );
}

export default App;
