import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

interface CartItem {
  title: string;
  image: string;
  price: number;
}

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, { 
  apiVersion: '2024-11-20.acacia'
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { items, email } = body;

  const arrangeItems = items.map((item: CartItem) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.title,
        images: [item.image]
      },
      unit_amount: Math.floor(item.price * 80)
    },
    quantity: 1
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US', 'CA']
    },
    line_items: arrangeItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item: CartItem) => item.image))
    }
  });

  return NextResponse.json({
    id: session.id
  });
}
