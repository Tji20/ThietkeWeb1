
document.addEventListener("DOMContentLoaded", function () {
    // Thông tin sản phẩm từ giỏ hàng
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInfoContainer = document.getElementById("productInfoContainer");
    const totalAmountElement = document.getElementById("totalAmount");

    // Hiển thị sản phẩm
    let totalAmount = 0;

    cart.forEach(item => {
        const productItem = document.createElement("div");
        productItem.innerHTML = `<img src="${item.image}" alt="${item.name}" class="product-image">
                                 <p><strong></strong> ${item.name}</p>
                                 <p><strong></strong> ${item.price.toLocaleString()} VNĐ</p>
                                 <p><strong></strong> ${item.quantity}</p>
                                 <hr>`;
        productInfoContainer.appendChild(productItem);

        // Tính tổng tiền
        totalAmount += item.price * item.quantity;
    });

    // Hiển thị tổng tiền
    totalAmountElement.textContent = `Tổng tiền: ${totalAmount.toLocaleString()} VNĐ`;
});

function completeCheckout() {
    //Xóa giỏ hàng sau khi thanh toán
    localStorage.removeItem("cart");

    //Xác nhận thanh toán
    alert("Đặt hàng thành công!");
    window.location.href = "index.html";
}
