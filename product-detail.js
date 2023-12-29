
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}


//tap items
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// SonDN fixed - Active size wrong size on first load.

requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});


//đánh giá sản phẩm
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
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

 function increment() {
   counterValue++;
   updateCounter();
 }

 function decrement() {
   if (counterValue > 0) {
     counterValue--;
     updateCounter();
   }
 }

 function updateCounter() {
   document.getElementById('counter').innerText = counterValue;
 }

// hàm chọn màu 

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
