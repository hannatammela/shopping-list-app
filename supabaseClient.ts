import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ldoninraztsauvdbotqm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxkb25pbnJhenRzYXV2ZGJvdHFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwOTUxOTcsImV4cCI6MjA4NDY3MTE5N30.4h5IVv99cpr9yn4FxEIB6_-46Q_Lla_reThzHIEKoEw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

