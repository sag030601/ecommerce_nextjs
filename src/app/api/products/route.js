import Product from '../../models/Products';
import { NextResponse } from 'next/server';
import { connectDB } from '../../libs/mongoose';

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const newProduct = await Product.create(data);
  return NextResponse.json(newProduct);
}
