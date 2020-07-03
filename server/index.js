const express = require('express')
const cors = require('cors')
const couchRouter = require("./Routes/couch/couchRouter")
const floorRouter = require("./Routes/floor/floorRouter")
const ceilingRouter = require("./Routes/ceiling/ceilingRouter")
const stairsRouter = require("./Routes/stairs/stairsRouter")

const server = express()
const PORT = process.env.PORT || 5555;
server.listen(PORT, () => {
  console.log(`//================Server is running on ${PORT}... =================//`);
});
server.use(cors())
server.use(express.json())
//Routes
server.use("/api/v1/lights/couch",couchRouter)
server.use("/api/v1/lights/floor",floorRouter)
server.use("/api/v1/lights/ceiling",ceilingRouter)
server.use("/api/v1/lights/stairs",stairsRouter)