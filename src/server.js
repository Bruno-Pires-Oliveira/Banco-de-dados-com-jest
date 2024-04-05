const express = require("express")
const routes = require ("./routes")
const app = express()

const PORT = 3333

app.use(express.json())
app.use(routes)
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status("Algo deu errado!")
})
app.listen(PORT, () =>{
    console.log("O servidor está rodando na porta " + PORT)
})
