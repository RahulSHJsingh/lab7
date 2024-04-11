import { createClient } from '@supabase/supabase-js'

const URL = 'https://wfhxavedmctpciaqvrac.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmaHhhdmVkbWN0cGNpYXF2cmFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3ODU5OTYsImV4cCI6MjAyODM2MTk5Nn0.mgHqMyD2ARmgaJGgHGo8Wco-HZ5VU5QXoNAoZoSn28c';

export const supabase = createClient(URL, API_KEY);

