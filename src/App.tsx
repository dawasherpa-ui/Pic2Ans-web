import React from "react";
import {
  Download,
  Zap,
  Shield,
  Users,
  PlayCircle,
} from "lucide-react";

function downloadAPK() {
  try {
    const link = document.createElement("a");
    link.href = "https://github.com/dawasherpa-ui/Pic2Ans-web/raw/refs/heads/main/public/Pic2Ans.apk?download=";
    link.download = "Pic2Ans.apk";
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Download failed:", error);
    alert("Download failed. Please try again.");
  }
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Pic2Ans Logo" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-xl font-bold text-gray-900">Pic2Ans</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#download" className="text-gray-600 hover:text-gray-900">
              Download
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Picture to Answer</span>
              <span className="block text-blue-600">
                Smart Learning Assistant
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Store your study materials as images and get instant answers by
              simply taking a picture of your question. The smart way to access
              your knowledge base.
            </p>
            <div className="mt-10 flex flex-col items-center">
              <button
                onClick={downloadAPK}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                <Download className="w-5 h-5 mr-2" />
                Download APK
              </button>
              <p className="mt-2 text-sm text-gray-500">
                Note: You may need to enable "Install from unknown sources" in
                your Android settings
              </p>
            </div>
          </div>
          <div className="mt-20">
            <img
              src="https://ldgnpdudaohjifgktmst.supabase.co/storage/v1/object/public/ruza//Download%20our%20app%20and%20imporve%20your%20study!.png"
              alt="App Preview"
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Smart Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transform how you learn and access information
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-600" />}
              title="Instant Answers"
              description="Take a picture of your question and get matching answers instantly from your stored knowledge base"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Secure Storage"
              description="All your study materials and answers are securely stored locally on your device"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title="Easy to Use"
              description="Simple interface to store your study materials and retrieve answers through pictures"
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get Started Now
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transform your learning experience with Pic2Ans
            </p>
            <div className="mt-10 flex flex-col items-center">
              <DownloadButton
                icon={<Download className="w-5 h-5" />}
                store="Direct Download"
                platform="Android"
              />
              <p className="mt-2 text-sm text-gray-500">
                Note: You may need to enable "Install from unknown sources" in
                your Android settings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions? Get in touch with us at{" "}
              <a href="mailto:jamudawa2@gmail.com" className="text-blue-600 hover:text-blue-800">
                jamudawa2@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Pic2Ans Logo" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-white font-bold">Pic2Ans</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Pic2Ans. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

function DownloadButton({
  icon,
  store,
  platform,
}: {
  icon: React.ReactNode;
  store: string;
  platform: string;
}) {
  return (
    <button
      onClick={downloadAPK}
      className="inline-flex flex-col items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
    >
      <div className="flex items-center">
        {icon}
        <span className="ml-2">{store}</span>
      </div>
      <span className="text-sm text-gray-400">Download for {platform}</span>
    </button>
  );
}

export default App;
