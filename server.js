import express from "express";

const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", (req,res) => {
    res.json({message: "Web application is running on docker container."});
});

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
})