// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { backendUrl } from "../App";


// const EditProduct = ({ token }) => {
//   const { id } = useParams(); // Capture product ID from URL
//   const [product, setProduct] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.post(backendUrl + "/api/product/single", { productId: id });
//         if (response.data.success) {
//           setProduct(response.data.product);
//         } else {
//           toast.error(response.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//         toast.error(error.message);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   const handleEdit = async (event) => {
//     event.preventDefault();
//     try {
//       // Send updated product details to backend
//       // Add axios PUT/POST request logic here
//       toast.success("Product updated successfully");
//       navigate("/products"); // Redirect to product list
//     } catch (error) {
//       toast.error("Failed to update product");
//     }
//   };

//   return (
//     product && (
//       <form onSubmit={handleEdit}>
//         {/* Form fields pre-filled with `product` data */}
//       </form>
//     )
//   );
// };

// export default EditProduct;
