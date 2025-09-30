"use client";

import React, { useState } from "react";
import Filters from "./Filters";
import MenuCard from "./MenuCard";

const menuItems = [
  // pizza
  { 
    id: 1, 
    category: "pizza", 
    name: "Chicken Tikka", 
    desc: "Chicken tikka pieces with cheese, onions, tomatos, bell peppers, black olives and red sauce.", 
    item1: "Small", 
    item1Price: "400", 
    item2: "Medium", 
    item2Price: "750", 
    item3: "Large", 
    item3Price: "1050", 
    img: "images/pizza.png" 
  },
  { 
    id: 2, 
    category: "pizza", 
    name: "Chicken Fajita", 
    desc: "Chicken fajita pieces, bell peppers, onions, and red sauce.", 
    item1: "Small", 
    item1Price: "400", 
    item2: "Medium", 
    item2Price: "750", 
    item3: "Large", 
    item3Price: "1050", 
    img: "images/pizza.png" 
  },
  { 
    id: 3, 
    category: "pizza", 
    name: "BBQ Chicken", 
    desc: "Smoky BBQ chicken with onions, bell peppers, cheese, black olives and rich BBQ sauce.", 
    item1: "Small", 
    item1Price: "400", 
    item2: "Medium", 
    item2Price: "750", 
    item3: "Large", 
    item3Price: "1050", 
    img: "images/pizza.png" 
  },
  { 
    id: 4, 
    category: "pizza", 
    name: "Hot & Spicy Pizza", 
    desc: "Chicken fajita with cheese, onions, bell peppers, tomatos, black olives jalapeno, chilli and red sauce.", 
    item1: "Small", 
    item1Price: "400", 
    item2: "Medium", 
    item2Price: "750", 
    item3: "Large", 
    item3Price: "1050", 
    img: "images/pizza.png" 
  },
  { 
    id: 5, 
    category: "pizza", 
    name: "Chicken Supreme", 
    desc: "Chicken tikka with cheese, onions, bell peppers, black olives, chilli and red sauce.", 
    item1: "Small", 
    item1Price: "500", 
    item2: "Medium", 
    item2Price: "900", 
    item3: "Large", 
    item3Price: "1100", 
    img: "images/pizza.png" 
  },
  { 
    id: 6, 
    category: "pizza", 
    name: "Cheese Overloaded", 
    desc: "Cheese, onions, bell peppers, black olives, tomatos, chilli and red sauce.", 
    item1: "Small", 
    item1Price: "400", 
    item2: "Medium", 
    item2Price: "750", 
    item3: "Large", 
    item3Price: "1000", 
    img: "images/pizza.png" 
  },
  { 
    id: 7, 
    category: "pizza", 
    name: "Malai Boti", 
    desc: "Chicken malai boti piece, bell peppers, onions, and creamy sauce", 
    item1: "Small", 
    item1Price: "500", 
    item2: "Medium", 
    item2Price: "900", 
    item3: "Large", 
    item3Price: "1200", 
    img: "images/pizza.png" 
  },
  { 
    id: 8, 
    category: "pizza", 
    name: "Mexican Hot", 
    desc: "Chicken Fajita with jalapeños, bell peppers, black olives, and creamy hot sauce", 
    item1: "Small", 
    item1Price: "500", 
    item2: "Medium", 
    item2Price: "900", 
    item3: "Large", 
    item3Price: "1200", 
    img: "images/pizza.png" 
  },
  { 
    id: 9, 
    category: "pizza", 
    name: "Crown Crust", 
    desc: "Crown-shaped crust stuffed with kababs and toppings with black olives, tomatos, bell pepper, jalapeños and creamy sauce.", 
    item1: "Small", 
    item1Price: "550", 
    item2: "Medium", 
    item2Price: "1050", 
    item3: "Large", 
    item3Price: "1300", 
    img: "images/pizza.png" 
  },

  // burgers
  { 
    id: 30, 
    category: "burger", 
    name: "OG Zinger", 
    desc: "Crispy fried chicken in a soft bun with signature mayo and fresh lettuce.", 
    item1Price: "300", 
    img: "images/zinger.png" 
  },
  { 
    id: 31, 
    category: "burger", 
    name: "Heatwave Zinger", 
    desc: "Chicken fillet infused with our secret spices for a bold kick.", 
    item1Price: "400", 
    img: "images/zinger.png" 
  },
  { 
    id: 32, 
    category: "burger", 
    name: "Tower Zinger", 
    desc: "Two crispy fried chicken stacked for extra flavor and crunch — made for big appetites.", 
    item1Price: "550", 
    img: "images/tower.png" 
  },

  // Shawarma
  { 
    id: 40, 
    category: "shawarma", 
    name: "Shawarma Shot", 
    desc: "Chicken in soft bread with vinegar salad and our signature sauces.", 
    item1: "Small", 
    item1Price: "180", 
    item2: "large", 
    item2Price: "250", 
    img: "images/shawarma.png" 
  },
  { 
    id: 41, 
    category: "shawarma", 
    name: "Zinger Shawarma", 
    desc: "Fried chicken in soft bread with vinegar salad and our signature sauces.", 
    item1Price: "400", 
    img: "images/shawarma.png" 
  },
  { 
    id: 42, 
    category: "shawarma", 
    name: "Sizzler Platter", 
    desc: "Chicken with vinegar salad, breads, and chef’s special garlic-mayo and chili dressing.", 
    item1: "Small", 
    item1Price: "400", 
    item2: "large", 
    item2Price: "800", 
    img: "images/platter.png" 
  },

  // fries
  { 
    id: 50, 
    category: "fries", 
    name: "Plain Fries", 
    desc: "Crispy plain fries lightly salted.", 
    item1: "Small", 
    item1Price: "100", 
    item2: "Medium", 
    item2Price: "150", 
    item3: "Large", 
    item3Price: "220", 
    img: "images/french-fries.png" 
  },
  { 
    id: 51, 
    category: "fries", 
    name: "BBQ Loaded Fries", 
    desc: "Fries coated in bold, spicy, and BBQ seasoning.", 
    item1: "Medium", 
    item1Price: "200", 
    item2: "Large", 
    item2Price: "280", 
    img: "images/loaded-fries.png" 
  },
  { 
    id: 52, 
    category: "fries", 
    name: "Masala Fries", 
    desc: "Fries coated in bold, spicy, and chat masala seasoning.", 
    item1: "Small", 
    item1Price: "150", 
    item2: "Medium", 
    item2Price: "200", 
    item3: "Large", 
    item3Price: "280", 
    img: "images/fries.png" 
  },
  { 
    id: 53, 
    category: "fries", 
    name: "Hunter\’s Fries (Signature)", 
    desc: "Layered with cheese, masala, sauces, and chicken chunks.", 
    item1: "Small", 
    item1Price: "300", 
    item2: "Large", 
    item2Price: "550",  
    img: "images/loaded-fries.png" 
  },
];

const categories = ["All", "Pizza", "Burger", "Shawarma", "Fries"];

const MenuSection = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // default 6

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category.toLowerCase() === filter.toLowerCase()
        );

  const handleShowMore = () => {
    setVisibleCount(filteredItems.length); // show all
  };

  const handleShowLess = () => {
    setVisibleCount(6); // reset back to 6
  };

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Menu</h2>
        </div>

        {/* Filters Component */}
        <Filters categories={categories} filter={filter} setFilter={setFilter} />

        {/* Menu Items */}
        <div className="filters-content">
          <div className="row grid">
            {filteredItems.slice(0, visibleCount).map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Show More / Show Less Buttons */}
        <div className="text-center my-4">
          {visibleCount < filteredItems.length ? (
            <button
              onClick={handleShowMore}
              className="btn btn-primary px-4 py-2"
            >
              Show More
            </button>
          ) : (
            filteredItems.length > 6 && (
              <button
                onClick={handleShowLess}
                className="btn btn-primary px-4 py-2"
              >
                Show Less
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
