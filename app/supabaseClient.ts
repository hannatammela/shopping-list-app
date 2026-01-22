// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co'; // korvaa omalla URL:llä
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY'; // korvaa omalla anon keyllä

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
