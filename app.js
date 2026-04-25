// PRODUCT DATA
const products = [
  // WOMEN
  { id: 1, name: "Women's Ethnic Printed Cotton Kurti", price: 399, original: 999, category: "women", image: "currency1.png", rating: 4.2, reviews: 128 },
  { id: 2, name: "Beautiful Silk Saree Red and Gold", price: 899, original: 2499, category: "women", image: "currency2.png", rating: 4.5, reviews: 342 },
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
  { id: 16, name: "Women's Floral Printed Chiffon Dupatta", price: 179, original: 499, category: "women", image: "currency1.png", rating: 4.3, reviews: 89 },
  { id: 17, name: "Men's Running Sports Shoes Black", price: 899, original: 2499, category: "footwear", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80", rating: 4.5, reviews: 412 },
  { id: 18, name: "Stainless Steel Water Bottle 1L", price: 299, original: 699, category: "home", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80", rating: 4.4, reviews: 567 },
  { id: 19, name: "Wireless Charging Pad 15W Fast Charge", price: 699, original: 1799, category: "electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80", rating: 4.1, reviews: 234 },
  { id: 20, name: "Kids Girls Frock Dress Floral Print", price: 449, original: 999, category: "kids", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&q=80", rating: 4.7, reviews: 178 },
  { id: 21, name: "Face Wash Brightening Vitamin C 100ml", price: 199, original: 499, category: "beauty", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80", rating: 4.2, reviews: 621 },
  { id: 22, name: "Leather Bifold Wallet Men's Brown", price: 399, original: 999, category: "bags", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80", rating: 4.3, reviews: 145 }
];

let cart = [];
let currentFilter = 'all';
let allStoreProducts = [...products];

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  // Load static products first for instant render
  renderProducts(products, 'productsGrid');
  renderProducts(products.slice(0, 4), 'dealsGrid');

  // Then merge with admin-added products from Firestore
  firestore.collection('products').onSnapshot(snap => {
    const fbProds = snap.docs.map(doc => ({ ...doc.data(), id: doc.id, reviews: doc.data().reviews || 0 }));
    allStoreProducts = [...products, ...fbProds];
    renderProducts(allStoreProducts, 'productsGrid');
    renderProducts(allStoreProducts.slice(0, 4), 'dealsGrid');
  });

  startTimer();
  setupBannerSlider();

  // Start on login page — hide home, show login
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-login').classList.add('active');
  toggleAppChrome(false); // hide header/nav on initial load
});


// TOGGLE HEADER / BOTTOM-NAV / CART (hide on auth pages)
function toggleAppChrome(show) {
  const header     = document.querySelector('.header');
  const bottomNav  = document.querySelector('.bottom-nav');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer  = document.getElementById('cartDrawer');
  const toast       = document.getElementById('toast');
  [header, bottomNav].forEach(el => {
    if (el) el.style.display = show ? '' : 'none';
  });
  // Make sure cart is closed when hiding
  if (!show) {
    cartOverlay && cartOverlay.classList.remove('open');
    cartDrawer  && cartDrawer.classList.remove('open');
  }
}

// SPA ROUTING
function switchPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target page
  document.getElementById('page-' + pageId).classList.add('active');
  
  // Show header & bottom nav
  toggleAppChrome(true);
  
  // Update bottom nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById('nav-' + pageId);
  if (navEl) navEl.classList.add('active');
  
  // Scroll to top
  window.scrollTo(0, 0);

  // Load orders if navigating to orders page
  if (pageId === 'orders') loadOrders();
}

// AUTH PAGE ROUTING (login / signup - no bottom nav, no header)
function switchAuthPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  // Hide header & bottom nav on auth pages
  toggleAppChrome(false);
  window.scrollTo(0, 0);
}

const ADMIN_EMAIL = '123@gmail.com';
function isAdminUser(email) { return email && email.toLowerCase() === ADMIN_EMAIL; }

// ─── FIREBASE AUTH STATE OBSERVER ───────────────────────────────────────────
// If user is already signed-in (persisted session), skip login and go to correct page.
auth.onAuthStateChanged(user => {
  if (user) {
    if (isAdminUser(user.email)) {
      window.location.href = 'admin.html';
      return;
    }
    db.ref('users/' + user.uid).once('value').then(snap => {
      const data = snap.val();
      const name = (data && data.name) ? data.name
                                       : (user.displayName || user.email.split('@')[0]);
      updateAccountGreeting(name, user.email);
      updateLogoutButton(true);
    });
    switchPage('home');
  }
  // else: login page is already shown by DOMContentLoaded
});

// LOGIN HANDLER — Firebase signInWithEmailAndPassword
function handleLogin(e) {
  e.preventDefault();
  const btn   = document.getElementById('loginBtn');
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPassword').value;

  if (!email || !pass) { showToast('Please fill in all fields'); return; }

  btn.textContent = 'Logging in…';
  btn.style.opacity = '0.8';
  btn.disabled = true;

  auth.signInWithEmailAndPassword(email, pass)
    .then(cred => {
      const user = cred.user;
      // ── ADMIN CHECK ──
      if (isAdminUser(user.email)) {
        showToast('⚡ Redirecting to Admin Panel…');
        setTimeout(() => { window.location.href = 'admin.html'; }, 800);
        return;
      }
      // ── REGULAR USER ──
      return db.ref('users/' + user.uid).once('value').then(snap => {
        const data = snap.val();
        const name = (data && data.name) ? data.name : email.split('@')[0];
        updateAccountGreeting(name, user.email);
        updateLogoutButton(true);
        showToast('✅ Welcome back, ' + name.split(' ')[0] + '!');
        switchPage('home');
      });
    })
    .catch(err => {
      showToast('❌ ' + friendlyAuthError(err.code));
    })
    .finally(() => {
      btn.textContent = 'Login';
      btn.style.opacity = '1';
      btn.disabled = false;
    });
}

// SIGNUP HANDLER — Firebase createUserWithEmailAndPassword + save to Realtime DB
function handleSignup(e) {
  e.preventDefault();
  const btn     = document.getElementById('signupBtn');
  const name    = document.getElementById('signupName').value.trim();
  const email   = document.getElementById('signupEmail').value.trim();
  const pass    = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;

  if (!name || !email || !pass || !confirm) { showToast('Please fill in all fields'); return; }
  if (pass !== confirm) { showToast('❌ Passwords do not match'); return; }
  if (pass.length < 6)  { showToast('Password must be at least 6 characters'); return; }

  btn.textContent = 'Creating Account…';
  btn.style.opacity = '0.8';
  btn.disabled = true;

  auth.createUserWithEmailAndPassword(email, pass)
    .then(cred => {
      const user = cred.user;
      const profileData = {
        name:       name,
        email:      user.email,
        uid:        user.uid,
        createdAt:  Date.now(),
        status:     'active',
        orders:     0,
        totalSpent: 0
      };
      // Save to Firestore (primary — for admin panel)
      const fsWrite = firestore.collection('users').doc(user.uid).set(profileData);
      // Save to Realtime DB (legacy backup)
      const rtWrite = db.ref('users/' + user.uid).set(profileData);
      return Promise.all([fsWrite, rtWrite]).then(() => {
        updateAccountGreeting(name, user.email);
        updateLogoutButton(true);
        showToast('🎉 Welcome, ' + name.split(' ')[0] + '! Account created!');
        switchPage('home');
      });
    })
    .catch(err => {
      showToast('❌ ' + friendlyAuthError(err.code));
    })
    .finally(() => {
      btn.textContent = 'Create Account';
      btn.style.opacity = '1';
      btn.disabled = false;
    });
}

// LOGOUT
function handleLogout() {
  auth.signOut().then(() => {
    updateAccountGreeting('Guest', 'Login to see your profile');
    updateLogoutButton(false);
    showToast('👋 Logged out successfully');
    switchAuthPage('login');
  });
}

// GUEST CONTINUE
function continueAsGuest() {
  updateAccountGreeting('Guest', 'Login to see your profile');
  updateLogoutButton(false);
  switchPage('home');
  showToast('Browsing as Guest');
}

// ─── ADMIN PANEL FUNCTIONS ───────────────────────────────────────────────────
function goToAdmin() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-admin').classList.add('active');
  toggleAppChrome(false); // hide header & bottom nav
  window.scrollTo(0, 0);
  loadAdminPanel();
}

