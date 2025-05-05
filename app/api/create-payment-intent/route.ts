import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

export async function POST(request:NextRequest){
    try {
        const { amount } = await request.json();

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'mxn',
            automatic_payment_methods: {
                enabled: true,
            },
        });
        return NextResponse.json({ clientSecret: paymentIntent.client_secret });

    } catch(error) {
        console.error(error);
        return NextResponse.json({ error: `Error creating payment intent: ${error}` }, { status: 500 });
    }
}