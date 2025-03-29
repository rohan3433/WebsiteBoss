import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateWebsite() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    industryType: "pharmacy",
    companyName: "",
    colorTheme: "blue",
    contactInfo: {
      address: "",
      phone: "",
      email: "",
    },
    aboutContent: "",
    products: [{ name: "", sku: "", price: "", description: "" }],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setForm({
        ...form,
        [parent]: {
          ...form[parent],
          [child]: value,
        },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...form.products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      [field]: value,
    };
    setForm({ ...form, products: updatedProducts });
  };

  const addProduct = () => {
    setForm({
      ...form,
      products: [
        ...form.products,
        { name: "", sku: "", price: "", description: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/websites/create",
        form
      );
      alert("Website Created!");
     
      const websiteId = res.data.websiteURL.split("/").pop();
      navigate(`/website/${websiteId}`);
    } catch (error) {
      console.error("Error creating website:", error);
      alert("Failed to create website!");
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const industryOptions = [
    { value: "pharmacy", label: "Pharmacy" },
    { value: "cosmetics", label: "Cosmetics" },
    { value: "grocery", label: "Grocery Store" },
    { value: "restaurant", label: "Restaurant" },
    { value: "clothing", label: "Clothing Store" },
  ];

  const colorOptions = [
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "red", label: "Red" },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold">Create Your Website</h2>
      <p className="text-gray-600 mb-6">Step {step} of 3</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                placeholder="Company Name"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industry Type
              </label>
              <select
                name="industryType"
                value={form.industryType}
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
                required
              >
                {industryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Color Theme
              </label>
              <select
                name="colorTheme"
                value={form.colorTheme}
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
                required
              >
                {colorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                About Content
              </label>
              <textarea
                name="aboutContent"
                value={form.aboutContent}
                placeholder="Describe your business"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                onChange={handleChange}
              />
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Information</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="contactInfo.address"
                value={form.contactInfo.address}
                placeholder="Business Address"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="contactInfo.phone"
                value={form.contactInfo.phone}
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="contactInfo.email"
                value={form.contactInfo.email}
                placeholder="Email Address"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                className="w-1/2 bg-gray-400 text-white py-2 rounded"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                type="button"
                className="w-1/2 bg-blue-600 text-white py-2 rounded"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Products</h3>

            {form.products.map((product, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded space-y-3"
              >
                <h4 className="font-medium">Product {index + 1}</h4>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value={product.name}
                    placeholder="Product Name"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) =>
                      handleProductChange(index, "name", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    SKU
                  </label>
                  <input
                    type="text"
                    value={product.sku}
                    placeholder="SKU"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) =>
                      handleProductChange(index, "sku", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    value={product.price}
                    placeholder="Price"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) =>
                      handleProductChange(index, "price", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={product.description}
                    placeholder="Product Description"
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="2"
                    onChange={(e) =>
                      handleProductChange(index, "description", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              className="w-full border border-gray-300 text-gray-700 py-2 rounded"
              onClick={addProduct}
            >
              + Add Another Product
            </button>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                className="w-1/2 bg-gray-400 text-white py-2 rounded"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                type="submit"
                className="w-1/2 bg-blue-600 text-white py-2 rounded"
              >
                Create Website
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
