// ✅ src/app/home/ClientHome.jsx
'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientHome({ products }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   alert(status)
  //   if (status === 'unauthenticated') {
  //     router.push('/login');
  //   }
  // }, [status, router]);

  // if (status === 'loading') return <p>Loading session...</p>;
  // if (!session) return null;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="p-4 border rounded">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">₹{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
