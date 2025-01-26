import "./style.css";
import Navigo from "navigo";
import { loader } from "./pagees/Loader";
import { register } from "./pagees/Register";

export const App= document.querySelector("#app")

export const router = new Navigo("/");

// router
// .on("/",loader)
// .on("/register",register)
// .resolve()




