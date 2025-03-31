 const ClothingTemplate = ({ website, primaryColor }) => (
  <div className="min-h-screen bg-gray-50 text-gray-800">
    <header className={`${primaryColor} text-white py-6 shadow-md`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{website.companyName}</h1>
          <p className="opacity-80">Fashion & Style</p>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#products" className="hover:underline">Collection</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>

    <div className="bg-white py-16 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Express Your Style</h2>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-gray-600">
          Discover the latest fashion trends and timeless classics
        </p>
        <button className={`${primaryColor} text-white px-6 py-3 rounded-full mt-6 hover:opacity-90 transition`}>
          Shop Now
        </button>
      </div>
    </div>

    <main className="max-w-6xl mx-auto px-6 py-10">
      <section id="about" className="bg-white shadow-lg rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-semibold border-b pb-3">Our Brand</h2>
        <p className="mt-4 text-gray-600">
          {website.aboutContent || "We are passionate about fashion that makes you look and feel amazing. Our carefully curated collections blend contemporary trends with timeless elegance, ensuring you always put your best foot forward."}
        </p>
      </section>

      <section id="products" className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Featured Collection</h2>
        {website.products && website.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {website.products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg overflow-hidden group transition hover:shadow-xl">
                <div className="h-64 bg-gray-100 -mx-6 -mt-6 mb-6 flex items-center justify-center relative">
                  <span className="text-gray-400 text-sm">Product Image</span>
                  <div className="absolute top-0 right-0 m-2 bg-black text-white px-2 py-1 text-xs">NEW</div>
                </div>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">SKU: {product.sku}</p>
                <p className="mt-3 text-gray-600 text-sm line-clamp-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-2xl font-semibold">${product.price}</p>
                  <button className={`${primaryColor} text-white px-4 py-2 rounded-full hover:opacity-90 transition`}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-gray-600">No products available</p>
        )}
      </section>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <section className="bg-white shadow-lg rounded-xl p-6 col-span-1">
          <h2 className="text-xl font-semibold mb-4">Size Guide</h2>
          <p className="text-gray-600 mb-3">
            Find your perfect fit with our comprehensive size guide.
          </p>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition">
            View Size Chart
          </button>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-3">
            <div className="flex items-center">
 <div className="flex items-center space-x-1 text-yellow-500">
                ★★★★★
              </div>
              <p className="text-sm text-gray-600 ml-2">"Amazing quality!"</p>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-1 text-yellow-500">
                ★★★★☆
              </div>
              <p className="text-sm text-gray-600 ml-2">"Love the style, but shipping took a while."</p>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-1 text-yellow-500">
                ★★★★★
              </div>
              <p className="text-sm text-gray-600 ml-2">"Great customer service and quality."</p>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer className="bg-gray-900 text-white text-center py-6">
      <p className="text-sm">© {new Date().getFullYear()} {website.companyName}. All rights reserved.</p>
    </footer>
  </div>
);

export default ClothingTemplate;