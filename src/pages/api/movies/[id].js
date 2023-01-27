// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/db/mongodb";
import { ObjectId } from "mongodb";
export default async function Handler(req, res) {
  const { id } = req.query;
  const database = client.db("sample_mflix");
  const movies = database.collection("movies");
  const query = {
    _id: ObjectId(`${id}`),
  };
  const movie = await movies.findOne(query);
  res.status(200).json(movie);
}
