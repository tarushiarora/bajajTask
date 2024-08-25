const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// POST method - Route /bfhl
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const lowercaseAlphabets = alphabets.filter(
    (item) => item === item.toLowerCase()
  );
  const highestLowercaseAlphabet =
    lowercaseAlphabets.length > 0
      ? [lowercaseAlphabets.sort().reverse()[0]]
      : [];

  const response = {
    is_success: true,
    user_id: "tarushi_arora_25052002", // Replace with your user_id
    email: "tarushiarora2525@gmail.com", // Replace with your email
    roll_number: "21BAI10134", // Replace with your roll number
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  };

  res.status(200).json(response);
});

// GET method - Route /bfhl
app.get("/bfhl", (req, res) => {
  const response = {
    operation_code: 1,
  };

  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
