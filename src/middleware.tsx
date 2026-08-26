import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from 'jose'

const secretKey = new TextEncoder().encode(
    process.env.JWT_SECRET
);

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("auth_token")?.value

    if (!token) {
        return NextResponse.redirect(new URL("/membre/connexion", request.url)) // On utilise new URL car ce fichier est executé sur le serveur, donc il ne sait pas où le client se situe sur le site
    }

    try {
        const { payload } = await jwtVerify(token, secretKey)

        if (!payload.admin) {
            return NextResponse.redirect(new URL('/membre', request.url))
        }

        return NextResponse.next()
    }
    catch (error) {
        return NextResponse.redirect(new URL('/membre/connexion', request.url))
    }
}

export const config = {
    matcher: ['/membre/admin/:path*'],
}