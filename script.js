let totalPrice = 0;
let discountAmount = 0;
let isCouponApplied = false;

// ১. প্রোডাক্টে ক্লিক করলে কার্টে দাম যোগ করার ফাংশন
function addToCart(element, price) {
  totalPrice += parseFloat(price);

  if (isCouponApplied) {
    discountAmount = totalPrice * 0.20; // ২০% ছাড়
  }

  updateDisplay();
}

// ২. পেজ লোড হলে Apply এবং Make Purchase বাটনে ক্লিক অ্যাকশন যুক্ত করা
document.addEventListener('DOMContentLoaded', () => {

  // কুপন অ্যাপ্লাই বাটন
  const applyBtn = document.querySelector('.btn-apply');
  if (applyBtn) {
    applyBtn.addEventListener('click', function (e) {
      e.preventDefault();
      
      const couponInput = document.querySelector('.coupon-input input');
      const code = couponInput ? couponInput.value.trim() : '';

      if (code === "SELL200") {
        if (totalPrice >= 200) {
          discountAmount = totalPrice * 0.20;
          isCouponApplied = true;
          alert("Coupon applied successfully! 20% discount has been added.");
        } else {
          alert("Please add at least 200TK worth of products to use this coupon.");
        }
      } else {
        alert("Invalid coupon code! Please use: SELL200");
      }

      updateDisplay();
    });
  }

  // মেক পারচেজ বাটন
  const purchaseBtn = document.querySelector('.btn-purchase');
  if (purchaseBtn) {
    purchaseBtn.addEventListener('click', function (e) {
      e.preventDefault();

      if (totalPrice > 0) {
        alert("Thank you! Your order has been placed successfully.");

        // কেনাকাটা শেষ হলে কার্ট খালি করা
        totalPrice = 0;
        discountAmount = 0;
        isCouponApplied = false;
        
        const couponInput = document.querySelector('.coupon-input input');
        if (couponInput) couponInput.value = '';

        updateDisplay();
      } else {
        alert("Your cart is empty! Please select at least one product.");
      }
    });
  }

});

// ৩. স্ক্রিনে হিসাব আপডেট করার ফাংশন
function updateDisplay() {
  const grandTotal = totalPrice - discountAmount;

  let totalElem = document.getElementById('total-price');
  let discountElem = document.getElementById('discount');
  let grandTotalElem = document.getElementById('grand-total');

  if (!totalElem) totalElem = document.querySelector('.price-box p:nth-child(1) span');
  if (!discountElem) discountElem = document.querySelector('.price-box p:nth-child(2) span');
  if (!grandTotalElem) grandTotalElem = document.querySelector('.price-box p:nth-child(3) span');

  if (totalElem) totalElem.innerText = totalPrice.toFixed(2) + " TK";
  if (discountElem) discountElem.innerText = discountAmount.toFixed(2) + " TK";
  if (grandTotalElem) grandTotalElem.innerText = (grandTotal > 0 ? grandTotal : 0).toFixed(2) + " TK";
}







// সব ক্যাটাগরির প্রোডাক্টের সিমিলার আইটেম এই একটিমাত্র অবজেক্টে থাকবে
const similarProductsData = {
  
  // --- ১. Beauty Products---
  "Ilia Make Up": [
    { name: "Waterproof Eyeliner", price: 250, img: "img/b 5.jpg" },
    { name: "Eye Shadow Palette", price: 140, img: "img/b 6.jpg" },
    { name: "Foundation-Make Up", price: 380, img: "img/b 7.jpg" },
    { name: "Foundation-Make Up", price: 480, img: "img/b 16.jpg" }
  ],
  "Make Up For Ever": [
    { name: "Foundation-Make Up", price: 680, img: "img/b 8.jpg" },
    { name: "Liquid Foundation", price: 819, img: "img/b 9.jpg" },
    { name: "Eye Shadow Palette", price: 520, img: "img/b 10.jpg" },
    { name: "Eye Shadow Palette", price: 720, img: "img/b 15.jpg" }
  ],
  "Multi-Vitamins": [
    { name: "Vitamin C Serum", price: 350, img: "img/b 11.jpg" },
    { name: "Hydrating Night Cream", price: 720, img: "img/b 12.jpg" },
    { name: "Eyebrow Pencil-Kajal", price: 422, img: "img/b 13.jpg" },
    { name: "Eyebrow Pencil-Kajal", price: 932, img: "img/b 14.jpg" }
  ],

  // --- ২. Winter Products---
  "Sweater-Shawl": [
    { name: "Winter Moisturizer", price: 470, img: "img/w 4.jpg" },
    { name: "Winter Moisturizer", price: 355, img: "img/w 5.jpg" },
    { name: "Winter Moisturizer", price: 430, img: "img/w 6.jpg" },
    { name: "Winter Moisturizer", price: 580, img: "img/w 16.jpg" }
  ],
  "Muffler": [
    { name: "Winter Moisturizer", price: 550, img: "img/w 7.jpg" },
    { name: "Winter Moisturizer", price: 780, img: "img/w 8.jpg" },
    { name: "Winter Moisturizer", price: 680, img: "img/w 9.jpg" },
    { name: "Winter Moisturizer", price: 910, img: "img/w 15.jpg" }
  ],
  "Earmuffs": [
    { name: "Sunscreen SPF 50", price: 990, img: "img/w 10.jpg" },
    { name: "Sunscreen SPF 50", price: 710, img: "img/w 11.jpg" },
    { name: "Sunscreen SPF 50", price: 630, img: "img/w 13.jpg" },
    { name: "Sunscreen SPF 50", price: 570, img: "img/w 14.jpg" }
  ],

  // --- ৩. Other Products ---
   "Concealer": [
    { name: "Vitamin C Serum", price: 470, img: "img/other 4.jpg" },
    { name: "Eye Shadow Palette", price: 355, img: "img/other 5.jpg" },
    { name: "Hydrating Night Cream", price: 430, img: "img/other 6.jpg" },
    { name: "Winter Moisturizer", price: 580, img: "img/other 7.jpg" }
  ],
  "Highlighter": [
    { name: "Eye Shadow Palette", price: 550, img: "img/other 8.jpg" },
    { name: "Winter Moisturizer", price: 780, img: "img/other 9.jpg" },
    { name: "Hydrating Night Cream", price: 680, img: "img/other 10.jpg" },
    { name: "Vitamin C Serum", price: 910, img: "img/other 11.jpg" }
  ],
  "Face Wash": [
    { name: "Liquid Foundation", price: 990, img: "img/other 12.jpg" },
    { name: "Eye Shadow Palette", price: 710, img: "img/other 13.jpg" },
    { name: "Sunscreen SPF 50", price: 630, img: "img/other 14.jpg" },
    { name: "Eyebrow Pencil-Kajal", price: 570, img: "img/other 15.jpg" }
  ],

};





