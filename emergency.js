/**
 * SIX7 Plumbing - Emergency Call Popup & Floating Button (Enhanced)
 * Include this script on any page with: <script src="/js/emergency-popup.js"></script>
 * Features:
 * - Full-screen popup inviting user to call emergency number
 * - Close button to dismiss popup (only one close button)
 * - Two floating buttons (Call + WhatsApp) stay visible permanently after dismissal
 * - Smart ad injection: tailors.lk ad in first content section, electrical.six7.lk ad before footer
 */

(function() {
    // Configuration
    const CONFIG = {
        phoneNumber: '+94758244216',
        phoneDisplay: '+94 75 824 4216',
        whatsappNumber: '94758244216',
        pricingPageUrl: '/pricing/',
        popupDelay: 1500, // milliseconds before popup appears
        popupDuration: 300, // animation duration
        bannerDismissedKey: 'six7EmergencyPopupDismissed',
        floatingDismissedKey: 'six7FloatingDismissed',
        tailorAdUrl: 'https://tailors.lk',
        electricalAdUrl: 'https://electrical.six7.lk'
    };

    // Check if popup has been dismissed in this session (using sessionStorage for per-session persistence)
    let popupDismissed = sessionStorage.getItem(CONFIG.bannerDismissedKey) === 'true';
    let floatingDismissed = localStorage.getItem(CONFIG.floatingDismissedKey) === 'true';

    // Create and inject styles
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Emergency Popup Styles - Full Screen Modal */
            .six7-emergency-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.85);
                z-index: 99999;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
                font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            .six7-emergency-overlay.active {
                opacity: 1;
                visibility: visible;
            }
            .six7-emergency-popup {
                background: linear-gradient(135deg, #0A2647 0%, #1E3A5F 100%);
                max-width: 500px;
                width: 90%;
                margin: 20px;
                border-radius: 32px;
                position: relative;
                transform: scale(0.9);
                transition: transform 0.3s ease;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .six7-emergency-overlay.active .six7-emergency-popup {
                transform: scale(1);
            }
            .six7-popup-content {
                padding: 40px 24px 32px;
                text-align: center;
                color: white;
            }
            .six7-popup-icon {
                width: 80px;
                height: 80px;
                background: #DC2626;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 20px;
                box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
                animation: six7-pulse 1.5s infinite;
            }
            .six7-popup-icon i {
                font-size: 40px;
                color: white;
            }
            @keyframes six7-pulse {
                0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(220, 38, 38, 0.4); }
                50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(220, 38, 38, 0.7); }
            }
            .six7-popup-title {
                font-size: 28px;
                font-weight: 800;
                margin-bottom: 12px;
                letter-spacing: -0.5px;
            }
            .six7-popup-subtitle {
                font-size: 16px;
                opacity: 0.85;
                margin-bottom: 24px;
                line-height: 1.5;
            }
            .six7-popup-divider {
                width: 60px;
                height: 3px;
                background: #F97316;
                margin: 0 auto 24px;
                border-radius: 3px;
            }
            .six7-emergency-number {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 60px;
                padding: 14px 20px;
                margin-bottom: 20px;
                display: inline-flex;
                align-items: center;
                gap: 12px;
                flex-wrap: wrap;
                justify-content: center;
                backdrop-filter: blur(10px);
            }
            .six7-emergency-number span {
                font-size: 22px;
                font-weight: 700;
                letter-spacing: 1px;
            }
            .six7-call-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                background: #DC2626;
                color: white;
                text-decoration: none;
                padding: 14px 28px;
                border-radius: 60px;
                font-weight: 700;
                font-size: 18px;
                width: 100%;
                max-width: 280px;
                margin: 0 auto 16px;
                transition: all 0.2s ease;
                border: none;
                cursor: pointer;
            }
            .six7-call-btn:hover {
                background: #B91C1C;
                transform: scale(1.02);
            }
            .six7-wa-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                background: #25D366;
                color: white;
                text-decoration: none;
                padding: 14px 28px;
                border-radius: 60px;
                font-weight: 700;
                font-size: 18px;
                width: 100%;
                max-width: 280px;
                margin: 0 auto 16px;
                transition: all 0.2s ease;
            }
            .six7-wa-btn:hover {
                background: #128C7E;
                transform: scale(1.02);
            }
            .six7-pricing-link {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                color: #F97316;
                text-decoration: none;
                font-size: 14px;
                font-weight: 500;
                margin-top: 8px;
                transition: all 0.2s ease;
            }
            .six7-pricing-link:hover {
                gap: 12px;
                color: #FF8C42;
            }
            .six7-close-popup {
                position: absolute;
                top: 16px;
                right: 20px;
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s ease;
                backdrop-filter: blur(5px);
            }
            .six7-close-popup:hover {
                background: rgba(255, 255, 255, 0.3);
                transform: scale(1.1);
            }
            
            /* Floating Action Buttons - Always Visible (No close button on minimized state) */
            .six7-floating-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 99998;
                display: flex;
                flex-direction: column;
                gap: 12px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px);
                transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
            }
            .six7-floating-container.active {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            .six7-floating-call {
                background: #DC2626;
                color: white;
                width: 56px;
                height: 56px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                transition: all 0.2s ease;
                cursor: pointer;
                position: relative;
            }
            .six7-floating-call:hover {
                transform: scale(1.1);
                background: #B91C1C;
            }
            .six7-floating-wa {
                background: #25D366;
                color: white;
                width: 56px;
                height: 56px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                transition: all 0.2s ease;
                cursor: pointer;
            }
            .six7-floating-wa:hover {
                transform: scale(1.1);
                background: #128C7E;
            }
            .six7-floating-call i, .six7-floating-wa i {
                font-size: 26px;
            }
            
            /* Ad Banner Styles */
            .six7-ad-tailor, .six7-ad-electrical {
                max-width: 100%;
                margin: 0 auto;
                overflow: hidden;
            }
            .six7-ad-inline {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 16px;
                padding: 20px;
                margin: 30px 0;
                text-align: center;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                cursor: pointer;
            }
            .six7-ad-inline:hover {
                transform: translateY(-3px);
                box-shadow: 0 15px 30px -10px rgba(0,0,0,0.2);
            }
            .six7-ad-inline h4 {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 8px;
                color: white;
            }
            .six7-ad-inline p {
                font-size: 14px;
                opacity: 0.9;
                margin-bottom: 12px;
                color: white;
            }
            .six7-ad-button {
                display: inline-block;
                background: white;
                color: #764ba2;
                padding: 8px 20px;
                border-radius: 40px;
                text-decoration: none;
                font-weight: 600;
                font-size: 14px;
                transition: all 0.2s ease;
            }
            .six7-ad-button:hover {
                transform: scale(1.05);
                background: #f0f0f0;
            }
            
            /* Electrical Ad Specific */
            .six7-ad-electrical .six7-ad-inline {
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            }
            .six7-ad-electrical .six7-ad-button {
                color: #f5576c;
            }
            
            /* Mobile optimization */
            @media (max-width: 768px) {
                .six7-popup-content {
                    padding: 32px 20px 28px;
                }
                .six7-popup-title {
                    font-size: 24px;
                }
                .six7-emergency-number span {
                    font-size: 18px;
                }
                .six7-call-btn, .six7-wa-btn {
                    padding: 12px 20px;
                    font-size: 16px;
                }
                .six7-ad-inline {
                    padding: 16px;
                }
                .six7-ad-inline h4 {
                    font-size: 16px;
                }
            }
            
            /* Desktop hover effects */
            @media (min-width: 769px) {
                .six7-floating-container {
                    right: 30px;
                    bottom: 30px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Ensure Font Awesome is loaded
    function ensureFontAwesome() {
        if (!document.querySelector('link[href*="font-awesome"], link[href*="fontawesome"]')) {
            const faLink = document.createElement('link');
            faLink.rel = 'stylesheet';
            faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
            document.head.appendChild(faLink);
        }
    }

    // Create popup HTML
    function createPopup() {
        const overlay = document.createElement('div');
        overlay.className = 'six7-emergency-overlay';
        overlay.id = 'six7EmergencyOverlay';
        overlay.innerHTML = `
            <div class="six7-emergency-popup">
                <button class="six7-close-popup" id="six7ClosePopupBtn">
                    <i class="fas fa-times"></i>
                </button>
                <div class="six7-popup-content">
                    <div class="six7-popup-icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <h2 class="six7-popup-title">Emergency Plumbing?</h2>
                    <div class="six7-popup-divider"></div>
                    <p class="six7-popup-subtitle">
                        Don't wait for water damage to get worse.<br>
                        Our team is ready 24/7 for all plumbing emergencies.
                    </p>
                    <div class="six7-emergency-number">
                        <i class="fas fa-exclamation-triangle" style="color: #F97316;"></i>
                        <span>Call Now: ${CONFIG.phoneDisplay}</span>
                    </div>
                    <a href="tel:${CONFIG.phoneNumber}" class="six7-call-btn" id="six7CallBtn">
                        <i class="fas fa-phone-alt"></i> Call Emergency Line
                    </a>
                    <a href="https://wa.me/${CONFIG.whatsappNumber}?text=EMERGENCY%20PLUMBING%20NEEDED" class="six7-wa-btn" target="_blank">
                        <i class="fab fa-whatsapp"></i> WhatsApp Emergency
                    </a>
                    <a href="${CONFIG.pricingPageUrl}" class="six7-pricing-link" id="six7PricingLink">
                        <i class="fas fa-tag"></i> View Our Pricing & Rates →
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        return overlay;
    }

    // Create floating button container (no close button on minimized state)
    function createFloatingButtons() {
        const container = document.createElement('div');
        container.className = 'six7-floating-container';
        container.id = 'six7FloatingContainer';
        container.innerHTML = `
            <a href="tel:${CONFIG.phoneNumber}" class="six7-floating-call" id="six7FloatingCall">
                <i class="fas fa-phone-alt"></i>
            </a>
            <a href="https://wa.me/${CONFIG.whatsappNumber}?text=EMERGENCY%20PLUMBING%20NEEDED" class="six7-floating-wa" id="six7FloatingWa" target="_blank">
                <i class="fab fa-whatsapp"></i>
            </a>
        `;
        document.body.appendChild(container);
        return container;
    }

    // Show popup with animation
    function showPopup() {
        const overlay = document.getElementById('six7EmergencyOverlay');
        if (overlay) {
            setTimeout(() => {
                overlay.classList.add('active');
            }, 50);
        }
    }

    // Hide popup and show floating buttons (permanently visible now)
    function dismissPopupAndShowFloating() {
        const overlay = document.getElementById('six7EmergencyOverlay');
        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, CONFIG.popupDuration);
        }
        // Mark popup as dismissed for this session
        sessionStorage.setItem(CONFIG.bannerDismissedKey, 'true');
        // Show floating buttons (they stay visible permanently)
        showFloatingButtons();
    }

    // Show floating buttons
    function showFloatingButtons() {
        const container = document.getElementById('six7FloatingContainer');
        if (container && !floatingDismissed) {
            setTimeout(() => {
                container.classList.add('active');
            }, 100);
        }
    }

    // Hide floating buttons permanently (only if user chooses to - but now we removed the close button, so this won't be called)
    function dismissFloatingButtons() {
        const container = document.getElementById('six7FloatingContainer');
        if (container) {
            container.classList.remove('active');
            setTimeout(() => {
                container.style.display = 'none';
            }, 300);
        }
        localStorage.setItem(CONFIG.floatingDismissedKey, 'true');
        floatingDismissed = true;
    }

    // Find the first major content section for Tailor ad
    function injectTailorAd() {
        // Look for common section selectors
        const selectors = [
            'section:not(.six7-ad-tailor):not(.six7-ad-electrical)', 
            'main section:first-child',
            '.content-section',
            '#content',
            'article:first-of-type',
            '.container > div:first-of-type'
        ];
        
        let targetSection = null;
        for (let selector of selectors) {
            targetSection = document.querySelector(selector);
            if (targetSection && targetSection.offsetHeight > 100) break;
        }
        
        // Fallback: find the first element with lots of text content
        if (!targetSection) {
            const allDivs = document.querySelectorAll('div, section, article');
            for (let el of allDivs) {
                if (el.innerText && el.innerText.length > 200 && !el.closest('.six7-ad-tailor') && !el.closest('.six7-ad-electrical')) {
                    targetSection = el;
                    break;
                }
            }
        }
        
        if (targetSection && !document.querySelector('.six7-ad-tailor')) {
            const adContainer = document.createElement('div');
            adContainer.className = 'six7-ad-tailor';
            adContainer.innerHTML = `
                <div class="six7-ad-inline" onclick="window.open('${CONFIG.tailorAdUrl}', '_blank')" style="cursor: pointer;">
                    <i class="fas fa-tshirt" style="font-size: 32px; color: white; margin-bottom: 8px; display: block;"></i>
                    <h4>Looking for Expert Tailors?</h4>
                    <p>Find the best tailors in Colombo for custom clothing, alterations & bridal wear</p>
                    <span class="six7-ad-button">Visit tailors.lk <i class="fas fa-arrow-right"></i></span>
                </div>
            `;
            // Insert after the target section
            targetSection.parentNode.insertBefore(adContainer, targetSection.nextSibling);
            console.log('[SIX7] Tailor ad injected');
        }
    }

    // Find placement for Electrical ad (before footer)
    function injectElectricalAd() {
        // Look for footer or near footer
        let footer = document.querySelector('footer');
        let targetElement = null;
        
        if (footer) {
            targetElement = footer;
        } else {
            // Look for last section or container
            const lastSection = document.querySelector('section:last-of-type, .container:last-of-type, main:last-of-type');
            if (lastSection) targetElement = lastSection;
        }
        
        if (targetElement && !document.querySelector('.six7-ad-electrical')) {
            const adContainer = document.createElement('div');
            adContainer.className = 'six7-ad-electrical';
            adContainer.innerHTML = `
                <div class="six7-ad-inline" onclick="window.open('${CONFIG.electricalAdUrl}', '_blank')" style="cursor: pointer;">
                    <i class="fas fa-bolt" style="font-size: 32px; color: white; margin-bottom: 8px; display: block;"></i>
                    <h4>Need Electrical Services?</h4>
                    <p>24/7 emergency electricians for homes, offices & commercial buildings</p>
                    <span class="six7-ad-button">Visit electrical.six7.lk <i class="fas fa-arrow-right"></i></span>
                </div>
            `;
            // Insert before the target element (footer or last section)
            targetElement.parentNode.insertBefore(adContainer, targetElement);
            console.log('[SIX7] Electrical ad injected');
        }
    }

    // Event listeners
    function attachEventListeners() {
        // Popup close button
        const closeBtn = document.getElementById('six7ClosePopupBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', dismissPopupAndShowFloating);
        }
        
        // Call button tracking (optional - you can add analytics here)
        const callBtn = document.getElementById('six7CallBtn');
        if (callBtn) {
            callBtn.addEventListener('click', function() {
                console.log('[SIX7] Emergency call initiated');
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', { 'event_category': 'emergency', 'event_label': 'call_emergency' });
                }
            });
        }
        
        // WhatsApp button tracking
        const waBtn = document.getElementById('six7FloatingWa');
        if (waBtn) {
            waBtn.addEventListener('click', function() {
                console.log('[SIX7] WhatsApp emergency initiated');
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', { 'event_category': 'emergency', 'event_label': 'whatsapp_emergency' });
                }
            });
        }
        
        // Overlay click to close? (Optional - disabled to prevent accidental dismissal)
        const overlay = document.getElementById('six7EmergencyOverlay');
        if (overlay) {
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    // Uncomment if you want to allow click outside to close
                    // dismissPopupAndShowFloating();
                }
            });
        }
    }

    // Initialize
    function init() {
        // Inject styles
        injectStyles();
        
        // Ensure Font Awesome is loaded
        ensureFontAwesome();
        
        // Create popup and floating elements
        createPopup();
        createFloatingButtons();
        
        // Attach event listeners
        attachEventListeners();
        
        // Inject ads after DOM is ready and content is loaded
        setTimeout(() => {
            injectTailorAd();
            injectElectricalAd();
        }, 500);
        
        // Show popup after delay if not dismissed in this session
        if (!popupDismissed) {
            setTimeout(() => {
                showPopup();
            }, CONFIG.popupDelay);
        } else {
            // If popup was already dismissed, show floating buttons directly (they stay visible)
            showFloatingButtons();
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
