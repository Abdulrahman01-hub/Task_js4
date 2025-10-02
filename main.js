import { pizzas } from "./data.js";

const table = document.createElement("table");
const thead = document.createElement("thead");
const trForThead = document.createElement("tr");
["Image", "Name", "Description", "Price ($)", "Rate", "Country"].forEach(text => {
  const th = document.createElement("th");
  th.innerText = text;
  trForThead.append(th);
});
thead.append(trForThead);
table.append(thead);

const tbody = document.createElement("tbody");
pizzas.forEach(item => {
  const tr = document.createElement("tr");

  const imgTd = document.createElement("td");
  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.name;
  imgTd.appendChild(img);

  const nameTd = document.createElement("td");
  nameTd.textContent = item.name;
  const dscTd = document.createElement("td");
  dscTd.textContent = item.dsc;
  const priceTd = document.createElement("td");
  priceTd.textContent = item.price;
  const rateTd = document.createElement("td");
  rateTd.textContent = "⭐".repeat(item.rate);
  const countryTd = document.createElement("td");
  countryTd.textContent = item.country;

  tr.append(imgTd, nameTd, dscTd, priceTd, rateTd, countryTd);
  tbody.appendChild(tr);
});
table.append(tbody);
document.getElementById("root").append(table);