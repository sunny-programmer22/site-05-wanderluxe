/**
 * ==============================================================================
 * WanderLuxe Travel - HilltopAds Integration & Monetization Engine
 * File: ads-config.js
 * Version: 2.6.0 (2026 Edition)
 * 
 * Comprehensive HilltopAds multi-zone integration featuring:
 *  - Zone 1: Popunder / OnClick Ad MultiTag
 *  - Zone 2: In-Page Push (IPP) MultiTag Notification
 *  - Zone 3: MultiTag Banners (728x90 Header Leaderboard & 300x250 Booking Sidebar)
 *  - Zone 4: Video Slider MultiTag (Floating Bottom Corner Drawer)
 *  - Zone 5: Direct Link / SmartLink (Flight Deals & Offline Map Download CTAs)
 *  - Zone 6: Video VAST Integration (HTML5 Travel Destination Video Player)
 * ==============================================================================
 */

(function (window, document) {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. MASTER HILLTOPADS CONFIGURATION OBJECT
  // ---------------------------------------------------------------------------
  // Production Publishers: Replace placeholder Zone IDs and URLs with your actual
  // HilltopAds Publisher account credentials from the HilltopAds self-service panel.
  // ---------------------------------------------------------------------------
  const HILLTOPADS_CONFIG = {
    // Global Settings
    settings: {
      publisherId: 'HTA_PUB_9948201',
      environment: 'production', // 'production' or 'development'
      demoMode: true,            // Renders rich interactive fallback creatives when live ad network tag is pending
      logging: true,             // Debug console outputs
      frequencyCapHours: 1       // Universal frequency cap for intrusive formats
    },

    // Zone 1: Popunder / OnClick
    zone1_popunder: {
      zoneId: 'HTA_ZONE_POP_104928',
      name: 'Global Travel Popunder',
      enabled: true,
      triggerType: 'first_user_interaction', // 'first_user_interaction' | 'immediate' | 'delayed'
      delayMs: 1200,
      frequencyCapHours: 2,
      storageKey: 'wanderluxe_popunder_last_shown',
      // Real HilltopAds script tag placeholder:
      scriptUrl: 'https://scripts.hilltopads.net/popunder.js?zone=104928',
      fallbackTargetUrl: 'https://hilltopads.com/?ref=wanderluxe_travel_sponsor'
    },

    // Zone 2: In-Page Push (IPP) MultiTag
    zone2_ipp: {
      zoneId: 'HTA_ZONE_IPP_209481',
      name: 'Flight Deal Alert IPP MultiTag',
      enabled: true,
      delayMs: 3500,
      autoDismissMs: 15000,
      position: 'bottom-right', // 'bottom-right' | 'top-right' | 'bottom-left'
      scriptUrl: 'https://scripts.hilltopads.net/ipp.js?zone=209481',
      directLinkUrl: 'https://hilltopads.com/?ref=wanderluxe_flight_deals_alert',
      creative: {
        title: 'âœˆï¸ Flash Deal: Tokyo & Kyoto from $389 RT',
        body: 'Secret airline error fare discovered! Valid for travel through Nov 2026. Only 4 seats remaining.',
        tag: 'WanderLuxe Deal Tracker â€¢ HilltopAds IPP',
        ctaText: 'Claim Deal Now'
      }
    },

    // Zone 3: MultiTag Banners (Header 728x90 & Sidebar 300x250)
    zone3_banners: {
      header728x90: {
        zoneId: 'HTA_ZONE_BNR_728x90_309182',
        containerId: 'ad-zone-3-header',
        name: 'Header MultiTag Leaderboard (728x90 / 320x50 Responsive)',
        dimensions: { width: 728, height: 90 },
        mobileDimensions: { width: 320, height: 50 },
        scriptUrl: 'https://scripts.hilltopads.net/banner.js?zone=309182&size=728x90',
        creative: {
          headline: 'Luxury Villa & Flight Packages Up To 55% OFF',
          brand: 'Emirates & WanderLuxe VIP Escapes',
          cta: 'Unlock Secret Fares',
          tagline: 'Instant Booking â€¢ Free Cancellation â€¢ Zero Booking Fees'
        }
      },
      sidebar300x250: {
        zoneId: 'HTA_ZONE_BNR_300x250_491028',
        containerId: 'ad-zone-3-sidebar',
        name: 'Sidebar MultiTag Medium Rectangle (300x250)',
        dimensions: { width: 300, height: 250 },
        scriptUrl: 'https://scripts.hilltopads.net/banner.js?zone=491028&size=300x250',
        creative: {
          headline: 'Never Pay Full Price For 5â˜… Hotels',
          subhead: 'Insider Club members save an average of $340 per booking in 2026.',
          cta: 'Browse Secret Hotel Rates',
          brand: 'Verified HilltopAds Travel MultiTag'
        }
      }
    },

    // Zone 4: Video Slider MultiTag (Bottom Floating Drawer)
    zone4_video_slider: {
      zoneId: 'HTA_ZONE_SLIDER_581920',
      containerId: 'ad-zone-4-slider',
      name: 'Interactive Video Slider MultiTag',
      enabled: true,
      scrollTriggerPercent: 20, // Appears once user scrolls 20% down
      videoDuration: 15,
      scriptUrl: 'https://scripts.hilltopads.net/slider.js?zone=581920',
      clickUrl: 'https://hilltopads.com/?ref=wanderluxe_video_slider_deal',
      creative: {
        title: 'Hidden Gem: Amalfi Coast Luxury Charters',
        sponsor: 'Sponsored by HilltopAds Video Network',
        videoPoster: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80',
        cta: 'View Private Charter Rates'
      }
    },

    // Zone 5: Direct Link / SmartLink
    zone5_direct_link: {
      zoneId: 'HTA_ZONE_DIRECT_691823',
      name: 'SmartLink / Direct Monetization Hub',
      smartlinkUrl: 'https://hilltopads.com/?ref=wanderluxe_smartlink_deals',
      // Elements that trigger direct link redirection:
      selectors: [
        '#btn-hero-check-flights',
        '#btn-sidebar-flight-deals',
        '#btn-download-offline-map',
        '#btn-itinerary-book-deals',
        '.btn-direct-link',
        '[data-ad-zone="direct-link"]'
      ]
    },

    // Zone 6: Video VAST Tag (HTML5 Travel Video Player)
    zone6_video_vast: {
      zoneId: 'HTA_ZONE_VAST_782910',
      name: 'HilltopAds In-Stream VAST Video Ad',
      enabled: true,
      vastTagUrl: 'https://scripts.hilltopads.net/vast.xml?zone=782910&tag_type=linear',
      skipOffsetSeconds: 5,
      adDurationSeconds: 12,
      clickthroughUrl: 'https://hilltopads.com/?ref=wanderluxe_vast_travel_promo',
      creative: {
        advertiser: 'WanderLuxe Global Airlines Alliance',
        title: 'Fly Business Class for Economy Prices in 2026',
        subtitle: 'Exclusive seasonal error fare alert for international flights.'
      }
    }
  };

  // ---------------------------------------------------------------------------
  // 2. LOGGING HELPER
  // ---------------------------------------------------------------------------
  function log(zoneName, message, data) {
    if (HILLTOPADS_CONFIG.settings.logging) {
      console.log(
        `%c[HilltopAds - ${zoneName}]%c ${message}`,
        'background: #0284c7; color: #ffffff; padding: 2px 6px; border-radius: 3px; font-weight: bold;',
        'color: #0f172a; font-weight: normal;',
        data || ''
      );
    }
  }

  // ---------------------------------------------------------------------------
  // 3. ZONE 1: POPUNDER / ONCLICK IMPLEMENTATION
  // ---------------------------------------------------------------------------
  function initZone1Popunder() {
    const config = HILLTOPADS_CONFIG.zone1_popunder;
    if (!config.enabled) return;

    // Check frequency capping
    const lastTriggered = localStorage.getItem(config.storageKey);
    const now = Date.now();
    const capDurationMs = config.frequencyCapHours * 60 * 60 * 1000;

    if (lastTriggered && (now - parseInt(lastTriggered, 10)) < capDurationMs) {
      log('Zone 1 (Popunder)', 'Frequency cap active. Popunder suppressed for this session.');
      return;
    }

    let popunderFired = false;

    function triggerPopunder(event) {
      if (popunderFired) return;

      // Don't intercept UI control buttons directly unless wanted
      const target = event.target;
      if (target.closest('.no-popunder')) return;

      popunderFired = true;
      localStorage.setItem(config.storageKey, Date.now().toString());
      log('Zone 1 (Popunder)', 'Popunder event triggered via user interaction.');

      // In production with live HilltopAds popunder script:
      // The injected script from config.scriptUrl handles native browser window background opening.
      // In demo mode or fallback:
      if (HILLTOPADS_CONFIG.settings.demoMode) {
        showPopunderNotification();
      }

      // Detach listeners after firing once
      document.removeEventListener('click', triggerPopunder, true);
    }

    // Attach trigger listener
    document.addEventListener('click', triggerPopunder, true);

    // Optional demo feedback toast
    function showPopunderNotification() {
      const toast = document.createElement('div');
      toast.className = 'hta-popunder-badge';
      toast.innerHTML = `
        <div class="hta-popunder-content">
          <span class="hta-icon">âš¡</span>
          <div>
            <strong>HilltopAds Zone 1 (Popunder / OnClick) Ready</strong>
            <p>Popunder trigger recorded (Zone: <code>${config.zoneId}</code>). In production, sponsor tab opens in background.</p>
          </div>
          <button class="hta-close-btn" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        if (toast && toast.parentElement) toast.remove();
      }, 7000);
    }
  }

  // ---------------------------------------------------------------------------
  // 4. ZONE 2: IN-PAGE PUSH (IPP) MULTITAG IMPLEMENTATION
  // ---------------------------------------------------------------------------
  function initZone2InPagePush() {
    const config = HILLTOPADS_CONFIG.zone2_ipp;
    if (!config.enabled) return;

    setTimeout(() => {
      // Create IPP container if not already in DOM
      let ippContainer = document.getElementById('ad-zone-2-ipp');
      if (!ippContainer) {
        ippContainer = document.createElement('div');
        ippContainer.id = 'ad-zone-2-ipp';
        ippContainer.className = `hta-ipp-container hta-ipp-${config.position}`;
        document.body.appendChild(ippContainer);
      }

      // Render IPP MultiTag Card
      ippContainer.innerHTML = `
        <div class="hta-ipp-card">
          <div class="hta-ipp-header">
            <span class="hta-ipp-badge"><span class="pulse-dot"></span> ${config.creative.tag}</span>
            <button class="hta-ipp-close" title="Dismiss advertisement" id="hta-ipp-close-btn">&times;</button>
          </div>
          <div class="hta-ipp-body" id="hta-ipp-click-target">
            <div class="hta-ipp-icon-wrapper">
              <span class="flight-icon">ðŸ›«</span>
            </div>
            <div class="hta-ipp-info">
              <h4 class="hta-ipp-title">${config.creative.title}</h4>
              <p class="hta-ipp-desc">${config.creative.body}</p>
            </div>
          </div>
          <div class="hta-ipp-footer">
            <a href="${config.directLinkUrl}" target="_blank" rel="noopener sponsored" class="hta-ipp-cta-btn">
              ${config.creative.ctaText} &rarr;
            </a>
            <span class="hta-network-label">HilltopAds MultiTag Zone 2 â€¢ ID: ${config.zoneId}</span>
          </div>
        </div>
      `;

      // Animate entry
      requestAnimationFrame(() => {
        ippContainer.classList.add('hta-ipp-visible');
      });

      log('Zone 2 (IPP)', 'In-Page Push MultiTag rendered successfully.');

      // Handlers
      const closeBtn = document.getElementById('hta-ipp-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          ippContainer.classList.remove('hta-ipp-visible');
          setTimeout(() => ippContainer.remove(), 400);
          log('Zone 2 (IPP)', 'In-Page Push dismissed by user.');
        });
      }

      const clickTarget = document.getElementById('hta-ipp-click-target');
      if (clickTarget) {
        clickTarget.addEventListener('click', () => {
          log('Zone 2 (IPP)', 'IPP clicked. Navigating to sponsor deal.');
          window.open(config.directLinkUrl, '_blank', 'noopener,sponsored');
        });
      }

      // Auto dismiss after duration
      if (config.autoDismissMs > 0) {
        setTimeout(() => {
          if (ippContainer && ippContainer.classList.contains('hta-ipp-visible')) {
            ippContainer.classList.remove('hta-ipp-visible');
            setTimeout(() => ippContainer.remove(), 400);
          }
        }, config.autoDismissMs);
      }
    }, config.delayMs);
  }

  // ---------------------------------------------------------------------------
  // 5. ZONE 3: MULTITAG BANNERS (728x90 Header & 300x250 Sidebar)
  // ---------------------------------------------------------------------------
  function initZone3Banners() {
    const headerConfig = HILLTOPADS_CONFIG.zone3_banners.header728x90;
    const sidebarConfig = HILLTOPADS_CONFIG.zone3_banners.sidebar300x250;

    // --- Header Leaderboard 728x90 ---
    const headerContainer = document.getElementById(headerConfig.containerId);
    if (headerContainer) {
      renderHeaderBanner(headerContainer, headerConfig);
      log('Zone 3 (Header Banner)', `728x90 MultiTag Banner rendered in #${headerConfig.containerId}`);
    }

    // --- Sidebar Medium Rectangle 300x250 ---
    const sidebarContainer = document.getElementById(sidebarConfig.containerId);
    if (sidebarContainer) {
      renderSidebarBanner(sidebarContainer, sidebarConfig);
      log('Zone 3 (Sidebar Banner)', `300x250 MultiTag Banner rendered in #${sidebarConfig.containerId}`);
    }
  }

  function renderHeaderBanner(container, config) {
    container.innerHTML = `
      <div class="hta-banner-wrapper hta-banner-728x90">
        <div class="hta-ad-meta-bar">
          <span class="hta-ad-label">ADVERTISEMENT â€¢ HILLTOPADS MULTITAG ZONE 3</span>
          <span class="hta-zone-id">Zone ID: ${config.zoneId}</span>
        </div>
        <div class="hta-banner-content hta-banner-header-flex">
          <div class="hta-banner-brand-badge">
            <span class="hta-luxury-tag">WANDERLUXE VIP DEALS</span>
            <span class="hta-stars">â˜…â˜…â˜…â˜…â˜…</span>
          </div>
          <div class="hta-banner-center-text">
            <h3 class="hta-banner-title">${config.creative.headline}</h3>
            <p class="hta-banner-tagline">${config.creative.tagline}</p>
          </div>
          <div class="hta-banner-action">
            <a href="${HILLTOPADS_CONFIG.zone5_direct_link.smartlinkUrl}" target="_blank" rel="noopener sponsored" class="hta-banner-btn">
              ${config.creative.cta} &rarr;
            </a>
          </div>
        </div>
        <!-- HilltopAds Production Script Container Placeholder -->
        <div class="hta-script-placeholder" data-zone="${config.zoneId}"></div>
      </div>
    `;
  }

  function renderSidebarBanner(container, config) {
    container.innerHTML = `
      <div class="hta-banner-wrapper hta-banner-300x250">
        <div class="hta-ad-meta-bar">
          <span class="hta-ad-label">ADVERTISEMENT</span>
          <span class="hta-zone-id">Zone: ${config.zoneId}</span>
        </div>
        <div class="hta-banner-sidebar-content">
          <div class="hta-sidebar-visual">
            <div class="hta-tag-pill">HOTEL FLASH SALE</div>
            <span class="hotel-icon">ðŸ¨</span>
          </div>
          <h4 class="hta-sidebar-title">${config.creative.headline}</h4>
          <p class="hta-sidebar-sub">${config.creative.subhead}</p>
          <div class="hta-price-highlight">
            <span class="hta-old-price">$580/nt</span>
            <span class="hta-new-price">$240<small>/nt</small></span>
            <span class="hta-save-badge">Save 58%</span>
          </div>
          <a href="${HILLTOPADS_CONFIG.zone5_direct_link.smartlinkUrl}" target="_blank" rel="noopener sponsored" class="hta-sidebar-cta">
            ${config.creative.cta}
          </a>
          <div class="hta-sidebar-footer">
            <small>${config.creative.brand}</small>
          </div>
        </div>
        <!-- HilltopAds Production Script Container Placeholder -->
        <div class="hta-script-placeholder" data-zone="${config.zoneId}"></div>
      </div>
    `;
  }

  // ---------------------------------------------------------------------------
  // 6. ZONE 4: VIDEO SLIDER MULTITAG (Floating Bottom Corner Drawer)
  // ---------------------------------------------------------------------------
  function initZone4VideoSlider() {
    const config = HILLTOPADS_CONFIG.zone4_video_slider;
    if (!config.enabled) return;

    let sliderContainer = document.getElementById(config.containerId);
    if (!sliderContainer) {
      sliderContainer = document.createElement('div');
      sliderContainer.id = config.containerId;
      sliderContainer.className = 'hta-video-slider-container';
      document.body.appendChild(sliderContainer);
    }

    let isTriggered = false;
    let isMinimized = false;

    // Check scroll trigger
    function checkScroll() {
      if (isTriggered) return;
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal <= 0) return;
      const currentScrollPercent = (window.scrollY / scrollTotal) * 100;

      if (currentScrollPercent >= config.scrollTriggerPercent) {
        isTriggered = true;
        renderVideoSlider();
        window.removeEventListener('scroll', checkScroll);
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    // Also trigger on delay if user stays on page
    setTimeout(() => {
      if (!isTriggered) {
        isTriggered = true;
        renderVideoSlider();
        window.removeEventListener('scroll', checkScroll);
      }
    }, 7000);

    function renderVideoSlider() {
      sliderContainer.innerHTML = `
        <div class="hta-slider-box" id="hta-slider-box-elem">
          <div class="hta-slider-header">
            <div class="hta-slider-title-wrap">
              <span class="hta-live-indicator"></span>
              <span class="hta-slider-header-title">SPONSORED TRAVEL REEL</span>
            </div>
            <div class="hta-slider-controls">
              <button class="hta-ctrl-btn" id="hta-slider-minimize-btn" title="Minimize / Expand">&minus;</button>
              <button class="hta-ctrl-btn" id="hta-slider-close-btn" title="Close">&times;</button>
            </div>
          </div>
          <div class="hta-slider-body" id="hta-slider-body-elem">
            <div class="hta-slider-media">
              <video class="hta-slider-video" autoplay muted loop playsinline poster="${config.creative.videoPoster}">
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
                Your browser does not support video.
              </video>
              <span class="hta-slider-tag">Zone 4 MultiTag â€¢ ${config.zoneId}</span>
            </div>
            <div class="hta-slider-caption">
              <h5>${config.creative.title}</h5>
              <p class="hta-slider-sponsor">${config.creative.sponsor}</p>
              <a href="${config.clickUrl}" target="_blank" rel="noopener sponsored" class="hta-slider-action-btn">
                ${config.creative.cta} &rarr;
              </a>
            </div>
          </div>
        </div>
      `;

      requestAnimationFrame(() => {
        sliderContainer.classList.add('hta-slider-active');
      });

      log('Zone 4 (Video Slider)', 'Floating Video Slider MultiTag triggered and shown.');

      // Controls
      const closeBtn = document.getElementById('hta-slider-close-btn');
      const minimizeBtn = document.getElementById('hta-slider-minimize-btn');
      const boxElem = document.getElementById('hta-slider-box-elem');
      const bodyElem = document.getElementById('hta-slider-body-elem');

      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          sliderContainer.classList.remove('hta-slider-active');
          setTimeout(() => sliderContainer.remove(), 400);
          log('Zone 4 (Video Slider)', 'Video Slider closed by user.');
        });
      }

      if (minimizeBtn) {
        minimizeBtn.addEventListener('click', () => {
          isMinimized = !isMinimized;
          if (isMinimized) {
            bodyElem.style.display = 'none';
            minimizeBtn.innerHTML = '&#43;';
            boxElem.classList.add('is-minimized');
          } else {
            bodyElem.style.display = 'block';
            minimizeBtn.innerHTML = '&minus;';
            boxElem.classList.remove('is-minimized');
          }
        });
      }
    }
  }

  // ---------------------------------------------------------------------------
  // 7. ZONE 5: DIRECT LINK / SMARTLINK INTEGRATION
  // ---------------------------------------------------------------------------
  function initZone5DirectLink() {
    const config = HILLTOPADS_CONFIG.zone5_direct_link;
    const selectors = config.selectors.join(', ');

    function attachDirectLinkListeners() {
      const targetButtons = document.querySelectorAll(selectors);

      targetButtons.forEach((btn) => {
        if (btn.dataset.htaDirectBound) return;
        btn.dataset.htaDirectBound = 'true';

        btn.addEventListener('click', (e) => {
          // If the button is inside a form or comparison widget, allow UX interaction
          // while opening the sponsor smartlink in a new tab:
          log('Zone 5 (Direct Link)', `Direct Link SmartLink activated by ${btn.id || btn.className}`);

          // Track monetized click
          const sponsorUrl = btn.getAttribute('data-direct-url') || config.smartlinkUrl;
          window.open(sponsorUrl, '_blank', 'noopener,sponsored');

          // Optional user visual feedback
          if (btn.classList.contains('btn-with-ripple')) {
            btn.classList.add('btn-clicked-state');
            setTimeout(() => btn.classList.remove('btn-clicked-state'), 600);
          }
        });
      });

      log('Zone 5 (Direct Link)', `Bound SmartLink listeners to ${targetButtons.length} action elements.`);
    }

    // Attach immediately and also on DOM changes (e.g. itinerary generator)
    attachDirectLinkListeners();
    const observer = new MutationObserver(() => attachDirectLinkListeners());
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // ---------------------------------------------------------------------------
  // 8. ZONE 6: VIDEO VAST INTEGRATION (HTML5 Video Player Pre-Roll)
  // ---------------------------------------------------------------------------
  function initZone6VideoVast() {
    const config = HILLTOPADS_CONFIG.zone6_video_vast;
    if (!config.enabled) return;

    const videoPlayerWrapper = document.getElementById('travel-guide-video-wrapper');
    const mainVideo = document.getElementById('travel-guide-video');

    if (!videoPlayerWrapper || !mainVideo) {
      log('Zone 6 (Video VAST)', 'Video element #travel-guide-video not found in DOM.');
      return;
    }

    let adPlayed = false;
    let adCountdownInterval = null;
    let remainingTime = config.adDurationSeconds;
    let canSkip = false;

    // Create VAST Ad Overlay Layer
    const adOverlay = document.createElement('div');
    adOverlay.className = 'hta-vast-overlay';
    adOverlay.id = 'hta-vast-overlay-elem';
    adOverlay.innerHTML = `
      <div class="hta-vast-ad-box">
        <div class="hta-vast-top-bar">
          <div class="hta-vast-badge">
            <span class="live-dot"></span> ADVERTISEMENT â€¢ HILLTOPADS VIDEO VAST (ZONE 6)
          </div>
          <div class="hta-vast-countdown" id="hta-vast-countdown-text">
            Ad: ${remainingTime}s
          </div>
        </div>
        <div class="hta-vast-media-view">
          <video id="hta-vast-ad-video" class="hta-vast-video" playsinline muted autoplay poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80">
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="hta-vast-click-shield" id="hta-vast-click-shield"></div>
        </div>
        <div class="hta-vast-bottom-bar">
          <div class="hta-vast-sponsor-info">
            <h5>${config.creative.title}</h5>
            <p>${config.creative.subtitle} &bull; <em>${config.creative.advertiser}</em></p>
          </div>
          <div class="hta-vast-cta-group">
            <a href="${config.clickthroughUrl}" target="_blank" rel="noopener sponsored" class="hta-vast-learn-more-btn" id="hta-vast-learn-more">
              Learn More &rarr;
            </a>
            <button class="hta-vast-skip-btn disabled" id="hta-vast-skip-button" disabled>
              Skip Ad in ${config.skipOffsetSeconds}s
            </button>
          </div>
        </div>
      </div>
    `;

    // When user attempts to play main video, trigger VAST Pre-roll first
    const playTriggerBtn = document.getElementById('btn-play-guide-video');
    if (playTriggerBtn) {
      playTriggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        startVastAdSequence();
      });
    }

    function startVastAdSequence() {
      if (adPlayed) {
        playMainVideoDirectly();
        return;
      }

      log('Zone 6 (Video VAST)', `Starting VAST Pre-roll sequence (Zone: ${config.zoneId}).`);
      videoPlayerWrapper.appendChild(adOverlay);

      const adVideo = document.getElementById('hta-vast-ad-video');
      const countdownElem = document.getElementById('hta-vast-countdown-text');
      const skipButton = document.getElementById('hta-vast-skip-button');
      const clickShield = document.getElementById('hta-vast-click-shield');

      if (adVideo) {
        adVideo.currentTime = 0;
        adVideo.play().catch(err => {
          log('Zone 6 (Video VAST)', 'Autoplay muted attempt: ' + err.message);
        });
      }

      // Sponsor clickthrough
      if (clickShield) {
        clickShield.addEventListener('click', () => {
          log('Zone 6 (Video VAST)', 'VAST Video clicked. Opening sponsor link.');
          window.open(config.clickthroughUrl, '_blank', 'noopener,sponsored');
        });
      }

      let skipTimer = config.skipOffsetSeconds;

      adCountdownInterval = setInterval(() => {
        remainingTime--;
        skipTimer--;

        if (countdownElem) {
          countdownElem.textContent = `Ad: ${Math.max(0, remainingTime)}s`;
        }

        if (skipTimer > 0) {
          if (skipButton) skipButton.textContent = `Skip Ad in ${skipTimer}s`;
        } else {
          if (skipButton && !canSkip) {
            canSkip = true;
            skipButton.disabled = false;
            skipButton.classList.remove('disabled');
            skipButton.textContent = 'Skip Ad \u00BB';
            skipButton.addEventListener('click', endVastAdSequence);
          }
        }

        if (remainingTime <= 0) {
          endVastAdSequence();
        }
      }, 1000);
    }

    function endVastAdSequence() {
      clearInterval(adCountdownInterval);
      adPlayed = true;
      if (adOverlay && adOverlay.parentElement) {
        adOverlay.remove();
      }
      log('Zone 6 (Video VAST)', 'VAST Pre-roll complete. Resuming destination feature video.');
      playMainVideoDirectly();
    }

    function playMainVideoDirectly() {
      const playOverlay = document.getElementById('video-custom-cover');
      if (playOverlay) playOverlay.style.display = 'none';
      mainVideo.play();
      mainVideo.controls = true;
    }

    log('Zone 6 (Video VAST)', 'Video VAST module configured and linked to destination guide video.');
  }

  // ---------------------------------------------------------------------------
  // 9. PUBLIC API & LIFECYCLE DISPATCHER
  // ---------------------------------------------------------------------------
  const WanderLuxeAds = {
    config: HILLTOPADS_CONFIG,
    init: function () {
      log('System', 'Initializing WanderLuxe HilltopAds Suite (6 Zones)...');
      initZone1Popunder();
      initZone2InPagePush();
      initZone3Banners();
      initZone4VideoSlider();
      initZone5DirectLink();
      initZone6VideoVast();
      log('System', 'All HilltopAds zones successfully registered and active.');
    },
    triggerDirectLink: function (customUrl) {
      const targetUrl = customUrl || HILLTOPADS_CONFIG.zone5_direct_link.smartlinkUrl;
      window.open(targetUrl, '_blank', 'noopener,sponsored');
    },
    reloadBanners: function () {
      initZone3Banners();
    }
  };

  // Expose to window
  window.WanderLuxeAds = WanderLuxeAds;

  // Auto-init upon DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => WanderLuxeAds.init());
  } else {
    WanderLuxeAds.init();
  }

})(window, document);

