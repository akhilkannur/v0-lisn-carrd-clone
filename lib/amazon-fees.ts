export type FeeTier = {
  threshold: number; // Price up to this amount
  percentage: number;
};

export type Subcategory = {
  name: string;
  referralFeePercentage: number; // Base rate if no tiers match (fallback)
  referralFeeTiers?: FeeTier[];
};

export type Category = {
  name: string;
  subcategories: Subcategory[];
};

export const CATEGORIES: Category[] = [
  {
    name: "Grocery & Gourmet Foods",
    subcategories: [
      {
        name: "Oils (Cooking & Edible)",
        referralFeePercentage: 7.5,
        referralFeeTiers: [
          { threshold: 300, percentage: 0 },
          { threshold: 500, percentage: 1.5 },
          { threshold: Infinity, percentage: 7.5 },
        ]
      },
      {
        name: "Herbs & Spices",
        referralFeePercentage: 5.5,
        referralFeeTiers: [
          { threshold: 300, percentage: 0 },
          { threshold: 1000, percentage: 5.5 },
          { threshold: Infinity, percentage: 5.5 }, // Assuming flat after 300 based on data, but keeping structure
        ]
      },
      {
        name: "Pet Food",
        referralFeePercentage: 12.5,
        referralFeeTiers: [
          { threshold: 300, percentage: 0 },
          { threshold: 1000, percentage: 5.0 }, // Estimate gap
          { threshold: Infinity, percentage: 12.5 },
        ]
      },
      {
        name: "General Grocery",
        referralFeePercentage: 4.0, // Standard grocery estimate
        referralFeeTiers: [
           { threshold: 300, percentage: 0 },
           { threshold: Infinity, percentage: 4.0 }
        ]
      }
    ]
  },
  {
    name: "Electronics & Accessories",
    subcategories: [
      {
        name: "Mobile Phones",
        referralFeePercentage: 5.0,
        referralFeeTiers: [
          { threshold: Infinity, percentage: 5.0 }
        ]
      },
      {
        name: "Laptops",
        referralFeePercentage: 6.0,
        referralFeeTiers: [
          { threshold: 70000, percentage: 6.0 },
          { threshold: Infinity, percentage: 7.0 }
        ]
      },
      {
        name: "Headphones & Earphones",
        referralFeePercentage: 18.0,
        referralFeeTiers: [
          { threshold: 500, percentage: 18.0 }, // Note: High fee even for low price usually, but <300 rule might apply. Sticking to source.
          { threshold: Infinity, percentage: 18.0 }
        ]
      },
      {
        name: "Power Banks & Chargers",
        referralFeePercentage: 20.0,
        referralFeeTiers: [
          { threshold: 1000, percentage: 20.0 },
          { threshold: Infinity, percentage: 20.0 }
        ]
      },
      {
        name: "Cases & Covers",
        referralFeePercentage: 25.0
      }
    ]
  },
  {
    name: "Clothing & Apparel",
    subcategories: [
      {
        name: "Men's T-Shirts",
        referralFeePercentage: 13.0,
        referralFeeTiers: [
           { threshold: 300, percentage: 0 },
           { threshold: 500, percentage: 13.0 },
           { threshold: 1000, percentage: 17.0 },
           { threshold: Infinity, percentage: 19.0 }
        ]
      },
      {
        name: "Women's Kurtas",
        referralFeePercentage: 13.0,
        referralFeeTiers: [
           { threshold: 300, percentage: 0 },
           { threshold: 1000, percentage: 13.0 }, // Simplified
           { threshold: Infinity, percentage: 19.0 }
        ]
      },
       {
        name: "Sarees",
        referralFeePercentage: 14.0,
        referralFeeTiers: [
           { threshold: 300, percentage: 0 },
           { threshold: 500, percentage: 5.0 }, // Promo rates often apply
           { threshold: 1000, percentage: 14.0 },
           { threshold: Infinity, percentage: 22.0 }
        ]
      },
      {
        name: "Fashion Accessories",
        referralFeePercentage: 13.0,
         referralFeeTiers: [
           { threshold: 300, percentage: 0 },
           { threshold: 500, percentage: 13.0 },
           { threshold: 1000, percentage: 17.0 },
           { threshold: Infinity, percentage: 19.0 }
        ]
      }
    ]
  },
  {
    name: "Home & Kitchen",
    subcategories: [
      { name: "Kitchen - Non-Electric", referralFeePercentage: 12.0 },
      { name: "Kitchen - Small Appliances", referralFeePercentage: 10.0 },
      { name: "Home Decor", referralFeePercentage: 14.0 },
      { name: "Furniture", referralFeePercentage: 15.0 },
    ]
  },
  {
    name: "Books",
    subcategories: [
      { name: "Books", referralFeePercentage: 13.0 }
    ]
  },
  {
    name: "Automotive",
    subcategories: [
      { name: "Car & Bike Accessories", referralFeePercentage: 15.0 },
      { name: "Helmets & Gloves", referralFeePercentage: 13.0 },
      { name: "Tyres & Rims", referralFeePercentage: 10.0 }
    ]
  },
  {
    name: "Baby Products",
    subcategories: [
      { name: "Baby Products (General)", referralFeePercentage: 6.0 },
      { name: "Diapers", referralFeePercentage: 5.0 }
    ]
  },
  {
    name: "Beauty & Personal Care",
    subcategories: [
      { name: "Beauty (General)", referralFeePercentage: 10.0 },
      { name: "Personal Care Appliances", referralFeePercentage: 9.0 }
    ]
  },
  {
    name: "Health & Personal Care",
    subcategories: [
      { name: "Health Care (General)", referralFeePercentage: 8.0 },
      { name: "Nutrition", referralFeePercentage: 9.0 }
    ]
  },
  {
    name: "Industrial & Scientific",
    subcategories: [
      { name: "Industrial Supplies", referralFeePercentage: 10.0 },
      { name: "Scientific Products", referralFeePercentage: 11.0 }
    ]
  },
  {
    name: "Jewelry",
    subcategories: [
      { name: "Fashion Jewelry", referralFeePercentage: 15.0 },
      { name: "Silver Jewelry", referralFeePercentage: 10.0 },
      { name: "Gold & Diamond", referralFeePercentage: 5.0 }
    ]
  },
  {
    name: "Office Products",
    subcategories: [
      { name: "Office Supplies", referralFeePercentage: 13.0 }
    ]
  },
  {
    name: "Shoes & Footwear",
    subcategories: [
      { name: "Shoes (General)", referralFeePercentage: 13.0 },
      { name: "Sandals & Floaters", referralFeePercentage: 10.0 }
    ]
  },
  {
    name: "Sports, Fitness & Outdoors",
    subcategories: [
      { name: "Sports Equipment", referralFeePercentage: 12.0 },
      { name: "Fitness Accessories", referralFeePercentage: 13.0 }
    ]
  },
  {
    name: "Toys & Games",
    subcategories: [
      { name: "Toys (General)", referralFeePercentage: 11.0 },
      { name: "Video Games", referralFeePercentage: 10.0 }
    ]
  },
  {
    name: "Watches",
    subcategories: [
      { name: "Watches (General)", referralFeePercentage: 14.0 }
    ]
  }
];

