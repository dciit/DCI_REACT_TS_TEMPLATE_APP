import { Stack, Typography } from "@mui/material"
import moment, { Moment } from 'moment'
import Style from "../environment";
interface mWarehouseMaster {
    time: string;
    wh: string;
    status: string;
}
function Home() {
    let dtNow = moment();
    const rTimeMaster: string[] = ['08:30', '09:00', '09:30'];
    const rWarehouseMaster: mWarehouseMaster[] = [
        { time: '08:30', wh: 'WH1-1', status: 'T' },
        { time: '08:30', wh: 'WH1-2', status: 'T' },
        { time: '08:30', wh: 'WH2-2', status: 'T' },
        { time: '09:00', wh: 'WH1-1', status: 'T' },
        { time: '09:00', wh: 'WH2-1', status: 'T' },
        { time: '09:00', wh: 'WH2-2', status: 'T' }
    ];
    function handleSelecteDay() {

    }
    return (
        <Stack className={`w-[100%] ${Style.textColor}`} px={2} pt={1}>
            <Stack className="w-[100%]" borderBottom={Style.borderRight}>
                <Typography sx={{ fontSize: 12 }}>Filter</Typography>
            </Stack>
            <Stack gap={1}>
                <table id="tbBorder" className={`w-[100%]`}>
                    <tbody>
                        <tr>
                            {
                                [...Array(7)].map((oDtLoop: any, iDtLoop: number) => {
                                    dtNow = dtNow.add(iDtLoop > 0 ? 1 : 0, 'days');
                                    return <td key={oDtLoop} align="center" colSpan={2} onClick={handleSelecteDay}>{dtNow.format('DD')}</td>
                                })
                            }
                        </tr>
                    </tbody>
                </table>
                <table id="tbInput">
                    <tbody>
                        <tr>
                            {
                                rTimeMaster.map((oTime: string, iTime: number) => {
                                    let listWarehouse: mWarehouseMaster[] = rWarehouseMaster.filter((o: mWarehouseMaster) => o.time == oTime);
                                    return <td colSpan={listWarehouse.length} key={iTime} align="center">{oTime}</td>
                                })
                            }
                        </tr>
                        <tr>
                            {
                                rTimeMaster.map((oTime: string) => {
                                    let listWarehouse: mWarehouseMaster[] = rWarehouseMaster.filter((o: mWarehouseMaster) => o.time == oTime);
                                    return listWarehouse.map((oWarehouse: mWarehouseMaster, iWarehouse: number) => {
                                        return <td align="center" key={iWarehouse}>{oWarehouse.wh}</td>
                                    })
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </Stack>
        </Stack>
    )
}

export default Home

