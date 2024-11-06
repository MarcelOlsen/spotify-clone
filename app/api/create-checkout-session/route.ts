import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { stripe } from '@/libs/stripe'
import { getURL } from '@/libs/helpers'
import { createOrRetreiveCustomer } from '@/libs/supabaseAdmin'
import Stripe from 'stripe'

export async function POST(
    req: Request
) {
    const { price, quantity = 1, metadata = {} } = await req.json()

    try {
        const supabase = createRouteHandlerClient({
            cookies
        })

        const { data: { user } } = await supabase.auth.getUser();

        const customer = await createOrRetreiveCustomer({
            uuid: user?.id || '',
            email: user?.email || ''
        })

        const sessionOptions: Stripe.Checkout.SessionCreateParams = {
            payment_method_types: ["card"],
            billing_address_collection: 'required',
            customer: customer || undefined,
            line_items: [
                {
                    price: price.id,
                    quantity
                }
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            subscription_data: {
                metadata,
            },
            success_url: `${getURL()}/account`,
            cancel_url: `${getURL()}`
        }

        const session = await stripe.checkout.sessions.create(sessionOptions)

        return NextResponse.json({ sessionId: session.id })
    } catch (error: any) {
        console.log(error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}