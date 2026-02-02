import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

interface OrderFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  product: string;
  quantity: string;
}

const products = [
  "Whole Milk (6% Fat)",
  "Toned Milk (3% Fat)",
  "Double Toned Milk (1.5% Fat)",
  "Natural Curd",
];

const OrderForm = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    product: "",
    quantity: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = `
*New Order Request*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Address:* ${formData.address}

*Product:* ${formData.product}
*Quantity:* ${formData.quantity}

---
Sent from Vizhis Dairy Farm Website
    `.trim();

    // Replace with your WhatsApp number (include country code without + or spaces)
    // Example: For +91 98765 43210, use: 919876543210
    const whatsappNumber = "918680050504"; // REPLACE WITH YOUR ACTUAL NUMBER
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      product: "",
      quantity: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Enter your full name"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="10-digit mobile number"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Address */}
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Delivery Address *
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="Enter your complete delivery address"
        />
      </div>

      {/* Product Selection */}
      <div>
        <label
          htmlFor="product"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Select Product *
        </label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        >
          <option value="">Choose a product</option>
          {products.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>

      {/* Quantity */}
      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Quantity *
        </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="e.g., 2 Litres, 500g, etc."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        <Send className="w-5 h-5" />
        Send Order via WhatsApp
      </button>

      <p className="text-xs text-muted-foreground text-center">
        You'll be redirected to WhatsApp to send your order details
      </p>
    </form>
  );
};

export default OrderForm;