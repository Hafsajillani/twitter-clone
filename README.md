
authentication setup: https://supabase.com/docs/guides/auth/auth-helpers/nextjs-server-components

before authentication, generate the types for your tables

npx supabase login
npx supabase gen types typescript --project-id --schema public > types/supabase.ts
