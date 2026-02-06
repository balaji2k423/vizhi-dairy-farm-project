// src/pages/Order.tsx
import { useState, FormEvent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Phone, MapPin, Building2, Home, Droplet, CheckCircle, ArrowLeft, Mail, ChevronDown, Package } from "lucide-react";

interface OrderFormData {
  name: string;
  contactNo: string;
  email: string;
  apartmentName: string;
  address: string;
  doorNo: string;
  block: string;
  floorNo: string;
  quantity: string;
  productName: string;
}

const apartments = [
  "Isha Armonia Apartments",
  "Casagrand Nextovn",
  "Sri Kamatchi Apartments",
  "Sreevatsa Vedh - Apartments",
  "KG Prime City Apartment",
  "Jains Anayna",
  "Gowtham Royal Palm",
  "GREENFIELD BOUGAINVILLEA APARTMENT",
  "Meadows Apartment",
  "Sreevatsa Viswa",
  "Shree Aishwaryam Apartment Homes",
  "Central Park Apartment",
  "Hitec City",
  "Icon City - Town and City Developers",
  "Others",
];

const floorNumbers = [
  "GROUND",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const quantities = ["500 ML", "1 Litre", "1.5 Litre"];

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Replace with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwNRPOaroUMZCJsUVymm7_kqQNI6j8i0lbBQAx7DLlFWzzgWwFD99BgvXGhNBtpRHAB/exec";

  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    contactNo: "",
    email: "",
    apartmentName: "",
    address: "",
    doorNo: "",
    block: "",
    floorNo: "",
    quantity: "",
    productName: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const product = params.get("product");
    if (product) {
      setFormData((prev) => ({ ...prev, productName: product }));
    }
  }, [location]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: formData.name,
          contactNo: formData.contactNo,
          email: formData.email,
          apartmentName: formData.apartmentName,
          address: formData.address,
          doorNo: formData.doorNo,
          block: formData.block,
          floorNo: formData.floorNo,
          quantity: formData.quantity,
          productName: formData.productName,
        }),
      });

      setShowSuccess(true);

      setTimeout(() => {
        setFormData({
          name: "",
          contactNo: "",
          email: "",
          apartmentName: "",
          address: "",
          doorNo: "",
          block: "",
          floorNo: "",
          quantity: "",
          productName: "",
        });
        setShowSuccess(false);
        navigate("/products");
      }, 3000);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("There was an error submitting your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sage-light/40 to-green-50/50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-12 shadow-2xl text-center max-w-md border border-emerald-200/50">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">
            Order Placed Successfully!
          </h2>
          <p className="text-emerald-700 mb-6">
            Thank you for your order. We'll contact you shortly!
          </p>
          <div className="animate-pulse flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sage-light/40 to-green-50/50">
      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="container-custom max-w-4xl">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-6 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </button>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
              <ShoppingCart className="w-4 h-4" />
              Place Your Order
            </div>
            <h1 className="heading-xl text-emerald-950 mb-4">
              Complete Your Order
            </h1>
            <p className="body-lg text-emerald-800/80 max-w-2xl mx-auto">
              Fill in your details below and we'll process your order
            </p>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="pb-20">
        <div className="container-custom max-w-3xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-200/50">
            {/* Product Name (if provided) */}
            {formData.productName && (
              <div className="mb-8 p-4 bg-emerald-50 rounded-xl border border-emerald-200/50">
                <p className="text-sm text-emerald-700 mb-1">Selected Product:</p>
                <p className="text-xl font-serif font-bold text-emerald-900">
                  {formData.productName}
                </p>
              </div>
            )}

            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-xl font-serif font-bold text-emerald-900 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-600" />
                Personal Information
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-emerald-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-emerald-900 placeholder:text-emerald-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Contact Number */}
                  <div>
                    <label htmlFor="contactNo" className="block text-sm font-semibold text-emerald-900 mb-2">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contactNo"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-emerald-900 placeholder:text-emerald-400"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-emerald-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-emerald-900 placeholder:text-emerald-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="mb-8">
              <h3 className="text-xl font-serif font-bold text-emerald-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                Delivery Address
              </h3>

              <div className="space-y-5">
                {/* Apartment Name */}
                <div className="relative">
                  <label htmlFor="apartmentName" className="block text-sm font-semibold text-emerald-900 mb-2">
                    Apartment Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="apartmentName"
                      name="apartmentName"
                      value={formData.apartmentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-emerald-900 appearance-none cursor-pointer pr-10"
                    >
                      <option value="">Select your apartment</option>
                      {apartments.map((apt) => (
                        <option key={apt} value={apt}>
                          {apt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 pointer-events-none" />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-emerald-900 mb-2">
                    Complete Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-emerald-900 placeholder:text-emerald-400"
                    placeholder="Enter your complete address with landmarks"
                  />
                </div>

                {/* Door No and Block - Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="doorNo" className="block text-sm font-semibold text-emerald-900 mb-2">
                      Door Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="doorNo"
                      name="doorNo"
                      value={formData.doorNo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-emerald-900 placeholder:text-emerald-400"
                      placeholder="e.g., A-101"
                    />
                  </div>

                  <div>
                    <label htmlFor="block" className="block text-sm font-semibold text-emerald-900 mb-2">
                      Block
                    </label>
                    <input
                      type="text"
                      id="block"
                      name="block"
                      value={formData.block}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-emerald-900 placeholder:text-emerald-400"
                      placeholder="e.g., Block A"
                    />
                  </div>
                </div>

                {/* Floor Number */}
                <div className="relative">
                  <label htmlFor="floorNo" className="block text-sm font-semibold text-emerald-900 mb-2">
                    Floor Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="floorNo"
                      name="floorNo"
                      value={formData.floorNo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-emerald-900 appearance-none cursor-pointer pr-10"
                    >
                      <option value="">Select floor</option>
                      {floorNumbers.map((floor) => (
                        <option key={floor} value={floor}>
                          {floor}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="mb-8">
              <h3 className="text-xl font-serif font-bold text-emerald-900 mb-6 flex items-center gap-2">
                <Droplet className="w-5 h-5 text-emerald-600" />
                Order Details
              </h3>

              <div className="relative">
                <label htmlFor="quantity" className="block text-sm font-semibold text-emerald-900 mb-2">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-emerald-900 appearance-none cursor-pointer pr-10"
                  >
                    <option value="">Select quantity</option>
                    {quantities.map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing Order...
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Place Order
                </>
              )}
            </button>

            <p className="text-xs text-emerald-600 text-center mt-4">
              Your information is secure and will be used only for order processing
            </p>
          </form>
        </div>
      </section>

      <style>{`
        /* Ensure dropdown opens downwards */
        select {
          background-image: none !important;
        }
      `}</style>
    </div>
  );
};

export default Order;