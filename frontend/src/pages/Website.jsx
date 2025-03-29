import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Website() {
  const { id } = useParams();
  const [website, setWebsite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebsite = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/websites/${id}`);
        setWebsite(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching website:", err);
        setError("Failed to load website");
        setLoading(false);
      }
    };

    fetchWebsite();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!website)
    return <div className="text-center mt-10">Website not found</div>;

 
  const themeColors = {
    blue: {
      primary: "bg-blue-600",
      secondary: "text-blue-800",
      light: "bg-blue-100",
    },
    green: {
      primary: "bg-green-600",
      secondary: "text-green-800",
      light: "bg-green-100",
    },
    red: {
      primary: "bg-red-600",
      secondary: "text-red-800",
      light: "bg-red-100",
    },
  };

  const colors = themeColors[website.colorTheme] || themeColors.blue;

  return (
    <div className={`min-h-screen ${colors.light}`}>
      <header className={`${colors.primary} text-white p-4`}>
        <h1 className="text-2xl font-bold">{website.companyName}</h1>
        <p>Industry: {website.industryType}</p>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <section className="mt-6">
          <h2 className={`text-xl font-bold ${colors.secondary}`}>About Us</h2>
          <p className="mt-2">
            {website.aboutContent || "Company description goes here"}
          </p>
        </section>

        <section className="mt-6">
          <h2 className={`text-xl font-bold ${colors.secondary}`}>
            Our Products
          </h2>
          {website.products && website.products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {website.products.map((product, index) => (
                <div key={index} className="border rounded p-4">
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-gray-600">SKU: {product.sku}</p>
                  <p className="font-bold mt-2">${product.price}</p>
                  <button
                    className={`mt-2 ${colors.primary} text-white px-4 py-1 rounded`}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-2">No products available</p>
          )}
        </section>

        <section className="mt-6">
          <h2 className={`text-xl font-bold ${colors.secondary}`}>
            Contact Us
          </h2>
          <div className="mt-2">
            <p>{website.contactInfo?.address || "Address not provided"}</p>
            <p>Phone: {website.contactInfo?.phone || "Phone not provided"}</p>
            <p>Email: {website.contactInfo?.email || "Email not provided"}</p>
          </div>
        </section>
      </main>

      <footer className={`${colors.primary} text-white p-4 mt-10`}>
        <p>© 2025 {website.companyName} - Created with Website Boss</p>
      </footer>
    </div>
  );
}
