'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, price: Number(formData.price) }),
    });

    if (res.ok) {
      alert('Product added!');
      router.push('/home'); // Redirect to product list
    } else {
      alert('Failed to add product');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          type="number"
          className="w-full border p-2"
        />
        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
