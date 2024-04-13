import {createClient} from '@supabase/supabase-js'

const URL = 'https://rsehvlwrlzvnwhrdawrv.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZWh2bHdybHp2bndocmRhd3J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MTkyNjcsImV4cCI6MjAyODI5NTI2N30.25-1YmrwgIfGE1rrQKeRvP-TxB-drZw2mpbxesTWd8s';

export const supabase = createClient(URL, API_KEY);  