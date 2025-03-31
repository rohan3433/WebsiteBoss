const PharmacyTemplate = ({ website, primaryColor }) => (
  <div className="min-h-screen bg-gray-50 text-gray-800">
    <header className={`${primaryColor} text-white py-6 shadow-md`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{website.companyName}</h1>
          <p className="opacity-80">Your Health Partner</p>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#products" className="hover:underline">
            Medicines
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
          Your Trusted Healthcare Provider
        </h2>
        <p className="text-xl text-center mt-4 max-w-3xl mx-auto text-gray-600">
          Quality medicines and professional healthcare advice
        </p>
      </div>
    </div>

    <main className="max-w-6xl mx-auto px-6 py-10">
      <section id="about" className="bg-white shadow-lg rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold border-b pb-3">
          About Our Pharmacy
        </h2>
        <p className="mt-4 text-gray-600">
          {website.aboutContent ||
            "We are committed to providing high-quality medications and healthcare products to our customers. Our team of licensed pharmacists is always available to provide expert advice."}
        </p>
      </section>

      <section id="products" className="bg-white shadow-lg rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold border-b pb-3">Our Medicines</h2>
        {website.products && website.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {website.products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md transition hover:shadow-xl"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {product.sku}
                  </span>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  {product.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-xl font-semibold">${product.price}</p>
                  <button
                    className={`${primaryColor} text-white px-4 py-2 rounded hover:opacity-90 transition`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-gray-600">No medicines available</p>
        )}
      </section>

      <section id="contact" className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-semibold border-b pb-3">
          Visit Our Pharmacy
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
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
            <p className="mt-4 text-sm">Emergency services available 24/7</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
            <p className="mb-1">Monday - Friday: 8:00 AM - 9:00 PM</p>
            <p className="mb-1">Saturday: 9:00 AM - 7:00 PM</p>
            <p className="mb-1">Sunday: 10:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>
    </main>

    <footer className={`${primaryColor} text-white py-6 mt-12 shadow-md`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{website.companyName}</h3>
            <p className="text-sm opacity-80">
              Your Trusted Healthcare Partner
            </p>
          </div>
          <p className="text-sm">
            © 2025 {website.companyName} - Created with Website Boss
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default PharmacyTemplate;