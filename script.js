const products = [
    { 
        name: 'Đèn Ốp Quạt Trần Ø1000mm MC-KD1364'
    },
    { name: 'Đèn Ốp Trần LED Hiện Đại L1090mm YN-1601-5' },
    { name: 'Đèn Thả Ngoài Trời Chống Thấm AL-T5026A-18' },
    { name: 'Đèn Thả Ngoài Trời Nhôm Đúc W290mm AL-X1103-29' },
    { name: 'Đèn Tranh Đồng LED L480mm VH-KD8820-48' },
    { name: 'Đèn Gương Trang Trí Thân Đồng L440mm AL-MD1663-44' },
    { name: 'Đèn Cây Trang Trí H1600mm AL-TA246' },
    { name: 'Đèn Cây Trang Trí H1600mm AL-F9905' },
    { name: 'Đèn Thả Trang Trí Kiểu Bắc Âu AL-MG3944A-29' },
    { name: 'Đèn Thả Các Hành Tinh Hệ Mặt Trời Ø250mm AL-PD8955-20' },
    { name: 'Đèn Thả Đồng Ø280mm AL-C0260-28' },
    { name: 'Đèn Thả Hình Lá Sen Ø300mm AL-RN129-30' },
    { name: 'Đèn Thả LED Hiện Đại L800mm AL-MD8184-80' },
    { name: 'Đèn Thả LED Văn Phòng Ø3000mm BA-MC8300B' },
    { name: 'Đèn Cây Trang Trí H1600mm AL-MD7870S' },
    { name: 'Đèn Thả Trang Trí Kiểu Bắc Âu Ø900mm AL-DT5021A-90' },
    // Add more product data as needed
];

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


// document.getElementById('searchForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     // You can add additional handling here, such as navigating to a search results page
// });

// // Handle selection from the dropdown
// productDropdown.addEventListener('change', function () {
//     searchInput.value = productDropdown.value;
//     productDropdown.style.display = 'none';
// });

