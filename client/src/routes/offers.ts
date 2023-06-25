// routes.js
import express from "express";
import OffersController from "./../controllers/OffersController";

const router = express.Router();

/**
 * @swagger
 * /offers/:sku
 *   get:
 *     summary: Retrieve a list of offers by sku
 *     description: Retrieve a list of list of offers by sku of a API.
 */
router.get("/offers/:sku", OffersController.getBySku);

/**
 * @swagger
 * /offers/best/:sku
 *   get:
 *     summary: Retrieve a list of offers by sku
 *     description: Retrieve a list of list of offers by sku of a API.
 */
router.get("/offers/best/:sku", OffersController.getBySkuBestOffer);

export default router;
