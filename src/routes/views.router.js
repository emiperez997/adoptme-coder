import { Router } from "express";
import { usersService, petsService } from "../services/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/users", async (req, res) => {
  const users = await usersService.getAll();
  res.render("users", {
    users,
  });
});

router.get("/pets", async (req, res) => {
  const pets = await petsService.getAll();
  res.render("pets", {
    pets,
  });
});

export default router;
