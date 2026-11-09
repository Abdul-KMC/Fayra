import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
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
    star: '<path d="m12 3 2.5 5.2 5.7.8-4.1 4 .97 5.7L12 16l-5.07 2.7.97-5.7-4.1-4 5.7-.8L12 3Z"/>',
    bowl: '<path d="M3 12h18l-2 7H5l-2-7Z"/><path d="M5 9c1.2-1.6 2.2-1.6 3.4 0 1.2-1.6 2.2-1.6 3.4 0 1.2-1.6 2.2-1.6 3.4 0 1.2-1.6 2.2-1.6 3.4 0"/><path d="M8 22h8"/>',
    cake: '<path d="M4 12h16v9H4z"/><path d="M4 16c2 2 4-2 6 0s4-2 6 0 4-2 4 0"/><path d="M8 12V8m4 4V6m4 6V8"/>',
    grill: '<path d="M4 12h16l-2 7H6l-2-7Z"/><path d="M7 12V7m5 5V5m5 7V7M8 19v3m8-3v3"/>',
    pizza: '<path d="m4 4 16 4-9 13L4 4Z"/><path d="m4 4 16 4"/><circle cx="10" cy="10" r="1"/><circle cx="13" cy="15" r="1"/>',
    noodles: '<path d="M4 12h16l-2 7H6l-2-7Z"/><path d="M7 10c-2-2 2-3 0-5m5 5c-2-2 2-3 0-5m5 5c-2-2 2-3 0-5"/><path d="M8 22h8"/>',
    platter: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 3v2m9 7h-2M12 21v-2m-9-7h2"/>',
    dumpling: '<path d="M4 13c0-5 3.6-9 8-9s8 4 8 9v1H4v-1Z"/><path d="M4 14c1.3 4 4 6 8 6s6.7-2 8-6M8 12l1-3m3 3V7m3 5-1-3"/>',
    burger: '<path d="M4 10a8 8 0 0 1 16 0H4Z"/><path d="M3 12h18v3H3zm2 5h14l-2 4H7l-2-4Z"/><path d="M8 7h.01m4-2h.01m4 2h.01"/>',
    sandwich: '<path d="m4 9 8-5 8 5-8 5-8-5Z"/><path d="m4 9v6l8 5 8-5V9"/><path d="m4 15 8-5 8 5"/>',
    coffee: '<path d="M5 8h12v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8Z"/><path d="M17 10h1a3 3 0 0 1 0 6h-1M8 4c-1 1 1 1 0 3m4-3c-1 1 1 1 0 3"/>',
    drink: '<path d="M5 4h14l-2 17H7L5 4Z"/><path d="M6 9h12m-9 3h.01m3 2h.01"/><path d="m14 4 3-3"/>',
    leafPlate: '<path d="M4 20c0-9 7-15 16-16 0 9-6 16-16 16Z"/><path d="M4 20c3-5 7-8 12-11"/>',
    pasta: '<path d="M4 13h16l-2 7H6l-2-7Z"/><path d="M8 11c0-3 2-3 2-6m3 6c0-3 2-3 2-6m2 6c0-3 2-3 2-6"/><path d="M8 23h8"/>',
    bread: '<path d="M4 11a4 4 0 0 1 4-4 4 4 0 0 1 8 0 4 4 0 0 1 4 4v7H4v-7Z"/><path d="M8 11v3m4-4v4m4-3v3"/>',
    glass: '<path d="M6 3h12l-1 18H7L6 3Z"/><path d="M7 9h10m-7 4h.01m3 2h.01"/>',
  }
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] ?? ''}</svg>`
}

const whatsappUrl = (message) => {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

const categories = [...new Set(menuItems.map((item) => item.category))]
const cafeImages = Object.entries(import.meta.glob('./assets/optimized/*.jpg', {
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

const getCategoryIcon = (category) => {
  if (/combo/i.test(category)) return 'star'
  if (/dessert/i.test(category)) return 'cake'
  if (/tandoor/i.test(category)) return 'grill'
  if (/pizza/i.test(category)) return 'pizza'
  if (/momo/i.test(category)) return 'dumpling'
  if (/burger/i.test(category)) return 'burger'
  if (/panini|sandwich|wrap|roll|quesadilla/i.test(category)) return 'sandwich'
  if (/coffee|tea|shake/i.test(category)) return 'coffee'
  if (/juice|drink|refresher|smoothie/i.test(category)) return 'drink'
  if (/salad/i.test(category)) return 'leafPlate'
  if (/bread|rice|biryani/i.test(category)) return 'bread'
  if (/pasta|lasagna|maggi/i.test(category)) return 'pasta'
  if (/starter|platter|sizzler/i.test(category)) return 'platter'
  if (/soup|chinese|main course/i.test(category)) return 'bowl'
  return 'sandwich'
}

const renderCategoryVisual = (category) => {
  if (/^momos$/i.test(category)) {
    const momosImage = imageByName('Fayra_momos')
    if (momosImage) return `<img class="menu-category__photo" src="${momosImage.src}" alt="" loading="lazy">`
  }
  return `<span class="menu-category__icon">${icon(getCategoryIcon(category))}</span>`
}

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
  <div class="ambient-field" aria-hidden="true">
    <span class="ambient-orb ambient-orb--one"></span>
    <span class="ambient-orb ambient-orb--two"></span>
    <span class="ambient-frame ambient-frame--one"></span>
    <span class="ambient-frame ambient-frame--two"></span>
  </div>
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
        <div class="hero__visual" aria-label="Photos of Fayra Lounge and Cafe" data-cursor="DISCOVER">
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
        <div class="story-gallery-viewport">
          <div class="story-gallery${storyImages.length === 1 ? ' story-gallery--single' : storyImages.length === 2 ? ' story-gallery--pair' : storyImages.length === 3 ? ' story-gallery--few' : ' story-gallery--many'}">
            ${storyImages.map((image, index) => `
              <figure class="story-gallery__item">
                <img class="w-full h-full object-cover" src="${image.src}" alt="Photo from Fayra Lounge and Cafe" loading="lazy">
                <figcaption>FAYRA / ${String(index + heroImages.length + 1).padStart(2, '0')}</figcaption>
              </figure>`).join('')}
          </div>
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
              <details class="menu-category" data-category="${category}" data-cursor="CRAVE">
                <summary class="menu-category__summary" aria-controls="menu-category-${index}">
                  <span class="menu-category__visual">${renderCategoryVisual(category)}</span>
                  <span class="menu-category__copy">
                  <span class="menu-category__name">${category}</span>
                  <span class="menu-category__count">${count} ${count === 1 ? 'dish' : 'dishes'}</span>
                  </span>
                  <span class="menu-category__expand" aria-hidden="true">${icon('arrowUp')}</span>
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

document.body.insertAdjacentHTML('beforeend', `
  <div class="custom-cursor" aria-hidden="true">
    <span class="custom-cursor__dot"></span>
    <span class="custom-cursor__ring"><span class="custom-cursor__label"></span></span>
  </div>
