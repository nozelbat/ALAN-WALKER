// PRODUCT DATA
const products = [
  // WOMEN
  { id: 1, name: "Women's Ethnic Printed Cotton Kurti", price: 399, original: 999, category: "women", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80", rating: 4.2, reviews: 128 },
  { id: 2, name: "Beautiful Silk Saree Red and Gold", price: 899, original: 2499, category: "women", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=80", rating: 4.5, reviews: 342 },
  { id: 3, name: "Women's Trendy Handbag Tan Brown", price: 449, original: 1299, category: "bags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80", rating: 4.0, reviews: 89 },
  { id: 4, name: "Traditional Jhumka Earrings Gold Tone", price: 199, original: 499, category: "jewellery", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80", rating: 4.7, reviews: 512 },
  // MEN
  { id: 5, name: "Men's Casual Round Neck Cotton T-Shirt Navy", price: 299, original: 799, category: "men", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80", rating: 4.1, reviews: 215 },
  { id: 6, name: "Men's Slim Fit Casual Shirt Checkered", price: 499, original: 1499, category: "men", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80", rating: 3.9, reviews: 76 },
  { id: 7, name: "Men's Stylish Denim Jeans Blue", price: 799, original: 1999, category: "men", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80", rating: 4.3, reviews: 154 },
  { id: 8, name: "White Casual Sneakers Sports Shoes", price: 599, original: 1599, category: "footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", rating: 4.4, reviews: 298 },
  // HOME & OTHERS
  { id: 9, name: "Cotton Double Bedsheet with 2 Pillow Covers", price: 349, original: 999, category: "home", image: "https://images.unsplash.com/photo-1522771730849-f0db72186981?w=500&q=80", rating: 4.6, reviews: 421 },
  { id: 10, name: "Set of 6 Glass Tumblers 300ml", price: 249, original: 599, category: "home", image: "https://images.unsplash.com/photo-1571945192086-c10a91a68e7e?w=500&q=80", rating: 4.0, reviews: 65 },
  { id: 11, name: "Wireless Bluetooth Earbuds with Mic", price: 899, original: 2999, category: "electronics", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80", rating: 4.2, reviews: 876 },
  { id: 12, name: "Smart Watch with Heart Rate Monitor", price: 1299, original: 3999, category: "electronics", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80", rating: 3.8, reviews: 112 },
  { id: 13, name: "Kids Boys Printed T-Shirt & Shorts Set", price: 399, original: 899, category: "kids", image: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=500&q=80", rating: 4.5, reviews: 134 },
  { id: 14, name: "Matte Liquid Lipstick Long Lasting", price: 149, original: 399, category: "beauty", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80", rating: 4.1, reviews: 345 },
  { id: 15, name: "Gold Plated Necklace with Pendant", price: 349, original: 899, category: "jewellery", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80", rating: 4.6, reviews: 203 },
  { id: 16, name: "Women's Floral Printed Chiffon Dupatta", price: 179, original: 499, category: "women", image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=500&q=80", rating: 4.3, reviews: 89 },
  { id: 17, name: "Men's Running Sports Shoes Black", price: 899, original: 2499, category: "footwear", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80", rating: 4.5, reviews: 412 },
  { id: 18, name: "Stainless Steel Water Bottle 1L", price: 299, original: 699, category: "home", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80", rating: 4.4, reviews: 567 },
  { id: 19, name: "Wireless Charging Pad 15W Fast Charge", price: 699, original: 1799, category: "electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80", rating: 4.1, reviews: 234 },
  { id: 20, name: "Kids Girls Frock Dress Floral Print", price: 449, original: 999, category: "kids", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&q=80", rating: 4.7, reviews: 178 },
  { id: 21, name: "Face Wash Brightening Vitamin C 100ml", price: 199, original: 499, category: "beauty", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80", rating: 4.2, reviews: 621 },
  { id: 22, name: "Leather Bifold Wallet Men's Brown", price: 399, original: 999, category: "bags", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80", rating: 4.3, reviews: 145 }
];

let cart = [];
let currentFilter = 'all';

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products, 'productsGrid');
  
  // Render Deals (first 4 items for demo)
  const deals = products.slice(0, 4);
  renderProducts(deals, 'dealsGrid');
  
  startTimer();
  setupBannerSlider();
});

// SPA ROUTING
function switchPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target page
  document.getElementById('page-' + pageId).classList.add('active');
  
  // Update bottom nav (auth pages have no nav item - skip safely)
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById('nav-' + pageId);
  if (navEl) navEl.classList.add('active');
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// AUTH PAGE ROUTING (login / signup - no bottom nav highlight)
function switchAuthPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  // Keep Account nav highlighted
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const accountNav = document.getElementById('nav-account');
  if (accountNav) accountNav.classList.add('active');
  window.scrollTo(0, 0);
}

// LOGIN HANDLER
function handleLogin(e) {
  e.preventDefault();
  const btn = document.getElementById('loginBtn');
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPassword').value;

  if (!email || !pass) { showToast('Please fill in all fields'); return; }

  btn.textContent = 'Logging in…';
  btn.style.opacity = '0.8';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Login';
    btn.style.opacity = '1';
    btn.disabled = false;
    showToast('✅ Logged in successfully!');
    switchPage('home');
  }, 1400);
}

// SIGNUP HANDLER
function handleSignup(e) {
  e.preventDefault();
  const btn      = document.getElementById('signupBtn');
  const name     = document.getElementById('signupName').value.trim();
  const email    = document.getElementById('signupEmail').value.trim();
  const pass     = document.getElementById('signupPassword').value;
  const confirm  = document.getElementById('signupConfirm').value;

  if (!name || !email || !pass || !confirm) { showToast('Please fill in all fields'); return; }
  if (pass !== confirm) { showToast('❌ Passwords do not match'); return; }
  if (pass.length < 6)  { showToast('Password must be at least 6 characters'); return; }

  btn.textContent = 'Creating Account…';
  btn.style.opacity = '0.8';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Create Account';
    btn.style.opacity = '1';
    btn.disabled = false;
    showToast('🎉 Account created! Welcome, ' + name.split(' ')[0] + '!');
    switchPage('home');
  }, 1600);
}

// TOGGLE PASSWORD VISIBILITY
function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.innerHTML = isHidden
    ? `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
    : `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
}

function filterAndGo(category) {
  switchPage('home');
  setFilter(category);
  // Scroll to products section smoothly
  document.getElementById('filterTabs').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// FILTERING & SEARCH
function setFilter(category) {
  currentFilter = category;
  
  // Update tabs
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.filter-tab[data-filter="${category}"]`).classList.add('active');
  
  // Filter products
  filterProducts();
}

function filterProducts() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
  const filtered = products.filter(p => {
    const matchCategory = currentFilter === 'all' || p.category === currentFilter;
    const matchSearch = p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm);
    return matchCategory && matchSearch;
  });
  
  renderProducts(filtered, 'productsGrid');
}

// RENDER PRODUCTS
function renderProducts(items, containerId) {
  const container = document.getElementById(containerId);
  
  if (items.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: var(--text3);">
      <div style="font-size: 40px; margin-bottom: 10px;">🔍</div>
      <div style="font-size: 15px; font-weight: 600;">No products found</div>
      <div style="font-size: 13px; margin-top: 4px;">Try checking your spelling or changing the filter.</div>
    </div>`;
    return;
  }
  
  container.innerHTML = items.map(p => {
    const discount = Math.round(((p.original - p.price) / p.original) * 100);
    const inCart = cart.some(item => item.id === p.id);
    const btnClass = inCart ? 'add-cart-btn added' : 'add-cart-btn';
    const btnText = inCart ? '✓ Added to Cart' : 'Add to Cart';
    
    return `
      <div class="product-card">
        <div class="product-img">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x400?text=Product'">
          <div class="discount-badge">${discount}% OFF</div>
          <button class="wishlist-btn" onclick="toggleWishlist(this, event)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <div class="free-tag">Free Delivery</div>
        </div>
        <div class="product-info">
          <div class="product-name" title="${p.name}">${p.name}</div>
          <div class="product-pricing">
            <span class="product-price">₹${p.price}</span>
            <span class="product-original">₹${p.original}</span>
            <span class="product-discount">${discount}% off</span>
          </div>
          <div class="product-rating">
            <span class="rating-badge">${p.rating} ⭐</span>
            <span class="review-count">(${p.reviews})</span>
          </div>
          <button class="${btnClass}" onclick="addToCart(${p.id}, this)">${btnText}</button>
        </div>
      </div>
    `;
  }).join('');
}

// CART LOGIC
function toggleCart() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  overlay.classList.toggle('open');
  drawer.classList.toggle('open');
  
  if (drawer.classList.contains('open')) {
    renderCart();
  }
}

function addToCart(productId, btnElement) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.qty += 1;
    showToast('Quantity updated in cart');
  } else {
    cart.push({ ...product, qty: 1 });
    showToast('Added to cart');
    
    // Update button visual
    if (btnElement) {
      btnElement.classList.add('added');
      btnElement.innerHTML = '✓ Added to Cart';
    }
  }
  
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = totalQty;
  
  // Pulse animation
  badge.style.transform = 'scale(1.5)';
  setTimeout(() => badge.style.transform = 'scale(1)', 200);
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>Your cart is empty!</p>
        <small>Add items to it now.</small>
      </div>
    `;
    totalEl.textContent = '₹0.00';
    return;
  }
  
  let total = 0;
  
  container.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://via.placeholder.com/300x400?text=Product'">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div style="display:flex;align-items:center;">
            <div class="cart-item-price">₹${item.price}</div>
            <div class="cart-item-original">₹${item.original}</div>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
          </div>
          <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
        </div>
      </div>
    `;
  }).join('');
  
  totalEl.textContent = `₹${total.toFixed(2)}`;
}

function updateQty(index, delta) {
  cart[index].qty += delta;
  
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
    updateAllButtons(); // Reset buttons if item removed completely
  }
  
  renderCart();
  updateCartBadge();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
  updateCartBadge();
  updateAllButtons();
  showToast('Item removed');
}

function updateAllButtons() {
  // Reset all buttons and re-apply 'added' state based on current cart
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.classList.remove('added');
    btn.innerHTML = 'Add to Cart';
  });
  
  // Re-render currently visible products to fix button states
  filterProducts();
}

