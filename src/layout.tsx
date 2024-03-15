import { Outlet } from "react-router";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from '../src/redux/store'
import ToolbarComponent from "./components/toolbar";
import Login from "./pages/login";
function Layout() {
    const dispatch = useDispatch();
    const VITE_REV = parseFloat(import.meta.env.VITE_VERSION);
    const reducer = useSelector((state: any) => state.reducer);
    const redexRev = reducer.rev;
    let oLogin = false;
    if (typeof reducer.login !== 'undefined') {
        oLogin = reducer.login;
    }
    try {
        if (redexRev != VITE_REV) {
            persistor.purge();
            dispatch({ type: 'SET_REV', payload: VITE_REV });
        }
    } catch {
        persistor.purge();
        location.reload();
    }
    return <Stack className='h-[100%] w-[100%] bg-[#e7ebee++]'>
        {
            !oLogin ? <Login /> : <Stack className='h-[100%] w-[100%] bg-[#e7ebee++]'>
                <ToolbarComponent />
                <div className="h-[90%]">
                    <Outlet />
                </div>
            </Stack>
        }
    </Stack>
}

export default Layout