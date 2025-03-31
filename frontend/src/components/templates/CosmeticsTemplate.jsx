const CosmeticsTemplate = ({ website, primaryColor }) => (
  <div className="min-h-screen bg-gray-50 text-gray-800">
    <header className={`${primaryColor} text-white py-6 shadow-md`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{website.companyName}</h1>
          <p className="opacity-80">Beauty & Skincare</p>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>

    <div className="bg-white py-16 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Reveal Your Natural Beauty</h2>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-600">
          Premium skincare and beauty products for the confident you
        </p>
      </div>
    </div>

    <main className="max-w-6xl mx-auto px-6 py-10">
      <section id="about" className="bg-white shadow-lg rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold border-b pb-3">
          About Our Brand
        </h2>
        <p className="mt-4 text-gray-600">
          {website.aboutContent ||
            "We create premium beauty products using only the finest ingredients. Our cosmetics are cruelty-free, environmentally friendly, and designed to enhance your natural beauty."}
        </p>
      </section>

      <section id="products" className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        {website.products && website.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {website.products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg overflow-hidden group transition hover:shadow-xl"
              >
                <div className="bg-gray-100 h-48 -mx-6 -mt-6 mb-6 flex items-center justify-center">
                  <div
                    className={`w-24 h-24 rounded-full ${primaryColor} flex items-center justify-center text-white`}
                  >
                    <span className="text-xl font-semibold">NEW</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">SKU: {product.sku}</p>
                <p className="mt-3 text-gray-600 text-sm line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-2xl font-semibold">${product.price}</p>
                  <button
                    className={`${primaryColor} text-white px-4 py-2 rounded-full hover:opacity-90 transition`}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-gray-600">No products available</p>
        )}
      </section>

      <section id="contact" className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-semibold border-b pb-3">Get In Touch</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
            <p className="mb-2">
              <span className="font-medium">Visit:</span>{" "}
              {website.contactInfo?.address || "Address not provided"}
            </p>
            <p className="mb-2">
              <span className="font-medium">Call:</span>{" "}
              {website.contactInfo?.phone || "Phone not provided"}
            </p>
            <p className="mb-2">
              <span className="font-medium">Email:</span>{" "}
              {website.contactInfo?.email || "Email not provided"}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Join Our Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none"
              />
              <button
                className={`${primaryColor} text-white px-4 py-2 rounded-r`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className={`${primaryColor} text-white py-6 mt-12 shadow-md`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{website.companyName}</h3>
            <p className="text-sm opacity-80">Beauty & Skincare Products</p>
          </div>
          <p className="text-sm">
            © 2025 {website.companyName} - Created with Website Boss
          </p>
        </div>
      </div>
    </footer>
  </div>
);
export default CosmeticsTemplate;