function loadAdminPanel() {
  // Update products count stat
  document.getElementById('statProducts').textContent = products.length;

  // Populate products table
  const prodTbody = document.getElementById('adminProductsTable');
  if (prodTbody) {
    prodTbody.innerHTML = products.map((p, i) => `
      <tr>
        <td style="color:rgba(255,255,255,0.4)">${i + 1}</td>
        <td>${p.name}</td>
        <td><span class="admin-category-badge">${p.category}</span></td>
        <td class="admin-price">₹${p.price}</td>
        <td class="admin-rating">${p.rating} ⭐</td>
      </tr>
    `).join('');
  }

  // Fetch users from Firebase Realtime Database
  const usersTbody = document.getElementById('adminUsersTable');
  const statUsersEl = document.getElementById('statUsers');

  db.ref('users').once('value').then(snap => {
    const data = snap.val();
    if (!data) {
      if (usersTbody) usersTbody.innerHTML = '<tr><td colspan="4" class="admin-table-loading">No registered users yet</td></tr>';
      if (statUsersEl) statUsersEl.textContent = '0';
      return;
    }
    const usersList = Object.entries(data);
    if (statUsersEl) statUsersEl.textContent = usersList.length;
    if (usersTbody) {
      usersTbody.innerHTML = usersList.map(([uid, u], i) => `
        <tr>
          <td style="color:rgba(255,255,255,0.4)">${i + 1}</td>
          <td>${u.name || '—'}</td>
          <td style="color:#a78bfa">${u.email}</td>
          <td style="color:rgba(255,255,255,0.5)">${u.createdAt ? new Date(u.createdAt).toLocaleDateString('en-IN') : '—'}</td>
        </tr>
      `).join('');
    }
  }).catch(() => {
    if (usersTbody) usersTbody.innerHTML = '<tr><td colspan="4" class="admin-table-loading">⚠️ Could not load users</td></tr>';
  });
}

