// src/components/OrderForm.tsx
import { useState, FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";

interface OrderFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  product: string;
  pack: string;
  quantity: string;
}

const milkProducts = [
  { value: "Double Toned Milk - 1.5% Fat", label: "Double Toned Milk - 1.5% Fat" },
  { value: "Toned Milk - 3% Fat", label: "Toned Milk - 3% Fat" },
  { value: "Standardized Milk - 3.5% Fat", label: "Standardized Milk - 3.5% Fat" },
  { value: "Full Cream Milk - 4% Fat", label: "Full Cream Milk - 4% Fat" },
  { value: "Gold Milk - 4.5% Fat", label: "Gold Milk - 4.5% Fat" },
];

const packOptions = ["300ml", "500ml"];

const quantityOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

const OrderForm = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    product: "",
    pack: "",
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
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwY6fQ5hJ6NL9kaJHwr12mWzeW1wbcibKzWGiMka6DciNLikjq1OjjVSMePxecN3J3IwA/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const message = `
*New Order Request*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Address:* ${formData.address}

*Product:* ${formData.product}
*Pack:* ${formData.pack}
*Quantity:* ${formData.quantity}

---
Sent from Vizhis Dairy Farm Website
      `.trim();

      const whatsappNumber = "918680050504";
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      setSubmitStatus({
        type: 'success',
        message: 'Order saved! Opening WhatsApp to confirm your order...'
      });

      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          product: "",
          pack: "",
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
      <form onSubmit={handleSubmit} className="space-y-5 bg-emerald-50/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200/50 shadow-soft">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-emerald-900 mb-1.5">
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
            className="w-full px-4 py-2.5 rounded-lg border border-emerald-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all disabled:opacity-60"
            placeholder="Enter your full name"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-emerald-900 mb-1.5">
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
            className="w-full px-4 py-2.5 rounded-lg border border-emerald-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all disabled:opacity-60"
            placeholder="10-digit mobile number"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-emerald-900 mb-1.5">
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
            className="w-full px-4 py-2.5 rounded-lg border border-emerald-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all disabled:opacity-60"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-emerald-900 mb-1.5">
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
            className="w-full px-4 py-2.5 rounded-lg border border-emerald-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all resize-none disabled:opacity-60"
            placeholder="Enter your complete delivery address"
          />
        </div>

        {/* Product */}
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-emerald-900 mb-1.5">
            Select Milk *
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 rounded-lg border border-emerald-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all disabled:opacity-60"
          >
            <option value="">Choose milk variant</option>
            {milkProducts.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* Pack */}
        <div>
          <label htmlFor="pack" className="block text-sm font-medium text-emerald-900 mb-1.5">
            Pack Size *
          </label>
          <select
            id="pack"
            name="pack"
            value={formData.pack}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 rounded-lg border border-emerald-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all disabled:opacity-60"
          >
            <option value="">Select pack</option>
            {packOptions.map((pack) => (
              <option key={pack} value={pack}>
                {pack}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity - Now Dropdown 1 to 10 */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-emerald-900 mb-1.5">
            Quantity (packs) *
          </label>
          <select
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 rounded-lg border border-emerald-200/50 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all disabled:opacity-60"
          >
            <option value="">Select quantity</option>
            {quantityOptions.map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg text-sm font-medium ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Order via WhatsApp
            </>
          )}
        </button>

        <p className="text-xs text-emerald-700/70 text-center">
          Your order will be saved and you'll be redirected to WhatsApp to confirm
        </p>
      </form>
    </div>
  );
};

export default OrderForm;