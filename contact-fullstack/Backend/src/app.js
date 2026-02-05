const express = require("express");
const cors = require("cors");

const contactModel = require("./models/contacts.model");

const app = express();

app.use(express.static('./public'))
app.use(cors());
app.use(express.json());

app.post("/api/contacts", async (req, res) => {
  const { profile, name, phone } = req.body;

  const contact = await contactModel.create({
    profile: profile,
    name: name,
    phone: phone,
  });

  res.status(201).json({
    message: "contact created successfully",
    contact,
  });
});

app.get("/api/contacts", async (req, res) => {
  const contacts = await contactModel.find();

  res.status(200).json({
    message: "fetched all contacts successfully",
    contacts,
  });
});

app.delete("/api/contacts/:id", async (req, res) => {
  const id = req.params.id;
  await contactModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "contact deleted successfully",
  });
});

app.patch("/api/contacts/:id", async (req, res) => {
  const id = req.params.id;
  const { profile, name, phone } = req.body;

  await contactModel.findByIdAndUpdate(id, { profile, name, phone });

  res.status(200).json({
    message: "contact updated successfully",
  });
});

module.exports = app;
