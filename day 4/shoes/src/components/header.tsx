
'use client';



import { Menu, Search, Heart, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Language');

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    console.log(`Selected Language: ${language}`);
    setShowDropdown(false); // Close the dropdown after selection
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="h-9 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto h-full flex justify-between items-center px-8 text-xs">
          <Image src={"/topDivIcon.png"} alt={"Icon"} width={24} height={24} className="ml=[48px] hidden md:block" />

          {/* nav */}
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:text-gray-600">Find a Store</Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact-us" className="hover:text-gray-600">Help</Link>
            <span className="text-gray-300">|</span>
            <Link href="/join-us" className="hover:text-gray-600">Join Us</Link>
            <span className="text-gray-300">|</span>
            <Link href="/login" className="hover:text-gray-600">Sign In</Link>
            <span className="text-gray-300">|</span>
            <Link href="/profile" className="hover:text-gray-600">Your Account</Link>
            <span className="text-gray-300">|</span>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="hover:text-gray-600 focus:outline-none"
              >
                {selectedLanguage}
              </button>
              {showDropdown && (
                <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md text-sm w-32">
                  <ul>
                    <li className="hover:bg-gray-100">
                      <button
                        onClick={() => handleLanguageSelect('English')}
                        className="block w-full text-left px-4 py-2"
                      >
                        English
                      </button>
                    </li>
                    <li className="hover:bg-gray-100">
                      <button
                        onClick={() => handleLanguageSelect('Urdu')}
                        className="block w-full text-left px-4 py-2"
                      >
                        اردو
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Main header */}
      <div className="h-16 bg-white border-b">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={"/nikeLogo.png"} alt={"Logo"} width={59} height={21} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium hover:text-gray-600">New & Featured</Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-600">Men</Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-600">Women</Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-600">Kids</Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-600">Sale</Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-600">SNKRS</Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#" className="text-lg font-medium">New & Featured</Link>
                <Link href="#" className="text-lg font-medium">Men</Link>
                <Link href="#" className="text-lg font-medium">Women</Link>
                <Link href="#" className="text-lg font-medium">Kids</Link>
                <Link href="#" className="text-lg font-medium">Sale</Link>
                <Link href="#" className="text-lg font-medium">SNKRS</Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-[180px] bg-[#F5F5F5] border-none rounded-full pl-10"
              />
              <Search className="w-5 h-5 absolute left-3 text-gray-400" />
            </div>

            {/* Icons */}
            <Button variant="ghost" size="icon">
              <Heart className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Link href={"/cart"}><ShoppingBag className="w-6 h-6" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
