import { Outlet } from "react-router";
import { Box, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from '../src/redux/store'
import ToolbarComponent from "./components/toolbar";
import Login from "./pages/login";
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
function Layout() {
    const reducer = useSelector((state: any) => state.reducer);
    let oLogin = false;
    if (typeof reducer.login !== 'undefined') {
        oLogin = reducer.login;
    }
    return <Stack className='h-[100%] w-[100%] bg-[#e7ebee++]'>
        {
            !oLogin ? <Login /> : <Stack className='h-[100%] w-[100%] bg-[#e7ebee++]'>
                <ToolbarComponent />
                <div className="h-[90%]">
                    <Stack className="h-full" direction={'row'}>
                        <Stack className="w-[50px] bg-black" gap={1} pt={1} style={{borderRight:'1px solid rgb(221 221 221 / 17%)'}}>
                            <Stack className="text-gray-400 h-[38px]" alignItems={'center'} justifyContent={'center'}>
                                <AdsClickOutlinedIcon />
                            </Stack>
                            <Stack className="text-gray-400 h-[38px]" alignItems={'center'} justifyContent={'center'}>
                                <AdjustOutlinedIcon />
                            </Stack>
                            <Stack className="text-gray-400 h-[38px]" alignItems={'center'} justifyContent={'center'}>
                                <AddCardOutlinedIcon />
                            </Stack>
                        </Stack>
                        <Stack>
                            <Box height={'30px'} className = "bg-black">
                                sadasd
                            </Box>
                            <Box className='bg-[#171717]'>
                                <Outlet />
                            </Box>
                        </Stack>
                    </Stack>

                </div>
            </Stack>
        }
    </Stack>
}

export default Layout