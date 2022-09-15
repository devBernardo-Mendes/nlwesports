import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    {
      id: "1",
      name: "Bernardo",
    },
    {
      id: "2",
      name: "Bruno",
    },

    {
      id: "3",
      name: "Matheus",
    },
    {
      id: "4",
      name: "Andre",
    },
  ]);
});

app.listen(3333);
