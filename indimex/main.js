// --- Login Enforcement (Indimex) ---
if (window.location.pathname.includes('shop.html') && !localStorage.getItem('isLoggedIn')) {
    window.location.href = 'index.html';
}

// --- Lenis Smooth Scrolling Setup ---
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easing
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);





// --- GSAP Scroll Animations ---

// 1. Advanced "Apple-like" Staggered Text Reveals
// Exclude elements inside .menu-section and the hero-eyebrow-wrapper to prevent regex tag-breaking issues
const revealElements = document.querySelectorAll('.reveal-text:not(.menu-section .reveal-text):not(.hero-eyebrow-wrapper)');
revealElements.forEach(el => {
    // Simple Vanilla JS word splitter (preserves HTML tags like <br>)
    let html = el.innerHTML;
    // Replace text nodes with span-wrapped words
    el.innerHTML = html.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="char">$2</span>');

    // Ensure the parent element is visible, as it might be hidden in CSS
    gsap.set(el, { opacity: 1 });

    const chars = el.querySelectorAll('.char');
    gsap.fromTo(chars,
        {
            y: 50,
            opacity: 0,
            rotateX: -90,
            transformOrigin: "bottom center",
            filter: "blur(10px)",
            scale: 0.8
        },
        {
            y: 0,
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 1.2,
            stagger: 0.05,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "top 30%", // End scrub range
                scrub: 1, // Kinetic Text Scrubbing!
                toggleActions: "play none none reverse"
            }
        }
    );
});

// 1b. Dedicated reveal for hero-eyebrow-wrapper (no splitting)
gsap.fromTo(".hero-eyebrow-wrapper", 
    { opacity: 0, y: 30, filter: "blur(10px)" },
    { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, delay: 0.5, ease: "power3.out" }
);

// 4. 3D Envelope Hover Effect
const envWidget = document.getElementById('reservation-envelope-container');
const envItem = document.querySelector('.envelope');

if (envWidget && envItem) {
    envWidget.addEventListener('mousemove', (e) => {
        // Prevent tilt if it's already open
        if (envWidget.classList.contains('is-open')) return;
        
        const rect = envWidget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;
        
        gsap.to(envItem, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 800,
            ease: "power2.out",
            duration: 0.5
        });
    });

    envWidget.addEventListener('mouseleave', () => {
        gsap.to(envItem, {
            rotateX: 0,
            rotateY: 0,
            ease: "elastic.out(1, 0.5)",
            duration: 1
        });
    });
}

// --- Advanced Animations: Custom Cursor ---
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Immediate cursor update
    gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0 });
});

// Follower easing in tick
gsap.ticker.add(() => {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    gsap.set(cursorFollower, { x: followerX, y: followerY });
});

// Cursor Hover States
const hoverElements = document.querySelectorAll('a, button, .magnetic');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        cursorFollower.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        cursorFollower.classList.remove('hovering');
    });
});

