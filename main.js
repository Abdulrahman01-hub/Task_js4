import { pizzas } from "./data.js";

const table = document.createElement("table");
const thead = document.createElement("thead");
const headRow = document.createElement("tr");
const columns = ["Image", "Name", "Description", "Price ($)", "Rate", "Country"];

for (let col of columns) {
  const th = document.createElement("th");
  th.textContent = col;
  headRow.appendChild(th);
}
thead.appendChild(headRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");

for (let item of pizzas) {
  const row = document.createElement("tr");

  let tdImg = document.createElement("td");
  let image = document.createElement("img");
  image.src = item.img;
  image.alt = item.name;
  tdImg.appendChild(image);

  let tdName = document.createElement("td");
  tdName.innerText = item.name;
  let tdDesc = document.createElement("td");
  tdDesc.innerText = item.dsc;
  let tdPrice = document.createElement("td");
  tdPrice.textContent = item.price;
  let tdRate = document.createElement("td");
  tdRate.textContent = "⭐".repeat(item.rate);
  let tdCountry = document.createElement("td");
  tdCountry.textContent = item.country;

  row.append(tdImg, tdName, tdDesc, tdPrice, tdRate, tdCountry);
  tbody.appendChild(row);
}

table.appendChild(tbody);
document.querySelector("#root").appendChild(table);
