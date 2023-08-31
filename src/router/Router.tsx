import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import CitiesPage from "../components/CitiesPage.tsx";
import UserNow from "../pages/UserNow.tsx";
import TourPages from "../components/TourPages.tsx";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/registration' element={<Login/>} />
                <Route path='/cities/:id' element={<CitiesPage/>} />
                <Route path='/user/:id' element={<UserNow/>} />
                <Route path='/cities/:id/tour/:id' element={<TourPages/>} />
            </Routes>
        </div>
    );
};

export default Router;