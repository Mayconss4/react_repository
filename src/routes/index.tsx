import {Switch, Route} from "react-router-dom"
import {Pagdois, Pagum} from "pages"

const Routes = () => {
    return(
        <Switch>
            <Route path="/pagdois" component={Pagdois}/>
            <Route path="/" component={Pagum}/>
        </Switch>
    )
}

export default Routes