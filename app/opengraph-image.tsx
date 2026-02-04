import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Biryani Factory'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #f97316, #ea580c)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <img
                    src="https://www.bfactory.app/logo.png"
                    alt="Biryani Factory Logo"
                    style={{
                        width: 150,
                        height: 150,
                        marginBottom: 40,
                        borderRadius: '50%', // optional: makes it circular if square
                        objectFit: 'cover'
                    }}
                />
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        textAlign: 'center',
                        textShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        padding: '0 40px',
                        lineHeight: 1.1,
                    }}
                >
                    Hyderabad best biryani in Tirupati
                </div>
                <div style={{ fontSize: 32, opacity: 0.9, marginTop: 10 }}>
                    bfactory.app
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
