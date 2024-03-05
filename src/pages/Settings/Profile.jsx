import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent, Stack, TextField } from '@mui/material';

export default function Profile() {
    return (
        <div>
            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                {/* <DrawerHeader /> */}

                {/* <Box height={15} /> */}

                <Grid container spacing={2}>

                    <Grid item xs={6}>
                        <Card sx={{ height: 60 + "vh" }}>
                            
                            <CardContent>
                                
                                <Typography gutterBottom variant="h5" component="div">
                                    <div className='paddingall'>
                                        <span className='pricetitle'>Personal Information</span>
                                    </div>
                                </Typography>

                            </CardContent>
                            
                            <Grid container spacing={2}>

                                <Grid item xs={10}>
                                    <TextField id="outlined-basic" type="text" label="Name" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField id="outlined-basic" type="number" label="Price" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField id="outlined-basic" type="text" label="Category" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                                </Grid>

                            </Grid>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Card sx={{ height: 60 + "vh" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <div className='paddingall'>
                                        <span className='pricetitle'>Contact Information</span>
                                    </div>
                                    {/* <AccordionDash /> */}
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

            </Box>
        </div>
    )
}