// UPDATE ACCOUNT PAGE GREETING
function updateAccountGreeting(name, sub) {
  const nameEl = document.querySelector('.account-name');
  const subEl  = document.querySelector('.account-phone');
  const avatar = document.querySelector('.avatar');
  if (nameEl) nameEl.textContent = 'Hello, ' + name + '!';
  if (subEl)  subEl.textContent  = sub;
  if (avatar) avatar.textContent = name.charAt(0).toUpperCase();
}

// SHOW / HIDE LOGOUT BUTTON IN ACCOUNT MENU
function updateLogoutButton(loggedIn) {
  const loginItem  = document.getElementById('accountLoginItem');
  const logoutItem = document.getElementById('accountLogoutItem');
  if (loginItem)  loginItem.style.display  = loggedIn ? 'none' : '';
  if (logoutItem) logoutItem.style.display = loggedIn ? ''     : 'none';
}

// FIREBASE ERROR CODE → FRIENDLY MESSAGE
function friendlyAuthError(code) {
  const map = {
    'auth/user-not-found':        'No account found with this email.',
    'auth/wrong-password':        'Incorrect password. Please try again.',
    'auth/invalid-email':         'Please enter a valid email address.',
    'auth/email-already-in-use':  'An account with this email already exists.',
    'auth/weak-password':         'Password must be at least 6 characters.',
    'auth/too-many-requests':     'Too many attempts. Please try again later.',
    'auth/invalid-credential':    'Invalid email or password.',
    'auth/network-request-failed':'Network error. Check your connection.',
  };
  return map[code] || 'Something went wrong. Please try again.';
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
  const product = allStoreProducts.find(p => p.id === productId);
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

// ─── RAZORPAY KEY ──────────────────────────────────────────────────────────────
// ⚠️  Replace this with YOUR Razorpay key from https://dashboard.razorpay.com
const RAZORPAY_KEY_ID = 'rzp_test_ShD1454CTNXCnt';

// ─── CHECKOUT PAGE ─────────────────────────────────────────────────────────────
function goToCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  toggleCart(); // Close cart drawer

  // Navigate to checkout page
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-checkout').classList.add('active');
  toggleAppChrome(false);
  window.scrollTo(0, 0);

  // Pre-fill user info if logged in
  const user = auth.currentUser;
  if (user) {
    db.ref('users/' + user.uid).once('value').then(snap => {
      const data = snap.val();
      if (data) {
        const nameEl = document.getElementById('checkoutName');
        const emailEl = document.getElementById('checkoutEmail');
        if (nameEl && !nameEl.value) nameEl.value = data.name || '';
        if (emailEl && !emailEl.value) emailEl.value = data.email || user.email || '';
      }
    });
  }

  // Reset step UI
  document.getElementById('checkoutStep1').style.display = '';
  document.getElementById('checkoutStep3').style.display = 'none';
  document.getElementById('step1Indicator').classList.add('active');
  document.getElementById('step2Indicator').classList.remove('active', 'completed');
  document.getElementById('step3Indicator').classList.remove('active', 'completed');

  renderCheckoutSummary();
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutItems');
  let subtotal = 0;
  let originalTotal = 0;

  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    originalTotal += item.original * item.qty;
    return `
      <div class="checkout-item">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x100?text=Product'" />
        <div class="checkout-item-info">
          <div class="checkout-item-name">${item.name}</div>
          <div class="checkout-item-qty">Qty: ${item.qty}</div>
          <div class="checkout-item-price">₹${item.price} <span class="checkout-item-original">₹${item.original}</span></div>
        </div>
      </div>
    `;
  }).join('');

  const savings = originalTotal - subtotal;
  document.getElementById('checkoutSubtotal').textContent = '₹' + subtotal.toLocaleString('en-IN');
  document.getElementById('checkoutTotal').textContent = '₹' + subtotal.toLocaleString('en-IN');
  document.getElementById('checkoutSavings').textContent = '₹' + savings.toLocaleString('en-IN');
}

