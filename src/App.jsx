import React from 'react'
import { cn } from './lib/utils'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card with Claymorphism Effect */}
        <div className={cn(
          "relative bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl",
          "border border-white/20",
          "before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/30 before:to-transparent before:pointer-events-none",
          "after:absolute after:inset-0 after:rounded-3xl after:shadow-inner after:shadow-black/10 after:pointer-events-none"
        )}>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">
              Hello World
            </h1>
            <p className="text-slate-600 text-lg">
              Welcome to Claymorphism
            </p>
          </div>

          {/* Payment Form */}
          <div className="space-y-6">
            {/* Card Number Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Card Number
              </label>
              <div className={cn(
                "relative bg-white/30 rounded-2xl border border-white/30",
                "shadow-inner shadow-black/5 backdrop-blur-sm"
              )}>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className={cn(
                    "w-full px-4 py-3 bg-transparent rounded-2xl",
                    "text-slate-800 placeholder-slate-500",
                    "focus:outline-none focus:ring-2 focus:ring-white/50",
                    "transition-all duration-200"
                  )}
                />
              </div>
            </div>

            {/* Expiry and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Expiry Date
                </label>
                <div className={cn(
                  "relative bg-white/30 rounded-2xl border border-white/30",
                  "shadow-inner shadow-black/5 backdrop-blur-sm"
                )}>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className={cn(
                      "w-full px-4 py-3 bg-transparent rounded-2xl",
                      "text-slate-800 placeholder-slate-500",
                      "focus:outline-none focus:ring-2 focus:ring-white/50",
                      "transition-all duration-200"
                    )}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  CVV
                </label>
                <div className={cn(
                  "relative bg-white/30 rounded-2xl border border-white/30",
                  "shadow-inner shadow-black/5 backdrop-blur-sm"
                )}>
                  <input
                    type="text"
                    placeholder="123"
                    className={cn(
                      "w-full px-4 py-3 bg-transparent rounded-2xl",
                      "text-slate-800 placeholder-slate-500",
                      "focus:outline-none focus:ring-2 focus:ring-white/50",
                      "transition-all duration-200"
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Amount
              </label>
              <div className={cn(
                "relative bg-white/30 rounded-2xl border border-white/30",
                "shadow-inner shadow-black/5 backdrop-blur-sm"
              )}>
                <input
                  type="text"
                  placeholder="$100.00"
                  className={cn(
                    "w-full px-4 py-3 bg-transparent rounded-2xl",
                    "text-slate-800 placeholder-slate-500",
                    "focus:outline-none focus:ring-2 focus:ring-white/50",
                    "transition-all duration-200"
                  )}
                />
              </div>
            </div>

            {/* Pay Button */}
            <button className={cn(
              "w-full py-4 px-6 rounded-2xl font-semibold text-white",
              "bg-gradient-to-r from-blue-500 to-purple-600",
              "shadow-lg shadow-blue-500/25",
              "hover:shadow-xl hover:shadow-blue-500/30",
              "active:scale-[0.98] transition-all duration-200",
              "border border-white/20"
            )}>
              Pay Now
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Secure payment powered by claymorphism design
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-20 left-10 w-20 h-20 bg-blue-200/50 rounded-full blur-xl"></div>
        <div className="absolute -z-10 bottom-20 right-10 w-32 h-32 bg-purple-200/50 rounded-full blur-2xl"></div>
      </div>
    </div>
  )
}

export default App