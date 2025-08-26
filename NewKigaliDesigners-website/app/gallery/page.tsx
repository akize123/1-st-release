import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Heart, Star } from "lucide-react"

export default function GalleryPage() {
  const clothingCategories = {
    women: [
      {
        id: 1,
        name: "Traditional Rwandan Dress",
        price: "$120",
        image: "/traditional-rwandan-dress.png",
        description: "Elegant traditional dress with authentic Rwandan patterns",
        category: "Traditional",
        rating: 4.9,
      },
      {
        id: 2,
        name: "Modern African Print Blouse",
        price: "$65",
        image: "/modern-african-blouse.png",
        description: "Contemporary blouse featuring vibrant African prints",
        category: "Modern",
        rating: 4.7,
      },
      {
        id: 3,
        name: "Kigali Business Suit",
        price: "$180",
        image: "/kigali-business-suit.png",
        description: "Professional suit with subtle African-inspired details",
        category: "Modern",
        rating: 4.8,
      },
      {
        id: 4,
        name: "Ceremonial Wrapper",
        price: "$95",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd15.jpg-lX5oUB0M17pQ10mQSYisoHt0ZfS8Hb.webp",
        description: "Traditional ceremonial wrapper for special occasions",
        category: "Traditional",
        rating: 5.0,
      },
    ],
    men: [
      {
        id: 5,
        name: "Traditional Rwandan Shirt",
        price: "$85",
        image: "/traditional-rwandan-shirt.png",
        description: "Classic men's shirt with traditional embroidery",
        category: "Traditional",
        rating: 4.6,
      },
      {
        id: 6,
        name: "Modern African Blazer",
        price: "$145",
        image: "/modern-african-blazer.png",
        description: "Sophisticated blazer with contemporary African styling",
        category: "Modern",
        rating: 4.8,
      },
      {
        id: 7,
        name: "Casual Kente Shirt",
        price: "$75",
        image: "/casual-kente-shirt.png",
        description: "Comfortable casual shirt with Kente-inspired patterns",
        category: "Modern",
        rating: 4.5,
      },
      {
        id: 8,
        name: "Formal Traditional Robe",
        price: "$200",
        image: "/formal-traditional-robe.png",
        description: "Elegant formal robe for ceremonial occasions",
        category: "Traditional",
        rating: 4.9,
      },
      {
        id: 17,
        name: "Executive Black Traditional Shirt",
        price: "$95",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd19.jpg-omVIlsiz5sEUhnrNBQzJqPrD12WlqA.webp",
        description: "Premium black traditional shirt with elegant trim details",
        category: "Traditional",
        rating: 4.8,
      },
      {
        id: 18,
        name: "Contemporary White Dress Shirt",
        price: "$75",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd18.jpg-A4bXsHxEpwfVn7O8JSE1j7340vEaT4.webp",
        description: "Modern white shirt with navy accent details",
        category: "Modern",
        rating: 4.7,
      },
      {
        id: 19,
        name: "Traditional Colored Shirts Collection",
        price: "$80",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd15.jpg-lX5oUB0M17pQ10mQSYisoHt0ZfS8Hb.webp",
        description: "Handcrafted traditional shirts in vibrant colors",
        category: "Traditional",
        rating: 4.9,
      },
      {
        id: 20,
        name: "Premium Business Suits",
        price: "$250",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd13.jpg-69FgkpVLUlBnUhL7UOzuU5NDaDDtTh.webp",
        description: "High-quality formal suits for professional occasions",
        category: "Modern",
        rating: 4.8,
      },
      {
        id: 21,
        name: "Traditional Ceremonial Pants",
        price: "$65",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd12.jpg-7A0gjp287fWqUifOTfTiAA3228NH63.webp",
        description: "Elegant traditional pants with decorative lacing",
        category: "Traditional",
        rating: 4.6,
      },
      {
        id: 22,
        name: "Purple Traditional Shirt",
        price: "$70",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd16.jpg-WzYr8keIZBdgRmi9FpGmZoYJWW8MDe.webp",
        description: "Beautiful purple traditional shirt with geometric patterns",
        category: "Traditional",
        rating: 4.7,
      },
    ],
    girls: [
      {
        id: 9,
        name: "Little Princess Dress",
        price: "$45",
        image: "/little-princess-dress.png",
        description: "Adorable dress with colorful African patterns",
        category: "Traditional",
        rating: 4.8,
      },
      {
        id: 10,
        name: "School Uniform Blouse",
        price: "$35",
        image: "/school-uniform-blouse.png",
        description: "Comfortable school blouse with quality fabric",
        category: "Modern",
        rating: 4.6,
      },
      {
        id: 11,
        name: "Party Dress",
        price: "$55",
        image: "/girls-party-dress.png",
        description: "Beautiful party dress for special celebrations",
        category: "Modern",
        rating: 4.7,
      },
      {
        id: 12,
        name: "Traditional Festival Outfit",
        price: "$60",
        image: "/girls-festival-outfit.png",
        description: "Traditional outfit perfect for cultural festivals",
        category: "Traditional",
        rating: 4.9,
      },
    ],
    boys: [
      {
        id: 13,
        name: "Young Gentleman Shirt",
        price: "$40",
        image: "/young-gentleman-shirt.png",
        description: "Smart casual shirt for young boys",
        category: "Modern",
        rating: 4.5,
      },
      {
        id: 14,
        name: "Traditional Boy's Outfit",
        price: "$50",
        image: "/traditional-boys-outfit.png",
        description: "Traditional outfit with authentic Rwandan styling",
        category: "Traditional",
        rating: 4.7,
      },
      {
        id: 15,
        name: "School Uniform Set",
        price: "$65",
        image: "/boys-school-uniform.png",
        description: "Complete school uniform set with shirt and shorts",
        category: "Modern",
        rating: 4.6,
      },
      {
        id: 16,
        name: "Cultural Ceremony Wear",
        price: "$70",
        image: "/boys-ceremony-wear.png",
        description: "Special outfit for cultural ceremonies and events",
        category: "Traditional",
        rating: 4.8,
      },
      {
        id: 23,
        name: "Colorful Hoodies Collection",
        price: "$45",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd11.jpg-MjMlICxgqb4IE5UFRAV4mfGWKoOuFA.webp",
        description: "Vibrant hoodies in multiple colors for active boys",
        category: "Modern",
        rating: 4.6,
      },
      {
        id: 24,
        name: "Sports Polo Shirts",
        price: "$35",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd17.jpg-oVLl08qk5RJQ3daf4MTVnf9ztccSoK.webp",
        description: "Comfortable polo shirts perfect for sports and casual wear",
        category: "Modern",
        rating: 4.5,
      },
    ],
    specialty: [
      {
        id: 25,
        name: "Artisan Yellow Traditional Shirt",
        price: "$85",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nkd14.jpg-tuuQ6U2JiBewUW2DcKI6xEmLDbwSgT.webp",
        description: "Handcrafted yellow traditional shirt with intricate details",
        category: "Traditional",
        rating: 4.9,
      },
    ],
  }

  const ClothingCard = ({ item }: { item: any }) => (
    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-background to-muted/20">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3">
          <Badge
            variant={item.category === "Traditional" ? "default" : "secondary"}
            className="shadow-lg backdrop-blur-sm bg-background/90"
          >
            {item.category}
          </Badge>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
        >
          Quick View
        </Button>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="font-serif text-lg">{item.name}</CardTitle>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{item.rating}</span>
          </div>
        </div>
        <CardDescription className="text-sm">{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
            {item.price}
          </span>
          <Button size="sm" className="gap-2 hover:gap-3 transition-all duration-300">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Fashion Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our exquisite collection of traditional and modern African clothing for the entire family
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                All Categories
              </Button>
              <Button variant="outline" size="sm">
                Traditional
              </Button>
              <Button variant="outline" size="sm">
                Modern
              </Button>
              <Button variant="outline" size="sm">
                New Arrivals
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Price: Low to High
              </Button>
              <Button variant="outline" size="sm">
                Most Popular
              </Button>
            </div>
          </div>

          <Tabs defaultValue="women" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 h-12">
              <TabsTrigger value="women" className="text-lg">
                Women
              </TabsTrigger>
              <TabsTrigger value="men" className="text-lg">
                Men
              </TabsTrigger>
              <TabsTrigger value="girls" className="text-lg">
                Girls
              </TabsTrigger>
              <TabsTrigger value="boys" className="text-lg">
                Boys
              </TabsTrigger>
              <TabsTrigger value="specialty" className="text-lg">
                Specialty
              </TabsTrigger>
            </TabsList>

            <TabsContent value="women">
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Women's Collection</h2>
                <p className="text-muted-foreground">Elegant designs that celebrate femininity with African heritage</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {clothingCategories.women.map((item) => (
                  <ClothingCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="men">
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Men's Collection</h2>
                <p className="text-muted-foreground">
                  Sophisticated styles that blend tradition with contemporary fashion
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {clothingCategories.men.map((item) => (
                  <ClothingCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="girls">
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Girls' Collection</h2>
                <p className="text-muted-foreground">Delightful outfits that inspire young fashionistas</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {clothingCategories.girls.map((item) => (
                  <ClothingCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="boys">
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Boys' Collection</h2>
                <p className="text-muted-foreground">Stylish and comfortable clothing for active young gentlemen</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {clothingCategories.boys.map((item) => (
                  <ClothingCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specialty">
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Specialty Collection</h2>
                <p className="text-muted-foreground">Unique artisan pieces and limited edition designs</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {clothingCategories.specialty.map((item) => (
                  <ClothingCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We offer custom designs tailored to your specific needs and preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Request Custom Design
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Contact Our Designers
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
            <div className="flex justify-center space-x-6">
              <a href="https://wa.me/250780521244" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="text-background border-background hover:bg-background hover:text-foreground bg-transparent"
                >
                  Contact Us
                </Button>
              </a>
              <Button
                variant="outline"
                className="text-background border-background hover:bg-background hover:text-foreground bg-transparent"
              >
                Learn Our Process
              </Button>
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
