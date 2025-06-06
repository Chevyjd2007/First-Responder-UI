import React from 'react'
import Sidenav from '../components/Navigation/Sidenav'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navigation/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../styles/Dashboard.css";
import { TbAlertOctagonFilled, TbInnerShadowTopRight, TbRobotOff, TbDeviceHeartMonitorFilled} from "react-icons/tb";
import CountUp from 'react-countup';
import Skeleton from '@mui/material/Skeleton';



const Home = () => {
  return (
    <>
    <div className='bg__color'>
    <Navbar/> 
    <Box height={70} />
     <Box sx={{ display: 'flex' }}>
        <Sidenav/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Stack direction="row" spacing={2}>
                <Card className='gradient__dark' sx={{ minWidth: "49%", height: 150, width: "50vw"}}>
                  <CardContent>
                    <div style={{color: 'aliceblue'}}> 
                      <TbAlertOctagonFilled size={32}/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" color='aliceblue' fontWeight={500} fontSize={25} >
                      <CountUp end={107} duration={1.5} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div"
                      color='aliceblue' fontSize={20}>
                      Number of Critical Alerts
                    </Typography>
                  </CardContent>
                </Card>
                <Card className='gradient__light' sx={{ minWidth: "49%", height: 150, width: "30vw"}}>
                  <CardContent>
                    <div style={{color: 'aliceblue'}}> 
                      <TbInnerShadowTopRight size={32}/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" color='aliceblue' fontWeight={500} fontSize={25}>
                      <CountUp end={372} duration={1.5} />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div"
                     color='aliceblue' fontSize={20}>
                      Number of False Alarms
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid size={4}>
                <Stack  spacing={2}>
                  <Card className='gradient__light' sx={{maxWidth: "50vw"}}>
                      <Stack direction="row" spacing={2}>
                        <div style={{marginTop: '20px', marginLeft: '10px', color: 'aliceblue'}}>
                          <TbDeviceHeartMonitorFilled size={30} /> 
                        </div>
                        <div className='metric__container'>
                          <span className='metric__title' style={{color: 'aliceblue'}}>
                            <CountUp end={893} duration={1.5} />
                          </span>
                            <br/>
                          <span className='metric__subtitle' style={{color: 'aliceblue'}}>Alerts Handled by First Responder</span>
                        </div>
                      </Stack>
                  </Card> 
                  <Card sx={{maxWidth: "50vw"}}>
                      <Stack direction="row" spacing={2}>
                        <div style={{marginTop: '20px', marginLeft: '10px'}}>
                          <TbRobotOff size={30} />
                        </div>
                        <div className='metric__container'>
                          <span className='metric__title'>
                            <CountUp end={32} duration={1.5} />
                          </span>
                            <br/>
                          <span className='metric__subtitle'>Alerts Handled by Staff</span>
                        </div>
                      </Stack>
                  </Card> 
                </Stack>
            </Grid>
        </Grid>
        <Box height={20} />
        <Grid container spacing={2}>
            <Grid size={8} width={"100%"}>
              <Card sx={{ height: "75vh"}}>
                    <CardContent></CardContent>
              </Card> 
            </Grid>
        </Grid>
        </Box>
      </Box>
      </div>
    </>
  )
}

export default Home