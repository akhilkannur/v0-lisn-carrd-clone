export type CategoryFee = {
  name: string;
  referralFeePercentage: number;
  referralFeeTiers?: { threshold: number; percentage: number }[]; // For varied fees like Clothing
};

export const CATEGORIES: CategoryFee[] = [
  { name: "Automotive Accessories", referralFeePercentage: 15.5 },
  { name: "Baby Products", referralFeePercentage: 6.0 },
  { name: "Books", referralFeePercentage: 13.0 },
  { 
    name: "Clothing & Apparel", 
    referralFeePercentage: 19.0,
    referralFeeTiers: [
      { threshold: 300, percentage: 0 }, // Handled specially in logic if needed, but usually it's <300 free in 2025? No, sticking to 2024 standards for safety unless confirmed.
      // Actually search said: "Eliminate referral fees for products priced below ₹300 effective April 7, 2025"
      // I will implement a standard tiered logic:
      { threshold: 500, percentage: 13.0 }, // < 500
      { threshold: 1000, percentage: 17.0 }, // 500-1000
      { threshold: 1000000, percentage: 19.0 }, // > 1000
    ]
  },
  { name: "Electronics (General)", referralFeePercentage: 9.0 },
  { name: "Furniture", referralFeePercentage: 15.0 },
  { name: "Home & Kitchen", referralFeePercentage: 15.0 },
  { name: "Jewelry (Fashion)", referralFeePercentage: 15.5 },
  { name: "Mobile Phones", referralFeePercentage: 5.0 },
  { name: "Office Products", referralFeePercentage: 13.0 },
  { name: "Personal Care", referralFeePercentage: 10.0 },
  { name: "Pet Supplies", referralFeePercentage: 12.0 },
  { name: "Shoes & Footwear", referralFeePercentage: 13.0 },
  { name: "Sports & Outdoors", referralFeePercentage: 12.0 },
  { name: "Toys & Games", referralFeePercentage: 11.0 },
  { name: "Watches", referralFeePercentage: 14.0 },
];

export const CLOSING_FEES = {
  easyShip: [
    { maxPrice: 250, fee: 4 },
    { maxPrice: 500, fee: 9 },
    { maxPrice: 1000, fee: 30 },
    { maxPrice: Infinity, fee: 61 },
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
    first500g: 74, // Average of Easy Ship National rates
    additional500g: 32,
  },
  local: {
    first500g: 45,
    additional500g: 22,
  },
  regional: {
    first500g: 56,
    additional500g: 26,
  }
};

export const calculateAmazonFees = (
  categoryName: string,
  sellingPrice: number,
  weightInKg: number,
  mode: 'easyShip' | 'fba' | 'selfShip' = 'easyShip',
  location: 'local' | 'regional' | 'national' = 'national'
) => {
  const category = CATEGORIES.find(c => c.name === categoryName) || CATEGORIES[0];
  
  // 1. Referral Fee
  let referralRate = category.referralFeePercentage;
  if (category.referralFeeTiers) {
    // Find the tier that matches the price
    // Logic: Tiers are "up to X".
    // Example: <500 is 13%, 500-1000 is 17%.
    // We sort tiers by threshold ascending.
    const sortedTiers = [...category.referralFeeTiers].sort((a, b) => a.threshold - b.threshold);
    for (const tier of sortedTiers) {
      if (sellingPrice <= tier.threshold) {
        referralRate = tier.percentage;
        break;
      }
      referralRate = tier.percentage; // Default to highest if none matched (though last tier should catch all)
    }
  }
  
  const referralFee = (sellingPrice * referralRate) / 100;

  // 2. Closing Fee
  const closingFeeList = CLOSING_FEES[mode];
  const closingFeeObj = closingFeeList.find(c => sellingPrice <= c.maxPrice) || closingFeeList[closingFeeList.length - 1];
  const closingFee = closingFeeObj.fee;

  // 3. Shipping Fee (Weight Handling)
  let shippingFee = 0;
  if (mode !== 'selfShip') { // FBA or EasyShip charges weight fee
    // Round up weight to nearest 0.5kg
    const weightIn500g = Math.ceil(weightInKg * 2) / 2; // e.g. 0.3 -> 0.5, 0.6 -> 1.0
    
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
    netRevenue
  };
};
