import {Switch, Route} from "react-router-dom"
import {Pagdois, Pagquatro, Pagtres, Pagum, Login} from "pages"

const Routes = () => {
    return(
        <Switch>
            <Route path="/pagquatro" component={Pagquatro}/>
            <Route path="/pagtres" component={Pagtres}/>
            <Route path="/pagdois" component={Pagdois}/>
            <Route path="/pagum" component={Pagum}/>
            <Route path="/" component={Login}/>
        </Switch>
    )
}

export default Routes