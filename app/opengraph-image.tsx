import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Iker Guerra | Full Stack Developer'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: '#121110',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Accents */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-150px',
                        left: '-150px',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(212,190,152,0.15) 0%, rgba(18,17,16,0) 70%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-150px',
                        right: '-150px',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(212,190,152,0.15) 0%, rgba(18,17,16,0) 70%)',
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 40,
                        background: '#D4BE98',
                        color: '#121110',
                        width: 80,
                        height: 80,
                        borderRadius: 20,
                        fontSize: 40,
                        fontWeight: 800,
                    }}
                >
                    IG
                </div>

                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 900,
                        color: '#FAF9F6',
                        marginBottom: 20,
                        textAlign: 'center',
                        lineHeight: 1.1,
                    }}
                >
                    Iker Guerra
                </div>

                <div
                    style={{
                        fontSize: 36,
                        color: '#D4BE98',
                        textAlign: 'center',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}
                >
                    Full Stack Developer
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
