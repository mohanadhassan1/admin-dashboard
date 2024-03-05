import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// import Typography from '@mui/material/Typography';
// import Button from "@mui/material/Button";
import { Box } from '@mui/material';

export default function Personal() {
    return (
        <div>

            <Box height={20} />


            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <TextField id="outlined-basic" type="text" label="Name" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" type="number" label="Price" variant="outlined" size='small' sx={{ minWidth: "100%" }} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {/* <AttachMoneyIcon /> */}
                            </InputAdornment>
                        )
                    }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" type="text" label="Category" variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                </Grid>

            </Grid>

            <Box sx={{ m: 4 }} />

        </div>
    )
}






// const giverArr = [
//   { id: "1", label: "Place 1", groupBy: { title: "Section 1" } },
//   { id: "2", label: "Place 2", groupBy: { title: "Section 1" } },
//   { id: "3", label: "Place 3", groupBy: { title: "Section 2" } },
//   { id: "4", label: "Place 4", groupBy: { title: "Section 2" } },
//   { id: "5", label: "Place 5" },
//   { id: "6", label: "Place 6" }
// ];

// const App = () => {
//   // Group items by section title
//   const sections = [];
//   const itemsWithoutCategory = [];


//   giverArr.forEach(item => {
//     if (item.groupBy && item.groupBy.title) {
//       if (!sections[item.groupBy.title]) {
//         sections[item.groupBy.title] = [];
//       }
//       sections[item.groupBy.title].push(item.id, item.label);
//     }
//     else {
//         itemsWithoutCategory.push(item);
//     }
//   });

//   return (
//     <div>
//       {Object.entries(sections).map(([title, labels]) => (
//         <div key={title}>
//           <h2>{title}</h2>
//           <ul>
//             {labels.map(label => (
//               <li key={label}>{label}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       {itemsWithoutCategory.map(item => (
//         <div key={item.id}>
//           <p>{item.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
