import { Router } from "express";
import { shareScreen } from "../controllers/screenShare.controller.js";


const screenShareRoute=Router();

screenShareRoute.route("/share").get(shareScreen)

export default screenShareRoute