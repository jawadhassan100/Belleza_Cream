import axios from "axios";
import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";
import config from "../../config/config";
import { useNavigate, useParams } from "react-router";

const BASE_URL = config.BASE_URL;

const OrderForm = () => {
  const { id } = useParams(); // Get the product ID from the URL params
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()
  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    quantity: 1,
  });

  const [myPrice, setMyPrice] = useState(0);

  // Fetch product details when component mounts or `id` changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/product/${id}`); // Fetch product using the ID
        const price = response.data.price;
        if (price && !isNaN(price)) {
          setMyPrice(price * orderDetails.quantity); // Set total price based on quantity
        } else {
          setMyPrice(0);  // If price is invalid, set to 0
        }
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };

    fetchProduct();
  }, [id, orderDetails.quantity]); // Re-fetch product details when `id` or `quantity` changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/order/create`, {
        ...orderDetails,
        productId: id,
      });

      if (response.status === 200) {
        enqueueSnackbar("Order Created Successfully", {
          variant: "success",
          autoHideDuration: 1000,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  };

  return (
    <div className="max-w-lg sm:mx-auto md:mx-auto lg:mx-auto mx-3  mt-5 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name and Email in the same row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={orderDetails.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
          <label className="block font-semibold">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            value={orderDetails.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
         
        </div>

        {/* Phone Number */}
        
        <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={orderDetails.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

        {/* Address */}
        <div>
          <label className="block font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={orderDetails.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* City and Country in the same row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={orderDetails.city}
              onChange={handleChange}
              placeholder="Enter your city"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold">Country</label>
            <input
              type="text"
              name="country"
              value={orderDetails.country}
              onChange={handleChange}
              placeholder="Enter your country"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Quantity and Price in the same row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={orderDetails.quantity}
              onChange={handleChange}
              min="1"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold">Total Price</label>
            <input
              type="text"
              value={`${myPrice} PKR`}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-200"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-800 transition duration-300"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
