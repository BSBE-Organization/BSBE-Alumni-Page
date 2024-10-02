import { useState } from "react"
import React from 'react';

export default function AuthPage() {
//   const { data: session, status } = useSession()
  const [email, setEmail] = useState("")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-[#00008B] flex flex-col">
      <header className="p-4 text-white text-2xl">
        Signup / Login
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex">
          <div className="w-1/2 p-8 flex flex-col justify-between">
            <div>
              <img src="/placeholder.svg?height=100&width=200" alt="IIT Guwahati Alumni Association Logo" className="mb-4" />
              <h1 className="text-2xl font-bold mb-2">IIT Guwahati Alumni Association</h1>
              <h2 className="text-xl mb-4">Indian Institute of Technology, Guwahati Alumni Association</h2>
            </div>
            <p className="text-gray-600">Sign up or log in to stay connected with your community</p>
          </div>
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-xl mb-4">Choose any one of the following to Signup/Login</h3>
             
              <>
                <button className="mb-4 bg-[#DB4437] hover:bg-[#C53929]" onClick={() => signIn("google")}>
                  CONNECT WITH GOOGLE
                </button>
                <button className="mb-4 bg-[#2E77BC] hover:bg-[#1E5B8E]" onClick={() => signIn("azure-ad")}>
                  CONNECT WITH AZURE
                </button>
              </>
             
          </div>
        </div>
      </main>
    </div>
  )
}