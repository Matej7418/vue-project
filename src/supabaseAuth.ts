import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fcxwyixtesfcggenvlzf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjeHd5aXh0ZXNmY2dnZW52bHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3MjMwMTcsImV4cCI6MTk5MTI5OTAxN30.chhd6Sik17IJ6kWJKkwQ_w79CGrO112etUkX7OaKpf4'

export default createClient(supabaseUrl, supabaseAnonKey)
