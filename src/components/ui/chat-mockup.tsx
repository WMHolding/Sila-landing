"use client";

import { useState, useEffect } from "react";
import { Send, Building2, CheckCircle2, Clock, TrendingDown } from "lucide-react";

export function ChatMockup() {
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Simulate chat progression
    timers.push(setTimeout(() => setStep(1), 800));
    timers.push(setTimeout(() => setIsTyping(true), 1500));
    timers.push(setTimeout(() => { setIsTyping(false); setStep(2); }, 2500));
    timers.push(setTimeout(() => setStep(3), 3500));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Browser chrome */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden">
        {/* Title bar with macOS window controls */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <div className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 text-center">
            <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1 text-xs text-slate-500 border border-slate-200">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              app.sila-ai.app
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className="p-6 space-y-4 min-h-[320px] bg-gradient-to-b from-white to-slate-50/50">
          {/* User message */}
          <div className={`flex justify-end transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="rounded-2xl rounded-br-md bg-blue-600 px-4 py-3 text-sm text-white max-w-[80%]">
              I need 500 industrial safety helmets, delivery to Riyadh within 2 weeks
            </div>
          </div>

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-blue-600" />
              </div>
              <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          {/* AI Response */}
          <div className={`space-y-3 transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-start gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <div className="h-4 w-4 rounded-full bg-blue-600" />
              </div>
              <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Found <span className="font-semibold text-slate-900">3 verified suppliers</span> in Saudi Arabia with your specs. Here are the best quotes:
              </div>
            </div>
          </div>

          {/* Supplier cards */}
          <div className={`pl-10 space-y-2 transition-all duration-500 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Supplier 1 - Best */}
            <div className="rounded-xl border-2 border-blue-100 bg-blue-50/50 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center border border-slate-200">
                    <Building2 className="h-4 w-4 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">SafetyPro KSA</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      Verified • Riyadh
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-900">SAR 42/unit</div>
                  <div className="text-xs text-green-600 flex items-center gap-0.5 justify-end">
                    <TrendingDown className="h-3 w-3" />
                    Best price
                  </div>
                </div>
              </div>
            </div>

            {/* Supplier 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-200">
                    <Building2 className="h-4 w-4 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Industrial Gulf</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      Verified • Dammam
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-900">SAR 45/unit</div>
                  <div className="text-xs text-slate-500 flex items-center gap-0.5 justify-end">
                    <Clock className="h-3 w-3" />
                    5-day delivery
                  </div>
                </div>
              </div>
            </div>

            {/* Supplier 3 */}
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-200">
                    <Building2 className="h-4 w-4 text-slate-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">AlSalam Supplies</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      Verified • Jeddah
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-900">SAR 48/unit</div>
                  <div className="text-xs text-slate-500">Bulk discount</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="border-t border-slate-100 bg-white p-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <input
              type="text"
              placeholder="Ask about quotes, negotiate, or approve..."
              className="flex-1 bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none"
              disabled
            />
            <button className="rounded-lg bg-blue-600 p-2 text-white" disabled>
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
