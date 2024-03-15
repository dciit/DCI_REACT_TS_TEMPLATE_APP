import { Stack, Typography, Avatar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { persistor } from '../redux/store'
function ToolbarComponent() {
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
        <Stack className='toolbar h-[10%] bg-[#f6f8fa]' justifyContent={'space-between'} px={2}>
            <Stack className='select-none flex-1 cursor-pointer ' direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack className='hover:scale-105  transform-all duration-300' direction={'row'} justifyContent={'center'} alignItems={'center'} gap={1}>
                    <MonetizationOnIcon className='text-blue-500 text-[2em] ' />
                    <Typography className='font-semibold' color="initial">PROJECT NAME</Typography>
                </Stack>
                <Stack onClick={handleLogout} className='cursor-pointer' direction={'row'} alignItems={'center'} gap={1}>
                    <Typography>{oName}</Typography>
                    <Avatar>{oName.substring(0, 1)}</Avatar>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ToolbarComponent