import React from "react";
import firsts from "../assets/products/jbl660nc-1.png"
import Third from "../assets/products/boat131-3.png"
import thirteens from "../assets/products/jbl760nc-1.png"


export const SliderData = [
  {
       id: 1,
              tag: "hero-product",
              tagline: "Keep the noise out, or in. You choose.",
              heroImage: "/images/products/jbl660nc-1.png",
              images:firsts,
                  
            
              brand: "JBL",
              title: "JBL Live 660NC",
              info: "Wireless Over-Ear NC Headphones",
              category: "Headphones",
              type: "Over Ear",
              connectivity: "Wireless",
              finalPrice: 9999,
              originalPrice: 14999,
              quantity: 1,
              ratings: 1234,
              rateCount: 5,
              path: "/product-details/",
          },
  {
       id: 3,
        tag: "hero-product",
        tagline: "Featherweight for comfort all-day.",
        heroImage: "/images/products/boat131-3.png",
        images: Third,
        brand: "boAt",
        title: "boAt Airdopes 131",
        info: "Wireless In-Ear Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1099,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1244,
        rateCount: 5,
        path: "/product-details/",
  },
  {
          id: 8,
          tag: "featured-product",
          tagline:"Wireless Over-Ear NC Headphones",
          images: thirteens,
            
          brand: "JBL",
          title: "JBL Tune 760NC",
          info: "Wireless Over-Ear NC Headphones",
          category: "Headphones",
          type: "Over Ear",
          connectivity: "Wireless",
          finalPrice: 5999,
          originalPrice: 7999,
          quantity: 1,
          ratings: 755,
          rateCount: 4,
          path: "/product-details/",
      }
];