const productsPerPage = 9;
let currentPage = 1;
let filteredData = [...data];

function displayProducts(page) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = filteredData.slice(startIndex, endIndex);

    const container = document.getElementById("productsContainer");
    container.innerHTML = '';

    productsToDisplay.forEach(item => {
        const div = document.createElement("div");
        div.className = "product";
        div.id = item.id;

        div.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <div class="info">
                        <h3>${item.name}</h3>
                        <p><strong>Description:</strong> ${item.dsc}</p>
                        <p><strong>Country:</strong> ${item.country}</p>
                        <p class="price">${item.price} AZN</p>
                    </div>
                `;
        container.appendChild(div);
    });

    updatePagination(page);
}
function updatePagination(page) {
    const paginationContainer = document.getElementById("pagination");
    const totalPages = Math.ceil(filteredData.length / productsPerPage);
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.onclick = () => displayProducts(i);
        if (i === page) button.disabled = true;
        paginationContainer.appendChild(button);
    }
}
function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    filteredData = data.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.dsc.toLowerCase().includes(query)
    );
    currentPage = 1;
    displayProducts(currentPage);
}
displayProducts(currentPage);