export const CLOSING_FEES = {
  easyShip: [
    { maxPrice: 250, fee: 3 },
    { maxPrice: 500, fee: 6 },
    { maxPrice: 1000, fee: 10 },
    { maxPrice: Infinity, fee: 50 },
  ],
  fba: [
    { maxPrice: 250, fee: 25 },
    { maxPrice: 500, fee: 20 },
    { maxPrice: 1000, fee: 18 },
    { maxPrice: Infinity, fee: 40 },
  ],
  selfShip: [
    { maxPrice: 250, fee: 7 },
    { maxPrice: 500, fee: 20 },
    { maxPrice: 1000, fee: 41 },
    { maxPrice: Infinity, fee: 80 },
  ]
};

export const EASY_SHIP_RATES = {
  national: {
    first500g: 74,
    additional500g: 25,
  },
  local: {
    first500g: 44,
    additional500g: 13,
  },
  regional: {
    first500g: 53,
    additional500g: 17,
  }
};

// FBA Fulfillment Fees (Includes Pick & Pack + Weight Handling) - Standard Size
export const FBA_FULFILLMENT_FEES = [
  { maxWeight: 0.15, fee: 33 },
  { maxWeight: 0.4, fee: 41 },
  { maxWeight: 0.9, fee: 48 },
  { maxWeight: 1.5, fee: 66 },
  { maxWeight: 2.0, fee: 82 },
  { maxWeight: 3.0, fee: 102 },
  { maxWeight: 4.0, fee: 130 },
  { maxWeight: 5.0, fee: 160 },
  { maxWeight: Infinity, fee: 187, additionalPerKg: 30 } // 5-6kg is 187, assuming +30/kg after
];

