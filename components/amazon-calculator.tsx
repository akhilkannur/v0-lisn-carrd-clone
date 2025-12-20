"use client";

import React, { useState, useEffect } from "react";
import { CATEGORIES, calculateAmazonFees } from "@/lib/amazon-fees";
import { Calculator, DollarSign, Package, Truck, Info, IndianRupee } from "lucide-react";

export function AmazonCalculator() {
  const [formData, setFormData] = useState({
    category: "Electronics (General)",
    sellingPrice: 1000,
    weight: 0.5, // kg
    costPrice: 400,
    mode: "easyShip" as "easyShip" | "fba" | "selfShip",
  });

  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const fees = calculateAmazonFees(
      formData.category,
      Number(formData.sellingPrice),
      Number(formData.weight),
      formData.mode
    );

    const netProfit = fees.netRevenue - Number(formData.costPrice);
    const margin = (netProfit / Number(formData.sellingPrice)) * 100;
    const roi = (netProfit / Number(formData.costPrice)) * 100;

    setResults({ ...fees, netProfit, margin, roi });
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "category" || name === "mode" ? value : Number(value),
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-2">
          <Calculator className="w-6 h-6 text-orange-600" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">FBA & Profit Calculator</h2>
        <p className="text-gray-500">Accurate Amazon India fee estimation for 2024-2025</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 border-b pb-2">
              <DollarSign className="w-5 h-5 text-gray-400" /> Product Details
            </h3>
            
            <div className="grid gap-2">
              <label className="text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-gray-700">Selling Price (₹)</label>
                <input
                  type="number"
                  name="sellingPrice"
                  value={formData.sellingPrice}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-gray-700">Cost Price (₹)</label>
                <input
                  type="number"
                  name="costPrice"
                  value={formData.costPrice}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 border-b pb-2">
              <Package className="w-5 h-5 text-gray-400" /> Shipping Details
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-gray-700">Fulfillment Mode</label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                >
                  <option value="easyShip">Easy Ship</option>
                  <option value="fba">FBA (Fulfilled by Amazon)</option>
                  <option value="selfShip">Self Ship</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gray-50 rounded-xl p-6 space-y-6 border border-gray-100">
           <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900">
              <IndianRupee className="w-5 h-5 text-green-600" /> Profit Analysis
            </h3>

          {results && (
            <div className="space-y-4">
              {/* Main Profit Card */}
              <div className={`p-4 rounded-lg border-l-4 shadow-sm ${results.netProfit >= 0 ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                <div className="flex justify-between items-end mb-1">
                  <span className="text-sm text-gray-600 font-medium">Net Profit</span>
                  <span className={`text-2xl font-bold ${results.netProfit >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                    {formatCurrency(results.netProfit)}
                  </span>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className={`${results.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    Margin: <strong>{results.margin.toFixed(2)}%</strong>
                  </span>
                   <span className="text-gray-500">|</span>
                   <span className="text-blue-600">
                    ROI: <strong>{results.roi.toFixed(0)}%</strong>
                  </span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Referral Fee</span>
                  <span className="font-medium text-gray-900">{formatCurrency(results.referralFee)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Closing Fee</span>
                  <span className="font-medium text-gray-900">{formatCurrency(results.closingFee)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Shipping Fee</span>
                  <span className="font-medium text-gray-900">{formatCurrency(results.shippingFee)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">GST (18%)</span>
                  <span className="font-medium text-gray-900">{formatCurrency(results.gst)}</span>
                </div>
                <div className="flex justify-between py-3 font-semibold text-gray-900 bg-gray-100 px-2 rounded mt-2">
                  <span>Total Amazon Fees</span>
                  <span>{formatCurrency(results.totalFees)}</span>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-blue-50 p-3 rounded-lg flex gap-3 items-start text-xs text-blue-700">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <p>
              Calculations based on standard Amazon India fee schedules (2024-25). 
              Shipping assumes national delivery. FBA storage fees not included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
