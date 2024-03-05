import SideNav from '../../components/SideNav/index'
import NavBar from '../../components/NavBar/index'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Stack from '@mui/material/Stack';

import "../../Dash.css";

import ProductList from './ProductList';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


export default function Products() {
  return (
    <>
      <div className='bgcolor'>

        <NavBar />

        <Box sx={{ display: 'flex' }}>

          <SideNav />

          <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />

            <Grid container spacing={1}>


              <Grid item xs={12}>
                <Stack spacing={1}>

                  <Card sx={{ minWidth: 345, height: 75 + "vh" }}>
                    <CardContent>
                      <ProductList />
                    </CardContent>
                  </Card>

                </Stack>
              </Grid>

            </Grid>

            <Box height={15} />

          </Box>

        </Box>

      </div>
    </>
  )
}