import React from "react";

const OthersTemplate = ({ website, primaryColor }) => {
 
  const safeWebsite = {
    companyName: website?.companyName || "Company Name",
    customIndustry: website?.customIndustry || "business",
    aboutContent: website?.aboutContent || "",
    contactInfo: {
      address: website?.contactInfo?.address || "Address",
      phone: website?.contactInfo?.phone || "Phone",
      email: website?.contactInfo?.email || "Email",
    },
    products: Array.isArray(website?.products) ? website.products : [],
  };


  const industryType = safeWebsite.customIndustry;

  return (
    <div className="min-h-screen flex flex-col">
      {console.log()}
      <header className={`${primaryColor} text-white p-4`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">{safeWebsite.companyName}</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>


      <main className="flex-grow">
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">
              Welcome to {safeWebsite.companyName}
            </h2>
            <p className="text-lg mb-6">
              {safeWebsite.aboutContent ||
                `Your trusted ${industryType} provider`}
            </p>
            <button className={`${primaryColor} text-white px-6 py-2 rounded`}>
              Learn More
            </button>
          </div>
        </section>


        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safeWebsite.products.length > 0 ? (
                safeWebsite.products.map((product, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                      <span className="text-gray-500">Product Image</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">
                        {product.name || "Product Name"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        SKU: {product.sku || "N/A"}
                      </p>
                      <p className="text-gray-700 mb-4">
                        {product.description || "No description available"}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">
                          ${product.price || "0.00"}
                        </span>
                        <button
                          className={`${primaryColor} text-white px-4 py-1 rounded text-sm`}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center p-12 border rounded">
                  <p className="text-gray-500">No products available.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">
                {safeWebsite.companyName}
              </h3>
              <p>
                {safeWebsite.aboutContent
                  ? safeWebsite.aboutContent.substring(0, 100) +
                    (safeWebsite.aboutContent.length > 100 ? "..." : "")
                  : `Your ${industryType} description`}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <address className="not-italic">
                {safeWebsite.contactInfo.address}
                <br />
                Phone: {safeWebsite.contactInfo.phone}
                <br />
                Email: {safeWebsite.contactInfo.email}
              </address>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-6 pt-6 text-center">
            <p>
              &copy; {new Date().getFullYear()} {safeWebsite.companyName}. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OthersTemplate;
