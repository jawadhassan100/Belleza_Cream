const orderConfirmation = (userName, order) => {
    return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #fff; background-color: #000; padding: 20px;">
        <div style="max-width: 600px; margin: auto; border: 1px solid #444; padding: 20px;">
          <h1 style="color: #FFD700; text-align: center;">Order Confirmation</h1>
          <p style="font-size: 16px;">Hello <strong>${userName}</strong>,</p>
          <p>Thank you for placing your order with us! We're excited to process your order and get it delivered to you as soon as possible.</p>
          
          <h2 style="color: #FFD700; border-bottom: 1px solid #FFD700; padding-bottom: 5px;">Order Details</h2>
          <ul style="list-style: none; padding: 0; font-size: 14px;">
            ${order.products.map(item => `
              <li style="margin-bottom: 15px; border-bottom: 1px solid #444; padding-bottom: 10px;">
                <strong>Product ID:</strong> ${item.product}<br />
                <strong>Quantity:</strong> ${item.quantity}
              </li>
            `).join('')}
          </ul>
          
          <p style="font-size: 16px; margin: 10px 0;">
            <strong>Total Price:</strong> ${order.totalPrice} AED
          </p>
          
          <p style="font-size: 16px; margin: 10px 0;">
            <strong>Shipping Address:</strong> ${order.address}, ${order.city}, ${order.country}
          </p>
          
          <p style="font-size: 16px; margin: 10px 0;">
            <strong>Payment Method:</strong> ${order.paymentMethod.toUpperCase()}
          </p>
          
          <p style="font-size: 14px; margin-top: 20px;">
            We will notify you when your items are on their way. If you have any questions or concerns, feel free to contact us.
          </p>
          
          <footer style="margin-top: 30px; text-align: center; font-size: 12px; color: #ccc;">
            <p>Thank you for shopping with Belleza!</p>
            <p>&copy; ${new Date().getFullYear()} Your Company Name</p>
          </footer>
        </div>
      </div>
    `;
  };
  
  module.exports = orderConfirmation;
  