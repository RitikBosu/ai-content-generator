// app/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          <span className="font-bold text-xl">Logo</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <Link href="/dashboard" className="hover:underline">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center px-6 py-20 bg-[url('/hex-bg.svg')] bg-cover bg-center">
        {/* Membership Banner */}
        {/* <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6 text-sm font-medium">
          TUBEGURUJI Membership – Join Now
          <span className="text-lg">→</span>
        </div> */}

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          AI Content <span className="text-indigo-600">Generator</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Revolutionize your content creation with our AI-powered app,
          delivering engaging and high-quality text in seconds.
        </p>

        {/* Get Started Button */}
        <Link
          href="/dashboard"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 transition"
        >
          Get started <span className="ml-2">→</span>
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-16 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="text-center">
          <div className="text-indigo-600 text-4xl mb-4">📄</div>
          <h3 className="text-lg font-semibold">25+ templates</h3>
          <p className="text-gray-500 text-sm mb-2">
            Responsive, and mobile-first project on the web
          </p>
          <a href="#" className="text-indigo-600 text-sm font-medium">
            Learn more →
          </a>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <div className="text-indigo-600 text-4xl mb-4">⚙️</div>
          <h3 className="text-lg font-semibold">Customizable</h3>
          <p className="text-gray-500 text-sm mb-2">
            Components are easily customized and extendable
          </p>
          <a href="#" className="text-indigo-600 text-sm font-medium">
            Learn more →
          </a>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <div className="text-indigo-600 text-4xl mb-4">📚</div>
          <h3 className="text-lg font-semibold">Free to Use</h3>
          <p className="text-gray-500 text-sm mb-2">
            Every component and plugin is well documented
          </p>
          <a href="#" className="text-indigo-600 text-sm font-medium">
            Learn more →
          </a>
        </div>

        {/* Feature 4 */}
        <div className="text-center">
          <div className="text-indigo-600 text-4xl mb-4">💬</div>
          <h3 className="text-lg font-semibold">24/7 Support</h3>
          <p className="text-gray-500 text-sm mb-2">
            Contact us 24 hours a day, 7 days a week
          </p>
          <a href="#" className="text-indigo-600 text-sm font-medium">
            Learn more →
          </a>
        </div>
      </section>
    </div>
  );
}
