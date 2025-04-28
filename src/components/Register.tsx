'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/lib/firebaseClient'; // make sure db is exported from firebaseClient
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [zeeUsername, setZeeUsername] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [error, setError] = useState<string | null>(null)
    const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!agreeTerms) {
        setError('You must agree to the Terms and Conditions.');
        return;
      }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, 'users', user.uid), {
          fullName,
          idNumber,
          zeeUsername,
          email,
          createdAt: new Date().toISOString(),
        });
  
        router.push('/login'); // navigate to login page after registration
      } catch (err: any) {
        console.error(err.message);
        setError('Registration failed. Please try again.');
      }
    };

  return (
        <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-2 border-2 border-green-500 rounded-full focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Zee Username"
          value={zeeUsername}
          onChange={(e) => setZeeUsername(e.target.value)}
          className="w-full px-4 py-2 border-2 border-green-500 rounded-full focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="ID Number"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          className="w-full px-4 py-2 border-2 border-green-500 rounded-full focus:outline-none"
          required
        />
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

          <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
                required
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the <a href="/terms" className="text-green-600 underline">Terms and Conditions</a>
            </label>
            </div>

          <Link
            href="/login"
            className="block w-full bg-black text-white py-2 rounded-full mt-2"
          >
            Back to Login
          </Link>
        </form>
  );
}
