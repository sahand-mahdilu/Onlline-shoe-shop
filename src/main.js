import "./style.css";
import Navigo from "navigo";
import { loader } from "./pagees/Loader";
import { register } from "./pagees/Register";
import { onBoarding } from "./pagees/Onboarding";
import { login } from "./pagees/Login";
import { home } from "./pagees/Home";
import { allProducts } from "./pagees/Allproducts";
import { brands } from "./pagees/Brands";
import { search } from "./pagees/Search";
import { singleProduct } from "./pagees/SingleProduct";
import { cart } from "./pagees/Cart";
import { checkOut } from "./pagees/Checkout";
import { shippingAddress } from "./pagees/ShippingAddress";
import { shipping } from "./pagees/Shipping";
import { Payment } from "./pagees/Payment";
import { order } from "./pagees/Order";

export const App = document.querySelector("#app");

export const router = new Navigo("/");

router
  .on("/", loader)
  .on("/onboarding", onBoarding)
  .on("/register", register)
  .on("/login", login)
  .on("/home", home)
  .on("/allProducts", allProducts)
  .on("/cart", cart)
  .on("/brands/:id", (math) => brands(math))
  .on("/search/:id", (math) => search(math))
  .on("/singleProduct/:id", (math) => singleProduct(math))
  .on("/checkout", checkOut)
  .on("/shippingaddress", shippingAddress)
  .on("/shipping", shipping)
  .on("/payment", Payment)
  .on("/order", order)
  .resolve();
