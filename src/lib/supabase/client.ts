import { createBrowserClient } from "@supabase/ssr";

/**
 * TODO v2.0: Conectar Auth compartilhada com o app Flutter.
 * Instancia o cliente Supabase para execução no navegador.
 */
export function createBrowserSupabaseClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
