import "./style.css";
import Navigo from "navigo";
import { loader } from "./pagees/Loader";
import { register } from "./pagees/Register";
import { onBoarding } from "./pagees/Onboarding";
import { login } from "./pagees/Login";
import { home } from "./pagees/Home";

export const App = document.querySelector("#app");

export const router = new Navigo("/");

// router
//   .on("/", loader)
//   .on("/onboarding", onBoarding)
//   .on("/register", register)
//   .on("/login", login)
//   .on("/home", home)
//   .resolve();
