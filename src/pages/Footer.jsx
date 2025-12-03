// Footer.jsx
export default function Footer() {
  return (
    <footer className="relative bg-black   text-gray-300 mt-35">
      {/* Overlap box */}
      <div className="absolute left-1/2 -translate-x-1/2 -mt-23
                      bg-white border-2 border-black rounded-md
                      max-w-3xl w-full mx-auto py-10 px-6 text-center shadow-lg ">
        <h1 className="text-4xl font-semibold text-gray-900 mb-2">
          All Articles
        </h1>
        <p className="text-gray-600 mb-4">
          Read the latest <span className="italic">Energy Humanities</span> articles now.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 text-sm tracking-wide">
          ALL ARTICLES
        </button>
      </div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 pb-15 mt-20 md:pt-40 ">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Energy <span className="font-light">Humanities</span>
          </h2>
        </div>
        {/* Sitemap */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Articles</a></li>
            <li><a href="#" className="hover:text-white">Videos</a></li>
          </ul>
        </div>
        {/* External Links */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">External Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">After Oil</a></li>
            <li><a href="#" className="hover:text-white">Petrocultures</a></li>
            <li>
              <a href="#" className="hover:text-white">
                Transitions in Energy, Culture and Society
              </a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
