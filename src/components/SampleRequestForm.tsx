import { useState, FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";

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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // STEP 1: Send to Google Sheets
      // Replace this URL with your deployed Google Apps Script web app URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwY6fQ5hJ6NL9kaJHwr12mWzeW1wbcibKzWGiMka6DciNLikjq1OjjVSMePxecN3J3IwA/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Note: With no-cors mode, we can't read the response, but the data is sent
      // If you need to verify the response, you'll need to set up CORS in your Apps Script
      
      // STEP 2: Format message for WhatsApp
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

      // WhatsApp number (include country code without + or spaces)
      const whatsappNumber = "918680050504";
      
      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      // Show success message
      setSubmitStatus({
        type: 'success',
        message: 'Order saved! Opening WhatsApp to confirm your order...'
      });

      // Reset form after a short delay
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          product: "",
          quantity: "",
        });
        setSubmitStatus({ type: null, message: '' });
      }, 3000);

    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an issue saving your order. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <div>
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
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="e.g., 2 Litres, 500g, etc."
          />
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-md disabled:hover:bg-primary"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting Order...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Order via WhatsApp
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Your order will be saved and you'll be redirected to WhatsApp to confirm
        </p>
      </form>
    </div>
  );
};

export default OrderForm;