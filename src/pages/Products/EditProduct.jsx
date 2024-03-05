// import { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import { IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import TextField from '@mui/material/TextField';
// import Button from "@mui/material/Button";
// import MenuItem from '@mui/material/MenuItem';
// import InputAdornment from '@mui/material/InputAdornment';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import { db } from "../../firebase/firebase-config";
// import {
//     collection,
//     getDocs,
//     updateDoc,
//     doc,
// } from "firebase/firestore";
// import Swal from "sweetalert2";
// import { useAppStore } from '../../AppStore';

// export default function EditProduct( fid, closeEvent ) {

//     const [name, setName] = useState("")
//     const [price, setPrice] = useState("")
//     const [category, setCategory] = useState("")
//     const setRows = useAppStore((state) => state.setRows)
//     const empCollectionRef = collection(db, "products");

//     useEffect(() => {
//         console.log("FID: " + fid.id);
//         setName(fid.name);
//         setPrice(fid.price);
//         setCategory(fid.category);
//       }, []);

//     const handleNameChange = (event) => {
//         setName(event.target.value);
//     };

//     const handlePriceChange = (event) => {
//         setPrice(event.target.value);
//     };

//     const handleCategoryChange = (event) => {
//         setCategory(event.target.value);
//     };

//     const createProduct = async () => {
//         const productDoc = doc(db, "products", fid.id);
//         const newFields = {
//             name: name,
//             price: Number(price),
//             category: category,
//             data: String(new Date()),
//         }
//         await updateDoc(productDoc, newFields);
//         getProducts();
//         closeEvent();
//         Swal.fire("Submitted", "Your file has been updated.", "success");
//     }

//     const getProducts = async () => {
//         const data = await getDocs(empCollectionRef);
//         setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     const categories = [
//         {
//             value: 'Mobile',
//             label: 'Mobile',
//         },
//         {
//             value: 'Labtop',
//             label: 'Laptop',
//         },
//         {
//             value: 'Speaker',
//             label: 'Speaker',
//         },
//     ];

//     return (
//         <>
//             <Box sx={{ m: 2 }} />
//             <Typography variant='h5' align='center'>
//                 Edit Product
//             </Typography>

//             <IconButton style={{ position: "absolute", top: "0", right: "0" }} onClick={closeEvent}>
//                 <CloseIcon />
//             </IconButton>

//             <Box height={20} />
//             <Grid container spacing={2}>

//                 <Grid item xs={12}>
//                     <TextField id="outlined-basic" type="text" label="Name" value={name} onChange={handleNameChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} />
//                 </Grid>
//                 <Grid item xs={6}>
//                     <TextField id="outlined-basic" type="number" label="Price" value={price} onChange={handlePriceChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} InputProps={{
//                         startAdornment: (
//                             <InputAdornment position="start">
//                                 <AttachMoneyIcon />
//                             </InputAdornment>
//                         )
//                     }} />
//                 </Grid>
//                 <Grid item xs={6}>
//                     <TextField id="outlined-basic" type="text" select label="Category" value={category} onChange={handleCategoryChange} variant="outlined" size='small' sx={{ minWidth: "100%" }} >
//                         {categories.map((option) => (
//                             <MenuItem key={option.value} value={option.value}>
//                                 {option.label}
//                             </MenuItem>
//                         ))}
//                     </TextField>
//                 </Grid>

//                 <Grid item xs={12}>
//                     <Typography variant='h5' align='center'>
//                         <Button variant="contained" onClick={createProduct}>
//                             Submit
//                         </Button>
//                     </Typography>
//                 </Grid>
//             </Grid>
//             <Box sx={{ m: 4 }} />
//         </>
//     )
// }
