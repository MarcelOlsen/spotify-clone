import { Price } from '@/types'

export const getURL = () => {
    let url = process.env.VERCEL_ENV === "production" ? process.env.VERCEL_PROJECT_PRODUCTION_URL :
        'http://localhost:3000'

    url = url!.includes('http') ? url : `https://${url}`
    url = url!.charAt(url!.length - 1) === "/" ? url : `${url}/`

    return url
}

export const postData = async ({
    url, data
}: { url: string, data?: { price: Price } }) => {
    console.log('Post Request:', url, data)

    const res: Response = await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        console.log('Error is POST', { url, data, res })

        throw new Error(res.statusText)
    }

    return res.json()
}

export const toDateTime = (secs: number) => {
    const t = new Date('1970-01-01T00:30:00Z')
    t.setSeconds(secs)
    return t
}