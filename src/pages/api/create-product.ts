import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   try {
      if (req.method === "POST") {
         const {
            title,
            category,
            type,
            tags,
            font,
            description,
            profitMargin,
            totalValue,
            images,
         } = req.body;

         const currentDate = serverTimestamp();

         const docRef = await addDoc(collection(db, "PRODUCTS"), {
            title,
            category,
            type,
            tags,
            font,
            description,
            profitMargin,
            totalValue,
            images,
            createdDate: currentDate,
         });

         console.log("Documento criado no Firestore com ID:", docRef.id);

         res.status(200).json({ message: "Produto criado com sucesso", id: docRef.id });
      } else {
         res.status(405).json({ error: "Método não permitido" });
      }
   } catch (error) {
      console.error("Erro ao criar o produto:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
   }
}