// --- Advanced Animations: Magnetic Elements ---
const magneticElements = document.querySelectorAll('.magnetic');
magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;

        // Move element slightly towards cursor
        gsap.to(el, {
            x: distX * 0.3,
            y: distY * 0.3,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    el.addEventListener('mouseleave', () => {
        // Snap back
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// --- Advanced Animations: Scroll Progress ---
const progressBar = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${(totalScroll / windowHeight) * 100}%`;
    progressBar.style.width = scroll;
});




// --- Dynamic Cinematic Noise Overlay ---
const noiseCanvas = document.getElementById('noise-overlay');
const ctx = noiseCanvas.getContext('2d');
let noiseWidth = window.innerWidth;
let noiseHeight = window.innerHeight;

noiseCanvas.width = noiseWidth;
noiseCanvas.height = noiseHeight;

window.addEventListener('resize', () => {
    noiseWidth = window.innerWidth;
    noiseHeight = window.innerHeight;
    noiseCanvas.width = noiseWidth;
    noiseCanvas.height = noiseHeight;
});

function drawNoise() {
    const imageData = ctx.createImageData(noiseWidth, noiseHeight);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() * 255;
        data[i] = val;     // r
        data[i + 1] = val; // g
        data[i + 2] = val; // b
        data[i + 3] = 15;  // very subtle alpha for film grain
    }
    ctx.putImageData(imageData, 0, 0);
}

// Render Loop for Noise
gsap.ticker.add(() => {
    // Render Noise (lower framerate for film look)
    if (Math.random() > 0.5) drawNoise();
});

// --- Ancient Envelope Reservation Animation ---
const reservationForm = document.getElementById('reservation-form');
const envelope = document.querySelector('.envelope');
const envelopeFlap = document.querySelector('.envelope-flap');
const envelopeSeal = document.querySelector('.envelope-seal');
const envelopeBody = document.querySelector('.envelope-body');
const reservationSuccess = document.getElementById('reservation-success');
const scrapLabel = document.querySelector('.scrap-label');
const envelopeContainer = document.getElementById('reservation-envelope-container');

// Toggle envelope open state
if (envelopeContainer) {
    const dineInTrigger = document.querySelector('.dine-in-trigger');

    const toggleEnvelope = (e) => {
        e.stopPropagation(); // Prevent document click listener from firing
        envelopeContainer.classList.toggle('is-open');
    };

    envelopeContainer.addEventListener('click', (e) => {
        // Prevent toggle if clicking inside the form inputs/buttons
        if (e.target.closest('form')) return;
        toggleEnvelope(e);
    });

    if (dineInTrigger) {
        dineInTrigger.addEventListener('click', toggleEnvelope);
    }

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!envelopeContainer.contains(e.target)) {
            envelopeContainer.classList.remove('is-open');
        }
    });
}

// Idle floating animation to make the scrap label look awesome and attract attention
if (scrapLabel) {
    gsap.to(scrapLabel, {
        y: "-=8",
        rotation: 2,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
}

// Hide envelope container when reaching the footer to prevent overlap
gsap.to("#reservation-envelope-container", {
    scrollTrigger: {
        trigger: ".site-footer",
        start: "top bottom-=50",
        end: "bottom bottom",
        scrub: true
    },
    y: 150,
    opacity: 0,
    ease: "power1.inOut"
});

if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload

        // Create the GSAP timeline for the "Fly Away" effect
        const envelopeTl = gsap.timeline();

        // 1. Hide the form body (simulating folding)
        envelopeTl.to(envelopeBody, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut"
        });

        // 2. Animate the flap closing
        // Note: rotateX folds it along the top edge
        envelopeTl.to(envelopeFlap, {
            rotateX: -180,
            duration: 0.6,
            ease: "back.in(1.2)"
        }, "-=0.1");

        // 3. Make the seal fade out
        envelopeTl.to(envelopeSeal, {
            opacity: 0,
            duration: 0.2
        }, "-=0.3");

        // 4. Shrink and tilt preparing to fly
        envelopeTl.to(envelope, {
            scale: 0.8,
            rotation: -10,
            duration: 0.4,
            ease: "power2.inOut",
            boxShadow: "0 25px 45px rgba(0,0,0,0.7)"
        });

        // 5. Fly away off screen
        envelopeTl.to(envelope, {
            x: 800, // Move right
            y: -1000, // Move up rapidly
            rotation: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power3.in"
        });

        // 6. Show success message
        envelopeTl.to(reservationSuccess, {
            opacity: 1,
            y: "-=20",
            duration: 0.5,
            ease: "back.out(1.5)"
        });

        // Hide success message after a few seconds
        envelopeTl.to(reservationSuccess, {
            opacity: 0,
            duration: 0.5,
            delay: 2.5
        });
    });
}

// --- Infinite-Loop Gallery Wheel ---
// JS drives the rotation so the wheel always takes the shortest path
// and accumulates rotation for seamless looping (no snap-back at 8→1).
(function initGalleryWheel() {
    const ITEMS = 8;
    const STEP = 360 / ITEMS; // 45° per item
    const circle = document.querySelector('.circle-container');
    const radios = document.querySelectorAll('input[name="gallery-card"]');
    const imgs = document.querySelectorAll('.circle-container > div img');
    if (!circle || radios.length === 0) return;

    let currentIdx = 0; // 0-based index of the active card
    let cumulativeAngle = 0; // cumulative rotation in degrees

    // Find which radio is initially checked
    radios.forEach((r, i) => { if (r.checked) currentIdx = i; });

    // Apply initial rotation
    circle.style.rotate = cumulativeAngle + 'deg';
    imgs.forEach(img => { img.style.rotate = (-cumulativeAngle) + 'deg'; });

    // Listen for changes
    radios.forEach((radio, newIdx) => {
        radio.addEventListener('change', () => {
            if (!radio.checked) return;

            // Calculate shortest-path delta
            let delta = newIdx - currentIdx;
            // Wrap to shortest direction
            if (delta > ITEMS / 2) delta -= ITEMS;
            if (delta < -ITEMS / 2) delta += ITEMS;

            cumulativeAngle -= delta * STEP;
            currentIdx = newIdx;

            // Apply rotation via inline style (overrides CSS calc)
            circle.style.rotate = cumulativeAngle + 'deg';
            // Counter-rotate images to keep them upright
            imgs.forEach(img => { img.style.rotate = (-cumulativeAngle) + 'deg'; });
        });
    });
})();

// 3. 3D Section Scroll Effect (exclude menu-section for smooth shop scrolling)
const sections = document.querySelectorAll('section:not(.hero):not(.menu-section)');
sections.forEach(sec => {
    // Wrap section content to apply 3D correctly if not already present
    const content = sec.querySelector('.section-content') || sec;
    
    gsap.fromTo(content,
        {
            opacity: 0,
            rotateX: 20,
            y: 100,
            transformPerspective: 1200
        },
        {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sec,
                start: "top 85%",
                end: "top 40%",
                scrub: 1
            }
        }
    );
});

// --- Google Reviews Infinite Marquee ---
const marqueeTrack = document.getElementById('marquee-track');

if (marqueeTrack) {
    // Clone all review cards and append them to the track
    // This creates the illusion of an infinite scrolling chain
    const cards = Array.from(marqueeTrack.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        // add aria-hidden to avoid screen reader duplication
        clone.setAttribute('aria-hidden', 'true');
        marqueeTrack.appendChild(clone);
    });
}

// --- Login Enforcement (Indimex) ---
if (window.location.pathname.includes('shop.html') && !localStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html';
}

// --- Cart Logic (Ported for Indimex) ---
let cartData = [];
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartOpenBtn = document.getElementById('cart-open-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');

function openCart() {
    if (cartDrawer && cartOverlay) {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCart() {
    if (cartDrawer && cartOverlay) {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (cartOpenBtn) cartOpenBtn.addEventListener('click', openCart);
if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

function renderCart() {
    const cartBody = document.getElementById('cart-body');
    const cartCountElements = document.querySelectorAll('.cart-count');
    const cartSubtotalElement = document.getElementById('cart-subtotal');
    
    if (!cartBody) return;

    const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => el.textContent = totalItems);

    if (cartData.length === 0) {
        cartBody.innerHTML = '<div style="padding: 4rem 0; text-align: center; color: rgba(255,255,255,0.3);">Your order is empty.</div>';
        if (cartSubtotalElement) cartSubtotalElement.textContent = "0.00";
        return;
    }

    cartBody.innerHTML = cartData.map(item => {
        const imgUrl = item.image || "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=200&auto=format&fit=crop"; 

        return `
            <div class="cart-item">
                <img src="${imgUrl}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-header">
                        <h3 class="cart-item-title">${item.name}</h3>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                        </button>
                    </div>
                    <div class="cart-item-controls">
                        <div class="qty-selector">
                            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                            <span class="qty-value">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                        </div>
                        <div class="cart-item-price">€ ${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartSubtotalElement) cartSubtotalElement.textContent = subtotal.toFixed(2);
}

window.updateQty = function(id, delta) {
    const item = cartData.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) removeFromCart(id);
        else renderCart();
    }
};

window.removeFromCart = function(id) {
    cartData = cartData.filter(item => item.id !== id);
    renderCart();
};

window.addToCart = function(productId) {
    const product = menuProducts.find(p => p.id === productId);
    if (!product) return;

    const existing = cartData.find(item => item.id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cartData.push({ ...product, quantity: 1 });
    }
    
    renderCart();

    // Brief pulse animation on the cart button instead of opening the drawer
    const cartBtn = document.getElementById('cart-open-btn');
    if (cartBtn) {
        cartBtn.style.transition = 'transform 0.2s ease, background 0.2s ease';
        cartBtn.style.transform = 'scale(1.15)';
        cartBtn.style.background = 'var(--accent)';
        cartBtn.style.color = 'var(--bg-color)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1)';
            cartBtn.style.background = '';
            cartBtn.style.color = '';
        }, 400);
    }
};

