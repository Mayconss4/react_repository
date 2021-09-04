import Globalstyle from "styles/Globalstyle";
import {BrowserRouter} from "react-router-dom";
import Routes from "routes";

function App() {
  return (
    <BrowserRouter>
        <Globalstyle/>
        <Routes/>
    </BrowserRouter>
    
    
  );
}

export default App;
