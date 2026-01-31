import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Iker Guerra - Full Stack Developer',
        short_name: 'Iker Guerra',
        description: 'Portfolio profesional de Iker Guerra, Desarrollador Full Stack especializado en Next.js, React, Java y Spring Boot.',
        start_url: '/',
        display: 'standalone',
        background_color: '#121110',
        theme_color: '#121110',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