function confirmOrder() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  toggleCart(); // Close cart
  showToast('Processing order...');
  setTimeout(() => {
    showToast('Order confirmed! Tracking info sent.');
    cart = [];
    updateCartBadge();
    updateAllButtons();
    // In a real app, we'd navigate to an order success page here
  }, 1500);
}

// UTILITIES
function toggleWishlist(btn, event) {
  event.stopPropagation(); // Prevent card click
  btn.classList.toggle('active');
  
  if (btn.classList.contains('active')) {
    showToast('Added to Wishlist');
  } else {
    showToast('Removed from Wishlist');
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// BANNER SLIDER LOGIC
function setupBannerSlider() {
  const slides = document.getElementById('bannerSlides');
  const slideCount = document.querySelectorAll('.banner-slide').length;
  const dotsContainer = document.getElementById('bannerDots');
  let currentIndex = 0;
  
  // Create dots
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.className = i === 0 ? 'dot active' : 'dot';
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
  
  function goToSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((d, i) => {
      d.className = i === currentIndex ? 'dot active' : 'dot';
    });
  }
  
  // Auto slide
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
  }, 4000);
}

// DEALS TIMER
function startTimer() {
  let h = 5; let m = 0; let s = 0;
  const timerH = document.getElementById('timerH');
  const timerM = document.getElementById('timerM');
  const timerS = document.getElementById('timerS');
  
  setInterval(() => {
    if (s > 0) {
      s--;
    } else {
      s = 59;
      if (m > 0) {
        m--;
      } else {
        m = 59;
        if (h > 0) h--;
      }
    }
    
    timerH.textContent = h.toString().padStart(2, '0');
    timerM.textContent = m.toString().padStart(2, '0');
    timerS.textContent = s.toString().padStart(2, '0');
  }, 1000);
}
