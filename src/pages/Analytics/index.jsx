import SideNav from '../../components/SideNav/index'
import NavBar from '../../components/NavBar/index'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Stack from '@mui/material/Stack';

import "../../Dash.css";


import GeoChart from '../../charts/GeoChart/index';
import PieChart from '../../charts/PieChart/index';
import HBarChart from '../../charts/HBarChart/index';

import CountUp from 'react-countup';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function Analytics() {
  return (
    <>
      <div className='bgcolor'>

        <NavBar />

        <Box sx={{ display: 'flex' }}>

          <SideNav />

          <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />

            <Grid container spacing={4}>

              <Grid item xs={12} md={4}>
                <Stack spacing={2} direction="row">

                  <Grid item xs={6} md={6}>
                    <Card sx={{ minWidth: 205, height: 120 }} className='gradient'>
                      <CardContent>
                        <div className='visitorsStyle'>
                          Visitors
                        </div>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                          <CountUp delay={0.2} end={22000} duration={1} />
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                          Since Last Week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <Card sx={{ minWidth: 205, height: 120 }} className='gradientlight'>
                      <CardContent>
                        <div className='visitorsStyle'>
                          Visitors
                        </div>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                          <CountUp delay={0.2} end={22000} duration={1} />
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                          Since Last Week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                </Stack>

                <Box height={10} />

                <Stack spacing={2} direction="row">

                  <Grid item xs={6} md={6}>
                    <Card sx={{ minWidth: 205, height: 120 }} className='gradient'>
                      <CardContent>
                        <div className='visitorsStyle'>
                          Visitors
                        </div>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                          <CountUp delay={0.2} end={32000} duration={1} />
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                          Since Last Week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <Card sx={{ minWidth: 205, height: 120 }} className='gradientlight'>
                      <CardContent>
                        <div className='visitorsStyle'>
                          Visitors
                        </div>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                          <CountUp delay={0.2} end={32000} duration={1} />
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                          Since Last Week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                </Stack>
              </Grid>

              <Grid item xs={12} md={8}>
                <Stack spacing={1}>

                  <Card sx={{ minWidth: 810, height: 250 }}>
                    <CardContent>
                      <HBarChart />
                    </CardContent>
                  </Card>

                </Stack>
              </Grid>

            </Grid>

            <Box height={15} />

            <Grid container spacing={2}>

              <Grid item xs={12} md={8}>
                <Card sx={{ height: 46 + "vh" }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ height: 46 + "vh" }}>
                  <CardContent>
                    <PieChart />
                  </CardContent>
                </Card>
              </Grid>

            </Grid>

          </Box>

        </Box>

      </div>
    </>
  )
}