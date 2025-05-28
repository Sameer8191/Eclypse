import React, { useState } from "react";

const CheckoutPage: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    zipCode: "",
    city: "",
    state: "",
    saveAddress: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed!");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Left box - Address form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col min-h-[450px] space-y-10" // increased space between form sections
        >
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Shipping Address
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* increased gap */}
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <input
              type="text"
              name="address1"
              value={form.address1}
              onChange={handleChange}
              placeholder="Address 1"
              className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 mt-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" // mt-6 instead of mt-4
              required
            />
            <input
              type="text"
              name="address2"
              value={form.address2}
              onChange={handleChange}
              placeholder="Address 2 (optional)"
              className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 mt-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" // mt-6 instead of mt-4
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6"> {/* gap-8 and mt-6 */}
              <input
                type="text"
                name="zipCode"
                value={form.zipCode}
                onChange={handleChange}
                placeholder="Zip Code"
                className="bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                className="bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <label className="inline-flex items-center space-x-2 text-gray-300">
            <input
              type="checkbox"
              name="saveAddress"
              checked={form.saveAddress}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span>Save this address</span>
          </label>
        </form>

        {/* Right box - Order Summary */}
        <div className="flex flex-col min-h-[400px] border border-gray-700 rounded p-6 bg-gray-700 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2 text-gray-200">
              <span>Silhouette No. 1 – Vermilion</span>
              <span className="font-semibold">7,999</span>
            </div>

            <div className="flex justify-between mb-2 text-gray-200">
              <span>Shipping and handling:</span>
              <span>200</span>
            </div>

            <div className="flex justify-between mb-2 text-gray-200">
              <span>Before tax:</span>
              <span>6,599</span>
            </div>

            <div className="flex justify-between mb-2 text-gray-200">
              <span>Tax Collected:</span>
              <span>1,400</span>
            </div>

            <hr className="my-4 border-gray-600" />

            <div className="flex justify-between font-bold text-lg text-white">
              <span>Order Total:</span>
              <span>8,199</span>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="self-end bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
