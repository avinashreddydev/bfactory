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
                }}
            >
                <div
                    style={{
                        fontSize: 96,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        textShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }}
                >
                    Biryani Factory
                </div>
                <div style={{ fontSize: 40, opacity: 0.9 }}>
                    Authentic Hyderabadi Flavors
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
