require("dotenv").config();
const express = require("express");
const admin = require("firebase-admin");
const credentials = require("./key.json");
const app = express();
const port = process.env.PORT ?? 5000;

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/create", async (req, res) => {
  try {
    const id = req.body.email;
    const userJson = {
      email: id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };
    const response = db.collection("users").doc(id).set(userJson);

    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
app.post("/update", async (req, res) => {
  try {
    const id = req.body.id;
    const newfirstname = "hello!!!";
    const userRef = db
      .collection("users")
      .doc(id)
      .update({ firstname: newfirstname });

    res.send(userRef);
  } catch (error) {
    res.send(error);
  }
});
app.delete("/delete/:id", async (req, res) => {
  try {
    const response = db.collection("users").doc(req.params.id).delete();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.get("/read/all", async (req, res) => {
  try {
    const usersRef = db.collection("users");
    const response = await usersRef.get();

    const responseArr = [];
    response.forEach((doc) => {
      responseArr.push(doc.data());
    });
    res.send(responseArr);
  } catch (error) {
    res.send(MediaError);
  }
});

app.get("/read/:id", async (req, res) => {
  try {
    const userRef = db.collection("users").doc(req.params.id);
    const response = await userRef.get();
    res.send(response.data());
  } catch (error) {
    res.send(MediaError);
  }
});

const db = admin.firestore();

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
