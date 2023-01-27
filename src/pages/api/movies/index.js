// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/db/mongodb";
export default async function handler(req, res) {
  const database = client.db("sample_mflix");
  const movies = database.collection("movies");
  const movie = await movies.find().limit(100).toArray();
  res.status(200).json(movie);
}
