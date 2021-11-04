import express from "express"
const app = express()

import { createCourse } from "./routes"

app.get("/", createCourse)

app.listen(3333)
