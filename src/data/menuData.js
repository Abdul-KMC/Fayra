const menu = [
  // SPECIAL COMBOS (Page 1)
  {
    category: "Special Combo (12:00 pm to 3:00 pm)",
    name: "Veg Grilled Sandwich/ Veg Burger + French Fries + Coldrink/Ice Cream",
    price: 249.00
  },
  {
    category: "Special Combo (12:00 pm to 3:00 pm)",
    name: "Chicken Tikka Sandwich/Chickn Burger + French Fries + Coldrink/Ice Cream",
    price: 369.00
  },
  {
    category: "Special Combo (12:00 pm to 3:00 pm)",
    name: "Veg Manchuriyan/ Veg Fried Rice/Veg Noodles + French Fries + Coldrink/Ice Cream",
    price: 349.00
  },
  {
    category: "Special Combo (12:00 pm to 3:00 pm)",
    name: "Paneer chilli/Paneer Manchuriyan/Veg Fried Rice + Veg Noodles+Coldrink/Ice Cream",
    price: 379.00
  },
  {
    category: "Special Combo (12:00 pm to 3:00 pm)",
    name: "Chicken Chili/Chicken Manchuriyan/Veg Fried Rice + Veg Noodles+Coldrink/Ice Cream",
    price: 349.00
  },
  {
    category: "Special Combo (12:00 pm to 3:00 pm)",
    name: "Kadhai Paneer/Handi Paneer/Lachha Paratha + Tandoori Roti+Coldrink/Ice Cream",
    price: 349.00
  },
  {
    category: "Special Combo (12:00 pm to 3:00 pm)",
    name: "Paneer Butter Masala/Paneer Lababdar/Lachha Paratha + Tandoori Roti+Coldrink/Ice Cream",
    price: 349.00
  },
  {
    category: "Special Combo (12:00 pm to 3:00 pm)",
    name: "Chicken Handi/Chicken Kadhai/Butter Chicken + Lachha Paratha Tandoori Roti+Coldrink/Ice Cream",
    price: 349.00
  },

  // NON VEG MAIN COURSE (Page 2)
  { category: "Non Veg Main Course", name: "Mutton Galawat Kabab (4 Pcs)", price: 280.00 },
  { category: "Non Veg Main Course", name: "Chicken Masala", price: 400.00 },
  { category: "Non Veg Main Course", name: "Chicken Kali Mirch Dry", price: 410.00 },
  { category: "Non Veg Main Course", name: "Kadhai Chicken", price: 380.00 },
  { category: "Non Veg Main Course", name: "Chicken Handi", price: 380.00 },
  { category: "Non Veg Main Course", name: "Chicken Saag", price: 380.00 },
  { category: "Non Veg Main Course", name: "Chicken Khurchan", price: 400.00 },
  { category: "Non Veg Main Course", name: "Chicken Tikka Masala", price: 400.00 },
  { category: "Non Veg Main Course", name: "Chicken Lababdar", price: 400.00 },
  { category: "Non Veg Main Course", name: "Boneless Butter Chicken", price: 450.00 },
  { category: "Non Veg Main Course", name: "Butter Chicken", price: 450.00 },
  { category: "Non Veg Main Course", name: "Chicken Amritsari Seekh Kabab", price: 400.00 },

  // DESSERT (Page 2)
  { category: "Dessert", name: "Brownie Sizzling", price: 220.00 },
  { category: "Dessert", name: "Gulab Jamun (1 Pc)", price: 30.00 },
  { category: "Dessert", name: "Kheer", price: 95.00 },
  { category: "Dessert", name: "Ice Cream", price: 165.00 },
  { category: "Dessert", name: "Vanilla / Strawberry Ice Cream", price: 70.00 },

  // VEG TANDOOR STARTER (Page 3)
  { category: "Veg Tandoor Starter", name: "Paneer Tikka", price: 320.00 },
  { category: "Veg Tandoor Starter", name: "Paneer Achari Tikka", price: 320.00 },
  { category: "Veg Tandoor Starter", name: "Paneer Malai Tikka", price: 340.00 },
  { category: "Veg Tandoor Starter", name: "Paneer Afghani Tikka", price: 320.00 },
  { category: "Veg Tandoor Starter", name: "Paneer Peri Peri Tikka", price: 320.00 },

  // NON VEG TANDOOR STARTER (Page 3)
  { category: "Non Veg Tandoor Starter", name: "Chicken Amritsari Seekh Kabab", price: 415.00 },
  { category: "Non Veg Tandoor Starter", name: "Chicken Kali Mirch (Half / Full)", price: [350.00, 720.00] },
  { category: "Non Veg Tandoor Starter", name: "Chicken Tandoori", price: 520.00 },
  { category: "Non Veg Tandoor Starter", name: "Chicken Tikka", price: 470.00 },
  { category: "Non Veg Tandoor Starter", name: "Chicken Malai Tikka", price: 500.00 },
  { category: "Non Veg Tandoor Starter", name: "Chicken Afghani", price: 540.00 },
  { category: "Non Veg Tandoor Starter", name: "Chicken Hari Bhari Tikka", price: 480.00 },
  { category: "Non Veg Tandoor Starter", name: "Chicken Peri Peri Tikka", price: 540.00 },

  // INDIAN MAIN COURSE (Page 3)
  { category: "Indian Main Course", name: "Hara Bhara Kabab (4 Pc)", price: 240.00 },
  { category: "Indian Main Course", name: "Paneer Do Pyaza", price: 399.00 },
  { category: "Indian Main Course", name: "Mushroom Do Pyaza", price: 380.00 },
  { category: "Indian Main Course", name: "Mix Vegetable", price: 280.00 },
  { category: "Indian Main Course", name: "Daal Fry", price: 180.00 },
  { category: "Indian Main Course", name: "Daal Tadka", price: 200.00 },
  { category: "Indian Main Course", name: "Daal Makhni", price: 280.00 },
  { category: "Indian Main Course", name: "Paneer Butter Masala", price: 399.00 },
  { category: "Indian Main Course", name: "Shahi Paneer", price: 399.00 },
  { category: "Indian Main Course", name: "Paneer Handi", price: 399.00 },
  { category: "Indian Main Course", name: "Paneer Lababdar", price: 399.00 },
  { category: "Indian Main Course", name: "Paneer Khurchan", price: 399.00 },
  { category: "Indian Main Course", name: "Paneer Kali Mirch", price: 399.00 },
  { category: "Indian Main Course", name: "Matar Paneer", price: 399.00 },
  { category: "Indian Main Course", name: "Kadhai Paneer", price: 399.00 },
  { category: "Indian Main Course", name: "Palak Paneer", price: 390.00 },

  // BREAD & RICE (Page 3)
  { category: "Bread & Rice", name: "Paneer Paratha (2 Pcs)", price: 120.00 },
  { category: "Bread & Rice", name: "Aloo Paratha (2 Pcs)", price: 100.00 },
  { category: "Bread & Rice", name: "Mughlai Paratha", price: 25.00 },
  { category: "Bread & Rice", name: "Garlic Naan", price: 60.00 },
  { category: "Bread & Rice", name: "Butter Naan", price: 50.00 },
  { category: "Bread & Rice", name: "Plain Naan", price: 40.00 },
  { category: "Bread & Rice", name: "Baby Naan", price: 20.00 },
  { category: "Bread & Rice", name: "Tandoori Roti with Butter", price: 30.00 },
  { category: "Bread & Rice", name: "Tandoori Roti", price: 20.00 },
  { category: "Bread & Rice", name: "Lachha Paratha", price: 40.00 },
  { category: "Bread & Rice", name: "Stuff Aloo Kulcha", price: 50.00 },
  { category: "Bread & Rice", name: "Tawa Butter Roti", price: 25.00 },
  { category: "Bread & Rice", name: "Tawa Roti Plain", price: 15.00 },
  { category: "Bread & Rice", name: "Rumali Roti", price: 20.00 },
  { category: "Bread & Rice", name: "Plain Rice", price: 135.00 },
  { category: "Bread & Rice", name: "Jeera Rice", price: 150.00 },
  { category: "Bread & Rice", name: "Peas Pulao", price: 150.00 },
  { category: "Bread & Rice", name: "Paneer Pulao", price: 195.00 },

  // BIRYANI (Page 3)
  { category: "Biryani", name: "Veg Biryani", price: 260.00 },
  { category: "Biryani", name: "Mutton Biryani (Half / Full)", price: [220.00, 400.00] },
  { category: "Biryani", name: "Chicken Biryani (Half / Full)", price: [220.00, 400.00] },

  // PIZZA - VEG (Page 4)
  { category: "Pizza (Veg)", name: "Princess Margarita Pizza", price: 320.00 },
  { category: "Pizza (Veg)", name: "Veggie Supreme Pizza", price: 349.00 },
  { category: "Pizza (Veg)", name: "Country Feast Pizza", price: 350.00 },
  { category: "Pizza (Veg)", name: "Cheese & Corn Pizza", price: 339.00 },
  { category: "Pizza (Veg)", name: "Sicilian Farm Fresh Pizza", price: 370.00 },
  { category: "Pizza (Veg)", name: "Paneer Tikka Pizza", price: 375.00 },
  { category: "Pizza (Veg)", name: "Paneer Chilli Pizza", price: 330.00 },

  // PIZZA - NON-VEG (Page 4)
  { category: "Pizza (Non-Veg)", name: "Barbeque Chicken Pizza", price: 379.00 },
  { category: "Pizza (Non-Veg)", name: "Chicken Pesto Pizza", price: 350.00 },
  { category: "Pizza (Non-Veg)", name: "Chicken Tikka Pizza", price: 375.00 },
  { category: "Pizza (Non-Veg)", name: "Chicken Chilli Pizza", price: 335.00 },

  // CHINESE (Page 4)
  { category: "Chinese", name: "Veg Noodles", price: 250.00 },
  { category: "Chinese", name: "Veg Schezwan Noodles", price: 280.00 },
  { category: "Chinese", name: "Hakka Noodles", price: 300.00 },
  { category: "Chinese", name: "Paneer Noodles", price: 350.00 },
  { category: "Chinese", name: "Non Veg Singapore Noodles", price: 500.00 },
  { category: "Chinese", name: "Chicken Schezwan Noodles", price: 325.00 },
  { category: "Chinese", name: "Chilli Garlic Noodles", price: 220.00 },
  { category: "Chinese", name: "Veg Fried Rice", price: 200.00 },
  { category: "Chinese", name: "Veg Schezwan Fried Rice", price: 325.00 },
  { category: "Chinese", name: "Triple Schezwan Rice (Veg / Non-Veg)", price: [260.00, 350.00] },
  { category: "Chinese", name: "Egg Fried Rice", price: 250.00 },
  { category: "Chinese", name: "Chicken Schezwan Fried Rice", price: 320.00 },
  { category: "Chinese", name: "Chicken Fried Rice", price: 300.00 },
  { category: "Chinese", name: "Chicken Chopsuey (Veg / Non-Veg)", price: [260.00, 330.00] },

  // VEG STARTER (Page 4)
  { category: "Veg Starter", name: "French Fries", price: 135.00 },
  { category: "Veg Starter", name: "Peri Peri French Fries", price: 145.00 },
  { category: "Veg Starter", name: "Masala French Fries", price: 155.00 },
  { category: "Veg Starter", name: "Cheese French Fries", price: 239.00 },
  { category: "Veg Starter", name: "Chilli Potato", price: 200.00 },
  { category: "Veg Starter", name: "Honey Chilli Potato", price: 200.00 },
  { category: "Veg Starter", name: "Chilli Paneer (Dry / Gravy)", price: 290.00 },
  { category: "Veg Starter", name: "Paneer Manchurian (Dry / Gravy)", price: 310.00 },
  { category: "Veg Starter", name: "Veg Manchurian (Dry / Gravy)", price: 255.00 },
  { category: "Veg Starter", name: "Veg Lollipop", price: 220.00 },
  { category: "Veg Starter", name: "Corn Salt Pepper", price: 250.00 },
  { category: "Veg Starter", name: "Spring Roll", price: 225.00 },
  { category: "Veg Starter", name: "Mushroom Chilli (Dry / Gravy)", price: 285.00 },
  { category: "Veg Starter", name: "Chinese Bhel", price: 200.00 },
  { category: "Veg Starter", name: "Paneer 65", price: 290.00 },
  { category: "Veg Starter", name: "Paneer Pakoda", price: 199.00 },

  // VEG & NON-VEG PLATTERS (Page 5)
  { category: "Platter", name: "Veg Platter (Spring Roll, Veg Kebabs, Paneer Shabnami, Paneer Tikka)", price: 850.00 },
  { category: "Platter", name: "Non Veg Platter (Chicken Tikka, Fish Tikka, Fish Fry, Amritsari Chicken Seekh, Chicken Tandoori)", price: 850.00 },

  // NON VEG STARTER (Page 5)
  { category: "Non Veg Starter", name: "Fish Tikka (8 Pcs)", price: 400.00 },
  { category: "Non Veg Starter", name: "Fish Finger (6 Pcs)", price: 450.00 },
  { category: "Non Veg Starter", name: "Amritsari Chicken Seekh Kabab", price: 415.00 },
  { category: "Non Veg Starter", name: "Chicken Chilli (Dry / Gravy)", price: 300.00 },
  { category: "Non Veg Starter", name: "Chicken Manchurian", price: 325.00 },
  { category: "Non Veg Starter", name: "Chicken Lollipop", price: 350.00 },
  { category: "Non Veg Starter", name: "Drumsticks Heaven", price: 385.00 },
  { category: "Non Veg Starter", name: "Hot Garlic Chicken", price: 280.00 },
  { category: "Non Veg Starter", name: "Prawns Salt & Pepper", price: 525.00 },
  { category: "Non Veg Starter", name: "Shrimp Salt & Pepper", price: 525.00 },
  { category: "Non Veg Starter", name: "Chicken Momo", price: 230.00 },
  { category: "Non Veg Starter", name: "Lemon Chicken", price: 365.00 },
  { category: "Non Veg Starter", name: "Honey Chilli Chicken", price: 285.00 },
  { category: "Non Veg Starter", name: "Chicken Majestic", price: 330.00 },
  { category: "Non Veg Starter", name: "Chicken 65", price: 300.00 },
  { category: "Non Veg Starter", name: "Chicken Fry (Half / Full)", price: [249.00, 500.00] },
  { category: "Non Veg Starter", name: "Chicken Nuggets", price: 220.00 },

  // SOUP VEG / NONVEG (Page 5)
  { category: "Soup", name: "Manchow Soup (Veg / Non-Veg)", price: [145.00, 170.00] },
  { category: "Soup", name: "Sweet Corn Soup (Veg / Non-Veg)", price: [120.00, 145.00] },
  { category: "Soup", name: "Hot N Sour Soup (Veg / Non-Veg)", price: [145.00, 170.00] },
  { category: "Soup", name: "Peking Soup (Veg / Non-Veg)", price: [145.00, 170.00] },
  { category: "Soup", name: "Lemon Coriander Soup (Veg / Non-Veg)", price: [135.00, 160.00] },
  { category: "Soup", name: "Chicken Dumpling Soup", price: 180.00 },

  // MOMOS VEG / NONVEG (Page 5)
  { category: "Momos", name: "Veg Momos (Steamed)", price: 150.00 },
  { category: "Momos", name: "Veg Fried Momos", price: 195.00 },
  { category: "Momos", name: "Veg Sweet Chilli Momos", price: 215.00 },
  { category: "Momos", name: "Veg Tandoori Momos", price: 235.00 },
  { category: "Momos", name: "Veg Kurkure Momos", price: 235.00 },
  { category: "Momos", name: "Veg Dragon Momos", price: 240.00 },
  { category: "Momos", name: "Paneer Momos", price: 210.00 },
  { category: "Momos", name: "Paneer Fried Momos", price: 240.00 },
  { category: "Momos", name: "Paneer Tandoori Momos", price: 249.00 },
  { category: "Momos", name: "Paneer Kurkure Momos", price: 249.00 },
  { category: "Momos", name: "Paneer Dragon Momos", price: 250.00 },
  { category: "Momos", name: "Chicken Steamed Momos", price: 210.00 },
  { category: "Momos", name: "Chicken Fried Momos", price: 240.00 },
  { category: "Momos", name: "Chicken Tandoori Momos", price: 249.00 },
  { category: "Momos", name: "Chicken Kurkure Momos", price: 249.00 },
  { category: "Momos", name: "Chicken Dragon Momos", price: 270.00 },
  { category: "Momos", name: "Chicken Cheese Momos", price: 280.00 },

  // MAGGI (Page 5)
  { category: "Maggi", name: "Masala Maggi", price: 100.00 },
  { category: "Maggi", name: "Vegetable Maggi", price: 120.00 },
  { category: "Maggi", name: "Paneer Tikka Maggi", price: 145.00 },
  { category: "Maggi", name: "Butter Maggi", price: 110.00 },
  { category: "Maggi", name: "Cheese Maggi", price: 135.00 },

  // CONTI STARTERS (Page 6)
  { category: "Conti Starter", name: "Bell Pepper Cheese Corn Cigar Roll", price: 220.00 },
  { category: "Conti Starter", name: "Loaded Nachos", price: 250.00 },
  { category: "Conti Starter", name: "Hummus with Pita", price: 270.00 },
  { category: "Conti Starter", name: "Fried Mozzarella Sticks", price: 250.00 },
  { category: "Conti Starter", name: "BBQ Chicken Wings", price: 320.00 },
  { category: "Conti Starter", name: "Fish & Chips", price: 399.00 },

  // CONTI MAIN COURSE (Page 6)
  { category: "Conti Main Course", name: "Paneer Steak Sizzler", price: 700.00 },
  { category: "Conti Main Course", name: "Chicken Peri Peri Steak", price: 340.00 },
  { category: "Conti Main Course", name: "Chicken Breast Marinated", price: 350.00 },
  { category: "Conti Main Course", name: "Chicken Steak in Mushroom Sauce", price: 399.00 },
  { category: "Conti Main Course", name: "Red Thai Curry", price: 250.00 },
  { category: "Conti Main Course", name: "Grilled Fish with Lemon Butter Sauce", price: 370.00 },

  // SALAD (Page 6)
  { category: "Salad", name: "Greek Salad", price: 260.00 },
  { category: "Salad", name: "Caesar Salad", price: 250.00 },
  { category: "Salad", name: "Lettuce Pepper & Pineapple Salad", price: 300.00 },
  { category: "Salad", name: "Crunchy Peanut Salad", price: 270.00 },

  // CLASSIC SOUPS (Page 6)
  { category: "Classic Soup", name: "Tomato Basil Soup", price: 180.00 },
  { category: "Classic Soup", name: "Minestrone Soup", price: 190.00 },
  { category: "Classic Soup", name: "Cream of Mushroom Soup", price: 190.00 },

  // PANINIS (Page 7)
  { category: "Panini", name: "Pesto Paneer Panini", price: 230.00 },
  { category: "Panini", name: "Four Cheese Panini", price: 230.00 },
  { category: "Panini", name: "Spinach Corn Panini", price: 210.00 },
  { category: "Panini", name: "Peri Peri Chicken Panini", price: 240.00 },

  // QUESADILLA (Page 7)
  { category: "Quesadilla", name: "Pesto Paneer Quesadilla", price: 279.00 },
  { category: "Quesadilla", name: "Mexican Cheese Quesadilla", price: 280.00 },
  { category: "Quesadilla", name: "Spinach Corn Quesadilla", price: 279.00 },
  { category: "Quesadilla", name: "Roast BBQ Chicken Quesadilla", price: 320.00 },

  // VEG BURGER'S (Page 7)
  { category: "Veg Burger", name: "Classic Veggie Burger", price: 190.00 },
  { category: "Veg Burger", name: "Veg Surprise Burger", price: 199.00 },
  { category: "Veg Burger", name: "Mushroom Cheese Burger", price: 219.00 },
  { category: "Veg Burger", name: "Crunchy Paneer Burger", price: 249.00 },

  // NON-VEG BURGER'S (Page 7)
  { category: "Non-Veg Burger", name: "Chicken Burger", price: 210.00 },
  { category: "Non-Veg Burger", name: "Chicken Grilled Burger", price: 239.00 },
  { category: "Non-Veg Burger", name: "BBQ Chicken Burger", price: 249.00 },
  { category: "Non-Veg Burger", name: "Crunchy Fish Burger", price: 260.00 },

  // WRAPS & ROLLS (Page 7)
  { category: "Wrap & Roll", name: "Falafel Shawarma Wrap", price: 180.00 },
  { category: "Wrap & Roll", name: "Spicy Paneer Wrap", price: 240.00 },
  { category: "Wrap & Roll", name: "Butter Paneer Wrap", price: 230.00 },
  { category: "Wrap & Roll", name: "Turkish Chicken Shawarma Wrap", price: 230.00 },
  { category: "Wrap & Roll", name: "Spicy BBQ Chicken Wrap", price: 250.00 },
  { category: "Wrap & Roll", name: "Paneer Tikka Roll", price: 220.00 },
  { category: "Wrap & Roll", name: "Chicken Tikka Roll", price: 240.00 },

  // REFRESHERS (Page 8)
  { category: "Refresher", name: "Fresh Lime Soda", price: 140.00 },
  { category: "Refresher", name: "Blue Sky", price: 155.00 },
  { category: "Refresher", name: "Orange Mojito", price: 180.00 },
  { category: "Refresher", name: "Cranberry Mojito", price: 180.00 },
  { category: "Refresher", name: "Virgin Mojito", price: 180.00 },
  { category: "Refresher", name: "Classic Mojito", price: 180.00 },
  { category: "Refresher", name: "Kiwi Mojito", price: 180.00 },
  { category: "Refresher", name: "Green Apple Mojito", price: 180.00 },
  { category: "Refresher", name: "Watermelon Mojito", price: 180.00 },
  { category: "Refresher", name: "Blue Berry Mojito", price: 180.00 },
  { category: "Refresher", name: "Jungle Punch", price: 190.00 },
  { category: "Refresher", name: "Pina Colada (Virgin)", price: 249.00 },
  { category: "Refresher", name: "Guava on the Rock (Seasonal)", price: 209.00 },
  { category: "Refresher", name: "Sparkling Sangria", price: 269.00 },
  { category: "Refresher", name: "Strawberry Mojito", price: 200.00 },
  { category: "Refresher", name: "Mango Refreshing Mojito", price: 200.00 },

  // SHAKES (Page 8)
  { category: "Shake", name: "Ferrero Rocher Shake", price: 220.00 },
  { category: "Shake", name: "Choco Oreo Shake", price: 190.00 },
  { category: "Shake", name: "Pure Hazelnut Shake", price: 190.00 },
  { category: "Shake", name: "Berry Strawberry Shake", price: 190.00 },
  { category: "Shake", name: "Kitkat Chocolate Shake", price: 190.00 },
  { category: "Shake", name: "Nutella Shake", price: 190.00 },
  { category: "Shake", name: "Alphonso Mango Shake", price: 190.00 },
  { category: "Shake", name: "Real Banana Thick Shake", price: 200.00 },
  { category: "Shake", name: "Black Current Shake", price: 190.00 },
  { category: "Shake", name: "Butterscotch Shake", price: 190.00 },
  { category: "Shake", name: "Guava Shake", price: 190.00 },
  { category: "Shake", name: "Kiwi Shake", price: 190.00 },
  { category: "Shake", name: "Add-on Ice Cream", price: 50.00 },

  // JUICE (Page 8)
  { category: "Juice", name: "Orange Juice", price: 150.00 },
  { category: "Juice", name: "Guava Juice", price: 150.00 },
  { category: "Juice", name: "Guava Lime Soda", price: 155.00 },
  { category: "Juice", name: "Cranberry Juice", price: 150.00 },
  { category: "Juice", name: "Pineapple Juice", price: 150.00 },
  { category: "Juice", name: "Mango Juice", price: 150.00 },
  { category: "Juice", name: "Mix Fruit Juice", price: 150.00 },

  // PACKAGED BEVERAGES (Page 8)
  { category: "Drink", name: "Coke", price: 90.00 },
  { category: "Drink", name: "Diet Coke", price: 90.00 },
  { category: "Drink", name: "Sprite", price: 90.00 },
  { category: "Drink", name: "Thums Up", price: 90.00 },
  { category: "Drink", name: "Hell Energy Drink", price: 120.00 },
  { category: "Drink", name: "Red Bull", price: 200.00 },
  { category: "Drink", name: "Water Bottle", price: "MRP" },

  // SIZZLERS (Page 8)
  { category: "Sizzler", name: "Paneer Sizzler (Noodles/Rice)", price: 400.00 },
  { category: "Sizzler", name: "Manchurian Sizzler (Noodles/Rice)", price: 400.00 },
  { category: "Sizzler", name: "Chicken Sizzler (Noodles/Rice)", price: 450.00 },

  // LASAGNA (Page 9)
  { category: "Lasagna", name: "Roasted Vegetable Lasagna", price: 330.00 },
  { category: "Lasagna", name: "Roasted Chicken Lasagna", price: 380.00 },

  // PASTAS (Page 9)
  { category: "Pasta", name: "Alfredo Pasta", price: 360.00 },
  { category: "Pasta", name: "Creamy Pesto Pasta", price: 370.00 },
  { category: "Pasta", name: "Pink Sauce Pasta", price: 340.00 },
  { category: "Pasta", name: "Spaghetti Aglio Olio", price: 320.00 },
  { category: "Pasta", name: "Arrabiata Pasta", price: 300.00 },
  { category: "Pasta", name: "Mac & Cheese", price: 370.00 },
  { category: "Pasta", name: "Mushroom Pasta", price: 320.00 },
  { category: "Pasta", name: "Angry Chicken Pasta", price: 400.00 },

  // GARLIC BREADS (Page 9)
  { category: "Garlic Bread", name: "Sicilian Garlic Bread", price: 170.00 },
  { category: "Garlic Bread", name: "Four Cheese Garlic Bread", price: 200.00 },
  { category: "Garlic Bread", name: "Cheese Chilli Garlic Bread", price: 190.00 },
  { category: "Garlic Bread", name: "Mushroom & Cheese Garlic Bread", price: 220.00 },
  { category: "Garlic Bread", name: "Cheese Garlic Bread", price: 180.00 },

  // SANDWICH (Page 9)
  { category: "Sandwich", name: "Paneer Tikka Sandwich", price: 340.00 },
  { category: "Sandwich", name: "Masala Sandwich", price: 320.00 },
  { category: "Sandwich", name: "Jumbo Veg Club Sandwich", price: 350.00 },
  { category: "Sandwich", name: "Cheese Melt Sandwich", price: 350.00 },
  { category: "Sandwich", name: "Chicken Tikka Sandwich", price: 360.00 },
  { category: "Sandwich", name: "Chicken Club Sandwich", price: 380.00 },

  // HOT COFFEE (Page 10)
  { category: "Hot Coffee", name: "Espresso", price: 110.00 },
  { category: "Hot Coffee", name: "Americano", price: 120.00 },
  { category: "Hot Coffee", name: "Cappuccino", price: 135.00 },
  { category: "Hot Coffee", name: "Latte", price: 155.00 },
  { category: "Hot Coffee", name: "Mocha", price: 175.00 },
  { category: "Hot Coffee", name: "Signature Hot Chocolate", price: 165.00 },
  { category: "Hot Coffee", name: "Roasted Hazelnut Cappuccino", price: 185.00 },

  // COLD COFFEE & FRAPPE (Page 10)
  { category: "Cold Coffee", name: "Iced Americano", price: 135.00 },
  { category: "Cold Coffee", name: "Iced Latte", price: 155.00 },
  { category: "Cold Coffee", name: "Sicilian Cold Coffee", price: 175.00 },
  { category: "Cold Coffee", name: "Iced Mocha", price: 170.00 },
  { category: "Cold Coffee", name: "Cranberry Coffee", price: 220.00 },
  { category: "Cold Coffee", name: "Caramel Frappe", price: 185.00 },
  { category: "Cold Coffee", name: "Hazelnut Frappe", price: 220.00 },

  // TEA HOT & COLD (Page 10)
  { category: "Tea", name: "Green Tea", price: 80.00 },
  { category: "Tea", name: "Classic Tea", price: 50.00 },
  { category: "Tea", name: "Lemon Iced Tea", price: 135.00 },
  { category: "Tea", name: "Peach Iced Tea", price: 155.00 },
  { category: "Tea", name: "Lemon Mint Iced Tea", price: 145.00 },

  // SMOOTHIES (Page 10)
  { category: "Smoothie", name: "Mango Smoothie", price: 185.00 },
  { category: "Smoothie", name: "Strawberry Smoothie", price: 175.00 },
  { category: "Smoothie", name: "Honey Banana Kiwi Smoothie", price: 185.00 },
  { category: "Smoothie", name: "Mix Berry Smoothie", price: 185.00 },
  { category: "Smoothie", name: "Blue Berry Smoothie", price: 185.00 }
];

export default menu;
