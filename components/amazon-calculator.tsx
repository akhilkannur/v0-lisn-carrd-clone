"use client";

import React, { useState, useEffect } from "react";
import { CATEGORIES, calculateAmazonFees } from "@/lib/amazon-fees";
import { Calculator, IndianRupee, Package, Truck, Info, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

export function AmazonCalculator() {
  const [formData, setFormData] = useState({
    category: "Grocery & Gourmet Foods",
    subcategory: "Oils (Cooking & Edible)",
    sellingPrice: 1000,
    weight: 0.5, // kg
    mode: "easyShip" as "easyShip" | "fba" | "selfShip",
    location: "national" as "local" | "regional" | "national",
    productGst: 18, // percent
  });

  const [results, setResults] = useState<any>(null);

  // When category changes, reset subcategory to the first one of that category
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategoryName = e.target.value;
    const newCategory = CATEGORIES.find(c => c.name === newCategoryName);
    const firstSubcategory = newCategory ? newCategory.subcategories[0].name : "";
    
    setFormData(prev => ({
      ...prev,
      category: newCategoryName,
      subcategory: firstSubcategory
    }));
  };

  useEffect(() => {
    const fees = calculateAmazonFees(
      formData.category,
      formData.subcategory,
      Number(formData.sellingPrice),
      Number(formData.weight),
      formData.mode,
      formData.location,
      Number(formData.productGst) / 100
    );

    // Net Payout = Selling Price - Amazon Charges - Output GST
    const netPayout = fees.netRevenue;
    const margin = (netPayout / Number(formData.sellingPrice)) * 100;

    setResults({ ...fees, netPayout, margin });
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "mode" || name === "location" || name === "subcategory" ? value : Number(value),
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(amount);
  };

  const currentCategory = CATEGORIES.find(c => c.name === formData.category);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      {/* Calculator Card */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000000] p-6 md:p-10">
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-[#FFE500] border-4 border-black shadow-[4px_4px_0px_0px_#000000] rounded-full mb-2">
            <Calculator className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter text-black">FBA & Payout <span className="text-[#FFE500] bg-black px-2">Calculator</span></h2>
          <p className="text-black font-medium text-lg">See your actual Amazon India bank settlement for 2025</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-heading uppercase tracking-tight flex items-center gap-3 text-black border-b-4 border-black pb-2">
                <Tag className="w-6 h-6" /> Product Category
              </h3>
              
              <div className="grid gap-3">
                <label className="text-sm font-bold text-black uppercase tracking-wide">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleCategoryChange}
                  className="w-full p-3 bg-white border-2 border-black text-black font-bold focus:ring-0 focus:shadow-[4px_4px_0px_0px_#FFE500] focus:-translate-y-1 transition-all outline-none cursor-pointer"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.name} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-3">
                <label className="text-sm font-bold text-black uppercase tracking-wide">Sub-Category</label>
                <select
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border-2 border-black text-black font-bold focus:ring-0 focus:shadow-[4px_4px_0px_0px_#FFE500] focus:-translate-y-1 transition-all outline-none cursor-pointer disabled:opacity-50"
                  disabled={!currentCategory}
                >
                  {currentCategory?.subcategories.map((sub) => (
                    <option key={sub.name} value={sub.name}>
                      {sub.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="grid gap-3">
                  <label className="text-sm font-bold text-black uppercase tracking-wide">Selling Price (₹)</label>
                  <input
                    type="number"
                    name="sellingPrice"
                    value={formData.sellingPrice}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border-2 border-black text-black font-bold focus:ring-0 focus:shadow-[4px_4px_0px_0px_#FFE500] focus:-translate-y-1 transition-all outline-none"
                  />
                </div>
                 <div className="grid gap-3">
                <label className="text-sm font-bold text-black uppercase tracking-wide">Product GST (%)</label>
                <select
                  name="productGst"
                  value={formData.productGst}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border-2 border-black text-black font-bold focus:ring-0 focus:shadow-[4px_4px_0px_0px_#FFE500] focus:-translate-y-1 transition-all outline-none cursor-pointer"
                >
                  <option value="0">0% (Exempt)</option>
                  <option value="5">5%</option>
                  <option value="12">12%</option>
                  <option value="18">18% (Standard)</option>
                  <option value="28">28% (Luxury)</option>
                </select>
              </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-heading uppercase tracking-tight flex items-center gap-3 text-black border-b-4 border-black pb-2">
                <Package className="w-6 h-6" /> Shipping & Logistics
              </h3>

              <div className="grid grid-cols-2 gap-5">
                <div className="grid gap-3">
                  <label className="text-sm font-bold text-black uppercase tracking-wide">Weight (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border-2 border-black text-black font-bold focus:ring-0 focus:shadow-[4px_4px_0px_0px_#FFE500] focus:-translate-y-1 transition-all outline-none"
                  />
                </div>
                <div className="grid gap-3">
                  <label className="text-sm font-bold text-black uppercase tracking-wide">Mode</label>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border-2 border-black text-black font-bold focus:ring-0 focus:shadow-[4px_4px_0px_0px_#FFE500] focus:-translate-y-1 transition-all outline-none cursor-pointer"
                  >
                    <option value="easyShip">Easy Ship</option>
                    <option value="fba">FBA</option>
                    <option value="selfShip">Self Ship</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-3">
                <label className="text-sm font-bold text-black uppercase tracking-wide">Customer Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-3 bg-white border-2 border-black text-black font-bold focus:ring-0 focus:shadow-[4px_4px_0px_0px_#FFE500] focus:-translate-y-1 transition-all outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={formData.mode === 'fba' || formData.mode === 'selfShip'}
                >
                  <option value="local">Local (Same City)</option>
                  <option value="regional">Regional (Same Zone)</option>
                  <option value="national">National (Metro/Rest of India)</option>
                </select>
                 {formData.mode === 'fba' && <p className="text-xs text-black font-medium mt-1">FBA fees are based on weight slabs.</p>}
                 {formData.mode === 'selfShip' && <p className="text-xs text-black font-medium mt-1">Self Ship: You handle shipping directly (0 Amazon Fee).</p>}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_#FFE500] p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
             {/* Decorative noise/texture could go here */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE500] blur-[80px] opacity-20 pointer-events-none"></div>

             <h3 className="text-2xl font-heading uppercase tracking-widest flex items-center gap-2 text-[#FFE500] border-b-2 border-zinc-800 pb-4 mb-6 z-10">
                <IndianRupee className="w-6 h-6" /> Bank Settlement
              </h3>

            {results && (
              <div className="space-y-8 z-10 flex-grow">
                {/* Main Payout Card */}
                <div className="bg-[#FFE500] text-black border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] p-6 transform transition-transform hover:-translate-y-1">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-black uppercase tracking-widest">Net Payout / Unit</span>
                    <span className="text-3xl md:text-5xl font-heading font-black tracking-tighter">
                      {formatCurrency(results.netPayout)}
                    </span>
                  </div>
                  <div className="border-t-2 border-black pt-3 mt-3 flex justify-between items-center">
                    <span className="text-sm font-bold uppercase">Retention</span>
                    <span className="text-2xl font-black">
                      {results.margin.toFixed(2)}%
                    </span>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Referral Fee ({results.referralRate}%)</span>
                    <span className="text-white">{formatCurrency(results.referralFee)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Closing Fee</span>
                    <span className="text-white">{formatCurrency(results.closingFee)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Shipping Fee</span>
                    <span className="text-white">{formatCurrency(results.shippingFee)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">GST on Fees (18%)</span>
                    <span className="text-white">{formatCurrency(results.gstOnFees)}</span>
                  </div>
                   <div className="flex justify-between items-center border-t border-dashed border-zinc-700 pt-2">
                    <span className="text-[#FFE500]">Output GST ({formData.productGst}%)</span>
                    <span className="text-[#FFE500]">{formatCurrency(results.outputGst)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2 border-white mt-2">
                    <span className="font-bold uppercase tracking-wider">Total Deductions</span>
                    <span className="font-bold text-red-400">-{formatCurrency(results.totalAmazonCharges + results.outputGst)}</span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-8 pt-6 border-t border-zinc-800 text-xs text-zinc-400 z-10">
              <div className="flex gap-2 items-start mb-4">
                <Info className="w-4 h-4 shrink-0 text-[#FFE500]" />
                <p>
                  <strong>Estimate Only:</strong> Calculations based on standard Amazon India 2025 schedules.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-white mb-2 uppercase tracking-wider">Margin Leaks:</p>
                  <ul className="space-y-1 list-disc pl-4 marker:text-[#FFE500]">
                    <li>Returns & Damages</li>
                    <li>Ads (PPC) Spend</li>
                    <li>Storage Fees</li>
                    <li>Packaging Costs</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2 uppercase tracking-wider">Glossary:</p>
                  <div className="space-y-1">
                    <p><span className="text-white">Referral:</span> Commission</p>
                    <p><span className="text-white">Closing:</span> Fixed Fee</p>
                    <p><span className="text-white">Output GST:</span> Tax to Govt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UGC Promo Link */}
      <Link href="/ugc" className="block group">
        <div className="bg-black text-white p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_#FFE500] relative overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#FFE500]">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left space-y-3">
                    <h3 className="text-2xl md:text-4xl font-heading uppercase tracking-tighter leading-none">
                        Unsatisfied with <br/><span className="text-[#FFE500] bg-zinc-900 px-2">these margins?</span>
                    </h3>
                    <p className="text-zinc-400 text-lg max-w-xl">
                        Stop burning cash on ads that don't convert. Switch to high-velocity, authentic UGC.
                    </p>
                </div>
                <div className="flex items-center gap-2 bg-[#FFE500] text-black border-2 border-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_#ffffff]">
                    Boost Your Sales <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </div>
      </Link>
    </div>
  );
}