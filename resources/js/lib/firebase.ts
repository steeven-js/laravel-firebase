import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    projectId: 'madinia-dashboard',
    // Ajoutez ici les autres configurations nécessaires
};

// Initialiser Firebase seulement s'il n'est pas déjà initialisé
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app); 