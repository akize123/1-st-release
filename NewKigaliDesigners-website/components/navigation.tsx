"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ShoppingCart, User, Bell, ChevronDown, Scissors, Palette, Building2, Users as UsersIcon } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCareersOpen, setIsCareersOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/production-process", label: "Production Process" },
    { href: "/help", label: "Help" },
    { href: "/contact", label: "Contact Us" },
  ]

  const careersItems = [
    { href: "/careers", label: "Job Opportunities", icon: Palette },
    { href: "/careers/internship", label: "Internship Program", icon: Scissors },
  ]

  const servicesItems = [
    { href: "/services", label: "All Services", icon: Palette },
    { href: "/services#custom-design", label: "Custom Design", icon: Palette },
    { href: "/services#tailoring", label: "Expert Tailoring", icon: Scissors },
    { href: "/services#wholesale", label: "Wholesale & B2B", icon: Building2 },
    { href: "/services#consultation", label: "Style Consultation", icon: UsersIcon },
  ]

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd21.jpg-EIyt6ALOlpyhdqr0uwkIdO7sIOLCqr.jpeg"
                alt="New Kigali Designers Logo"
                className="h-10 w-auto"
              />
              <span className="font-serif font-bold text-xl text-primary hidden sm:block">New Kigali Designers</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Careers Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCareersOpen(!isCareersOpen)}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
                >
                  Careers
                  <ChevronDown className={`h-4 w-4 transition-transform ${isCareersOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCareersOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {careersItems.map((career) => (
                        <Link
                          key={career.href}
                          href={career.href}
                          onClick={() => setIsCareersOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          <career.icon className="h-4 w-4" />
                          {career.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {servicesItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          <service.icon className="h-4 w-4" />
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2" title="Search Products">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="p-2 relative" title="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              <span className="sr-only">Shopping cart</span>
            </Button>

            <Button variant="ghost" size="sm" className="p-2 relative" title="Notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-2 w-2"></span>
              <span className="sr-only">Notifications</span>
            </Button>

            <div className="h-6 w-px bg-border mx-2"></div>

            <Link href="/login">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="sm" className="p-2 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">3</span>
            </Button>

            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Careers Section */}
              <div className="pt-2">
                <div className="text-foreground font-semibold px-3 py-2 text-base">Careers</div>
                {careersItems.map((career) => (
                  <Link
                    key={career.href}
                    href={career.href}
                    className="text-foreground hover:text-primary flex items-center gap-3 px-6 py-2 rounded-md text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <career.icon className="h-4 w-4" />
                    {career.label}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Services Section */}
              <div className="pt-2">
                <div className="text-foreground font-semibold px-3 py-2 text-base">Services</div>
                {servicesItems.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="text-foreground hover:text-primary flex items-center gap-3 px-6 py-2 rounded-md text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="h-4 w-4" />
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
