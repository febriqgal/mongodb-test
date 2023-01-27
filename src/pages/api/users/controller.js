import client from "@/db/mongodb";
const database = client.db("aye");
export { database };