export const calculateAmazonFees = (
  categoryName: string,
  subcategoryName: string,
  sellingPrice: number,
  weightInKg: number,
  mode: 'easyShip' | 'fba' | 'selfShip' = 'easyShip',
  location: 'local' | 'regional' | 'national' = 'national',
  productGstRate: number = 0.18 // Default 18%
) => {
  const category = CATEGORIES.find(c => c.name === categoryName) || CATEGORIES[0];
  const subcategory = category.subcategories.find(s => s.name === subcategoryName) || category.subcategories[0];
  
  // 1. Referral Fee
  let referralRate = subcategory.referralFeePercentage;
  
  if (subcategory.referralFeeTiers) {
     const sortedTiers = [...subcategory.referralFeeTiers].sort((a, b) => a.threshold - b.threshold);
     for (const tier of sortedTiers) {
       if (sellingPrice <= tier.threshold) {
         referralRate = tier.percentage;
         break;
       }
     }
  }

  const referralFee = (sellingPrice * referralRate) / 100;

  // 2. Closing Fee
  const closingFeeList = CLOSING_FEES[mode];
  const closingFeeObj = closingFeeList.find(c => sellingPrice <= c.maxPrice) || closingFeeList[closingFeeList.length - 1];
  const closingFee = closingFeeObj.fee;

  // 3. Shipping Fee
  let shippingFee = 0;
  
  if (mode === 'easyShip') {
    const rates = EASY_SHIP_RATES[location];
    const weightIn500g = Math.ceil(weightInKg * 2) / 2;
    const first500Cost = rates.first500g;
    const additionalWeight = Math.max(0, weightIn500g - 0.5);
    const additional500Units = additionalWeight / 0.5;
    const additionalCost = additional500Units * rates.additional500g;
    shippingFee = first500Cost + additionalCost;
  } else if (mode === 'fba') {
    // FBA Fee (Pick, Pack & Ship)
    const tier = FBA_FULFILLMENT_FEES.find(t => weightInKg <= t.maxWeight);
    if (tier) {
      shippingFee = tier.fee;
    } else {
      // Logic for heavy items (>5kg or whatever max tier is)
      const maxDefined = FBA_FULFILLMENT_FEES[FBA_FULFILLMENT_FEES.length - 1];
      const extraWeight = weightInKg - 5; // Assuming 5 is max defined strictly
      shippingFee = maxDefined.fee + (Math.ceil(extraWeight) * (maxDefined.additionalPerKg || 30));
    }
  }

  // 4. Taxes
  const totalServiceFees = referralFee + closingFee + shippingFee;
  const gstOnFees = totalServiceFees * 0.18;
  const totalAmazonCharges = totalServiceFees + gstOnFees;

  // Product GST (Output Tax)
  // Selling Price is inclusive of GST.
  // Base Price = Selling Price / (1 + GST Rate)
  // Output GST = Selling Price - Base Price
  const basePrice = sellingPrice / (1 + productGstRate);
  const outputGst = sellingPrice - basePrice;

  const netRevenue = sellingPrice - totalAmazonCharges - outputGst;

  return {
    referralFee,
    closingFee,
    shippingFee,
    gstOnFees,
    totalAmazonCharges,
    netRevenue,
    referralRate,
    outputGst
  };
};