// ২. ছবিতে ক্লিক করলে পপ-আপ খোলা এবং কার্টে যোগ হওয়া
function openSimilarModal(name, price, imagePath) {
  // কার্টে মেইন প্রোডাক্ট যোগ করা
  totalPrice += parseFloat(price);
  if (isCouponApplied) discountAmount = totalPrice * 0.20;
  updateDisplay();

  const modal = document.getElementById('product-modal');
  const mainInfo = document.getElementById('modal-main-info');
  const grid = document.getElementById('similar-products-grid');

  // মেইন প্রোডাক্ট নোটিফিকেশন
  mainInfo.innerHTML = `
    <p>✔ <strong>${name}</strong> (${price} TK) added to cart!</p>
  `;

  // সিমিলার প্রোডাক্ট শো করা
  grid.innerHTML = "";
  if (similarProductsData[name]) {
    similarProductsData[name].forEach(item => {
      grid.innerHTML += `
        <div class="similar-card" style="border:1px solid #ddd; padding:10px; border-radius:8px; text-align:center;">
          <img src="${item.img}" alt="${item.name}" style="width:100%; height:100px; object-fit:cover; border-radius:5px;">
          <h4 style="margin:5px 0;">${item.name}</h4>
          <p style="font-weight:bold; color:#1e4d58;">${item.price.toFixed(2)} TK</p>
          <button onclick="addSimilarToCart('${item.name}', ${item.price})" style="background:#1e4d58; color:#fff; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">+ Add to Cart</button>
        </div>
      `;
    });
  }

  modal.style.display = "block";
}

// ৩. পপ-আপের ভেতর থেকে সিমিলার প্রোডাক্ট কার্টে যোগ করা
function addSimilarToCart(name, price) {
  totalPrice += parseFloat(price);
  if (isCouponApplied) discountAmount = totalPrice * 0.20;
  updateDisplay();
  alert(`${name} has been added to your cart!`);
}

// ৪. কুপন এবং পারচেজ বাটন কানেক্ট
document.addEventListener('DOMContentLoaded', () => {
  // Close Modal Event
  const modal = document.getElementById('product-modal');
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

  // Apply Coupon
  const applyBtn = document.querySelector('.btn-apply');
  if (applyBtn) {
    applyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const code = document.querySelector('.coupon-input input').value.trim();
      if (code === "SELL200") {
        if (totalPrice >= 200) {
          discountAmount = totalPrice * 0.20;
          isCouponApplied = true;
          alert("Coupon applied successfully! 20% discount added.");
        } else alert("Cart total must be at least 200 TK.");
      } else alert("Invalid Coupon Code! Use: SELL200");
      updateDisplay();
    });
  }

  // Make Purchase
  const purchaseBtn = document.querySelector('.btn-purchase');
  if (purchaseBtn) {
    purchaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (totalPrice > 0) {
        alert("Thank you! Your order has been placed successfully.");
        totalPrice = 0; discountAmount = 0; isCouponApplied = false;
        document.querySelector('.coupon-input input').value = '';
        updateDisplay();
      } else alert("Your cart is empty!");
    });
  }
});

// ৫. ডিসপ্লে আপডেট
function updateDisplay() {
  const grandTotal = totalPrice - discountAmount;
  let totalElem = document.getElementById('total-price');
  let discountElem = document.getElementById('discount');
  let grandTotalElem = document.getElementById('grand-total');

  if (!totalElem) totalElem = document.querySelector('.price-box p:nth-child(1) span');
  if (!discountElem) discountElem = document.querySelector('.price-box p:nth-child(2) span');
  if (!grandTotalElem) grandTotalElem = document.querySelector('.price-box p:nth-child(3) span');

  if (totalElem) totalElem.innerText = totalPrice.toFixed(2) + " TK";
  if (discountElem) discountElem.innerText = discountAmount.toFixed(2) + " TK";
  if (grandTotalElem) grandTotalElem.innerText = (grandTotal > 0 ? grandTotal : 0).toFixed(2) + " TK";
}