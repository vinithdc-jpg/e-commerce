"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Search,
  Heart,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "SHOP COLLECTION", href: "/collections", active: true },
  { label: "PRODUCT DETAIL", href: "/products" },
  { label: "CART & CHECKOUT", href: "/cart" },
  { label: "ABOUT & ATELIER", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState("USD ($)");

  return (
    <header className="w-full border-x-[3px] border-[#7863b8] bg-[#e9e3f2] text-[#242333]">
      <nav className="mx-auto flex min-h-[66px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-center leading-none"
          aria-label="Élévation home"
        >
          <span className="block font-serif text-[12px] font-semibold tracking-[3px]">
            ÉLÉVATION
          </span>
          <span className="mt-[5px] block text-[6px] tracking-[2.2px]">
            ATELIER · PARIS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center gap-7 lg:flex xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`relative flex min-h-[48px] max-w-[136px] items-center text-[13px] leading-[19px] tracking-[0.3px] transition-colors duration-200 hover:text-[#7863b8] ${
                item.active
                  ? "border-b border-[#71658d] font-medium text-[#171624]"
                  : "font-normal text-[#555365]"
              }`}
            >
              {item.label === "SHOP COLLECTION" ? (
                <span>
                  SHOP
                  <br />
                  COLLECTION
                </span>
              ) : item.label === "PRODUCT DETAIL" ? (
                <span>
                  PRODUCT
                  <br />
                  DETAIL
                </span>
              ) : item.label === "CART & CHECKOUT" ? (
                <span>
                  CART &amp;
                  <br />
                  CHECKOUT
                </span>
              ) : item.label === "ABOUT & ATELIER" ? (
                <span>
                  ABOUT &amp;
                  <br />
                  ATELIER
                </span>
              ) : (
                item.label
              )}
            </Link>
          ))}
        </div>

        {/* Right-side Actions */}
        <div className="hidden shrink-0 items-center gap-5 xl:gap-6 lg:flex">
          {/* Currency Selector */}
          <div className="relative">
            <Globe size={13} strokeWidth={1.7} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              aria-label="Select currency"
              className="h-[28px] w-[109px] cursor-pointer appearance-none rounded-full border border-[#d9d2e5] bg-transparent pl-7 pr-6 text-[11px] outline-none hover:border-[#a99ac9]"
            >
              <option value="USD ($)">USD ($)</option>
              <option value="EUR (€)">EUR (€)</option>
              <option value="GBP (£)">GBP (£)</option>
              <option value="INR (₹)">INR (₹)</option>
            </select>
            <ChevronDown
              size={12}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* Search */}
          <Link
            href="/search"
            aria-label="Search"
            className="transition-transform hover:scale-110"
          >
            <Search size={18} strokeWidth={1.8} />
          </Link>

          {/* Wishlist */}
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative transition-transform hover:scale-110"
          >
            <Heart size={19} strokeWidth={1.8} />
            <span className="absolute -right-[7px] -top-[8px] flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#8e5657] px-1 text-[9px] font-semibold text-white">
              3
            </span>
          </Link>

          {/* Shopping Bag */}
          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="relative transition-transform hover:scale-110"
          >
            <ShoppingBag size={18} strokeWidth={1.8} />
            <span className="absolute -right-[7px] -top-[8px] flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#191827] px-1 text-[9px] font-semibold text-white">
              2
            </span>
          </Link>

          {/* Profile */}
          <Link
            href="/account"
            aria-label="My account"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#191827] text-white transition-colors hover:bg-[#7863b8]"
          >
            <UserRound size={17} strokeWidth={1.8} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6cde4] lg:hidden"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[#d7cfe4] px-6 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-[#dcd5e8] py-3 text-sm tracking-wide ${
                  item.active
                    ? "font-semibold text-[#191827]"
                    : "text-[#555365]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-around">
            <Link href="/search" aria-label="Search" onClick={() => setMobileMenuOpen(false)}>
              <Search size={20} />
            </Link>
            <Link href="/wishlist" aria-label="Wishlist" onClick={() => setMobileMenuOpen(false)}>
              <Heart size={20} />
            </Link>
            <Link href="/cart" aria-label="Shopping bag" onClick={() => setMobileMenuOpen(false)}>
              <ShoppingBag size={20} />
            </Link>
            <Link href="/account" aria-label="My account" onClick={() => setMobileMenuOpen(false)}>
              <UserRound size={20} />
            </Link>

            <div className="relative">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                aria-label="Select currency"
                className="w-[100px] appearance-none rounded-full border border-[#d4cce2] bg-transparent py-2 pl-3 pr-6 text-xs"
              >
                <option value="USD ($)">USD ($)</option>
                <option value="EUR (€)">EUR (€)</option>
                <option value="GBP (£)">GBP (£)</option>
                <option value="INR (₹)">INR (₹)</option>
              </select>
              <ChevronDown
                size={12}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}