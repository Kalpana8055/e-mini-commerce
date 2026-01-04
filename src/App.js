import React, { useEffect, useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useLocalStorage("cart", []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {

        // ===== API PRODUCTS =====
        const apiProducts = data.slice(0, 17).map(p => ({
          ...p,
          price: Math.floor(p.price * 80), // USD → INR
          stock: Math.floor(Math.random() * 6) // 0–5
        }));

        // ===== CUSTOM PRODUCTS =====
        const customProducts = [
          // --- IN STOCK ---
           // --- OUT OF STOCK ---
          {
            id: 401,
            title: "Waterproof Mascara",
            price: 899,
            category: "makeup",
            image:
              "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80",
            stock: 4
          },
           {
            id: 405,
            title: "Luxury Face Serum",
            price: 1599,
            category: "skincare",
            image:
              "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=400&q=80",
            stock: 0
          },
          {
            id: 402,
            title: "Oud Luxury Perfume (Unisex)",
            price: 2499,
            category: "perfume",
            image:
              "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80",
            stock: 6
          },
          
          {
            id: 403,
            title: "CEO Man Premium Perfume",
            price: 2299,
            category: "perfume",
            image:
              "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=400&q=80",
            stock: 5
          },

     
          {
            id: 404,
            title: "Matte Finish Lipstick",
            price: 699,
            category: "makeup",
            image:
              "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80",
            stock: 0
          },
         
          {
            id: 406,
            title: "Women's Designer Handbag",
            price: 3499,
            category: "fashion",
            image:
              "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80",
            stock: 0
          },
          {
            id: 407,
            title: "Men's Classic Watch",
            price: 4999,
            category: "accessories",
            image:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
            stock: 0
          }
        ];

        // ===== MERGE API + CUSTOM =====
        setProducts([...apiProducts, ...customProducts]);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter(p => p.category === category);
    }

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [products, search, category, sort]);

  const addToCart = product => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id);
      if (found) {
        if (found.qty < product.stock) {
          return prev.map(i =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return prev;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart(prev =>
      prev
        .map(i => (i.id === id ? { ...i, qty } : i))
        .filter(i => i.qty > 0)
    );
  };

  return (
    <div className="container">
      <h1>Mini E-Commerce</h1>

      <Filters
        products={products}
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <div className="main">
        <ProductList products={filteredProducts} addToCart={addToCart} />
        <Cart cart={cart} updateQty={updateQty} />
      </div>
    </div>
  );
}

export default App;
