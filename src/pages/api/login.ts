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
      querySnapshot.forEach((doc) => {
         const userData = doc.data();
         if (userData.password === password) {
            userExists = true;
         }
      });

      if (userExists) {
         res.status(200).json({ message: 'Login bem-sucedido' });
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
