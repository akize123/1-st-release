import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Lightbulb, Target, Star, Building2, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">
            <div className="lg:w-1/2">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground">New Kigali Designers</h1>
            </div>
            <div className="lg:w-1/2 lg:text-right">
              <p className="text-xl md:text-2xl text-muted-foreground">
                Leading clothing production company in Rwanda, masterfully blending traditional African heritage with
                contemporary fashion innovation
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery">
              <Button size="lg" className="text-lg px-8">
                Explore Our Collections
              </Button>
            </Link>
            <Link href="#heritage">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section id="heritage" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Heritage & Vision</h2>
            <div className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed space-y-4">
              <p>
                New Kigali Designers was founded in 1998, with the vision of being a mass producer for garments
                products. We have since grown our facility and technologies to serve our customers best.
              </p>
              <p>
                We specialize in promotional materials, uniforms for institutions and we also have our own retail brands
                sold to the local market. New Kigali Designer is proud of the great achievements over the last 20 years
                in the industry.
              </p>
              <p>
                We are looking forward to expanding and continue maintaining our position in the market. New Kigali
                Designers and Outfitters is in the business of Garments Manufacturing.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd1.jpg-vZ8uvqOUf8utQ5sgmpzIRkgMAY35yO.jpeg"
                alt="New Kigali Designers manufacturing floor with workers at sewing machines"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To create exceptional clothing that celebrates African culture while meeting international quality
                    standards, empowering local artisans and promoting sustainable fashion practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lightbulb className="h-8 w-8 text-accent mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Innovation Focus</h3>
                  <p className="text-muted-foreground">
                    We integrate cutting-edge production techniques with traditional craftsmanship, utilizing
                    eco-friendly materials and digital design tools to create unique, sustainable fashion pieces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Operations</h2>
            <p className="text-lg text-muted-foreground">
              Behind the scenes of our world-class garment manufacturing facility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd2.jpg-MaZk8rMVO7Hu7IOj4QXPtReNRvqPrn.jpeg"
                  alt="Quality control and equipment inspection"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">Quality Control</h3>
                  <p className="text-muted-foreground">
                    Our management team regularly inspects equipment and processes to ensure the highest quality
                    standards.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="w-full h-64 rounded-t-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/2o6FjOrcjpQ"
                    title="New Kigali Designers Production Process"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">Design Process</h3>
                  <p className="text-muted-foreground">
                    Watch our comprehensive design and production process from concept to finished garment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd4.jpg-i3nuhMpVWsqkAR1L45BHdzertsnDqy.jpeg"
                  alt="Strategic business meetings and planning"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">Strategic Planning</h3>
                  <p className="text-muted-foreground">
                    Regular leadership meetings ensure we stay aligned with our growth objectives and market demands.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd14.jpg-tuuQ6U2JiBewUW2DcKI6xEmLDbwSgT.webp"
                  alt="Pattern development and fabric design process"
                  className="w-full h-80 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">Pattern Development</h3>
                  <p className="text-muted-foreground">
                    Our experienced team meticulously develops patterns and fabric layouts to ensure optimal material
                    usage and perfect fit.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd4.jpg-V1eQwuWuTlv3aVKLaQXWB2R5WVHLKL.jpeg"
                  alt="Executive leadership and strategic planning"
                  className="w-full h-80 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">Executive Leadership</h3>
                  <p className="text-muted-foreground">
                    Our leadership team conducts regular strategic sessions to drive innovation and maintain our
                    competitive edge in the market.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted Partners</h2>
            <p className="text-lg text-muted-foreground">
              Collaborating with leading institutions and organizations across Rwanda and beyond
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Bank of Kigali</h3>
                <p className="text-sm text-muted-foreground">Financial Partner</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-2" />
                <h3 className="font-semibold">Rwanda Development Board</h3>
                <p className="text-sm text-muted-foreground">Strategic Partner</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">African Fashion Council</h3>
                <p className="text-sm text-muted-foreground">Industry Partner</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-2" />
                <h3 className="font-semibold">Kigali Fashion Week</h3>
                <p className="text-sm text-muted-foreground">Event Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Differentiators */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground">
              Our unique innovations and approaches that distinguish us in the fashion industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="font-serif">Smart Fabric Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We integrate moisture-wicking and temperature-regulating properties into traditional fabrics, creating
                  comfortable wear for Africa's diverse climates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-2" />
                <CardTitle className="font-serif">Artisan Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our unique partnership model with local artisans ensures authentic traditional techniques while
                  providing fair wages and skills development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="font-serif">Sustainable Production</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Zero-waste production methods and organic dye processes make our clothing environmentally responsible
                  without compromising quality.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Certificates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Recognition & Awards</h2>
            <p className="text-lg text-muted-foreground">Celebrating our achievements and commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif font-semibold mb-2">Best African Fashion Brand 2023</h3>
                <p className="text-sm text-muted-foreground">African Fashion Awards</p>
                <Badge variant="secondary" className="mt-2">
                  Excellence
                </Badge>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif font-semibold mb-2">Sustainable Fashion Leader</h3>
                <p className="text-sm text-muted-foreground">Rwanda Green Awards 2022</p>
                <Badge variant="secondary" className="mt-2">
                  Sustainability
                </Badge>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif font-semibold mb-2">Innovation in Textiles</h3>
                <p className="text-sm text-muted-foreground">East Africa Business Awards 2023</p>
                <Badge variant="secondary" className="mt-2">
                  Innovation
                </Badge>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif font-semibold mb-2">ISO 9001:2015 Certified</h3>
                <p className="text-sm text-muted-foreground">Quality Management System</p>
                <Badge variant="secondary" className="mt-2">
                  Quality
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">Meet the visionaries driving our company forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="/african-woman-ceo.png"
                  alt="Aisha Uwimana - CEO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-serif text-xl font-semibold mb-1">Aisha Uwimana</h3>
                <p className="text-primary font-medium mb-2">Chief Executive Officer</p>
                <p className="text-sm text-muted-foreground">
                  15+ years in fashion industry, former designer at international fashion houses
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="/placeholder-wadoj.png"
                  alt="Jean-Baptiste Nzeyimana - COO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-serif text-xl font-semibold mb-1">Jean-Baptiste Nzeyimana</h3>
                <p className="text-primary font-medium mb-2">Chief Operating Officer</p>
                <p className="text-sm text-muted-foreground">
                  Operations expert with MBA from INSEAD, specializing in sustainable manufacturing
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="/african-fashion-designer.png"
                  alt="Grace Mukamana - Creative Director"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-serif text-xl font-semibold mb-1">Grace Mukamana</h3>
                <p className="text-primary font-medium mb-2">Creative Director</p>
                <p className="text-sm text-muted-foreground">
                  Award-winning designer, graduate of London College of Fashion
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="/african-tech-manager.png"
                  alt="Samuel Habimana - Technology Manager"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-serif text-xl font-semibold mb-1">Samuel Habimana</h3>
                <p className="text-primary font-medium mb-2">Technology Manager</p>
                <p className="text-sm text-muted-foreground">
                  Digital innovation specialist, implementing smart manufacturing solutions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="/textile-quality-manager.png"
                  alt="Marie Uwimana - Quality Manager"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-serif text-xl font-semibold mb-1">Marie Uwimana</h3>
                <p className="text-primary font-medium mb-2">Quality Assurance Manager</p>
                <p className="text-sm text-muted-foreground">
                  Quality control expert ensuring international standards compliance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Future Innovations</h2>
            <p className="text-lg text-muted-foreground">Our roadmap for the next generation of African fashion</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">AI-Powered Design</h3>
                  <p className="text-muted-foreground">
                    Implementing artificial intelligence to create personalized designs that blend customer preferences
                    with traditional African patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 text-accent mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Global Expansion</h3>
                  <p className="text-muted-foreground">
                    Opening flagship stores in major fashion capitals while maintaining our commitment to local artisan
                    communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Artisan Academy</h3>
                  <p className="text-muted-foreground">
                    Establishing a training center to preserve traditional techniques while teaching modern production
                    methods to the next generation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd19.jpg-omVIlsiz5sEUhnrNBQzJqPrD12WlqA.webp"
                alt="Modern African fashion - Future of New Kigali Designers"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Location */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Our Location</h2>
            <p className="text-lg text-muted-foreground">
              Find us in the heart of Kigali, Rwanda's vibrant capital city
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Our Address</h3>
                  <p className="text-muted-foreground">
                    New Kigali Designers & Outfitters
                    <br />
                    Kigali, Rwanda
                    <br />
                    East Africa
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-accent mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Phone: +250 780 521 244
                    <br />
                    Business Hours: Mon-Fri 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4977618709845!2d30.058823315435!3d-1.9440270984190!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0x4a87a383a7b87b23!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New Kigali Designers Location - Kigali, Rwanda"
              ></iframe>
            </div>
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
              <a href="https://wa.me/250780521244" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="text-background border-background hover:bg-background hover:text-foreground bg-transparent"
                >
                  Contact Us
                </Button>
              </a>
              <Link href="/gallery">
                <Button
                  variant="outline"
                  className="text-background border-background hover:bg-background hover:text-foreground bg-transparent"
                >
                  Visit Gallery
                </Button>
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-background/20">
              <p className="text-background/60 text-sm">
                © 2025 New Kigali Designers & Outfitters. All rights reserved. | Designed and manufactured in Rwanda |
                Celebrating African heritage through contemporary fashion
              </p>
              <p className="text-background/50 text-xs mt-2">
                Privacy Policy | Terms of Service | Shipping & Returns | Contact: +250 780 521 244
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