`)

const cursor = document.querySelector('.custom-cursor')
if (window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
  const moveX = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' })
  const moveY = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' })
  const cursorLabel = cursor.querySelector('.custom-cursor__label')

  window.addEventListener('pointermove', (event) => {
    moveX(event.clientX)
    moveY(event.clientY)
    cursor.classList.add('is-visible')
  }, { passive: true })

  document.querySelectorAll('[data-cursor]').forEach((target) => {
    target.addEventListener('pointerenter', () => {
      cursorLabel.textContent = target.dataset.cursor
      cursor.classList.add('is-active')
    })
    target.addEventListener('pointerleave', () => cursor.classList.remove('is-active'))
  })

  const ambientPosition = { x: 0, y: 0 }
  const setAmbientX = () => document.documentElement.style.setProperty('--pointer-x', `${ambientPosition.x}px`)
  const setAmbientY = () => document.documentElement.style.setProperty('--pointer-y', `${ambientPosition.y}px`)
  const ambientX = gsap.quickTo(ambientPosition, 'x', { duration: 0.7, ease: 'power2.out', onUpdate: setAmbientX })
  const ambientY = gsap.quickTo(ambientPosition, 'y', { duration: 0.7, ease: 'power2.out', onUpdate: setAmbientY })
  window.addEventListener('pointermove', (event) => {
    ambientX(event.clientX)
    ambientY(event.clientY)
  }, { passive: true })
} else {
  cursor.remove()
}

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
  const lenis = new Lenis({ autoRaf: false, smoothWheel: true, lerp: 0.085 })
  const updateScroll = () => ScrollTrigger.update()
  const advanceScroll = (time) => lenis.raf(time * 1000)
  lenis.on('scroll', updateScroll)
  gsap.ticker.add(advanceScroll)
  gsap.ticker.lagSmoothing(0)

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
  if (window.matchMedia('(min-width: 901px)').matches) {
    gsap.from('.story-gallery img', {
      scale: 1.08,
      ease: 'none',
      scrollTrigger: { trigger: '.story-gallery-viewport', start: 'top bottom', end: 'bottom top', scrub: true },
    })

    gsap.utils.toArray('.story-gallery').forEach((gallery) => {
      const viewport = gallery.parentElement
      const overflow = gallery.scrollWidth - viewport.clientWidth
      if (overflow <= 0) return
      gsap.to(gallery, {
        x: -overflow,
        ease: 'none',
        scrollTrigger: {
          trigger: viewport,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '+=72%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })
      .to('.hero__copy, .hero__visual, .hero__meta', { scale: 0.94, opacity: 0.12, filter: 'blur(8px)', ease: 'none' })
  }

  gsap.fromTo('.story', { clipPath: 'inset(10% 0 0 0)' }, {
    clipPath: 'inset(0% 0 0 0)',
    ease: 'none',
    scrollTrigger: { trigger: '.story', start: 'top 90%', end: 'top 30%', scrub: 1 },
  })

  return () => {
    lenis.off('scroll', updateScroll)
    gsap.ticker.remove(advanceScroll)
    lenis.destroy()
  }
})
