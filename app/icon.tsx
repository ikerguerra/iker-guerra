import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 20,
                    background: '#121110',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D4BE98',
                    borderRadius: '20%',
                    fontWeight: 600,
                }}
            >
                IG
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
