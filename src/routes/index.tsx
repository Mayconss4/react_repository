import {Switch, Route} from "react-router-dom"
import {Pagum} from "pages"

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={Pagum}/>
        </Switch>
    )
}

export default Routes