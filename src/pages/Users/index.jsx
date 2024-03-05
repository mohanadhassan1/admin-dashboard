import SideNav from '../../components/SideNav/index'
import NavBar from '../../components/NavBar/index'

import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function Users() {
    return (
        <>
            <div className='bgcolor'>

                <NavBar />

                <Box sx={{ display: 'flex' }}>

                    <SideNav />

                    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                        <DrawerHeader />
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                            imperdiet.
                        </Typography>

                    </Box>

                </Box>
            </div>

        </>
    )
}
