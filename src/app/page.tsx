"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight, MessageSquare, BarChart3, Globe2, Zap, Users } from "lucide-react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ChatMockup } from "@/components/ui/chat-mockup";
import { LeadForm } from "@/components/ui/lead-form";

const steps = [
  {
    number: "01",
    title: "Describe",
    description: "Tell us what you need in plain language. Quantity, specs, timeline—just chat.",
  },
  {
    number: "02",
    title: "Match",
    description: "AI instantly finds qualified suppliers from our verified GCC network.",
  },
  {
    number: "03",
    title: "Execute",
    description: "Compare quotes, negotiate, and approve—all in the same conversation.",
  },
];

const capabilities = [
  {
    icon: MessageSquare,
    title: "Chat-First Interface",
    description: "Source and negotiate through natural conversation. No forms, no complexity.",
    features: ["Natural language", "Instant matching", "Real-time quotes"],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into spend, savings, and supplier performance.",
    features: ["Live metrics", "Market intelligence", "Smart reporting"],
  },
];

const metrics = [
  { value: 68, suffix: "%", label: "Faster Procurement" },
  { value: 22, suffix: "%", label: "Cost Savings" },
  { value: 99, suffix: "%", label: "Quote Accuracy" },
  { value: 24, suffix: "/7", label: "Always On" },
];

const countries = [
  { code: "KSA", name: "Saudi Arabia" },
  { code: "UAE", name: "United Arab Emirates" },
  { code: "QAT", name: "Qatar" },
  { code: "KWT", name: "Kuwait" },
  { code: "BHR", name: "Bahrain" },
  { code: "OMN", name: "Oman" },
];

export default function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Lead Capture Form */}
      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-lg font-semibold tracking-tight text-slate-900">SILA</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#how-it-works" className="transition-colors hover:text-slate-900">How it Works</a>
            <a href="#capabilities" className="transition-colors hover:text-slate-900">Capabilities</a>
            <a href="#coverage" className="transition-colors hover:text-slate-900">Coverage</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={openForm}
              className="group inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700"
            >
              Get Started
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          {/* Center-aligned hero content */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700">
              <Zap className="h-3.5 w-3.5" />
              AI-Powered Procurement for GCC
            </div>

            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Procurement through conversation.
            </TextEffect>

            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.4}
              as="p"
              className="mb-10 text-lg text-slate-600 lg:text-xl"
            >
              Source suppliers, get quotes, and close deals—all by chatting with AI.
              Connected to verified suppliers across Saudi Arabia and the GCC.
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } } },
                item: {
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                },
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={openForm}
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                See how it works
                <ChevronRight className="h-4 w-4" />
              </a>
            </AnimatedGroup>
          </div>

          {/* Chat Mockup */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent rounded-3xl" />
            <ChatMockup />
          </div>
        </div>
      </section>

      {/* Metrics - Clean horizontal row */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="mt-2 text-sm text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              How SILA Works
            </h2>
            <p className="text-lg text-slate-600">
              From request to quote in minutes, not weeks.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-slate-200 -translate-x-1/2" />
                )}
                <div className="text-center lg:text-left">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-bold text-blue-600 mb-6">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities - Bento Grid */}
      <section id="capabilities" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Platform Capabilities
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to modernize procurement.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {capabilities.map((cap) => {
              const IconComponent = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{cap.title}</h3>
                  <p className="mb-6 text-slate-600">{cap.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Supplier Network - Full width card */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Globe2 className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Local Supplier Network</h3>
                <p className="text-slate-600 max-w-xl">
                  Pre-vetted suppliers across the GCC. Verified for quality, compliance, and reliability.
                  Local expertise that understands regional requirements.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {countries.map((country) => (
                  <span
                    key={country.code}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    title={country.name}
                  >
                    {country.code}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage / GCC Focus */}
      <section id="coverage" className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-slate-900 p-12 lg:p-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-1.5 text-xs font-medium text-slate-300">
              <Users className="h-3.5 w-3.5" />
              Built for GCC Enterprises
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Ready to transform procurement?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-slate-400">
              Join enterprises across Saudi Arabia and the GCC modernizing how they source and procure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openForm}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="mailto:abdulrahman.alzamil10@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                Or email us directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="border-t border-slate-100 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-lg font-semibold tracking-tight text-slate-900">SILA</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#how-it-works" className="hover:text-slate-900">How it Works</a>
              <a href="#capabilities" className="hover:text-slate-900">Capabilities</a>
              <button onClick={openForm} className="hover:text-slate-900">Contact</button>
            </div>
            <div className="text-sm text-slate-500">
              &copy; 2025 SILA
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
