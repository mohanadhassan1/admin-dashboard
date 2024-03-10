import Grid from '@mui/material/Grid';
import { Box, Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, details) {
    return { name, details };
}

const rows = [
    createData('Full name', "Mohanad"),
    createData('Family Name', "Hassan"),
    createData('Address', "El-Maadi, Cairo" ),
    createData('Website', "https://mohanad.vercel.app/" ),
];

export default function Profile() {

    return (

        <div>
            <Box component="main" sx={{ flexGrow: 1, p: 0 }}>

                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Card sx={{ height: 60 + "vh" }}>

                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div">
                                    <div className='paddingall'>
                                        <span className='pricetitle'>Mohanad Hassan</span>
                                    </div>
                                </Typography>

                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <EmailIcon sx={{ marginRight: 3 }} /> mohanadhassan246@gmail.com
                                    </AccordionSummary>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <LocalPhoneIcon sx={{ marginRight: 3 }} /> +20 109-978-5268
                                    </AccordionSummary>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel3-content"
                                        id="panel3-header"
                                    >
                                        <LocationOnIcon sx={{ marginRight: 3 }} /> 3 El-Horia St. El-Maadi, Cairo
                                    </AccordionSummary>
                                </Accordion>

                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={7}>
                        <Card sx={{ height: 60 + "vh" }}>

                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div">
                                    <div className='paddingall'>
                                        <span className='pricetitle'>Personal Information</span>
                                    </div>
                                </Typography>
                                <Typography>
                                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium commodi debitis dolore dicta totam ullam saepe. Nostrum, laboriosam voluptas, soluta voluptatibus repellat voluptate neque placeat quod porro minus nulla!</p>
                                </Typography>

                                <Typography gutterBottom variant="h5" component="div">
                                    <div className='paddingall'>
                                        <span className='pricetitle'>Details</span>
                                    </div>
                                </Typography>

                                <TableContainer component={Paper} sx={{ width: 500 }}>
                                    <Table aria-label="simple table">
                                        
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="left">{row.details}</TableCell>
                                                    
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </CardContent>


                        </Card>
                    </Grid>


                </Grid>

            </Box>

        </div>
    )
}
