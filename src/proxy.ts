import { NextResponse, type NextRequest } from "next/server";
// import { updateSession } from "@/lib/supabase/middleware";

/**
 * TODO v2.0: Ativar autenticação e proteção de rotas com Supabase SSR.
 */
export async function proxy(_request: NextRequest) {
  // TODO v2.0: Descomentar a linha abaixo para ativar renovação automática de cookies:
  // return await updateSession(_request);

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/logos (assets)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
