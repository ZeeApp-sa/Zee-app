'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebaseClient';
import { collection, getDocs } from 'firebase/firestore';

export default function TestPage() {
  type Store = {
    id: string;
    name?: string;
    address?: string;
  };

  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'stores'));
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setStores(data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading) return <p>Loading stores...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Stores</h1>
      <ul className="space-y-1">
        {stores.map((store) => (
          <li key={store.id}>
            🏬 <strong>{store.name}</strong> — {store.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
