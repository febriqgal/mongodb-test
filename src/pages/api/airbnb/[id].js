// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/db/mongodb";
import { ObjectId } from "mongodb";
import { useRouter } from "next/router";
export default async function Handler(req, res) {
  const { id } = req.query;
  const database = client.db("aye");
  const movies = database.collection("users");
  const query = { name: `${id}` };

  const movie = await movies.findOne(query);
  res.status(200).json({ nama: id });
}
