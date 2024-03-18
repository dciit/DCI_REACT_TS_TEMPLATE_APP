import { Grid, Stack, Typography } from '@mui/material';
import Style from '../environment';
import { useDispatch, useSelector } from 'react-redux';
interface mNavMenu {
    txtDep: string;
}
function NavMenu() {
    const dispatch = useDispatch();
    const redux = useSelector((state: any) => state.reducer);
    const depActive = redux?.depActive || '';
    function handelClickDep(depActive: string) {
        dispatch({ type: 'DEP_ACTIVE', payload: depActive })
    }
    function NavMenuLeft(propsNav: mNavMenu) {
        return <Stack className={`h-[38px] cursor-pointer `} alignItems={'center'} justifyContent={'center'} onClick={() => handelClickDep(propsNav.txtDep)}>
            <Typography className={`${propsNav.txtDep == depActive ? Style.textColorActive : Style.textColor}`}>{propsNav.txtDep}</Typography>
        </Stack>
    }
    return (
        <Grid item  xs = {1}  className='h-[100%]'>
            <Stack className="w-full h-full" gap={1} pt={1} style={{ borderRight: Style.borderRight }}>
                <NavMenuLeft txtDep={'PU'} />
                <NavMenuLeft txtDep={'PN'} />
                <NavMenuLeft txtDep={'SCM'} />
            </Stack>
        </Grid>
    )
}

export default NavMenu