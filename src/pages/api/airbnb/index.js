// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/db/mongodb";
export default async function handler(req, res) {
  const database = client.db("sample_airbnb");
  const movies = database.collection("listingsAndReviews");
  const movie = await movies.find().limit(10).toArray();
  res.status(200).json(movie);
}
