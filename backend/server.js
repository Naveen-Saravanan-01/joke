const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const jokes = [
  { id: 1, joke: "Dhivya Oru Loosu!!!!" },
  { id: 2, joke: "Naveen Oru Paithiyam!!" },
  { id: 3, joke: "Oru joke um illa poitu vaa!!!" }
];

// API Endpoint to Get a Random Joke
app.get("/", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));