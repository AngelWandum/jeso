const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb://localhost:27017/?maxPoolSize=20&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("Jeso").command({ ping: 1 });
    let db = client.db("Jeso")
    let biblecol = db.collection("Bible")
    let v = await biblecol.findOne({name:"Jeremiah"})
    // await v.forEach(console.dir);
    console.log (v)
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);