import express from "express";
import { faker } from "@faker-js/faker";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

const posts = Array.from({ length: 100 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  location: faker.location.city(),
  img: faker.image.avatar(),
}));
app.get("/", (req, res) => {
  res.send(posts);
});

app.get("/posts/:page", (req, res) => {
  let { page } = req.params;

  page = parseInt(page);
  let limit = 5;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = posts.slice(startIndex, endIndex);

  res.json({
    page,
    limit,
    total: posts.length,
    totalPages: Math.ceil(posts.length / limit),
    data: paginatedData,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
