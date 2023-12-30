
// Ảnh của sản phẩm
// Lấy tất cả các ảnh trong phần hover-container
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

// Thêm sự kiện sau khi tải trang để hiển thị ảnh đầu tiên làm mặc định
window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

// Xử lý sự kiện khi di chuột qua từng ảnh nhỏ
allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
       // Thay đổi đường dẫn ảnh lớn bằng ảnh nhỏ tương ứng
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
         // Thêm lớp active cho phần tử chứa ảnh nhỏ được di chuột qua
        image.parentElement.classList.add('active');
    });
});

// Xử lý sự kiện khi di chuột qua từng ảnh nhỏ
function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}


//tap items
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Lấy tất cả các tab và pane từ DOM
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

// Lấy tab đang active và đường line
const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// Sử dụng requestIdleCallback để cập nhật vị trí và chiều rộng của line
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

// Xử lý sự kiện click cho từng tab
tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
      // Loại bỏ lớp active từ tab và pane hiện tại
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
  // Cập nhật vị trí và chiều rộng của line
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    // Thêm lớp active cho tab và pane mới
    this.classList.add("active");
    pane.classList.add("active");
  };
});


//đánh giá sản phẩm
// Lấy tất cả các sao và ô nhập giá trị đánh giá
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

// Xử lý sự kiện khi click vào một sao
allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1
 // Loại bỏ lớp và thêm lớp cho các sao tương ứng
		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
    // Xử lý hiển thị sao đánh giá
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})


 // Thêm JavaScript để xử lý logic tăng giảm số lượng
 let counterValue = 0;
// Hàm tăng giá trị của counter
 function increment() {
   counterValue++;
   updateCounter();
 }
// Hàm giảm giá trị của counter, nhưng không dưới 0
 function decrement() {
   if (counterValue > 0) {
     counterValue--;
     updateCounter();
   }
 }
// Hàm cập nhật hiển thị giá trị counter trên trang
 function updateCounter() {
   document.getElementById('counter').innerText = counterValue;
 }


// hàm chọn màu sắc
 let selectedBox = null;

 function selectColor(colorBoxId, colorName) {
   // Bỏ chọn ô trước đó (nếu có)
   if (selectedBox) {
     document.getElementById(selectedBox).classList.remove('selected');
   }

   // Lấy màu từ id của colorBox được chọn
   let selectedColor = colorName;

   // Hiển thị màu được chọn
   document.getElementById('selectedColor').innerText = 'Màu được chọn: ' + selectedColor;

   // Đặt lớp 'selected' cho ô được chọn
   document.getElementById(colorBoxId).classList.add('selected');

   // Lưu ô được chọn để sử dụng cho lần kế tiếp
   selectedBox = colorBoxId;
 }

 
//hiển thị sản phẩm
function addToCart(selectedProduct) {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
  var existingProduct = cart.find((item) => item.name === selectedProduct.name);

  if (existingProduct) {
      // Nếu sản phẩm đã tồn tại, chỉ tăng số lượng
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
  } else {
      // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
      selectedProduct.quantity = 1;
      cart.push(selectedProduct);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!");
  displayCart();
}




// Hàm lấy giá trị số lượng từ localStorage
function getStoredQuantity(key) {
  const storedValue = localStorage.getItem(key);
  return storedValue ? parseInt(storedValue) : 1;
}

// Hàm cập nhật số lượng vào localStorage
function updateStoredQuantity(key, value) {
  localStorage.setItem(key, value.toString());
}

// Hàm cập nhật số lượng
function updateQuantity(action, counterId) {
  const counterElement = document.getElementById(counterId);
  const cartCounterElement = document.getElementById('cart-counter');

  let currentQuantity;

  if (counterId === 'counter') {
      currentQuantity = counterValue;
  } else if (counterId === 'cart-counter') {
      currentQuantity = cartCounterValue;
  }

  if (action === 'increment') {
      currentQuantity++;
  } else if (action === 'decrement' && currentQuantity > 1) {
      currentQuantity--;
  }

  // Cập nhật giá trị hiển thị
  counterElement.innerText = currentQuantity;

  // Cập nhật giá trị trong localStorage
  updateStoredQuantity(counterId, currentQuantity);

  // Cập nhật giá trị cho biến toàn cục
  if (counterId === 'counter') {
      counterValue = currentQuantity;
  } else if (counterId === 'cart-counter') {
      cartCounterValue = currentQuantity;
  }
}

// Các hàm khác ở đây...

function gotoCheckout() {
  // Thêm mã xử lý chuyển hướng đến trang thanh toán
}

function clearCart() {
  // Thêm mã xử lý xóa tất cả sản phẩm trong giỏ hàng
}