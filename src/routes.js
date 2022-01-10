import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";

const RoutesConfig = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/filme/:id" element={<Filme/>}/>
                <Route exact path="/favoritos" element={<Favoritos/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesConfig