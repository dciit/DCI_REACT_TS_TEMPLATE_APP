import { Stack, Typography } from "@mui/material"
import moment, { Moment } from 'moment'
import Style from "../environment";
function Home() {
    let dtNow = moment();
    return (
        <Stack className={`w-[100%] ${Style.textColor}`} px={2} pt={1}>
            <Stack className="w-[100%]" borderBottom={Style.borderRight}>
                <Typography sx={{ fontSize: 12 }}>Filter</Typography>
            </Stack>
            <table id="tbBorder" className={`w-[100%]`}>
                <tbody>
                    {/* <tr >
                        {
                            [...Array(7)].map((oDtLoop: any, iDtLoop: number) => {
                                dtNow = dtNow.add(iDtLoop > 0 ? 1 : 0, 'days');
                                return <td key={oDtLoop} align="center" colSpan={2}>{dtNow.format('DD')}</td>
                            })
                        }
                    </tr> */}
                    {/* <tr>
                        {
                            [...Array(7)].map((oDtLoop: any, iDtLoop: number) => {
                                return ['W1', 'W2'].map((oLocation: string, iLocation: number) => {
                                    return <td align="center" key={iLocation}>{oLocation}</td>
                                })
                            })
                        }
                    </tr> */}
                </tbody>
            </table>
        </Stack>
    )
}

export default Home

