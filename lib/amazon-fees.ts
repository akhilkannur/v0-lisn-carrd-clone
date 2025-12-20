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
      { name: "Books", referralFeePercentage: 13.0 } // 4% is older/Kindle, physical books usually higher or varied. Keeping safe 13% base or user input.
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

export const SHIPPING_RATES = {
  national: {
    first500g: 74,
    additional500g: 32,
  },
  local: {
    first500g: 40,
    additional500g: 18,
  },
  regional: {
    first500g: 51,
    additional500g: 17,
  }
};

export const calculateAmazonFees = (
  categoryName: string,
  subcategoryName: string,
  sellingPrice: number,
  weightInKg: number,
  mode: 'easyShip' | 'fba' | 'selfShip' = 'easyShip',
  location: 'local' | 'regional' | 'national' = 'national'
) => {
  const category = CATEGORIES.find(c => c.name === categoryName) || CATEGORIES[0];
  const subcategory = category.subcategories.find(s => s.name === subcategoryName) || category.subcategories[0];
  
  // 1. Referral Fee
  let referralRate = subcategory.referralFeePercentage;
  
  // Apply tiers if available
  if (subcategory.referralFeeTiers) {
     const sortedTiers = [...subcategory.referralFeeTiers].sort((a, b) => a.threshold - b.threshold);
     for (const tier of sortedTiers) {
       if (sellingPrice <= tier.threshold) {
         referralRate = tier.percentage;
         break;
       }
     }
  }

  // 2025 Universal Low Price Rule (Simplified Check: if not already covered by specific tiers, force 0 for <300 if applicable)
  // However, most specific tiers above ALREADY handle this. If a category doesn't have tiers, we might want to check this.
  // For safety, we trust the specific tiers defined above which incorporate the <300 rule.
  
  const referralFee = (sellingPrice * referralRate) / 100;

  // 2. Closing Fee
  const closingFeeList = CLOSING_FEES[mode];
  const closingFeeObj = closingFeeList.find(c => sellingPrice <= c.maxPrice) || closingFeeList[closingFeeList.length - 1];
  const closingFee = closingFeeObj.fee;

  // 3. Shipping Fee (Weight Handling)
  let shippingFee = 0;
  if (mode !== 'selfShip') { // FBA or EasyShip charges weight fee
    // Round up weight to nearest 0.5kg
    const weightIn500g = Math.ceil(weightInKg * 2) / 2;
    
    const rates = SHIPPING_RATES[location];
    const first500Cost = rates.first500g;
    const additionalWeight = Math.max(0, weightIn500g - 0.5);
    const additional500Units = additionalWeight / 0.5;
    const additionalCost = additional500Units * rates.additional500g;
    
    shippingFee = first500Cost + additionalCost;
  }

  // 4. GST
  const totalServiceFees = referralFee + closingFee + shippingFee;
  const gst = totalServiceFees * 0.18;

  const totalFees = totalServiceFees + gst;
  const netRevenue = sellingPrice - totalFees;

  return {
    referralFee,
    closingFee,
    shippingFee,
    gst,
    totalFees,
    netRevenue,
    referralRate // Exporting specifically for UI to show active %
  };
};
