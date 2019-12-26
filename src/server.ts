import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.post("/changeChannel", (req, res) => {
  console.log(req.body);
});

app.post("/channelUp", (req, res) => {});

app.post("/channelDown", (req, res) => {});

app.post("/last", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
