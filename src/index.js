import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import "./styles/main.scss";

const productList = getProductList(20);

renderGoodsList(productList);