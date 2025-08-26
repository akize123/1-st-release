"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, HelpCircle, ShoppingBag, Truck, RefreshCw, Palette, Phone, Mail, MessageCircle, Building2, Ruler } from "lucide-react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = {
    general: {
      title: "General Information",
      icon: HelpCircle,
      questions: [
        {
          question: "What makes New Kigali Designers different from other clothing companies?",
          answer:
            "We uniquely blend traditional Rwandan craftsmanship with modern fashion technology. Our smart fabric technology, artisan collaboration model, and zero-waste production methods set us apart. We're the only company in Rwanda offering AI-powered custom designs while maintaining authentic traditional techniques.",
        },
        {
          question: "Where are your products made?",
          answer:
            "All our products are proudly made in our state-of-the-art facility in Kigali, Rwanda. We employ local artisans and use a combination of traditional hand-crafting techniques and modern machinery to ensure the highest quality standards.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes! We ship worldwide to over 50 countries. Shipping times vary by location: 3-5 days within East Africa, 7-10 days to Europe and North America, and 10-14 days to other international destinations. All international orders include tracking and insurance.",
        },
        {
          question: "What materials do you use in your clothing?",
          answer:
            "We use premium organic cotton, traditional Rwandan fabrics, eco-friendly synthetic blends, and innovative smart fabrics with moisture-wicking properties. All materials are sustainably sourced and tested for quality and durability.",
        },
        {
          question: "Are your products suitable for all climates?",
          answer:
            "Our smart fabric technology includes temperature-regulating and moisture-wicking properties, making our clothing comfortable in various climates. We specifically design for Africa's diverse weather conditions while ensuring global wearability.",
        },
      ],
    },
    ordering: {
      title: "Ordering & Payment",
      icon: ShoppingBag,
      questions: [
        {
          question: "How do I place an order?",
          answer:
            "You can place orders through our website gallery, by visiting our showroom in Kigali, or by contacting our customer service team. Online orders require account creation for tracking and customer service purposes.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit cards (Visa, Mastercard, American Express), PayPal, mobile money (MTN Mobile Money, Airtel Money), bank transfers, and cash payments at our showroom. All online payments are secured with SSL encryption.",
        },
        {
          question: "Can I modify or cancel my order after placing it?",
          answer:
            "Orders can be modified or cancelled within 2 hours of placement if production hasn't started. Custom orders have a 24-hour modification window. Contact our customer service immediately for any changes.",
        },
        {
          question: "Do you offer bulk or wholesale pricing?",
          answer:
            "Yes! We offer special pricing for orders of 20+ pieces, corporate uniforms, event clothing, and retail partnerships. Contact our business development team for custom quotes and partnership opportunities.",
        },
        {
          question: "How long does it take to process an order?",
          answer:
            "Standard items: 2-3 business days. Custom designs: 7-14 business days. Bulk orders: 2-4 weeks depending on quantity. Rush orders available for 50% additional fee with 24-48 hour processing.",
        },
      ],
    },
    shipping: {
      title: "Shipping & Delivery",
      icon: Truck,
      questions: [
        {
          question: "What are your shipping costs?",
          answer:
            "Rwanda: Free shipping on orders over $50, otherwise $5. East Africa: $15. Europe/North America: $25. Other international: $35. Express shipping available for additional $20-50 depending on destination.",
        },
        {
          question: "How can I track my order?",
          answer:
            "You'll receive a tracking number via email once your order ships. Track through our website, SMS updates, or directly with our shipping partners (DHL, FedEx, local couriers). Real-time updates available through your account dashboard.",
        },
        {
          question: "What if my package is lost or damaged during shipping?",
          answer:
            "All shipments are insured. Report lost or damaged items within 48 hours of expected delivery. We'll immediately investigate and provide replacement or full refund. Photos required for damage claims.",
        },
        {
          question: "Do you offer same-day delivery in Kigali?",
          answer:
            "Yes! Same-day delivery available in Kigali for orders placed before 2 PM. Service fee: $10. Available Monday-Saturday. Perfect for last-minute gifts or urgent needs.",
        },
        {
          question: "Can I change my delivery address after shipping?",
          answer:
            "Address changes possible if package hasn't reached destination country. Contact us immediately with new address. Additional fees may apply for address changes ($10-25 depending on location).",
        },
      ],
    },
    returns: {
      title: "Returns & Exchanges",
      icon: RefreshCw,
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "30-day return policy for unworn items with original tags. Custom items non-returnable unless defective. Return shipping costs covered by customer unless item is defective or wrong item sent.",
        },
        {
          question: "How do I initiate a return or exchange?",
          answer:
            "Contact customer service or use our online return portal. Provide order number and reason for return. We'll email a prepaid return label (for defective items) or return instructions.",
        },
        {
          question: "When will I receive my refund?",
          answer:
            "Refunds processed within 5-7 business days after we receive returned items. Original payment method used for refunds. Bank processing may take additional 3-5 business days depending on your financial institution.",
        },
        {
          question: "Can I exchange for a different size or color?",
          answer:
            "Yes! Free exchanges for different sizes within 30 days. Color exchanges subject to availability. Exchange shipping costs: $5 domestic, $15 international. Process typically takes 7-10 business days.",
        },
        {
          question: "What if the item doesn't fit properly?",
          answer:
            "We offer free size exchanges and fit consultations. Our customer service team can help determine the best size based on measurements. Virtual fitting sessions available via video call for custom orders.",
        },
      ],
    },
    custom: {
      title: "Custom Designs",
      icon: Palette,
      questions: [
        {
          question: "Do you offer custom design services?",
          answer:
            "We specialize in custom designs for individuals, weddings, corporate events, and special occasions. Our AI-powered design system can create unique patterns while our artisans ensure perfect execution.",
        },
        {
          question: "How much do custom designs cost?",
          answer:
            "Custom design fees start at $50 for consultations. Simple modifications: $25-75. Complete custom designs: $100-500 depending on complexity. Wedding collections and corporate uniforms quoted individually.",
        },
        {
          question: "How long does a custom order take?",
          answer:
            "Simple customizations: 7-10 days. Complex custom designs: 2-4 weeks. Wedding collections: 6-8 weeks. Rush orders available with 50% surcharge. Timeline confirmed during design consultation.",
        },
        {
          question: "Can you recreate traditional family patterns?",
          answer:
            "Yes! We specialize in preserving and recreating traditional Rwandan family patterns. Bring photos, fabric samples, or descriptions. Our master artisans work with families to ensure cultural authenticity and respect.",
        },
        {
          question: "Do you provide design consultations?",
          answer:
            "Free 30-minute consultations for all custom orders. Available in-person at our showroom, via video call, or phone. Our designers help translate your vision into wearable art while respecting cultural significance.",
        },
      ],
    },
    sizing: {
      title: "Size Guide & Measurements",
      icon: Ruler,
      questions: [
        {
          question: "How do I find my correct size?",
          answer:
            "Use our comprehensive size guide which includes measurements for chest, waist, hips, and length. We recommend measuring yourself with a soft measuring tape while wearing light clothing. Our size charts are specific to each product category and include both metric and imperial measurements.",
        },
        {
          question: "What if I'm between sizes?",
          answer:
            "If you're between sizes, we generally recommend sizing up for comfort, especially for traditional African garments which are often worn more loosely. However, for fitted modern pieces, contact our customer service for personalized advice based on the specific garment.",
        },
        {
          question: "Do you offer virtual fitting consultations?",
          answer:
            "Yes! We offer virtual fitting consultations via video call where our experts help you measure correctly and recommend the best size. This service is free for orders over $100 and available by appointment Monday through Saturday.",
        },
        {
          question: "Can I exchange if the size doesn't fit?",
          answer:
            "Absolutely. We offer free size exchanges within 30 days of purchase for unworn items with tags attached. For custom pieces, we provide one free alteration within 14 days of delivery to ensure the perfect fit.",
        },
      ],
    },
    wholesale: {
      title: "Wholesale & B2B Solutions",
      icon: Building2,
      questions: [
        {
          question: "What are your minimum order quantities for wholesale?",
          answer:
            "Our minimum wholesale order is 50 pieces for standard items and 25 pieces for custom designs. We offer tiered pricing with better rates for larger quantities. Orders over 200 pieces qualify for our premium wholesale program with additional benefits.",
        },
        {
          question: "Do you offer custom branding for B2B clients?",
          answer:
            "Yes, we provide full custom branding services including custom labels, tags, packaging, and even custom designs. We can work with your brand guidelines to create products that align with your company's identity. Setup fees apply for custom branding.",
        },
        {
          question: "What payment terms do you offer for business clients?",
          answer:
            "We offer flexible payment terms for established business clients including NET 30, NET 60, and installment plans. New business clients typically start with 50% upfront and 50% on delivery. Credit applications and references may be required for extended payment terms.",
        },
        {
          question: "Can you handle large institutional orders like schools or hospitals?",
          answer:
            "Absolutely. We specialize in large institutional orders including school uniforms, corporate wear, and healthcare apparel. We provide project management, timeline coordination, and can accommodate specific delivery schedules. Volume discounts and quality guarantees apply.",
        },
        {
          question: "Do you provide samples for wholesale clients?",
          answer:
            "Yes, we provide sample programs for serious wholesale clients. Sample costs are typically refunded on your first order over $1,000. We can provide up to 5 samples per style and offer express sample delivery for urgent requirements.",
        },
      ],
    },
  }

  const filteredFAQs = Object.entries(faqCategories).reduce(
    (acc, [key, category]) => {
      const filteredQuestions = category.questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      if (filteredQuestions.length > 0) {
        acc[key] = { ...category, questions: filteredQuestions }
      }
      return acc
    },
    {} as typeof faqCategories,
  )

  const quickActions = [
    {
      title: "Track Your Order",
      description: "Get real-time updates on your order status",
      icon: Truck,
      action: "Track Order",
    },
    {
      title: "Size Guide & Measurements",
      description: "Find your perfect fit with our detailed size charts and measurement guide",
      icon: RefreshCw,
      action: "View Size Guide",
    },
    {
      title: "Wholesale & B2B Solutions",
      description: "Bulk orders and institutional partnerships for businesses",
      icon: Building2,
      action: "Get B2B Quote",
    },
    {
      title: "Live Chat",
      description: "Chat with our customer service team",
      icon: MessageCircle,
      action: "Start Chat",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to common questions about our products, services, and ordering process
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-center text-foreground mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <action.icon className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="font-serif text-lg">{action.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{action.description}</CardDescription>
                  <Button variant="outline" size="sm">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">Browse by category or search for specific topics above</p>
          </div>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {Object.entries(faqCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key} className="text-sm">
                  <category.icon className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(filteredFAQs).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-6">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-serif text-2xl font-bold text-foreground">{category.title}</h3>
                    <Badge variant="secondary">{category.questions.length} questions</Badge>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${key}-${index}`}>
                        <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {searchQuery && Object.keys(filteredFAQs).length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any answers matching "{searchQuery}". Try different keywords or contact our support
                team.
              </p>
              <Button>Contact Support</Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Still Need Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our customer service team is here to help with any questions not covered in our FAQ
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="font-serif">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Speak directly with our support team
                  <br />
                  Monday - Saturday, 9 AM - 6 PM
                </p>
                <Button variant="outline">+250 788 123 456</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="font-serif">Email Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Get detailed help via email
                  <br />
                  Response within 24 hours
                </p>
                <Button variant="outline">Send Email</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="font-serif">Live Chat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Instant help through live chat
                  <br />
                  Available during business hours
                </p>
                <Button variant="outline">Start Chat</Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Visit Our Showroom</h3>
            <p className="text-muted-foreground mb-4">
              Experience our products in person and get personalized assistance from our team
            </p>
            <p className="text-sm text-muted-foreground">
              KG 123 St, Kigali Heights, Kigali, Rwanda
              <br />
              Open Monday - Saturday, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>

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
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="text-background border-background hover:bg-background hover:text-foreground bg-transparent"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
