// ✅ src/app/home/page.jsx (server component)
import ClientHome from './ClientHome';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="p-4">
      <ClientHome products={products} />
    </div>
  );
}
