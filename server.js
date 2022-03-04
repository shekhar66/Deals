const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./src/db/mongoose")
const pipelineRouter = require("./src/routes/pipelineRouter")
const stageRouter = require("./src/routes/stageRouter")

const app = express();
app.use(express.json())

// Routes
app.use("/pipelines",pipelineRouter)
app.use("/stages",stageRouter)


app.listen(process.env.PORT,()=>{
    console.log("Server is running on"+process.env.PORT);
})
