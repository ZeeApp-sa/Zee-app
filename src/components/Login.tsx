'use client';

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebaseClient'; 
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/app'); // navigate to main app page after login
    } catch (err: any) {
      setError('Invalid email or password');
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-5xl font-bold text-green-600 mb-2">Zee</h1>
      <p className="text-sm text-gray-500 mb-6">Discover. Connect. Enjoy.</p>
      

      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder='Email Address'
          className="w-full px-4 py-2 border-2 border-green-500 rounded-full focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder='Password'
          className="w-full px-4 py-2 border-2 border-green-500 rounded-full focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
        >
          Login
        </button>

        <div className="text-center mt-4 text-sm">
          Don’t have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;