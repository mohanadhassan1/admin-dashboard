import SideNav from '../../components/SideNav/index'
import NavBar from '../../components/NavBar/index'
import List from './List'

import { Box, Card, CardContent } from '@mui/material'

import { styled } from '@mui/material/styles';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function Settings() {
  return (
    <>
      <div className='bgcolor'>
        <NavBar />

        <Box sx={{ width: 110 + "%", display: 'flex' }}>

          <SideNav />

          <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />

            <Card sx={{ minWidth: 345, height: 85 + "vh" }}>
              <CardContent>
                <List />
              </CardContent>
            </Card>
          </Box>

        </Box>
      </div>
    </>
  )
}