function proceedToPayment() {
  // Validate address form
  const form = document.getElementById('addressForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const name    = document.getElementById('checkoutName').value.trim();
  const phone   = document.getElementById('checkoutPhone').value.trim();
  const email   = document.getElementById('checkoutEmail').value.trim();
  const address = document.getElementById('checkoutAddress').value.trim();
  const city    = document.getElementById('checkoutCity').value.trim();
  const pin     = document.getElementById('checkoutPin').value.trim();
  const state   = document.getElementById('checkoutState').value.trim();

  // Calculate total in paise (Razorpay expects paise)
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const amountInPaise = totalAmount * 100;

  // Generate a unique order ID
  const orderId = 'ORD-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();

  // Update step indicator
  document.getElementById('step1Indicator').classList.add('completed');
  document.getElementById('step2Indicator').classList.add('active');

  // ─── RAZORPAY OPTIONS ──────────────────────────────────────────────
  const options = {
    key: RAZORPAY_KEY_ID,
    amount: amountInPaise,
    currency: 'INR',
    name: 'ALAN WALKER Store',
    description: `Order ${orderId} — ${cart.length} item(s)`,
    image: 'https://i.imgur.com/3g7nmJC.png', // Store logo
    prefill: {
      name: name,
      email: email,
      contact: phone
    },
    notes: {
      order_id: orderId,
      address: `${address}, ${city}, ${state} - ${pin}`
    },
    theme: {
      color: '#9334e9'
    },
    handler: function (response) {
      // ── PAYMENT SUCCESS ──
      onPaymentSuccess(response, orderId, totalAmount, {
        name, phone, email, address, city, pin, state
      });
    },
    modal: {
      ondismiss: function () {
        // Payment modal closed without completing
        document.getElementById('step2Indicator').classList.remove('active');
        showToast('Payment cancelled. You can retry anytime.');
      }
    }
  };

  try {
    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function (response) {
      showToast('❌ Payment failed: ' + response.error.description);
      document.getElementById('step2Indicator').classList.remove('active');
    });
    rzp.open();
  } catch (err) {
    showToast('⚠️ Could not open Razorpay. Check your API key.');
    console.error('Razorpay error:', err);
  }
}

