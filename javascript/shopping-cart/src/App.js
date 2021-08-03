import {BrowserRouter, Route, Switch} from 'react-router-dom'

// components
import SocialMedia from './components/SocialMedia'
import Header from './components/Header'

// importing pages
import Home from './Pages/Home/Home'
import ItemPreview from './Pages/ItemPreview/ItemPreview'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart'
import {CSSTransition, TransitionGroup} from "react-transition-group"

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={400}
                        classNames={"fade"}
                    >
                        <Switch location={location}>
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/home"} component={Home}/>
                            <Route path={"/shop"} component={Shop}/>
                            <Route path={"/item-preview/:id"} component={ItemPreview} key={"4"}/>
                            <Route path={"/cart"} component={Cart}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>
            <SocialMedia/>
        </BrowserRouter>
    )
}

export default App;
