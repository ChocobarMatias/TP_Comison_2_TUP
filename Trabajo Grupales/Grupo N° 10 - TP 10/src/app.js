import express from "express";
import cors from "cors"
import routes from "./routes/index"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", routes)

app.get("/", (res,req)=>{
  res.send("Bienvenido a la api de donaciones")
})

export default app