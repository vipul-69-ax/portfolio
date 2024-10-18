import { Link, Route, Routes } from "react-router-dom";
import PortfolioHome from "./pages";
import PortfolioWork from "./pages/work";
import PortfolioAbout from "./pages/about";
import Contact from "./pages/contact";
import BlogPage from "./pages/blog";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route
          path="/work"
          element={<PortfolioWork username="vipul-69-ax" />}
        />
        <Route path="/about" element={<PortfolioAbout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <footer
        className="bg-gray-800 text-white mt-16"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              <p className="text-gray-300">
                A developer sharing stories and projects.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-gray-300 hover:text-white">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link
                  target="_blank"
                  to="https://github.com/vipul-69-ax"
                  className="text-gray-300 hover:text-white"
                >
                  <GitHubLogoIcon className="h-8 w-8" />
                </Link>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/vipulsharma2004/"
                  className="text-gray-300 hover:text-white"
                >
                  <LinkedInLogoIcon className="h-8 w-8" />
                </Link>
                <Link
                  target="_blank"
                  to="https://x.com/VIPULSHARM91651"
                  className="text-gray-300 hover:text-white"
                >
                  <TwitterLogoIcon className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Vipul Sharma. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
