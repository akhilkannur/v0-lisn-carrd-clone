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
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Calculator Card */}
      <div className="bg-white rounded-2xl shadow-xl border-t-8 border-[#FFE500] overflow-hidden">
        <div className="p-6 md:p-10 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center p-4 bg-orange-50 rounded-full mb-2 ring-1 ring-orange-100">
              <Calculator className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">FBA & Payout Calculator</h2>
            <p className="text-gray-500 text-lg">See your actual Amazon India bank settlement for 2025</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Input Section */}
            <div className="space-y-8">
              <div className="space-y-5">
                <h3 className="text-xl font-semibold flex items-center gap-3 text-gray-800 border-b border-gray-100 pb-3">
                  <Tag className="w-5 h-5 text-gray-400" /> Product Category
                </h3>
                
                <div className="grid gap-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleCategoryChange}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFE500] focus:border-[#FFE500] outline-none transition-all text-gray-900 font-medium cursor-pointer hover:border-gray-300"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Sub-Category</label>
                  <select
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFE500] focus:border-[#FFE500] outline-none transition-all text-gray-900 font-medium cursor-pointer hover:border-gray-300"
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
                  <div className="grid gap-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Selling Price (₹)</label>
                    <input
                      type="number"
                      name="sellingPrice"
                      value={formData.sellingPrice}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFE500] focus:border-[#FFE500] outline-none transition-all text-gray-900 font-medium"
                    />
                  </div>
                   <div className="grid gap-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Product GST (%)</label>
                  <select
                    name="productGst"
                    value={formData.productGst}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFE500] focus:border-[#FFE500] outline-none transition-all text-gray-900 font-medium cursor-pointer hover:border-gray-300"
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

              <div className="space-y-5">
                <h3 className="text-xl font-semibold flex items-center gap-3 text-gray-800 border-b border-gray-100 pb-3">
                  <Package className="w-5 h-5 text-gray-400" /> Shipping & Logistics
                </h3>

                <div className="grid grid-cols-2 gap-5">
                  <div className="grid gap-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Weight (kg)</label>
                    <input
                      type="number"
                      step="0.1"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFE500] focus:border-[#FFE500] outline-none transition-all text-gray-900 font-medium"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Mode</label>
                    <select
                      name="mode"
                      value={formData.mode}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFE500] focus:border-[#FFE500] outline-none transition-all text-gray-900 font-medium cursor-pointer hover:border-gray-300"
                    >
                      <option value="easyShip">Easy Ship</option>
                      <option value="fba">FBA</option>
                      <option value="selfShip">Self Ship</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Customer Location</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFE500] focus:border-[#FFE500] outline-none transition-all text-gray-900 font-medium cursor-pointer hover:border-gray-300"
                    disabled={formData.mode === 'fba' || formData.mode === 'selfShip'}
                  >
                    <option value="local">Local (Same City)</option>
                    <option value="regional">Regional (Same Zone)</option>
                    <option value="national">National (Metro/Rest of India)</option>
                  </select>
                   {formData.mode === 'fba' && <p className="text-xs text-gray-400 mt-1">FBA fees are based on weight slabs.</p>}
                   {formData.mode === 'selfShip' && <p className="text-xs text-gray-400 mt-1">Self Ship: You handle shipping directly (0 Amazon Fee).</p>}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 space-y-6 border border-gray-200 shadow-inner flex flex-col justify-between h-full">
               <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900 border-b border-gray-200 pb-4">
                  <IndianRupee className="w-6 h-6 text-green-600" /> Bank Settlement
                </h3>

              {results && (
                <div className="space-y-6 flex-grow">
                  {/* Main Payout Card */}
                  <div className={`p-6 rounded-xl border shadow-sm transition-all duration-300 ${results.netPayout >= 0 ? 'bg-white border-green-200 ring-1 ring-green-100' : 'bg-red-50 border-red-200'}`}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">Net Payout / Unit</span>
                      <span className={`text-4xl font-extrabold tracking-tight ${results.netPayout >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatCurrency(results.netPayout)}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-dashed border-gray-200">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-bold uppercase">Retention %</span>
                        <span className={`text-xl font-bold ${results.netPayout >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {results.margin.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Referral Fee ({results.referralRate}%)</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(results.referralFee)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Closing Fee</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(results.closingFee)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Shipping Fee</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(results.shippingFee)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">GST on Fees (18%)</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(results.gstOnFees)}</span>
                    </div>
                     <div className="flex justify-between items-center text-sm border-t border-dashed border-gray-200 pt-2">
                      <span className="text-gray-600">Output GST ({formData.productGst}%)</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(results.outputGst)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100 mt-2">
                      <span className="font-bold text-gray-700">Total Deductions</span>
                      <span className="font-bold text-red-500">-{formatCurrency(results.totalAmazonCharges + results.outputGst)}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="bg-blue-50 p-4 rounded-lg flex flex-col gap-3 text-xs text-blue-800 border border-blue-100">
                <div className="flex gap-3 items-start">
                  <Info className="w-5 h-5 shrink-0 text-blue-600" />
                  <p className="leading-relaxed">
                    <strong>Estimate Only:</strong> This calculator provides an estimation based on standard Amazon India 2025 schedules. While we strive for accuracy, actual bank settlements may vary.
                  </p>
                </div>
                
                <div className="pt-2 border-t border-blue-200/50">
                  <p className="font-bold mb-1 uppercase tracking-wider">Factors that may further decrease margins:</p>
                  <ul className="list-disc pl-4 space-y-1 opacity-90">
                    <li><strong>Returns:</strong> Return shipping & non-refundable fees.</li>
                    <li><strong>Advertising (PPC):</strong> Your daily ad spend on Amazon.</li>
                    <li><strong>FBA Storage:</strong> Monthly storage and long-term storage fees.</li>
                    <li><strong>Packaging:</strong> Costs for boxes, tape, and labels.</li>
                    <li><strong>Inbound Shipping:</strong> Costs to send stock to FBA warehouses.</li>
                    <li><strong>Damages/Loss:</strong> Inventory shrinkage or transit damage.</li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-blue-200/50">
                  <p className="font-bold mb-1 uppercase tracking-wider text-[10px]">Term Glossary:</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] opacity-80 leading-tight">
                    <p><strong>Referral:</strong> Amazon's commission fee.</p>
                    <p><strong>Closing:</strong> Fixed fee per unit sold.</p>
                    <p><strong>Output GST:</strong> Tax collected for the govt.</p>
                    <p><strong>Net Payout:</strong> Your bank settlement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UGC Promo Link */}
      <Link href="/ugc" className="block group">
        <div className="bg-black text-white p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-black/20">
            {/* Abstract bg element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE500] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left space-y-2">
                    <h3 className="text-2xl md:text-4xl font-heading uppercase tracking-tighter leading-none">
                        Unsatisfied with <br/><span className="text-[#FFE500]">these margins?</span>
                    </h3>
                    <p className="text-gray-400 text-lg">
                        Stop burning cash on ads that don't convert. Switch to high-velocity UGC.
                    </p>
                </div>
                <div className="flex items-center gap-2 bg-[#FFE500] text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
                    Boost Your Sales <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </div>
      </Link>
    </div>
  );
}