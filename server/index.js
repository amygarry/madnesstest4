const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, get1Fortune, submitFortune, getAllFortunes} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", get1Fortune)
app.get("/api/fortuneGetAll/",getAllFortunes)
// app.put()
app.post("/api/fortuneSubmit", submitFortune)
// app.delete()

app.listen(4000, () => console.log("Server running on 4000"));
