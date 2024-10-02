import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export default function UserProfileForm() {
  const [add] = useState('')
  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url('/arun-chandran-xOSMdivrcFM-unsplash 1.png')"
      }}
    >
      <div className="w-full pt-10 pb-4 text-center text-black">
              <h1 className="text-5xl font-semibold mb-6">Add your Details</h1>
      </div>
      <main className="container mx-auto px-4">
        {/* Form Section with "Add your Details" at the top left */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-6 overflow-hidden">
          <div className="p-6">

            <form className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" defaultValue="Sumeet Ahire" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                    <input type="text" id="degree" defaultValue="B.Tech" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">Year of Graduation</label>
                    <input type="text" id="graduation-year" defaultValue="2016" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Contact Info</label>
                    <div className="flex">
                      <select className="w-20 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="91">+91</option>
                        <option value="1">+1</option>
                      </select>
                      <input type="tel" id="phone" placeholder="Phone number" className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" defaultValue="sdesignshire@gmail.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input type="text" id="location" defaultValue="Toronto Canada" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                    <input type="text" id="linkedin" placeholder="Your LinkedIn Profile" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Education</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">University</label>
                      <input type="text" id="university" defaultValue="MIT" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="edu-degree" className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                      <input type="text" id="edu-degree" defaultValue="PhD." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="edu-year" className="block text-sm font-medium text-gray-700 mb-1">Year of Graduation</label>
                      <div className="relative">
                        <input type="text" id="edu-year" defaultValue="2022" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button type="button" className="absolute right-2 top-2 text-red-500 hover:text-red-700 focus:outline-none">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full">
                    <button type="button" className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <Plus className="w-4 h-4 mr-2" />
                      Add More
                    </button>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Work Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">Domain</label>
                    <select id="domain" defaultValue="software-development" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="software-development">Software Development</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="current-position" className="block text-sm font-medium text-gray-700 mb-1">Current Position</label>
                    <input type="text" id="current-position" defaultValue="Software Development" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input type="text" id="company" defaultValue="Software Development" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                    <input type="text" id="experience" defaultValue="1+" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </section>

              <div className="flex justify-end w-full">
                <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
