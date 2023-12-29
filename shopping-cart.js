document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const productSuggestions = document.getElementById('productSuggestions');
    const productList = document.getElementById('productList');
    const productImagesContainer = document.getElementById('productImages'); // Thêm container để hiển thị ảnh sản phẩm

    if (searchInput) {
        // Thêm sự kiện input cho ô tìm kiếm
        searchInput.addEventListener('input', function () {
            const inputValue = searchInput.value.toLowerCase();
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(inputValue));

            // Xóa tất cả các options hiện có trong datalist
            productSuggestions.innerHTML = '';

            if (filteredProducts.length > 0) {
                // Thêm các options mới vào datalist
                filteredProducts.forEach(product => {
                    const suggestionOption = document.createElement('option');
                    suggestionOption.value = product.name;
                    productSuggestions.appendChild(suggestionOption);
                });

                // Hiển thị danh sách gợi ý
                productList.innerHTML = ''; // Xóa nội dung hiện tại trong productList

                // Hiển thị ảnh của sản phẩm tìm kiếm
                productImagesContainer.innerHTML = '';
                filteredProducts.forEach(product => {
                    const productDiv = document.createElement('div');
                    
                    const productName = document.createElement('h2');
                    productName.textContent = product.name;
                    
                    const productImage = document.createElement('img');
                    productImage.src = product.image;
                    productImage.alt = product.name;

                    productDiv.appendChild(productName);
                    productDiv.appendChild(productImage);
                    
                    productImagesContainer.appendChild(productDiv);
                });

                productList.style.display = 'block';
            } else {
                // Ẩn danh sách gợi ý nếu không có sản phẩm nào phù hợp
                productList.style.display = 'none';
                productImagesContainer.innerHTML = ''; // Xóa nội dung hiện tại trong productImagesContainer
            }
        });
    }
});

//Thêm sản phẩm vào giỏ hàng

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItemsContainer.innerHTML = "";

    let total = 0;
    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        
        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;

        const itemName = document.createElement("div");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("div");
        itemPrice.textContent = item.price.toLocaleString() + " VNĐ";

        const quantityLabel = document.createElement("div");
        quantityLabel.textContent = "Số lượng: ";

        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = item.quantity;
        quantityInput.min = 1;
        quantityInput.addEventListener("change", (event) => updateQuantity(index, event.target.value));
        quantityInput.style.width = "50px"; 

        const removeButton = document.createElement("button");
        removeButton.textContent = "Xóa";
        removeButton.addEventListener("click", () => removeItem(index));
        removeButton.style.color = "white"; 
        removeButton.style.backgroundColor = "red"; 
        removeButton.style.border = "none"; 
        removeButton.style.padding = "5px 10px"; 
        removeButton.style.transition = "transform 0.3s"; 

// Hover 
removeButton.addEventListener("mouseover", () => {
    removeButton.style.transform = "scale(1.02)";
});

removeButton.addEventListener("mouseout", () => {
    removeButton.style.transform = "scale(1)";
});
        cartItem.appendChild(itemImage);
        cartItem.appendChild(itemName);
        cartItem.appendChild(itemPrice);
        cartItem.appendChild(quantityLabel);
        cartItem.appendChild(quantityInput);
        cartItem.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = "Tổng tiền: " + total.toLocaleString() + " VNĐ";
}

function updateQuantity(index, newQuantity) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity = parseInt(newQuantity, 10);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    updateCart();
}

updateCart();

function gotoCheckout() {
    window.location.href = "checkout.html";
}
