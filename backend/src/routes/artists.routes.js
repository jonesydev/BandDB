import express from "express";
import { getAllArtists, getArtistById, createArtist, updateArtist, deleteArtist } 
  from "../controllers/artist.controller.js";

const router = express.Router();

router.get("/artists", getAllArtists);
router.get("/artists/:id", getArtistById);
router.post("/artists", createArtist);
router.put("/artists/:id", updateArtist);
router.delete("/artists/:id", deleteArtist);

export default router; 
