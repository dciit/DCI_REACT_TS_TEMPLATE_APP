import Close from '@mui/icons-material/Close'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Style from '../environment'
import { useSelector } from 'react-redux'
function NavModule() {
    const redux = useSelector((state: any) => state.reducer);
    const moduleActive = redux?.moduleActive || '';
    console.log(moduleActive)
    return (
        <Grid item xs = {2} p={1}>
            <Stack gap={1}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography sx={{ fontSize: 10 }} className={`${Style.textColor}`}>EXPLORER</Typography>
                    <Close sx={{ fontSize: 16 }} className='text-[#9d9fa8]' />
                </Stack>
                <Stack pl={1} >
                    <Typography className={`${Style.textColor} text-[12px]`}>Delivery Received</Typography>
                </Stack>
            </Stack>
        </Grid>
    )
}

export default NavModule