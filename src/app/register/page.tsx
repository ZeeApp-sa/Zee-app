import Register from "@/components/Register";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-5xl font-bold text-green-600 mb-2" >
            Let's<br />
            Create Your <br />
            Account</h1>
        <p className="text-sm text-gray-500 mb-6">Join us and explore something new!</p>
  
  <Register />
      </div>
    </div>
  );
}
// This page is the entry point for the registration process. It imports the Register component and renders it.