// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { database } from "./controller";
export default async function handler(req, res) {
  const { nama, profesi } = req.body;
  await database.collection("users").insertOne({
    nama: nama,
    profesi: profesi,
  });
  const movies = database.collection("users");
  const movie = await movies.find().limit(100).toArray();
  res.status(200).json(movie);
}
