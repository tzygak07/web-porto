const express = require("express");
const app = express();
const conn = require("./config/db");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/get-person", function (req, res) {
  const queryStr = "SELECT id, nama, medsos FROM person";
  conn.query(queryStr, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: err.sqlMessage });
    } else {
      res.status(200).json({
        success: true,
        message: "Sukses menampilkan data",
        data: results,
      });
    }
  });
});

app.get("/get-person/:id", function (req, res) {
  const { id } = req.params;
  const queryStr = "SELECT id, nama, medsos FROM person WHERE id = ?";
  conn.query(queryStr, id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: err.sqlMessage });
    } else {
      res.status(200).json({
        success: true,
        message: "Sukses menampilkan data",
        data: results[0],
      });
    }
  });
});

app.put("/update-person/:id", function (req, res) {
  const { id } = req.params;
  const { medsos, nama } = req.body;
  const queryUpdate = "UPDATE person SET nama = ?, medsos = ? WHERE id = ?";
  conn.query(queryUpdate, [nama, medsos, id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).json({ success: false, message: "Error saat mengupdate data" });
    } else {
      res.status(200).json({
        success: true,
        message: "Sukses update data",
      });
    }
  });
});

app.delete("/delete-person/:id", function (req, res) {
  const { id } = req.params;
  const queryDelete = "DELETE from person WHERE id = ?";
  conn.query(queryDelete, id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).json({ success: false, message: "Error saat menghapus data" });
    } else {
      res.status(200).json({ success: true, message: "Sukses menghapus data" });
    }
  });
});

app.post("/store-person", function (req, res) {
  const { nama, medsos } = req.body;
  if (!nama || !medsos) {
    return res.status(400).json({
      success: false,
      message: "Nama dan medsos wajib diisi",
    });
  }
  const queryStr = "INSERT INTO person (nama, medsos) VALUES (?, ?)";
  const values = [nama, medsos];
  conn.query(queryStr, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error saat menyimpan data",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data berhasil disimpan",
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
