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
                    <span className="text-sm font-bold uppercase">Payout %</span>
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

      {/* UGC Upsell Section - The "Money Saver" Hook */}
      <section className="mt-16 bg-[#FFE500] p-8 md:p-12 border-4 border-black relative overflow-hidden">
        {/* Background texture/pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-black text-white px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4 transform -rotate-2">
              ⚠️ Profit Warning
            </div>
            <h3 className="font-heading text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] mb-6 text-black">
              Is Amazon PPC eating <br/>
              <span className="bg-white px-2">your entire margin?</span>
            </h3>
            <p className="text-lg md:text-xl font-bold leading-relaxed mb-6 border-l-4 border-black pl-4">
              The #1 reason for low net profit isn't fees. It's high CAC (Customer Acquisition Cost).
            </p>
            <p className="text-black text-lg mb-8">
              Polished studio ads have high CPMs and low CTRs. Switching to raw "Street UGC" can lower your ad costs by 40-60%.
            </p>
            <Link 
              href="/ugc" 
              className="inline-flex items-center bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_#ffffff] hover:translate-x-1 hover:-translate-y-1"
            >
              Lower My CAC <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
          
          <div className="hidden md:block relative h-full min-h-[300px] border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000000] p-6">
            {/* Visual comparison of Ad Costs */}
            <h4 className="font-bold text-center uppercase border-b-2 border-black pb-4 mb-4">Ad Cost Comparison</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold mb-1">
                  <span>Studio Ads (Avg)</span>
                  <span className="text-red-600">High CAC</span>
                </div>
                <div className="w-full bg-gray-200 h-6 border-2 border-black">
                  <div className="bg-red-500 h-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-1">
                  <span>Street UGC (Lisn)</span>
                  <span className="text-green-600">Low CAC</span>
                </div>
                <div className="w-full bg-gray-200 h-6 border-2 border-black">
                  <div className="bg-green-500 h-full w-[35%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-3xl font-heading text-black">SAVE 50%</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">On Ad Spend</p>
            </div>
          </div>
        </div>
      </section>

      {/* UGC Promo Link - REMOVED (Replaced by the section above) */}
    </div>
  );
}