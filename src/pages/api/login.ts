// pages/api/login.ts
import { collection, getDocs, query, where } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method !== 'POST') {
      res.status(405).json({ error: 'Método não permitido' });
      return;
   }

   const { email, password } = req.body;

   try {
      const usersQuery = query(collection(db, 'USERS'), where('email', '==', email));
      const querySnapshot = await getDocs(usersQuery);

      let userExists = false;
      let userData = null;

      querySnapshot.forEach((doc) => {
         const data = doc.data();
         if (data.password === password) {
            userExists = true;
            userData = {
               docId: doc.id,
               name: data.name,
               email: data.email
            };
         }
      });

      if (userExists && userData) {
         res.status(200).json({
            message: 'Login bem-sucedido',
            user: userData
         });
      } else {
         res.status(401).json({ error: 'Credenciais inválidas' });
      }
   } catch (error) {
      if (error instanceof Error) {
         res.status(500).json({ error: error.message });
      } else {
         res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
   }
};