// --- Menu Initialization ---
const menuGrid = document.getElementById('menu-grid');
const filterContainer = document.getElementById('category-filters');
let activeCategory = 'ALL';

function initMenu() {
    if (!menuGrid || !filterContainer || typeof menuProducts === 'undefined') return;
    const categories = ['ALL', ...new Set(menuProducts.map(p => p.category))];
    filterContainer.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `filter-chip ${cat === activeCategory ? 'active' : ''}`;
        btn.textContent = cat;
        btn.addEventListener('click', () => {
            activeCategory = cat;
            renderMenu();
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
        });
        filterContainer.appendChild(btn);
    });
    renderMenu();
}

function renderMenu() {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';
    const filtered = activeCategory === 'ALL' ? menuProducts : menuProducts.filter(p => p.category === activeCategory);
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <div class="price">€ ${product.price.toFixed(2)}</div>
            <p class="description">${product.description}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Order</button>
        `;
        menuGrid.appendChild(card);
    });
}

function populateGalleryGrid() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid || typeof galleryImages === 'undefined') return;
    
    galleryGrid.innerHTML = galleryImages.map(img => `
        <div class="gallery-item">
            <img src="${img.url}" alt="${img.alt}">
        </div>
    `).join('');
}

initMenu();
populateGalleryGrid();
renderCart();

// --- Login Modal Logic ---
const loginOverlay = document.getElementById('login-overlay');
const loginModal = document.getElementById('login-modal');
const loginCloseBtn = document.getElementById('login-close-btn');
const orderTriggers = document.querySelectorAll('.order-trigger');

function openLogin() {
    if (loginOverlay && loginModal) {
        loginOverlay.classList.add('active');
        loginModal.classList.add('active');
        if (typeof lenis !== 'undefined') lenis.stop();
    }
}

function closeLogin() {
    if (loginOverlay && loginModal) {
        loginOverlay.classList.remove('active');
        loginModal.classList.remove('active');
        if (typeof lenis !== 'undefined') lenis.start();
    }
}

orderTriggers.forEach(btn => btn.addEventListener('click', openLogin));
if (loginCloseBtn) loginCloseBtn.addEventListener('click', closeLogin);
if (loginOverlay) loginOverlay.addEventListener('click', closeLogin);

const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'shop.html';
    });
}
// --- Typewriter Effect for Hero Eyebrow ---
const typewriterEl = document.getElementById('typewriter');
if (typewriterEl) {
    const words = ["INDIAN", "MEXICAN"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;
    
    typewriterEl.textContent = '';

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 100;
        } else {
            typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    
    // Start after initial page load animations
    setTimeout(type, 1500);
}
