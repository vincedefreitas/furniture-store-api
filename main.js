const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

const { getCategories } = require("./src/Controllers/getCategoriesController");

app.use(cors());
app.use(express.json());

app.get("/categories", getCategories);

app.listen(port);
