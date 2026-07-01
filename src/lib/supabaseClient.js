// Caddoo — Client Supabase
// Point d'entrée unique pour toutes les interactions avec Supabase
// (authentification, base de données, realtime).
// Importé par tous les écrans qui ont besoin de parler à Supabase.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://hknayyknhujzioydmdyn.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_XTbfAnEP9dLPSkjYL2W2oA_LpdDNZSs';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);