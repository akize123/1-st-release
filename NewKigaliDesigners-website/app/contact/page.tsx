"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    countryCode: "",
    phoneNumber: "",
    email: "",
    message: "",
    specialMessage: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const countryCodes = [
    { code: "+250", country: "Rwanda", flag: "🇷🇼" },
    { code: "+1", country: "United States", flag: "🇺🇸" },
    { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+234", country: "Nigeria", flag: "🇳🇬" },
    { code: "+27", country: "South Africa", flag: "🇿🇦" },
    { code: "+254", country: "Kenya", flag: "🇰🇪" },
    { code: "+256", country: "Uganda", flag: "🇺🇬" },
  ]

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const supportedDomains = [
      "gmail.com",
      "outlook.com",
      "hotmail.com",
      "yahoo.com",
      "icloud.com",
      "protonmail.com",
      "aol.com",
      "live.com",
      "msn.com",
    ]

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address"
    }

    const domain = email.split("@")[1]?.toLowerCase()
    if (domain && !supportedDomains.some((supportedDomain) => domain.includes(supportedDomain))) {
      return `Email domain not fully supported. Recommended: ${supportedDomains.slice(0, 3).join(", ")}`
    }

    return ""
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Required field validations
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters"
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender"
    }

    if (!formData.countryCode) {
      newErrors.countryCode = "Please select a country code"
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!/^\d{7,15}$/.test(formData.phoneNumber.replace(/\s/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid phone number (7-15 digits)"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else {
      const emailError = validateEmail(formData.email)
      if (emailError) {
        newErrors.email = emailError
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    // Optional middle name validation
    if (formData.middleName && formData.middleName.length < 2) {
      newErrors.middleName = "Middle name must be at least 2 characters if provided"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("[v0] Contact form submitted:", formData)

      setSubmitStatus("success")
      // Reset form
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        countryCode: "",
        phoneNumber: "",
        email: "",
        message: "",
        specialMessage: "",
      })
      setErrors({})
    } catch (error) {
      console.log("[v0] Contact form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team. We'd love to hear from you and discuss your fashion needs.
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you have questions about our products, need custom designs, or want to learn more about our
                  services, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Our Showroom</h3>
                    <p className="text-muted-foreground">
                      KG 123 St, Kigali Heights, Kigali, Rwanda
                      <br />
                      Open Monday - Saturday, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      +250 788 123 456
                      <br />
                      +250 722 987 654
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@newkigalidesigners.com
                      <br />
                      orders@newkigalidesigners.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">
                      We typically respond within 24 hours
                      <br />
                      Urgent inquiries: Call us directly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
                <CardTitle className="font-serif text-2xl text-primary">Send Us a Message</CardTitle>
                <CardDescription className="text-foreground/80">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {submitStatus === "success" && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === "error" && Object.keys(errors).length > 0 && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      Please correct the errors below and try again.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground font-semibold text-base">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={`h-12 text-base bg-background border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.firstName ? "border-red-500" : "border-muted-foreground/30"}`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && <p className="text-sm text-red-500 font-medium">{errors.firstName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground font-semibold text-base">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={`h-12 text-base bg-background border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.lastName ? "border-red-500" : "border-muted-foreground/30"}`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && <p className="text-sm text-red-500 font-medium">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Middle Name */}
                  <div className="space-y-2">
                    <Label htmlFor="middleName" className="text-foreground font-semibold text-base">
                      Middle Name (Optional)
                    </Label>
                    <Input
                      id="middleName"
                      value={formData.middleName}
                      onChange={(e) => handleInputChange("middleName", e.target.value)}
                      className={`h-12 text-base bg-background border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.middleName ? "border-red-500" : "border-muted-foreground/30"}`}
                      placeholder="Enter your middle name (optional)"
                    />
                    {errors.middleName && <p className="text-sm text-red-500 font-medium">{errors.middleName}</p>}
                  </div>

                  {/* Gender */}
                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-foreground font-semibold text-base">
                      Gender <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger
                        className={`h-12 text-base bg-background border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.gender ? "border-red-500" : "border-muted-foreground/30"}`}
                      >
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-2 border-primary/20">
                        <SelectItem value="male" className="text-base">
                          Male
                        </SelectItem>
                        <SelectItem value="female" className="text-base">
                          Female
                        </SelectItem>
                        <SelectItem value="prefer-not-to-say" className="text-base">
                          Prefer not to say
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.gender && <p className="text-sm text-red-500 font-medium">{errors.gender}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="countryCode" className="text-foreground font-semibold text-base">
                        Country Code <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.countryCode}
                        onValueChange={(value) => handleInputChange("countryCode", value)}
                      >
                        <SelectTrigger
                          className={`h-12 text-base bg-background border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.countryCode ? "border-red-500" : "border-muted-foreground/30"}`}
                        >
                          <SelectValue placeholder="Select code" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-2 border-primary/20">
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code} className="text-base">
                              {country.flag} {country.code} {country.country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.countryCode && <p className="text-sm text-red-500 font-medium">{errors.countryCode}</p>}
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="phoneNumber" className="text-foreground font-semibold text-base">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        className={`h-12 text-base bg-background border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.phoneNumber ? "border-red-500" : "border-muted-foreground/30"}`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phoneNumber && <p className="text-sm text-red-500 font-medium">{errors.phoneNumber}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-semibold text-base">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`h-12 text-base bg-background border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.email ? "border-red-500" : "border-muted-foreground/30"}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-sm text-red-500 font-medium">{errors.email}</p>}
                    <p className="text-xs text-muted-foreground">
                      Supported: Gmail, Outlook, Yahoo, iCloud, and other major providers
                    </p>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-semibold text-base">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`min-h-[120px] text-base bg-background border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none ${errors.message ? "border-red-500" : "border-muted-foreground/30"}`}
                      placeholder="Tell us about your inquiry, custom design needs, or any questions you have..."
                      rows={4}
                    />
                    {errors.message && <p className="text-sm text-red-500 font-medium">{errors.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialMessage" className="text-foreground font-semibold text-base">
                      Special Message (Optional)
                    </Label>
                    <Textarea
                      id="specialMessage"
                      value={formData.specialMessage}
                      onChange={(e) => handleInputChange("specialMessage", e.target.value)}
                      className="min-h-[100px] text-base bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                      placeholder="Any special requests, urgent matters, or additional details you'd like to share..."
                      rows={3}
                    />
                    <p className="text-xs text-muted-foreground font-medium">
                      Use this field for urgent requests, special occasions, or detailed custom requirements
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">New Kigali Designers</h3>
            <p className="text-background/80 mb-6">Crafting the future of African fashion, one thread at a time.</p>
            <div className="flex justify-center space-x-6">
              <Button
                variant="outline"
                className="text-background border-background hover:bg-background hover:text-foreground bg-transparent"
              >
                Visit Gallery
              </Button>
              <Button
                variant="outline"
                className="text-background border-background hover:bg-background hover:text-foreground bg-transparent"
              >
                Learn Our Process
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
