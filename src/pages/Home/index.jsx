import SideNav from '../../components/SideNav/index'
import NavBar from '../../components/NavBar/index'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import AccordionDash from "../../components/AccordionDash/index";
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

import "../../Dash.css";

import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import BarChart from '../../charts/BarChart/index';

import CountUp from 'react-countup';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function Home() {
  return (
    <>
      <div className='bgcolor'>

        <NavBar />

        <Box sx={{ display: 'flex' }}>

          <SideNav />

          <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />

            <Grid container spacing={2}>

              <Grid item xs={8}>
                <Stack spacing={2} direction="row">

                  <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                    <CardContent>
                      <div className='iconstyle'>
                        <CreditCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                        $<CountUp delay={0.2} end={500} duration={1} />
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                    <CardContent>
                      <div className='iconstyle'>
                        <ShoppingBagIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                        $<CountUp delay={0.2} end={900} duration={1} />
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>

                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack spacing={1}>

                  <Card sx={{ minWidth: 345 }} className='gradientlight'>
                    <Typography gutterBottom variant="h6" component="div">
                      <Stack spacing={2} direction="row">
                        <div className='iconstyle'>
                          <StorefrontIcon />
                        </div>
                        <div className='paddingall'>
                          <span className='pricetitle'>$<CountUp delay={0.2} end={203} duration={1} />k</span>
                          <br />
                          <span className='pricesubtitle'>Total Income</span>
                        </div>
                      </Stack>
                    </Typography>
                  </Card>

                  <Card sx={{ minWidth: 345 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      <Stack spacing={2} direction="row">
                        <div className='iconstyleblack'>
                          <StorefrontIcon />
                        </div>
                        <div className='paddingall'>
                          <span className='pricetitle'>$<CountUp delay={0.2} end={203} duration={1} />k</span>
                          <br />
                          <span className='pricesubtitle'>Total Income</span>
                        </div>
                      </Stack>
                    </Typography>
                  </Card>

                </Stack>
              </Grid>

            </Grid>

            <Box height={15} />

            <Grid container spacing={2}>

              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                      <BarChart />
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <div className='paddingall'>
                        <span className='pricetitle'>Popular Product</span>
                      </div>
                      <AccordionDash />
                    </Typography>

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
