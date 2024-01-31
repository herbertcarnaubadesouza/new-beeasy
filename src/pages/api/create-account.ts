// pages/api/create-account.ts
import { addDoc, collection } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method !== 'POST') {
      res.status(405).json({ error: 'Método não permitido' });
      return;
   }

   const { name, email, password } = req.body;

   try {
      await addDoc(collection(db, 'USERS'), {
         name,
         email,
         password
      });

      res.status(200).json({ message: 'Usuário criado com sucesso!' });
   } catch (error) {
      if (error instanceof Error) {
         res.status(500).json({ error: error.message });
      } else {
         res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
      }
   }
};
