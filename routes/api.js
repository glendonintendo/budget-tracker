const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({body}, res) => {
  console.log("got to post transaction request");
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      console.error(err);
      res.status(404).json(err);
    });
});

router.post("/api/transaction/bulk", ({body}, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      console.error(err);
      res.status(404).json(err);    
    });
});

router.get("/api/transaction", (req, res) => {
  console.log("got to get transaction request");
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      console.error(err);
      res.status(404).json(err);    
    });
});

module.exports = router;