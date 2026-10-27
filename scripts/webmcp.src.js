(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      { 
        name: "search_products", 
        description: "Search Torque E-Bikes products by keyword, category, or price", 
        inputSchema: { 
          type: "object", 
          properties: { 
            query: { type: "string" }, 
            category: { type: "string" }, 
            max_price: { type: "number" } 
          } 
        }, 
        execute: async ({ query, category, max_price }) => { 
          const params = new URLSearchParams(); 
          if (query) params.set('q', query); 
          if (category) params.set('category', category); 
          if (max_price) params.set('max_price', max_price); 
          const res = await fetch(`https://torquee-bikesaustralia.com.au/api/search?${params}`); 
          return res.json(); 
        } 
      },
      { 
        name: "browse_products", 
        description: "Browse e-bike catalog by category", 
        inputSchema: { 
          type: "object", 
          properties: { 
            category: { type: "string" } 
          } 
        }, 
        execute: async ({ category }) => { 
          const url = category ? `https://torquee-bikesaustralia.com.au/shop/${category}/` : `https://torquee-bikesaustralia.com.au/shop/`; 
          window.location.href = url; 
          return { url }; 
        } 
      },
      { 
        name: "order_via_whatsapp", 
        description: "Initiate a WhatsApp order with the Torque Team. Human completes payment.", 
        inputSchema: { 
          type: "object", 
          properties: { 
            message: { type: "string" } 
          } 
        }, 
        execute: async ({ message }) => { 
          const url = message ? `https://wa.me/61480804189?text=${encodeURIComponent(message)}` : `https://wa.me/61480804189`; 
          window.open(url, '_blank'); 
          return { url }; 
        } 
      },
      { 
        name: "get_compliance_info", 
        description: "Get Australian road legal and dangerous goods compliance info", 
        inputSchema: { type: "object", properties: {} }, 
        execute: async () => { 
          window.location.href = `https://torquee-bikesaustralia.com.au/faq/`; 
          return { url: `https://torquee-bikesaustralia.com.au/faq/` }; 
        } 
      }
    ]
  });
})();
