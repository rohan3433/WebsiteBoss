const GroceryTemplate = ({ website, primaryColor }) => (
  <div className="min-h-screen bg-gray-50 text-gray-800">
    <header className={`${primaryColor} text-white py-6 shadow-md`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{website.companyName}</h1>
          <p className="opacity-80">Fresh Food Daily</p>
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

    <div className="bg-white py-12 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Fresh Food, Fresh Life
        </h2>
        <p className="text-xl text-center mt-4 max-w-3xl mx-auto text-gray-600">
          Quality groceries delivered to your doorstep
        </p>
      </div>
    </div>

    <main className="max-w-6xl mx-auto px-6 py-10">
      <section id="about" className="bg-white shadow-lg rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold border-b pb-3">
          About Our Store
        </h2>
        <p className="mt-4 text-gray-600">
          {website.aboutContent ||
            "We source the freshest produce and highest quality grocery items for our customers. Our mission is to make healthy eating accessible to everyone with fair prices and convenient service."}
        </p>
      </section>

      <section id="products" className="bg-white shadow-lg rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold border-b pb-3">
          Featured Products
        </h2>
        {website.products && website.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {website.products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
              >
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Product Image</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.sku}</p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <p className="text-lg font-semibold">${product.price}</p>
                    <button
                      className={`${primaryColor} text-white px-3 py-1 rounded text-sm hover:opacity-90 transition`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-gray-600">No products available</p>
        )}
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <section className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Weekly Specials</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Fresh Vegetables</span>
              <span className="font-semibold text-green-600">20% OFF</span>
            </li>
            <li className="flex justify-between">
              <span>Organic Fruits</span>
              <span className="font-semibold text-green-600">
                Buy 2 Get 1 Free
              </span>
            </li>
            <li className="flex justify-between">
              <span>Dairy Products</span>
              <span className="font-semibold text-green-600">15% OFF</span>
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
          <p className="text-gray-600 mb-2">
            Free delivery for orders over $50
          </p>
          <p className="text-gray-600 mb-2">
            Same-day delivery available for orders before 2 PM
          </p>
          <p className="text-gray-600">
            Next-day delivery guaranteed for all other orders
          </p>
        </section>
      </div>

      <section id="contact" className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-semibold border-b pb-3">Contact Us</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Store Information</h3>
            <p className="mb-2">
              <span className="font-medium">Address:</span>{" "}
              {website.contactInfo?.address || "Address not provided"}
            </p>
            <p className="mb-2">
              <span className="font-medium">Phone:</span>{" "}
              {website.contactInfo?.phone || "Phone not provided"}
            </p>
            <p className="mb-2">
              <span className="font-medium">Email:</span>{" "}
              {website.contactInfo?.email || "Email not provided"}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Store Hours</h3>
            <p className="mb-1">Monday - Saturday: 7:00 AM - 10:00 PM</p>
            <p className="mb-1">Sunday: 8:00 AM - 8:00 PM</p>
          </div>
        </div>
      </section>
    </main>

    <footer className={`${primaryColor} text-white py-6 mt-12 shadow-md`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{website.companyName}</h3>
            <p className="text-sm opacity-80">Fresh Food, Every Day</p>
          </div>
          <p className="text-sm">
            © 2025 {website.companyName} - Created with Website Boss
          </p>
        </div>
      </div>
    </footer>
  </div>
);
export default GroceryTemplate;