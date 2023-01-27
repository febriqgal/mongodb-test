import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://aye:XNVLfVE2yp4IDlvC@cluster0.q1ksemt.mongodb.net/test";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export default client;
