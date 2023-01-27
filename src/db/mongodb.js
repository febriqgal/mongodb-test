import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export default client;
