import React from 'react'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import {Home, Header, Footer} from '../components/index'

const App = () => {
    return (
        <>
            <Router>        
                    <Header />
                    {/* <Switch>
                        <Route path="/home" component={Home} />                        
                    </Switch> */}
                    <Home />
                    <Footer />                
            </Router>
        </>
    )
}

export default App
