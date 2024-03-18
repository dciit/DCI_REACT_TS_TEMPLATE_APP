import { Outlet } from "react-router";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ToolbarComponent from "./components/toolbar";
import Login from "./pages/login";
import { useSelector } from "react-redux";
import NavMenu from "./components/navmenu";
import NavModule from "./components/navmodule";
function Layout() {

    const reducer = useSelector((state: any) => state.reducer);
    let oLogin = false;
    if (typeof reducer.login !== 'undefined') {
        oLogin = reducer.login;
    }
    return <Stack className='h-[100%] w-[100%]'>
        {
            !oLogin ? <Login /> : <Stack id='main' className=' h-[100%] w-[100%]'>
                <ToolbarComponent />
                <div className="h-[100%] w-full">
                    <Grid container className="h-full">
                        <NavMenu />
                        <Grid container item xs={11}>
                            <NavModule />
                            <Grid item xs={10} >
                                <Outlet/>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Stack>
        }
    </Stack>
}

export default Layout