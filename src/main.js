import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { menuItems, getDietType, formatPrice } from './data/menu.js'
import { siteConfig } from './data/site.js'

gsap.registerPlugin(ScrollTrigger)

const icon = (name, className = '') => {
  const paths = {
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    arrowUp: '<path d="M7 17 17 7M7 7h10v10"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    leaf: '<path d="M20 4c-9 0-15 4-15 11a5 5 0 0 0 5 5c7 0 11-6 10-16Z"/><path d="M4 21c2-5 6-8 11-11"/>',
    dot: '<circle cx="12" cy="12" r="8" fill="currentColor" stroke="none"/>',
  }
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] ?? ''}</svg>`
}

const whatsappUrl = (message) => {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

const categories = [...new Set(menuItems.map((item) => item.category))]
const cafeImages = Object.entries(import.meta.glob('./assets/images/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
})).map(([path, src]) => ({
  name: path.split('/').pop().replace(/\.[^.]+$/, ''),
  src,
}))
const imageByName = (name) => cafeImages.find((image) => image.name.toLowerCase() === name.toLowerCase())
const mainCafeImage = imageByName('Fayra_main') ?? cafeImages[0]
const heroImages = [mainCafeImage, imageByName('Fayra1'), imageByName('Fayra2')].filter(Boolean)
const storyImages = cafeImages.filter((image) => !heroImages.includes(image))
if (storyImages.length === 0) storyImages.push(mainCafeImage)

const renderMenuItem = (item) => {
  const diet = getDietType(item)
  const dietLabel = diet === 'veg' ? 'Vegetarian' : diet === 'non-veg' ? 'Non-vegetarian' : 'Vegetarian or non-vegetarian'
  const dietMarks = diet === 'mixed'
    ? `<span class="diet-mark diet-mark--veg" aria-hidden="true">${icon('leaf')}</span><span class="diet-mark diet-mark--non-veg" aria-hidden="true">${icon('dot')}</span>`
    : `<span class="diet-mark diet-mark--${diet}" aria-label="${dietLabel}">${icon(diet === 'veg' ? 'leaf' : 'dot')}</span>`
  return `
    <article class="menu-item">
      <div class="menu-item__topline">
        <span class="menu-item__diet" aria-label="${dietLabel}">${dietMarks}</span>
        <span class="menu-item__category">${item.category}</span>
        <span class="menu-item__price">${formatPrice(item.price)}</span>
      </div>
      <h3>${item.name}</h3>
    </article>`
}

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="site-nav">
      <a class="brand" href="#home" aria-label="Fayra home">
        <img class="brand__logo" src="/fayra-logo.svg" alt="Fayra Lounge & Cafe">
      </a>
      <div class="nav-hours">${icon('clock')}<span>${siteConfig.hours}</span></div>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="#story">Our story</a>
        <a href="#menu">Menu</a>
        <a href="#visit">Visit</a>
        <a class="nav-reserve" href="#reserve">Reserve a table ${icon('arrowUp')}</a>
      </nav>
      <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
        <span></span><span></span>
      </button>
    </header>

    <main>
      <section class="hero section-pad" id="home">
        <div class="hero__copy">
          <p class="eyebrow"><span class="eyebrow__rule"></span> A softer kind of night</p>
          <h1>Stay for<br><em>the feeling.</em></h1>
          <div class="hero__bottom">
            <p>Unhurried evenings, considered plates, and the kind of company that makes time disappear.</p>
            <a class="text-link" href="#story">Step inside ${icon('arrow')}</a>
          </div>
        </div>
        <div class="hero__visual" aria-label="Photos of Fayra Lounge and Cafe">
        <div class="hero-photo hero-photo--main" data-depth="0.11">
          <img class="w-full h-full object-cover" src="${mainCafeImage.src}" alt="Photo of Fayra Lounge and Cafe in Lucknow" fetchpriority="high">
          <span class="photo-caption">A little corner of Lucknow <i>FAYRA / 01</i></span>
        </div>
        ${heroImages[1] ? `<div class="hero-photo hero-photo--detail" data-depth="0.2"><img class="w-full h-full object-cover" src="${heroImages[1].src}" alt="Photo of Fayra Lounge and Cafe"></div>` : ''}
        ${heroImages[2] ? `<div class="hero-photo hero-photo--glow" data-depth="0.07"><img class="w-full h-full object-cover" src="${heroImages[2].src}" alt="Photo of Fayra Lounge and Cafe"></div>` : ''}
        <div class="hero__aside"><span>MAKE AN EVENING OF IT</span><i></i><small>Good food, warm lights,<br>and room to linger.</small></div>
        <div class="hero__stamp"><span>F</span><small>Since<br>after hours</small></div>
        </div>
        <div class="hero__meta"><span>01 — A place to linger</span><span>Scroll to discover <b>↓</b></span></div>
      </section>

      <section class="story section-pad" id="story">
        <div class="story__intro">
          <p class="eyebrow"><span class="eyebrow__rule"></span> A little more human</p>
          <h2>For the evenings<br>that <em>become stories.</em></h2>
        </div>
        <div class="story__body">
          <p class="story__lead">Some places ask you to hurry. Fayra asks you to stay.</p>
          <p>Come as the light softens. Settle into a familiar corner, discover a new favourite, and let the conversation take its time. From the first pour to the last shared bite, every detail is here to make the everyday feel a little more special.</p>
          <a class="text-link" href="#menu">Find your favourite ${icon('arrow')}</a>
        </div>
        <div class="story-gallery${storyImages.length === 1 ? ' story-gallery--single' : storyImages.length === 2 ? ' story-gallery--pair' : storyImages.length === 3 ? ' story-gallery--few' : ' story-gallery--many'}">
          ${storyImages.map((image, index) => `
            <figure class="story-gallery__item">
              <img class="w-full h-full object-cover" src="${image.src}" alt="Photo from Fayra Lounge and Cafe" loading="lazy">
              <figcaption>FAYRA / ${String(index + heroImages.length + 1).padStart(2, '0')}</figcaption>
            </figure>`).join('')}
        </div>
        <div class="story__coordinates"><span>01</span><span>MAKE YOURSELF AT HOME</span><span>FAYRA — EVENINGS, REIMAGINED</span></div>
      </section>

      <section class="menu-section section-pad" id="menu">
        <div class="section-heading">
          <div><p class="eyebrow"><span class="eyebrow__rule"></span> From our kitchen</p><h2>Something for<br><em>every kind of craving.</em></h2></div>
          <p>Explore Fayra’s menu by category or search for a favourite. Prices and item names are shown as provided by the cafe.</p>
        </div>
        <div class="menu-toolbar">
          <div class="menu-filter-head">
            <label class="menu-search">
              <span>SEARCH THE MENU</span>
              <input id="menu-search" type="search" placeholder="Try pizza, paneer, coffee…" autocomplete="off">
            </label>
            <p class="menu-results" id="menu-results" aria-live="polite"></p>
          </div>
          <p class="menu-browse-hint">Choose a category to see its dishes. Opening another category closes the one above it.</p>
          <div class="diet-legend"><span><i class="legend-dot legend-dot--veg"></i> Vegetarian</span><span><i class="legend-dot legend-dot--nonveg"></i> Non-vegetarian</span><span><i class="legend-dot legend-dot--mixed"></i> Choice of either</span></div>
        </div>
        <div class="menu-accordion" aria-live="polite">
          ${categories.map((category, index) => {
            const count = menuItems.filter((item) => item.category === category).length
            return `
              <details class="menu-category" data-category="${category}">
                <summary class="menu-category__summary" aria-controls="menu-category-${index}">
                  <span class="menu-category__name">${category}</span>
                  <span class="menu-category__count">${count} ${count === 1 ? 'dish' : 'dishes'}</span>
                  <span class="menu-category__icon" aria-hidden="true">${icon('arrowUp')}</span>
                </summary>
                <div class="menu-category__panel" id="menu-category-${index}">
                  <div class="menu-grid"></div>
                </div>
              </details>`
          }).join('')}
          <p class="menu-empty" hidden>No dishes found. Try another search.</p>
        </div>
        <p class="menu-note">Menu items and prices can change. Please ask us about today’s availability and dietary preferences.</p>
      </section>

      <section class="reservation section-pad" id="reserve">
        <div class="reservation__ornament" aria-hidden="true"><span></span><span></span><span></span></div>
        <p class="eyebrow"><span class="eyebrow__rule"></span> Your evening, your way</p>
        <h2>Make room<br>for <em>something good.</em></h2>
        <p class="reservation__intro">A cosy dinner for two or a table full of your favourite people — we’ll help make it feel just right.</p>
        <div class="reservation__actions">
          <a class="action-card action-card--gold" href="${whatsappUrl(siteConfig.orderMessage)}" target="_blank" rel="noopener noreferrer">
            <span class="action-card__number">01 / TO YOUR DOOR</span><span class="action-card__title">Order food<br>online</span><span class="action-card__link">Start an order ${icon('arrow')}</span>
          </a>
          <a class="action-card action-card--light" href="${whatsappUrl(siteConfig.reservationMessage)}" target="_blank" rel="noopener noreferrer">
            <span class="action-card__number">02 / SAVE YOUR SEAT</span><span class="action-card__title">Reserve a table<br>or plan a party</span><span class="action-card__link">Let’s make a plan ${icon('arrow')}</span>
          </a>
        </div>
        <span class="reservation__fineprint">WhatsApp opens with a ready-to-send note. Add your details and we’ll take it from there.</span>
      </section>
    </main>

    <footer class="footer" id="visit">
      <div class="footer__main">
        <div class="footer__brand">
          <a class="brand brand--footer" href="#home" aria-label="Fayra home"><img class="brand__logo" src="/fayra-logo.svg" alt="Fayra Lounge & Cafe"></a>
          <p>Make an evening of it.</p>
          <a class="footer__social" href="${siteConfig.instagramUrl}" target="_blank" rel="noopener noreferrer" aria-label="Fayra on Instagram">${icon('instagram')}</a>
        </div>
        <div class="footer__details">
          <div class="footer__detail">${icon('pin')}<div><span>FIND US</span><p>${siteConfig.address}</p><a href="${siteConfig.directionsUrl}" target="_blank" rel="noopener noreferrer">Get directions ${icon('arrowUp')}</a></div></div>
          <div class="footer__detail">${icon('clock')}<div><span>WHEN TO COME</span><p>${siteConfig.hours}</p><small>${siteConfig.hoursNote}</small></div></div>
          <div class="footer__detail">${icon('phone')}<div><span>SAY HELLO</span><p>${siteConfig.phoneDisplay}</p><a href="${whatsappUrl('Hello Fayra, I have a question.')}">Message us ${icon('arrowUp')}</a></div></div>
        </div>
        <div class="footer__map"><iframe title="Map showing Fayra Lounge and Cafe" src="${siteConfig.mapEmbedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><a href="${siteConfig.directionsUrl}" target="_blank" rel="noopener noreferrer">Open in Maps ${icon('arrowUp')}</a></div>
      </div>
      <div class="footer__bottom"><span>© ${new Date().getFullYear()} FAYRA. ALL EVENINGS RESERVED.</span><a href="/terms.html">Terms &amp; privacy</a><a href="#home">Back to the beginning ↑</a><span>MADE FOR THE MOMENT</span></div>
    </footer>
  </div>
`

