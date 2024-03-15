import { Stack, Typography, Avatar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { persistor } from '../redux/store'
import logo from '../assets/react.svg'
function ToolbarComponent() {
    const APP_NAME = import.meta.env.VITE_APP_NAME;
    const reducer = useSelector((state: any) => state.reducer);
    let oName = '';
    if (typeof reducer.name !== 'undefined') {
        oName = reducer.name;
    }
    const dispatch = useDispatch();
    async function handleLogout() {
        if (confirm('คุณต้องการออกจากระบบใช่หรือไม่ ? ...')) {
            dispatch({ type: 'LOGOUT' });
            persistor.purge();
            location.reload();
        }
    }
    return (
        <Stack className='toolbar h-[35px] bg-black' justifyContent={'space-between'} px={2} style={{borderBottom:'1px solid rgb(221 221 221 / 17%)'}}>
            <Stack className='select-none flex-1 cursor-pointer ' direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack className='hover:scale-105  transform-all duration-300' direction={'row'} justifyContent={'center'} alignItems={'center'} gap={1}>
                    <img  className='animate-spin w-4' src={logo} />
                    <Typography className=' text-gray-400' >{APP_NAME}</Typography>
                    <Stack className='text-xs text-gray-300'>
                        <span className='capitalize '>menu 1</span>
                    </Stack>
                </Stack>
                <Stack onClick={handleLogout} className='cursor-pointer' direction={'row'} alignItems={'center'} gap={1}>
                    <Typography>{oName}</Typography>
                    {/* <Avatar>{oName.substring(0, 1)}</Avatar> */}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ToolbarComponent