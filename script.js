document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const phone = '2348036909700'; // Replace with your WhatsApp number
  const fullMessage = `Hello, my name is ${name}.\nMy email is ${email}.\n${message}`;

  const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);

  let whatsappURL;

  if (isMobile) {
    // Mobile devices: use API link (more reliable)
    whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(fullMessage)}`;
  } else {
    // Desktop: use wa.me link
    whatsappURL = `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(fullMessage)}`;
  }
  window.open(whatsappURL, '_blank');
});
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggleButton.textContent = '☀️ Light Mode';
  } else {
    toggleButton.textContent = '🌙 Dark Mode';
  }
});




/* script.js
   Put this file in the same folder as order.html.
   Make sure the QR image is named: usdt_bep20_qr.png
*/

// CONFIG
const PAYSTACK_KEY = 'pk_live_d265096a47801eaa597f27f6674e5a6d051e4959';
const USDT_WALLET = '0xa680f3802370292da015e84253da81155fbc1197';
const WHATSAPP_NUMBER = '2348036909700'; // your number (country code but no +)
const BINANCE_SYMBOL = 'USDTNGN'; // symbol to fetch price (NGN per USDT)
const FALLBACK_RATE = 1600; // fallback NGN per USDT if API fails

// Paystack Payment Function
function payWithPaystack(serviceName, amountNGN) {
    const userEmail = prompt("Enter your email address to continue payment:");
    if (!userEmail) {
        alert("Email is required to proceed.");
        return;
    }

    const handler = PaystackPop.setup({
        key: PAYSTACK_KEY,
        email: userEmail,
        amount: Math.round(amountNGN * 100), // convert to kobo
        currency: 'NGN',
        ref: 'PS_' + Math.floor((Math.random() * 1000000000) + 1),
        metadata: {
            custom_fields: [
                { display_name: "Service", variable_name: "service", value: serviceName }
            ]
        },
        callback: function(response) {
            alert('Payment complete! Reference: ' + response.reference);
            // Optionally redirect to a thank-you page:
            // window.location.href = 'thankyou.html?ref=' + response.reference;
        },
        onClose: function() {
            alert('Payment window closed.');
        }
    });

    handler.openIframe();
}

// Show USDT Payment Modal with Live Conversion + WhatsApp link
async function payWithUSDT(serviceName, amountNGN) {
    // set basic info immediately
    document.getElementById('usdt-service').innerText = serviceName;
    document.getElementById('usdt-amount').innerText = amountNGN.toLocaleString() + ' NGN';

    // try fetch live rate from Binance
    let rate = FALLBACK_RATE;
    try {
        const resp = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=' + BINANCE_SYMBOL);
        if (!resp.ok) throw new Error('Network response not ok');
        const json = await resp.json();
        const fetchedPrice = parseFloat(json.price);
        if (isFinite(fetchedPrice) && fetchedPrice > 0) {
            rate = fetchedPrice;
        } else {
            console.warn('Invalid rate from API, using fallback.');
        }
    } catch (err) {
        console.warn('Could not fetch Binance rate, using fallback. Error:', err);
    }

    // calculate USDT amount
    const usdtAmount = (amountNGN / rate).toFixed(6); // more precision
    document.getElementById('usdt-amount').innerText =
        `${amountNGN.toLocaleString()} NGN ≈ ${usdtAmount} USDT (rate: ${Number(rate).toLocaleString()} NGN/USDT)`;

    // set wallet text (in case you want to change dynamically)
    document.getElementById('usdt-wallet').innerText = USDT_WALLET;

    // update WhatsApp link (pre-filled message)
    const message = `Hello, I have made a USDT payment.%0A%0AService: ${serviceName}%0AAmount: ${usdtAmount} USDT%0AWallet: ${USDT_WALLET}%0A%0AI will attach the proof here.`;
    const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    const waAnchor = document.getElementById('whatsapp-proof');
    waAnchor.href = waHref;

    // show modal
    const modal = document.getElementById('usdt-modal');
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
}

// Copy Wallet Address
function copyUSDTAddress() {
    navigator.clipboard.writeText(USDT_WALLET).then(() => {
        alert('USDT wallet address copied to clipboard!');
    }).catch((err) => {
        console.error('Copy failed', err);
        alert('Could not copy address automatically — please long-press and copy it manually.');
    });
}

// Close USDT Modal
function closeUSDTModal() {
    const modal = document.getElementById('usdt-modal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Close modal on outside click (optional UX)
window.addEventListener('click', function(e) {
    const modal = document.getElementById('usdt-modal');
    if (modal.style.display === 'flex' && e.target === modal) {
        closeUSDTModal();
    }
});









     
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const closeBtn = document.getElementById('close-btn');
  const navLinks = navMenu.querySelectorAll('a');

  // Open menu
  menuToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });

  // Close menu with × button
  closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });

  // Close menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
 
    
 