const menuCategories = [...document.querySelectorAll('.menu-category')]
const menuSearch = document.querySelector('#menu-search')
const menuResults = document.querySelector('#menu-results')
const menuEmpty = document.querySelector('.menu-empty')

const updateMenu = () => {
  const query = menuSearch.value.trim().toLocaleLowerCase()
  let visibleCount = 0

  menuCategories.forEach((section) => {
    const category = section.dataset.category
    const visibleItems = menuItems.filter((item) => item.category === category
      && (!query || `${item.name} ${item.category}`.toLocaleLowerCase().includes(query)))
    const grid = section.querySelector('.menu-grid')
    const count = section.querySelector('.menu-category__count')

    section.hidden = visibleItems.length === 0
    count.textContent = query
      ? `${visibleItems.length} ${visibleItems.length === 1 ? 'match' : 'matches'}`
      : `${visibleItems.length} ${visibleItems.length === 1 ? 'dish' : 'dishes'}`
    visibleCount += visibleItems.length

    if (section.open && visibleItems.length === 0) section.open = false
    grid.innerHTML = visibleItems.map(renderMenuItem).join('')

  })

  menuEmpty.hidden = visibleCount > 0
  menuResults.textContent = `${visibleCount} ${visibleCount === 1 ? 'item' : 'items'}`
}

