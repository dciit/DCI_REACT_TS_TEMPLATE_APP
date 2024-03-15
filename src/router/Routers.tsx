import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout";
import { useEffect } from "react";
import { persistor } from "../redux/store";
import Home from "../pages/home";
import Login from "../pages/login";
import { useDispatch, useSelector } from "react-redux";
const Routers = () => {
    let BASE = import.meta.env.VITE_PATH;
    let VER = import.meta.env.VITE_VERSION;
    const redux = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (typeof redux.rev == 'undefined' || redux.rev != VER) {
            localStorage.clear();
            persistor.purge();
            dispatch({ type: 'RESET' });
            dispatch({ type: 'SET_VERSION', payload: VER });
            location.reload();
        }
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={`/${BASE}`} element={<Home />} />
                </Route>
                <Route path={`/*`} element={<Login />} />
                <Route path={`${BASE}/login`} element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
