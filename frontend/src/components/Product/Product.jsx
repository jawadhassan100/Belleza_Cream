import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/config";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const BASE_URL = config.BASE_URL;

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch()
  useEffect(() => {
    // Fetch single product from backend
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/product`);
        if (response.data && response.data.length > 0) {
          setProduct(response.data[0]); // Take only the first product
        }
      } catch (error) {
        console.error("Error fetching product:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = async (product) => {
      try {
        dispatch(addToCart({ productId: product._id }));
    const response = await axios.post(
        `${BASE_URL}/cart/add`,
        { productId: product._id, quantity: 1 }, // Send productId and quantity
      );
      console.log('Response:', response.data);
      if (response.status === 200) {
        enqueueSnackbar(response.data.msg, {
          variant: "success",
          autoHideDuration: 1000,
        });
      }
    } catch (error) {
      enqueueSnackbar(error.response.data.msg || "Add To Cart Failed", {
        variant: "error",
        autoHideDuration: 1000,
      });
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10">No product available.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl  font-bold text-center text-purple-500 mb-10">Our Product</h1>

      {/* Responsive Layout */}
      <div className="flex py-10 flex-col md:flex-row items-center bg-purple-200 shadow-lg rounded-lg overflow-hidden">
        {/* Product Details - Left */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold text-gray-800"></span> {product.description}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold text-gray-800"></span> {product.ingredients}
          </p>
          <p className="text-2xl font-bold text-gray-600 mb-6">
            Price: <span className="text-black">{product.price} PKR</span> 
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-purple-600 text-white px-6 py-2 rounded-sm text-lg hover:bg-purple-800 transition-all"
          >
            Add to Cart
          </button>
        </div>

        {/* Product Image - Right */}
        <div className="w-full justify-end flex px-5 md:w-1/2">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-[100%] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
