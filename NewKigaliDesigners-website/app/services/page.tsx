
"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Scissors, 
  Palette, 
  ShoppingBag, 
  Users, 
  Ruler, 
  Package, 
  Award, 
  Truck,
  Play,
  CheckCircle,
  Clock,
  Star,
  Shirt,
  Sparkles,
  Building2
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "custom-design",
      title: "Custom Design Services",
      description: "Personalized clothing designed to your exact specifications",
      icon: Palette,
      price: "Starting from $150",
      features: ["Personal consultation", "3D design preview", "Unlimited revisions", "Premium materials"],
      video: "/api/placeholder/400/225",
      materials: ["Premium Cotton", "Silk Blends", "Traditional Kitenge", "Smart Fabrics"]
    },
    {
      id: "tailoring",
      title: "Expert Tailoring",
      description: "Professional alterations and custom fitting services",
      icon: Scissors,
      price: "Starting from $25",
      features: ["Perfect fit guarantee", "Same-day service", "Expert craftsmen", "Quality assurance"],
      video: "/api/placeholder/400/225",
      materials: ["Cotton", "Linen", "Wool", "Synthetic Blends"]
    },
    {
      id: "wholesale",
      title: "Wholesale & B2B Solutions",
      description: "Bulk orders and institutional partnerships",
      icon: Building2,
      price: "Volume discounts available",
      features: ["Bulk pricing", "Custom branding", "Corporate partnerships", "Flexible payment terms"],
      video: "/api/placeholder/400/225",
      materials: ["Industrial Fabrics", "Uniform Materials", "Branded Textiles", "Eco-friendly Options"]
    },
    {
      id: "consultation",
      title: "Style Consultation",
      description: "Professional styling advice and wardrobe planning",
      icon: Users,
      price: "Starting from $75",
      features: ["Personal stylist", "Wardrobe analysis", "Color coordination", "Style guide creation"],
      video: "/api/placeholder/400/225",
      materials: ["Fashion Fabrics", "Seasonal Collections", "Trendy Materials", "Classic Textiles"]
    }
  ]

  const materials = [
    {
      name: "Organic Cotton",
      description: "Sustainable, breathable, and hypoallergenic fabric perfect for everyday wear",
      image: "/api/placeholder/300/200",
      properties: ["100% Organic", "GOTS Certified", "Soft Touch", "Durable"],
      uses: ["T-shirts", "Casual wear", "Children's clothing"]
    },
    {
      name: "Traditional Kitenge",
      description: "Authentic African wax print fabric with vibrant colors and patterns",
      image: "/api/placeholder/300/200",
      properties: ["Colorfast", "Cultural Heritage", "Unique Patterns", "Medium Weight"],
      uses: ["Formal wear", "Cultural events", "Fashion statements"]
    },
    {
      name: "Smart Fabric Technology",
      description: "Advanced textiles with moisture-wicking and temperature control",
      image: "/api/placeholder/300/200",
      properties: ["Moisture-Wicking", "UV Protection", "Antibacterial", "Quick-Dry"],
      uses: ["Sportswear", "Professional attire", "Travel clothing"]
    },
    {
      name: "Silk Blends",
      description: "Luxurious fabric combining silk with modern fibers for comfort",
      image: "/api/placeholder/300/200",
      properties: ["Lustrous Finish", "Wrinkle Resistant", "Breathable", "Elegant Drape"],
      uses: ["Evening wear", "Business attire", "Special occasions"]
    }
  ]

  const additionalServices = [
    {
      title: "Size Guide & Fitting",
      description: "Comprehensive measurement guide and virtual fitting assistance",
      icon: Ruler,
      features: ["Virtual measuring", "Size charts", "Fit guarantee", "Exchange policy"]
    },
    {
      title: "Premium Packaging",
      description: "Eco-friendly, branded packaging for special occasions",
      icon: Package,
      features: ["Gift wrapping", "Branded boxes", "Eco-friendly materials", "Custom messages"]
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and satisfaction guarantee",
      icon: Award,
      features: ["Quality inspection", "Durability testing", "Color fastness", "Satisfaction guarantee"]
    },
    {
      title: "Express Delivery",
      description: "Fast, reliable shipping across Rwanda and beyond",
      icon: Truck,
      features: ["Same-day delivery", "International shipping", "Package tracking", "Secure packaging"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From custom designs to wholesale solutions, we offer comprehensive fashion services 
            tailored to meet every need with premium materials and expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Explore Services
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Play className="h-5 w-5 mr-2" />
              Watch Process Video
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Fashion Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert services designed to bring your fashion vision to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-primary" />
                    <span className="ml-2 text-sm text-muted-foreground">Service Preview Video</span>
                  </div>
                  <Badge className="absolute top-4 right-4">{service.price}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <service.icon className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="font-serif">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Materials Available:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.materials.map((material, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">Book Service</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Premium Materials
            </h2>
            <p className="text-lg text-muted-foreground">
              Carefully selected fabrics and materials for exceptional quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Shirt className="h-8 w-8 text-primary" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-lg">{material.name}</CardTitle>
                  <CardDescription className="text-sm">{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-sm mb-1">Properties:</h5>
                      <div className="flex flex-wrap gap-1">
                        {material.properties.map((prop, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {prop}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-1">Best for:</h5>
                      <p className="text-xs text-muted-foreground">
                        {material.uses.join(", ")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete support throughout your fashion journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-3" />
                  <CardTitle className="font-serif">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center gap-2">
                        <Sparkles className="h-3 w-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-muted-foreground">
              From consultation to delivery, experience our streamlined process
            </p>
          </div>

          <div className="space-y-8">
            {[
              { step: 1, title: "Consultation", desc: "Discuss your vision and requirements", time: "30 minutes" },
              { step: 2, title: "Design & Planning", desc: "Create designs and select materials", time: "1-2 days" },
              { step: 3, title: "Production", desc: "Expert craftsmanship brings designs to life", time: "3-7 days" },
              { step: 4, title: "Quality Check", desc: "Rigorous quality control and finishing", time: "1 day" },
              { step: 5, title: "Delivery", desc: "Professional packaging and delivery", time: "Same day" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Fashion Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss your requirements and get a personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">New Kigali Designers</h3>
            <p className="text-background/80 mb-6">Crafting the future of African fashion, one thread at a time.</p>
            <p className="text-background/50 text-xs">
              Professional Services | Quality Materials | Expert Craftsmanship | Contact: +250 780 521 244
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
