'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebaseClient';
import Link from 'next/link';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/login'); // or change to '/login' or wherever you want to go after register
    } catch (err: any) {
      console.error(err.message);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-5xl font-bold text-green-600 mb-2">Zee</h1>
        <p className="text-sm text-gray-500 mb-6">Join us and explore something new!</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="email"
            placeholder="Email/Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-green-500 rounded-full focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-green-500 rounded-full focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-green-500 rounded-full focus:outline-none"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
          >
            Register
          </button>

          <Link
            href="/login"
            className="block w-full bg-black text-white py-2 rounded-full mt-2"
          >
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
}
