import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import Home from './Home'
import Series from './Series'
import NewSeries from './NewSeries'
import EditSeries from './EditSeries'

const About = () => <section className="intro-section"><h1>Sobre</h1></section>

ReactDOM.render(
<Router>
    <App>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/series-edit/:id' component={EditSeries}/>
            <Route path='/series/:genre' component={Series}/>
            <Route path='/new-series' component={NewSeries}/> 
            <Route exact path='/about' component={About}/>
        </Switch>
    </App>
</Router>, 
document.getElementById('root'))
registerServiceWorker()
