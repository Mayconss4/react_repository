import {Switch, Route} from "react-router-dom"
import {pagum} from "pages"

const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={pagum}/>
        </Switch>
    )
}

export default Routes