menuCategories.forEach((section) => {
  section.addEventListener('toggle', () => {
    if (!section.open) return
    menuCategories.forEach((otherSection) => {
      if (otherSection !== section && otherSection.open) otherSection.open = false
    })
    const items = section.querySelectorAll('.menu-item')
    if (items.length) {
      gsap.fromTo([...items].slice(0, 12), { opacity: 0, y: 12 }, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.025,
        ease: 'power2.out',
      })
    }
  })
})

menuSearch.addEventListener('input', updateMenu)
updateMenu()

const nav = document.querySelector('.site-nav')
const navToggle = document.querySelector('.nav-toggle')
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open')
  navToggle.setAttribute('aria-expanded', String(isOpen))
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation')
})
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open')
    navToggle.setAttribute('aria-expanded', 'false')
    navToggle.setAttribute('aria-label', 'Open navigation')
  })
})

const motion = gsap.matchMedia()
motion.add('(prefers-reduced-motion: no-preference)', () => {
  gsap.from('.hero__copy > *', { y: 28, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.1 })
  gsap.utils.toArray('[data-depth]').forEach((image) => {
    const depth = Number(image.dataset.depth)
    gsap.to(image, {
      yPercent: -depth * 100,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    })
  })
  gsap.utils.toArray('.story__intro, .story__body, .section-heading, .menu-toolbar, .reservation > *:not(.reservation__ornament)').forEach((element) => {
    gsap.from(element, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: element, start: 'top 88%', once: true },
    })
  })
  gsap.from('.story-gallery img', {
    scale: 1.08,
    ease: 'none',
    scrollTrigger: { trigger: '.story-gallery', start: 'top bottom', end: 'bottom top', scrub: true },
  })
})
