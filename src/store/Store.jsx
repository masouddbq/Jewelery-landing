import { useEffect, useMemo, useRef, useState } from 'react';
import { useCart } from '../Context/CartContext';
import { chapters, findProduct, money, products, regions, shopCards, sizes } from './catalog';
import { LogoMark, Piece, RawStone, Rock } from './Jewelry';
import './store.css';

const views = ['three', 'side', 'top'];
const chapterPiece = {
  origin: 'origin',
  void: 'minimal',
  pulse: 'pulse',
  ratio: 'minimal',
  apex: 'apex',
  flux: 'flux',
};

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="7" cy="7" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.2 10.2 L13 13" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="5.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 13c.8-2.2 2.4-3.2 4.5-3.2S12 10.8 12.5 13" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Store() {
  const scrollerRef = useRef(null);
  const [shopPage, setShopPage] = useState(0);
  const { addToCart, getTotalItems, getTotalPrice } = useCart();
  const [theme, setTheme] = useState('light');
  const [overlay, setOverlay] = useState(null);
  const [popover, setPopover] = useState(null);
  const [active, setActive] = useState(null);
  const [view, setView] = useState('three');
  const [size, setSize] = useState('S');
  const [chapter, setChapter] = useState(chapters[0]);
  const [name, setName] = useState('guest');
  const [query, setQuery] = useState('');
  const [contact, setContact] = useState('');

  const count = getTotalItems();
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((item) =>
      `${item.name} ${item.fa} ${item.note}`.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root || overlay) return undefined;
    const panels = [...root.querySelectorAll('[data-theme]')];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setTheme(visible.target.dataset.theme);
      },
      { root, threshold: [0.55] }
    );
    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, [overlay]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOverlay(null);
        setPopover(null);
      }
    };
    const onPointer = (event) => {
      if (!event.target.closest('[data-pop]')) setPopover(null);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, []);

  const scrollToId = (id) => {
    setOverlay(null);
    setPopover(null);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  };

  const openProduct = (product) => {
    setActive(product);
    setView('three');
    setSize('S');
    setPopover(null);
    setOverlay('product');
    setTheme('light');
  };

  const shellTheme = overlay === 'checkout' || overlay === 'product' ? 'light' : theme;
  const storyProduct = findProduct(chapterPiece[chapter.id]);

  return (
    <div className="stage">
      <div className="silk" aria-hidden="true" />
      <div className="shell" data-theme={shellTheme}>
        <header className="bar">
          <nav className="links" aria-label="Primary">
            <button className="link" type="button" onClick={() => scrollToId('featured')}>
              <span className="dot" aria-hidden="true" />
              new items
            </button>
            <button className="link" type="button" onClick={() => scrollToId('shop')}>shop</button>
            <button className="link link-long" type="button" onClick={() => scrollToId('collections')}>
              collections
            </button>
            <button className="link" type="button" onClick={() => scrollToId('index')}>index</button>
          </nav>
          <button className="logo" type="button" aria-label="LOMISA home" onClick={() => scrollToId('hero')}>
            <LogoMark />
          </button>
          <div className="tools">
            <div data-pop="search">
              <button
                className="tool"
                type="button"
                aria-label="Search"
                aria-expanded={popover === 'search'}
                onClick={() => setPopover((value) => (value === 'search' ? null : 'search'))}
              >
                <SearchIcon />
              </button>
            </div>
            <div data-pop="account">
              <button
                className="tool"
                type="button"
                aria-expanded={popover === 'account'}
                onClick={() => setPopover((value) => (value === 'account' ? null : 'account'))}
              >
                <UserIcon />
                <span className="hello">hi, {name}</span>
              </button>
            </div>
            <button className="tool" type="button" onClick={() => setOverlay((value) => (value === 'checkout' ? null : 'checkout'))}>
              <span>{count} {count === 1 ? 'item' : 'items'}</span>
              {count > 0 && <span className="bag-total">{money(getTotalPrice())}</span>}
            </button>
          </div>
        </header>

        {popover === 'search' && (
          <div className="pop" data-pop="search">
            <p>search the index</p>
            <input
              className="field"
              value={query}
              placeholder="ring, bracelet, نقره"
              onChange={(event) => setQuery(event.target.value)}
              autoFocus
            />
            <div className="results">
              {results.map((item) => (
                <button key={item.id} type="button" onClick={() => openProduct(item)}>
                  {item.name} · {item.fa}
                </button>
              ))}
              {results.length === 0 && <p className="muted">nothing in this cut.</p>}
            </div>
          </div>
        )}

        {popover === 'account' && (
          <form
            className="pop"
            data-pop="account"
            onSubmit={(event) => {
              event.preventDefault();
              const next = contact.split('@')[0].trim();
              if (next) setName(next);
              setPopover(null);
            }}
          >
            <p>contact / log in</p>
            <input
              className="field"
              value={contact}
              placeholder="email or mobile phone number"
              onChange={(event) => setContact(event.target.value)}
            />
            <button className="pill dark-pill" type="submit">continue</button>
          </form>
        )}

        {overlay === 'product' && active && (
          <ProductView
            key={active.id}
            product={active}
            view={view}
            size={size}
            onView={setView}
            onSize={setSize}
            onAdd={() => addToCart({ ...active, size })}
          />
        )}

        {overlay === 'checkout' && (
          <Checkout
            contact={contact}
            setContact={setContact}
            setName={setName}
            onDone={() => scrollToId('hero')}
          />
        )}

        {!overlay && (
          <div className="scroller" ref={scrollerRef}>
            <section className="panel intro" id="intro" data-theme="light" aria-label="Material">
              <RawStone className="stone" />
            </section>

            <section className="panel hero" id="hero" data-theme="light">
              <p className="giant" aria-hidden="true">925</p>
              <div className="hero-scene">
                <Rock className="rock" />
                <Piece kind="facet" className="piece hero-ring" />
              </div>
              <button className="pill hero-cta" type="button" onClick={() => scrollToId('shop')}>
                shop now <Arrow />
              </button>
            </section>

            <section className="panel featured" id="featured" data-theme="dark">
              <p className="kicker">Featured</p>
              <p className="giant light" aria-hidden="true">lomisa</p>
              <div className="split">
                <button className="split-btn" type="button" onClick={() => openProduct(findProduct('fractured'))}>
                  <p className="split-copy">Fractured</p>
                  <Piece kind="broken" className="piece" />
                </button>
                <button className="split-btn" type="button" onClick={() => openProduct(findProduct('organic'))}>
                  <p className="split-copy">Organic</p>
                  <Piece kind="beads" view="top" className="piece" />
                </button>
              </div>
              <button className="pill center-cta" type="button" onClick={() => scrollToId('shop')}>
                view all products <Arrow />
              </button>
            </section>

            <section className="panel" id="shop" data-theme="light">
              <div className="shop">
                {shopCards.slice(shopPage, shopPage + 3).map((item) => (
                  <article className="card" key={item.id}>
                    <button className="card-hit" type="button" onClick={() => openProduct(item)}>
                      <strong>{item.name}</strong>
                      <span className="fa">{item.fa}</span>
                      <Piece kind={item.kind} className="piece" />
                    </button>
                    <button
                      className="chev"
                      type="button"
                      aria-label="Next pieces"
                      onClick={() => setShopPage((page) => (page + 1) % (shopCards.length - 2))}
                    >
                      ›
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel index-panel" id="index" data-theme="light" aria-label="Index">
              {products.map((item) => (
                <button key={item.id} className="index-btn" type="button" onClick={() => openProduct(item)}>
                  <span>{item.code} / {item.name}</span>
                  <span className="fa">{item.fa}</span>
                  <span className="price">{money(item.price)}</span>
                </button>
              ))}
            </section>

            <section className="panel reviews" id="reviews" data-theme="dark" aria-label="Clients">
              <p className="giant light" aria-hidden="true">clients say</p>
              <div className="avatars" aria-hidden="true">
                {['S', 'N', 'A', 'R', 'K'].map((letter, index) => (
                  <span key={letter} style={{ background: ['#8d6b5a', '#d8b4a0', '#6e6a64', '#c4a484', '#4d4a46'][index] }}>
                    {letter}
                  </span>
                ))}
              </div>
              <figure className="quote">
                <figcaption>Sara M.</figcaption>
                <blockquote>
                  “A ring should feel like a personal mark: minimal in form, heavy in presence, and quiet enough to speak for you.”
                </blockquote>
              </figure>
              <button className="mini-piece" type="button" aria-label="Open Minimal" onClick={() => openProduct(findProduct('minimal'))}>
                <Piece kind="thin" className="piece" />
              </button>
            </section>

            <section className="panel manifesto" id="collections" data-theme="light">
              <div className="names">
                {chapters.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={item.id === chapter.id ? 'active' : undefined}
                    onClick={() => setChapter(item)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="story">
                <p className="statement">{chapter.text}</p>
                <Rock className="rock story-piece" />
                <Piece kind={storyProduct.kind} className="piece story-ring" />
              </div>
            </section>

            <section className="panel finale" id="finale" data-theme="light" aria-label="Flux">
              <button className="finale-hit" type="button" aria-label="Open Flux" onClick={() => openProduct(findProduct('flux'))}>
                <Piece kind="chain" className="piece" />
              </button>
              <p className="finale-mark">925</p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductView({ product, view, size, onView, onSize, onAdd }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="overlay studio">
      <div className="viewer">
        <div className="viewer-card">
          <Piece kind={product.kind} view={view} className="piece" />
        </div>
        <div className="viewer-meta">
          <div>
            <h2>{product.name}</h2>
            <p className="muted">{product.fa} · {product.note}</p>
            <p className="muted">{money(product.price)}</p>
          </div>
          <div className="viewer-actions">
            <div className="angles" aria-label="Angle">
              {views.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={item === view ? 'angle on' : 'angle'}
                  onClick={() => onView(item)}
                >
                  {item === 'three' ? '3/4' : item}
                </button>
              ))}
            </div>
            <div className="sizes" aria-label="Size">
              {sizes.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={item === size ? 'size on' : 'size'}
                  onClick={() => onSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className="pill dark-pill"
              type="button"
              onClick={() => {
                onAdd();
                setAdded(true);
              }}
            >
              {added ? 'added' : 'add'} <Arrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkout({ contact, setContact, setName, onDone }) {
  const { cartItems, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [region, setRegion] = useState(regions[0]);
  const [ship, setShip] = useState('free');
  const [code, setCode] = useState('');
  const [discountOn, setDiscountOn] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState('');

  const shipping = ship === 'fast' ? 25 : 0;
  const subtotal = getTotalPrice();
  const discount = discountOn ? subtotal * 0.1 : 0;
  const total = Math.max(0, subtotal - discount + shipping);

  if (done) {
    return (
      <div className="overlay">
        <div className="success">
          <p className="kicker">order {done}</p>
          <h2>Thank you.</h2>
          <p className="muted">Saved as a preview on this device. No payment was taken.</p>
          <button className="pill" type="button" onClick={onDone}>back to the shop</button>
        </div>
      </div>
    );
  }

  return (
    <div className="overlay">
      <form
        className="checkout"
        onSubmit={(event) => {
          event.preventDefault();
          if (!cartItems.length) {
            setError('Your bag is empty.');
            return;
          }
          if (!contact.trim()) {
            setError('Add an email or phone number.');
            return;
          }
          const next = contact.split('@')[0].trim();
          if (next) setName(next);
          const stamp = Math.floor(1000 + Math.random() * 9000);
          clearCart();
          setDone(`LM-${stamp}`);
        }}
      >
        <div>
          <h2>contact / log in</h2>
          <div className="block stack">
            <input
              className="field"
              value={contact}
              placeholder="email or mobile phone number"
              onChange={(event) => setContact(event.target.value)}
            />
          </div>
          <div className="block">
            <h3>delivery</h3>
            <div className="stack">
              <select className="field" value={region} onChange={(event) => setRegion(event.target.value)} aria-label="region">
                {regions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <div className="row-2">
                <input className="field" placeholder="first name" aria-label="first name" />
                <input className="field" placeholder="last name" aria-label="last name" />
              </div>
              <input className="field" placeholder="address" aria-label="address" />
              <input className="field" placeholder="apartment, suite, etc." aria-label="apartment" />
              <div className="row-2">
                <input className="field" placeholder="postal code" aria-label="postal code" />
                <input className="field" placeholder="city" aria-label="city" />
              </div>
            </div>
          </div>
          <div className="block">
            <h3>shipment method</h3>
            <div className="ship-list">
              <button type="button" className={ship === 'free' ? 'ship on' : 'ship'} onClick={() => setShip('free')}>
                <span>Free Shipping · 4–7 days</span>
                <small>FREE</small>
              </button>
              <button type="button" className={ship === 'fast' ? 'ship on' : 'ship'} onClick={() => setShip('fast')}>
                <span>Expedited Shipping · 1–3 days</span>
                <small>$25.00</small>
              </button>
            </div>
          </div>
        </div>

        <div>
          <p className="summary-label">your pieces</p>
          {cartItems.length === 0 && <p className="muted">Your bag is empty.</p>}
          {cartItems.map((item) => (
            <article className="line" key={item.lineId || item.id}>
              <div className="thumb">
                <Piece kind={item.kind || 'thin'} className="piece" />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p className="muted">{item.fa || item.note}</p>
                <div className="qty">
                  <button className="icon-btn" type="button" aria-label="Decrease" onClick={() => updateQuantity(item.lineId || item.id, item.quantity - 1)}>‹</button>
                  <span>{String(item.quantity).padStart(2, '0')}</span>
                  <button className="icon-btn" type="button" aria-label="Increase" onClick={() => updateQuantity(item.lineId || item.id, item.quantity + 1)}>›</button>
                  <span>size {item.size || 'S'}</span>
                </div>
              </div>
              <div className="line-price">{money(item.price * item.quantity)}</div>
            </article>
          ))}
          <div className="discount">
            <input
              className="field"
              value={code}
              placeholder="discount code"
              onChange={(event) => setCode(event.target.value)}
            />
            <button
              className="pill"
              type="button"
              onClick={() => {
                const ok = code.trim().toUpperCase() === 'LOMISA';
                setDiscountOn(ok);
                setError(ok ? '' : 'Code not recognized.');
              }}
            >
              apply
            </button>
          </div>
          <div className="totals">
            <div><span>shipping</span><span>{shipping === 0 ? '$0.00' : money(shipping)}</span></div>
            {discountOn && <div><span>discount</span><span>-{money(discount)}</span></div>}
            <div><strong>total</strong><strong>{money(total)}</strong></div>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="pay-row">
            <span className="muted">{region}</span>
            <button className="pill dark-pill" type="submit" disabled={!cartItems.length}>place order</button>
          </div>
        </div>
      </form>
    </div>
  );
}
