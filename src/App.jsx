import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const products = [
  { name: "2026 Vortex V4", price: "$12,990", badge: "$1,000 OFF", image: "/cdn/shop/files/1Large_v=1773247858&width=360.jpg" },
  { name: "2026 Vortex V6", price: "$14,990", badge: "$1,000 OFF", image: "/cdn/shop/files/P1010443Large_v=1773247858&width=480.jpg" },
  { name: "2026 Phantom", price: "$13,490", badge: "$1,000 OFF", image: "/cdn/shop/files/P1010450Large_v=1772665315&width=480.jpg" },
  { name: "Edge Glyde G4", price: "$11,990", badge: "READY TO SHIP", image: "/cdn/shop/files/P1010440Large_v=1772665315&width=480.jpg" },
  { name: "Edge Glyde G6", price: "$13,990", badge: "READY TO SHIP", image: "/cdn/shop/files/P1010447Large_v=1772665315&width=480.jpg" },
  { name: "Edge Phantom 6P", price: "$14,290", badge: "READY TO SHIP", image: "/cdn/shop/files/a-1Large_v=1763133030&width=360.jpg" },
];

const accessories = [
  { name: "LED Light Kit", price: "$349", image: "/cdn/shop/files/Rectangle_2319_x200_v=1772027812.png" },
  { name: "Underglow RGB", price: "$279", image: "/cdn/shop/files/Rectangle_2323_x200_v=1772027766.png" },
  { name: "Whip LED Kit", price: "$199", image: "/cdn/shop/files/1_v=1773247791&width=360.png" },
  { name: "Premium Seat Cover", price: "$420", image: "/cdn/shop/files/IMG_1761_b720f505-afcb-47e3-96af-f9ab74e08637_v=1769897507&width=480.png" },
];

function Header() {
  return (
    <>
      <div className="alert-bar">EVERY CART SOLD = 200 MEALS FOR AMERICAN FAMILIES IN NEED.</div>
      <header className="site-header">
        <Link to="/" className="logo-wrap">
          <img src="/cdn/shop/files/Logo_v=1772092984&width=320.svg" alt="Golf Carts USA" className="logo-img" />
        </Link>
        <nav>
          <Link to="/collections/all">SHOP GOLF CARTS</Link>
          <Link to="/collections/used-golf-carts">USED CARTS</Link>
          <Link to="/collections/accessories">ACCESSORIES/ PARTS</Link>
          <Link to="/pages/aftercare">AFTERCARE</Link>
          <Link to="/pages/meet-the-golf-cart-dream-team">ABOUT US</Link>
        </nav>
        <div className="nav-icons" aria-hidden="true">
          <span>⌕</span>
          <span>◯</span>
          <span>▢</span>
        </div>
      </header>
    </>
  );
}

function Hero({ image, title, crumb, subtitle }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p>{crumb}</p>
        <h1>{title}</h1>
        {subtitle ? <h3>{subtitle}</h3> : null}
        <div className="hero-features">
          <span>◈ Out-the-door price</span>
          <span>◍ Financing or deposit</span>
          <span>▣ Receive Delivery</span>
        </div>
      </div>
    </section>
  );
}

function ProductGrid({ items }) {
  return (
    <section className="list-wrap">
      <div className="list-head">
        <p>Showing {items.length} of {items.length} products</p>
        <div className="sort-pill">Sort By: Featured</div>
      </div>
      <div className="product-grid">
        {items.map((item) => (
          <article className="product-card" key={item.name}>
            <img src={item.image} alt={item.name} />
            <span className="badge">{item.badge || "NEW"}</span>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <Hero
        image="/cdn/shop/files/Hero_Section_8_v=1772467891&width=2000.jpg"
        title="Get your out-the-door price fast - delivered to your driveway"
        crumb="HOME / ALL GOLF CARTS"
      />
      <ProductGrid items={products} />
    </Layout>
  );
}

function AccessoriesPage() {
  return (
    <Layout>
      <Hero
        image="/cdn/shop/files/BG_v=1772467943&width=3840.jpg"
        title="Accessories/ Parts"
        crumb="HOME / ACCESSORIES / PARTS"
      />
      <ProductGrid items={accessories} />
    </Layout>
  );
}

function UsedPage() {
  return (
    <Layout>
      <Hero
        image="/cdn/shop/files/Happy_Customers_8_v=1760713965&width=1280.jpg"
        title="Used Golf Carts"
        crumb="HOME / USED GOLF CARTS"
        subtitle="Smart Carts for Smart Buyers"
      />
      <ProductGrid items={products.slice(0, 4)} />
    </Layout>
  );
}

function AftercarePage() {
  return (
    <Layout>
      <Hero
        image="/cdn/shop/files/Happy_Customers_7_v=1760713946&width=960.jpg"
        title="Aftercare instructions"
        crumb="HOME / AFTERCARE"
      />
      <section className="content-box">
        <h2>Activate my Warranty (Edge-EV)</h2>
        <button>ACTIVATE</button>
      </section>
    </Layout>
  );
}

function TeamPage() {
  return (
    <Layout>
      <Hero
        image="/cdn/shop/files/Happy_Customers_5_v=1760713891.jpg"
        title="Meet the golf cart dream team"
        crumb="HOME / MEET THE GOLF CART DREAM TEAM"
      />
      <section className="mission">
        <h4>OUR MISSION</h4>
        <p>
          We're a family-owned company. Our goal is to remove the stress of buying a golf cart:
          no hidden fees, no wasted time, and no confusion. Just a straightforward out-the-door price.
        </p>
      </section>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/all" element={<HomePage />} />
        <Route path="/collections/accessories" element={<AccessoriesPage />} />
        <Route path="/collections/used-golf-carts" element={<UsedPage />} />
        <Route path="/pages/aftercare" element={<AftercarePage />} />
        <Route path="/pages/meet-the-golf-cart-dream-team" element={<TeamPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
