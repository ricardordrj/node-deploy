import { Router } from "express";

const pdf = Router();

pdf.get("/", (req, res) => res.send("oi"));
