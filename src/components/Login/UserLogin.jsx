import React from 'react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/campus-background.jpg')" }}>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <header className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-800 hover:text-gray-600">Home</a></li>
              <li><a href="/directory" className="text-gray-800 hover:text-gray-600">Directory</a></li>
              <li><a href="/team" className="text-gray-800 hover:text-gray-600">Team</a></li>
              <li>
                <button className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded">
                  Are you an Alum?
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex justify-center items-center min-h-[calc(100vh-80px)]">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create/Update Profile</h1>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-start text-left pl-4 py-6 border border-gray-300 rounded hover:bg-gray-50">
                <img src="/google-logo.png" alt="Google logo" className="w-6 h-6 mr-4" />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-start text-left pl-4 py-6 border border-gray-300 rounded hover:bg-gray-50">
                <img src="/outlook-logo.png" alt="Outlook logo" className="w-6 h-6 mr-4" />
                Continue with Outlook
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}