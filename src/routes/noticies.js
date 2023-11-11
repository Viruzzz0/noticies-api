import { Router } from "express";
import { getNoticie } from "../servicies/news.js";
const router = Router();

router.get("/noticies/:name", async (req, res) => {
  const { name } = req.params;

  const listNoticias = await getNoticie(name);
  res.status(200).json(listNoticias);
});

export { router };
