const express = require('express')
const cors = require('cors')
const couchRouter = require("./Routes/couch/couchRouter")

const server = express()
const PORT = process.env.PORT || 5555;
server.listen(PORT, () => {
  console.log(`//================Server is running on ${PORT}... =================//`);
});
server.use(cors())
server.use(express.json())
server.use("/api/v1/lights/couch",couchRouter)