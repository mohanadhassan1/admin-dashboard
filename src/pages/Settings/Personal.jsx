import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent, } from '@mui/material';





export default function Personal() {
    return (
        <div>

            <Box component="main" sx={{ flexGrow: 1, p: 0 }}>

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

                            <Grid container spacing={2} sx={{ paddingX: 5 }}>

                                <Grid item xs={12}>
                                    <TextField id="outlined-basic" type="text" label="Name" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" type="text" label="Location" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" type="text" label="Gender" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
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
                                </Typography>

                            </CardContent>

                            <Grid container spacing={2} sx={{ paddingX: 5 }}>

                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" type="number" label="Phone No." variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" type="email" label="Email" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="outlined-basic" type="text" label="Profile URL" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="outlined-basic" type="text" label="Address" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                                </Grid>

                            </Grid>
                        </Card>
                    </Grid>

                </Grid>

            </Box>
        </div>

        
    )
}

