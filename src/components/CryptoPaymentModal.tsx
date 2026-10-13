'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Copy, CheckCircle2, Zap, ShieldCheck, AlertCircle, Phone } from 'lucide-react'
import { SHOP, SITE, CONTACT } from '@/src/config/site'
import { formatCurrency, cn } from '@/src/lib/utils'

interface CryptoPaymentModalProps {
  isOpen: boolean
  onClose: () => void
  subtotal: number
  orderReference: string
}

type CryptoType = 'BTC' | 'USDT_TRC20' | 'USDT_ERC20'

export default function CryptoPaymentModal({
  isOpen,
  onClose,
  subtotal,
  orderReference
}: CryptoPaymentModalProps) {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoType>('BTC')
  const [copied, setCopied] = useState(false)

  const discountAmount = subtotal * (SHOP.cryptoDiscount / 100)
  const finalTotal = subtotal - discountAmount

  const getAddress = (type: CryptoType) => {
    switch (type) {
      case 'BTC': return SHOP.cryptoAddresses.btc
      case 'USDT_TRC20': return SHOP.cryptoAddresses.usdt_trc20
      case 'USDT_ERC20': return SHOP.cryptoAddresses.usdt_erc20
      default: return ''
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-[#141414] border border-white/10 rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#E63946] p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 fill-white" />
                <div>
                  <h3 className="text-xl font-black uppercase italic tracking-tighter leading-none">Crypto Payment</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">Automatic {SHOP.cryptoDiscount}% Discount Applied</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-black/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
              {/* Order Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Standard Total</p>
                  <p className="text-lg font-bold text-gray-400 line-through">{formatCurrency(subtotal)}</p>
                </div>
                <div className="bg-[#E63946]/10 p-4 rounded-sm border border-[#E63946]/20">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#E63946] mb-1">Crypto Price (-{SHOP.cryptoDiscount}%)</p>
                  <p className="text-2xl font-black italic tracking-tighter text-white leading-none">{formatCurrency(finalTotal)}</p>
                </div>
              </div>

              {/* Crypto Selector */}
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Select Currency</p>
                <div className="grid grid-cols-3 gap-2">
                  {(['BTC', 'USDT_TRC20', 'USDT_ERC20'] as CryptoType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedCrypto(type)}
                      className={cn(
                        "py-3 px-2 rounded-sm border transition-all text-[10px] font-black uppercase tracking-tighter",
                        selectedCrypto === type 
                          ? "bg-[#E63946] border-[#E63946] text-white" 
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                      )}
                    >
                      {type.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-6">
                <div className="p-6 bg-[#0a0a0a] rounded-sm border border-white/5 space-y-4">
                  <div className="flex justify-between items-end">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Deposit Address ({selectedCrypto.replace('_', ' ')})</p>
                    <div className="bg-[#E63946]/20 px-2 py-0.5 rounded text-[8px] font-black text-[#E63946] uppercase">Secure Transfer</div>
                  </div>
                  
                  <div className="relative group">
                    <div className="w-full bg-black border border-white/10 p-4 pr-12 text-xs font-mono break-all text-gray-300 rounded-sm">
                      {getAddress(selectedCrypto)}
                    </div>
                    <button 
                      onClick={() => handleCopy(getAddress(selectedCrypto))}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/5 hover:bg-[#E63946] hover:text-white text-gray-500 rounded-sm transition-all"
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <AlertCircle className="w-3 h-3 text-[#E63946]" />
                    <span>Send only {selectedCrypto.split('_')[0]} to this address.</span>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-sm border border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Order Reference</span>
                  <span className="font-mono text-[#E63946] font-bold">{orderReference}</span>
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <h4 className="text-sm font-black uppercase italic tracking-tighter">Confirmation Process</h4>
                </div>
                <ol className="space-y-3">
                  <li className="flex gap-3 text-xs text-gray-400 leading-relaxed font-medium">
                    <span className="bg-[#E63946] text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-black shrink-0">1</span>
                    <span>Transfer the exact amount in your selected crypto using current market rates.</span>
                  </li>
                  <li className="flex gap-3 text-xs text-gray-400 leading-relaxed font-medium">
                    <span className="bg-[#E63946] text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-black shrink-0">2</span>
                    <span>Take a screenshot of the successful transaction confirmation.</span>
                  </li>
                  <li className="flex gap-3 text-xs text-gray-400 leading-relaxed font-medium">
                    <span className="bg-[#E63946] text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-black shrink-0">3</span>
                    <span>Send the screenshot along with your Order Reference to our WhatsApp Concierge.</span>
                  </li>
                </ol>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <a 
                  href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hi Torque Team, I've just initiated a crypto payment for order ${orderReference}. Total: ${formatCurrency(finalTotal)}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#E63946] text-white py-4 rounded-sm font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-[#d62839] transition-colors"
                >
                  <Phone className="w-4 h-4" /> Confirm via WhatsApp
                </a>
                <button 
                  onClick={onClose}
                  className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                  Back to Order
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
