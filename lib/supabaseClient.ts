import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zyuvsnrfvnovfollmmjn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5dXZzbnJmdm5vdmZvbGxtbWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4NjgwMjIsImV4cCI6MjA4MjQ0NDAyMn0.oU97eT3VeScUMNZ7FR2iwiyVPG8bI-WjGmjqVrzUCv0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
