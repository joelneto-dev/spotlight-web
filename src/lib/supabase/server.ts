import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * TODO v2.0: Conectar Auth compartilhada com o app Flutter.
 * Instancia o cliente Supabase para execução no servidor (Server Components/Route Handlers).
 * Compatível com o padrão assíncrono de cookies do Next.js 15.
 */
export async function createServerSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Omitido silenciosamente se chamado em um Server Component.
            // A atualização real dos cookies de sessão é tratada pelo Middleware.
          }
        },
      },
    }
  );
}
