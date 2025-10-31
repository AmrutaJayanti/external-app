const express = require('express')
const app = express()

const PORT = 5000

app.get('/',(req,res) {
   res.send("This is a simple Nodejs Application") })
   
   
app.listen(PORT, () => {
console.log("Server started running on 5000")})


   

   
   

