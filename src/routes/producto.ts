import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  updateProduct,
} from "../controllers/producto";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.post("/", postProduct);
router.put("/:id", updateProduct)

export default router;
