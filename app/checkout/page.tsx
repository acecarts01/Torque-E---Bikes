'use client'

import React, { useState, useMemo } from 'react'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import CryptoPaymentModal from '@/src/components/CryptoPaymentModal'
import { formatCurrency, cn } from '@/src/lib/utils'
import { Zap, CreditCard, Landmark, Truck, Wallet, ShieldCheck } from 'lucide-react'
import { SHOP } from '@/src/config/site'

export default function CheckoutPage() {
  const [isCryptoModalOpen, setIsCryptoModalOpen] = useState(false)
  const subtotal = 1150.00 // Example: 2000W Kit
  const isBelowMinOrder = subtotal < SHOP.minOrder
  const baseShipping = subtotal > SHOP.freeShippingThreshold ? 0 : SHOP.shippingFee
  const shippingDiscount = subtotal >= SHOP.shippingDiscountThreshold ? (baseShipping * SHOP.shippingDiscountRate / 100) : 0
  const shipping = baseShipping - shippingDiscount
  const total = subtotal + shipping

  const [orderRef] = useState(() => "TQR-" + Math.random().toString(36).substring(2, 11).toUpperCase())

  return (
    <div className="flex flex-col min-h-screen bg-[#16181b]">
      <AnnouncementBar />
      <Nav />

      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {isBelowMinOrder && (
            <div className="mb-8 p-4 bg-brand-red/10 border border-brand-red/20 rounded-sm flex items-center gap-3">
              <Zap className="w-5 h-5 text-brand-red" />
              <p className="text-[10px] font-black uppercase tracking-widest text-white">
                Minimum order value of {formatCurrency(SHOP.minOrder)} AUD required to initialise build. 
                <span className="text-brand-red ml-2 italic">Current: {formatCurrency(subtotal)}</span>
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Summary */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Checkout</h1>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Order Reference: {orderRef}</p>
              </div>

              <div className="bg-[#1d2024] p-6 border border-white/5 rounded-sm space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/5 pb-2 mb-4">Order Summary</h3>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-400">Torque 2000W Combo Kit</span>
                  <span className="font-bold">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-white/5">
                  <span className="text-sm text-gray-400">Shipping</span>
                  <div className="text-right">
                    <span className={shipping === 0 ? "text-green-500 font-bold text-sm" : "text-sm"}>
                      {baseShipping === 0 ? "FREE" : formatCurrency(baseShipping)}
                    </span>
                    {shippingDiscount > 0 && (
                      <p className="text-[8px] text-green-500 font-black uppercase tracking-widest">-{SHOP.shippingDiscountRate}% Bulk Discount Applied</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 border-t-2 border-[#ff6a1a] mt-4">
                  <span className="font-black uppercase tracking-widest italic">Total Payable</span>
                  <span className="text-2xl font-black italic tracking-tighter">{formatCurrency(total)}</span>
                </div>
              </div>

              <div className="bg-[#ff6a1a]/5 p-6 border border-[#ff6a1a]/20 rounded-sm flex items-start gap-4">
                <div className="bg-[#ff6a1a] p-2 rounded-sm shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#ff6a1a] mb-1">PROMO: Crypto Savings</h4>
                  <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-widest">
                    Pay with Bitcoin or Tether to unlock an immediate {SHOP.cryptoDiscount}% discount on your entire order.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Payment Methods */}
            <div className="space-y-8">
              <h3 className="text-xl font-black italic uppercase tracking-tighter">Select Payment Method</h3>
              
              <div className={cn("grid grid-cols-1 gap-4", isBelowMinOrder && "opacity-50 pointer-events-none")}>
                {/* Crypto Option */}
                <button 
                  onClick={() => setIsCryptoModalOpen(true)}
                  className="flex items-center justify-between p-6 bg-[#1d2024] border-2 border-[#ff6a1a]/50 hover:border-[#ff6a1a] transition-all rounded-sm group text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ff6a1a] rounded-sm flex items-center justify-center text-[#140800]">
                      <Wallet className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black italic uppercase tracking-tighter text-white">Pay with Crypto</h4>
                      <p className="text-[10px] font-bold text-[#ff6a1a] uppercase tracking-widest italic">Save {formatCurrency(total * (SHOP.cryptoDiscount / 100))} Automatically</p>
                    </div>
                  </div>
                  <Zap className="w-5 h-5 text-[#ff6a1a] animate-pulse" />
                </button>

                {/* Bank Transfer Option */}
                <button className="flex items-center justify-between p-6 bg-[#1d2024] border border-white/5 hover:border-white/20 transition-all rounded-sm group text-left opacity-80 hover:opacity-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-white">
                      <Landmark className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black italic uppercase tracking-tighter text-white">Bank Transfer</h4>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">PayID / OSKO / EFT</p>
                    </div>
                  </div>
                </button>

                {/* PayID Option */}
                <button className="flex items-center justify-between p-6 bg-[#1d2024] border border-white/5 hover:border-white/20 transition-all rounded-sm group text-left opacity-80 hover:opacity-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-white">
                      <Zap className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="font-black italic uppercase tracking-tighter text-white">PayID / OSKO</h4>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Instant Bank Transfer</p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-2 p-4 bg-white/5 rounded-sm border border-white/5">
                <Truck className="w-5 h-5 text-gray-500" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                  Fast Nationwide Dispatch: Ships within 24-48 hours from Brisbane Lab.
                </p>
              </div>

              {/* Payment FAQ Section */}
              <div className="pt-12 space-y-8">
                <div className="flex items-center gap-3">
                   <ShieldCheck className="w-5 h-5 text-brand-red" />
                   <h3 className="text-xl font-black italic uppercase tracking-tighter">Payment Support FAQ</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-white">How do I complete a Bank Transfer?</h4>
                    <p className="text-[10px] text-brand-gray uppercase tracking-wider leading-loose">
                      Select &quot;Bank Transfer&quot; as your payment method. After placing your order, you will receive our BSB and Account Number via email. Use your Order Reference ({orderRef}) as the description to ensure instant matching.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-white">What reference do I use for PayID?</h4>
                    <p className="text-[10px] text-brand-gray uppercase tracking-wider leading-loose">
                      PayID transfers are instant. Please use the mobile number provided at the end of checkout and include your Order Reference ({orderRef}). This allows our team to confirm your machine for dispatch in real-time.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-white">How are Crypto transfers verified?</h4>
                    <p className="text-[10px] text-brand-gray uppercase tracking-wider leading-loose">
                      Once you send BTC or USDT, the transaction is broadcast to the blockchain. We require 3 confirmations (approx. 10-30 mins) for the order to be marked as paid. We verify the transaction hash (TXID) against your Order Reference to finalize your build.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CryptoPaymentModal 
        isOpen={isCryptoModalOpen}
        onClose={() => setIsCryptoModalOpen(false)}
        subtotal={total}
        orderReference={orderRef}
      />

      <Footer />
    </div>
  )
}