// ─── ON PAYMENT SUCCESS ────────────────────────────────────────────────────────
function onPaymentSuccess(response, orderId, totalAmount, addressData) {
  const paymentId = response.razorpay_payment_id;

  // Step indicators
  document.getElementById('step2Indicator').classList.add('completed');
  document.getElementById('step2Indicator').classList.remove('active');
  document.getElementById('step3Indicator').classList.add('active', 'completed');

  // Estimated delivery: 5–7 days from now
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5 + Math.floor(Math.random() * 3));
  const deliveryStr = deliveryDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  // Build order object
  const orderData = {
    orderId: orderId,
    paymentId: paymentId,
    amount: totalAmount,
    currency: 'INR',
    status: 'confirmed',
    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      original: item.original,
      qty: item.qty,
      image: item.image,
      category: item.category
    })),
    address: addressData,
    estimatedDelivery: deliveryStr,
    createdAt: Date.now()
  };

  // Save order to Firestore
  const user = auth.currentUser;
  if (user) {
    firestore.collection('orders').doc(orderId).set({
      ...orderData,
      userId: user.uid,
      userEmail: user.email
    }).then(() => {
      console.log('Order saved to Firestore:', orderId);
      // Update user's order count & total spent
      firestore.collection('users').doc(user.uid).update({
        orders: firebase.firestore.FieldValue.increment(1),
        totalSpent: firebase.firestore.FieldValue.increment(totalAmount)
      }).catch(() => {});
    }).catch(err => console.error('Error saving order:', err));
  }

  // Show success UI
  document.getElementById('checkoutStep1').style.display = 'none';
  document.getElementById('checkoutStep3').style.display = '';

  document.getElementById('successOrderId').textContent = '#' + orderId;
  document.getElementById('successAmount').textContent = '₹' + totalAmount.toLocaleString('en-IN');
  document.getElementById('successPaymentId').textContent = paymentId;
  document.getElementById('successDelivery').textContent = deliveryStr;

  // Clear cart
  cart = [];
  updateCartBadge();
  updateAllButtons();

  showToast('🎉 Payment successful! Order placed.');
  window.scrollTo(0, 0);
}

// ─── LOAD & RENDER ORDERS ON "MY ORDERS" PAGE ─────────────────────────────────
function loadOrders() {
  const container = document.getElementById('ordersContent');
  const user = auth.currentUser;

  if (!user) {
    container.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
      <h3>Login to View Orders</h3>
      <p>Please login to see your order history.</p>
      <button class="start-shopping" onclick="switchAuthPage('login')">Login Now</button>
    `;
    return;
  }

  container.innerHTML = `
    <div style="text-align:center; padding:40px;">
      <div class="orders-loading-spinner"></div>
      <p style="color:var(--text3); margin-top:12px; font-size:13px;">Loading your orders…</p>
    </div>
  `;

  firestore.collection('orders')
    .where('userId', '==', user.uid)
    .orderBy('createdAt', 'desc')
    .get()
    .then(snap => {
      if (snap.empty) {
        container.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
          <h3>No Orders Yet!</h3>
          <p>Looks like you haven't placed any orders.<br/>Start shopping to see your orders here.</p>
          <button class="start-shopping" onclick="switchPage('home')">Start Shopping</button>
        `;
        return;
      }

      container.innerHTML = '';
      container.className = 'orders-list';

      snap.forEach(doc => {
        const order = doc.data();
        const date = new Date(order.createdAt).toLocaleDateString('en-IN', {
          day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        const statusClass = order.status === 'confirmed' ? 'status-confirmed' : 'status-pending';
        const statusLabel = order.status === 'confirmed' ? '✅ Confirmed' : '⏳ Pending';

        const itemsHtml = order.items.map(item => `
          <div class="order-item-mini">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/50?text=P'" />
            <div>
              <div class="order-item-mini-name">${item.name}</div>
              <div class="order-item-mini-meta">Qty: ${item.qty} · ₹${item.price}</div>
            </div>
          </div>
        `).join('');

        const orderCard = document.createElement('div');
        orderCard.className = 'order-card';
        orderCard.innerHTML = `
          <div class="order-card-header">
            <div>
              <div class="order-id">#${order.orderId}</div>
              <div class="order-date">${date}</div>
            </div>
            <div class="order-status ${statusClass}">${statusLabel}</div>
          </div>
          <div class="order-items-list">${itemsHtml}</div>
          <div class="order-card-footer">
            <div class="order-total">
              <span>Total:</span>
              <strong>₹${order.amount.toLocaleString('en-IN')}</strong>
            </div>
            <div class="order-delivery">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              Est. Delivery: ${order.estimatedDelivery || '—'}
            </div>
          </div>
        `;
        container.appendChild(orderCard);
      });
    })
    .catch(err => {
      console.error('Error loading orders:', err);
      container.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
        <h3>No Orders Yet!</h3>
        <p>Looks like you haven't placed any orders.<br/>Start shopping to see your orders here.</p>
        <button class="start-shopping" onclick="switchPage('home')">Start Shopping</button>
      `;
    });
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
