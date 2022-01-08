import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";

const RoutesConfig = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/filme/:id" element={<Filme/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesConfig