import express from "express";
import offers from "./../mocks/offers"
const router = express.Router();

router.get("/getAllSkuOffers/:sku", (req, res, next) => {
  try {
    const sku = req.params.sku;
    if(!sku) {
      res.json({ error: "sku not specified"})
    }
    const response = {
      sku: sku,
      offers,
    };
    res.json(response);
  } catch (err: any) {
    if(err.message){
      res.json({ error: err.message})
    }
  }
  
});

export default router;