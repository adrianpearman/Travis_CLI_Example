const express = require("express")
const app = express()

const PORT = process.env.PORT || 4001

app.get("/", (req, res) => {
   console.log("req = \n", req)
   res.send("Test CI with Travis")
})

app.listen(PORT, () => {
   console.log(`Running on port: ${PORT}`)
})
