'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Play, X, Calendar, MapPin, Users } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: '/api/placeholder/600/400',
    thumbnail: '/api/placeholder/300/200',
    title: 'Education Program - Rural School Visit',
    description: 'Distributing educational materials and books to children in rural Maharashtra',
    category: 'education',
    date: '2024-01-15',
    location: 'Maharashtra, India',
    beneficiaries: 150
  },
  {
    id: 2,
    type: 'image',
    src: '/api/placeholder/600/400',
    thumbnail: '/api/placeholder/300/200',
    title: 'Healthcare Camp - Free Medical Checkup',
    description: 'Providing free medical checkups and medicines to underprivileged communities',
    category: 'healthcare',
    date: '2024-01-20',
    location: 'Uttar Pradesh, India',
    beneficiaries: 200
  },
  {
    id: 3,
    type: 'video',
    src: '/api/placeholder/600/400',
    thumbnail: '/api/placeholder/300/200',
    title: 'Women Empowerment Workshop',
    description: 'Skill development workshop for women in rural areas',
    category: 'empowerment',
    date: '2024-02-01',
    location: 'Rajasthan, India',
    beneficiaries: 75
  },
  {
    id: 4,
    type: 'image',
    src: '/api/placeholder/600/400',
    thumbnail: '/api/placeholder/300/200',
    title: 'Clean Water Initiative',
    description: 'Installing water purification systems in remote villages',
    category: 'environment',
    date: '2024-02-10',
    location: 'Gujarat, India',
    beneficiaries: 500
  },
  {
    id: 5,
    type: 'image',
    src: '/api/placeholder/600/400',
    thumbnail: '/api/placeholder/300/200',
    title: 'Food Distribution Drive',
    description: 'Distributing nutritious meals to homeless and needy families',
    category: 'relief',
    date: '2024-02-15',
    location: 'Delhi, India',
    beneficiaries: 300
  },
  {
    id: 6,
    type: 'video',
    src: '/api/placeholder/600/400',
    thumbnail: '/api/placeholder/300/200',
    title: 'Digital Literacy Program',
    description: 'Teaching computer skills to rural youth',
    category: 'education',
    date: '2024-02-20',
    location: 'Karnataka, India',
    beneficiaries: 120
  },
  {
    id: 7,
    type: 'image',
    src: '/api/placeholder/600/400',
    thumbnail: '/api/placeholder/300/200',
    title: 'Tree Plantation Drive',
    description: 'Community tree plantation for environmental conservation',
    category: 'environment',
    date: '2024-03-01',
    location: 'Haryana, India',
    beneficiaries: 1000
  },
  {
    id: 8,
    type: 'image',
    src: '/api/placeholder/600/400',
    thumbnail: '/api/placeholder/300/200',
    title: 'Elderly Care Program',
    description: 'Providing healthcare and companionship to elderly citizens',
    category: 'healthcare',
    date: '2024-03-05',
    location: 'Tamil Nadu, India',
    beneficiaries: 80
  },
  {
    id: 9,
    type: 'video',
    src: '/api/placeholder/600/400',
    thumbnail: '/api/placeholder/300/200',
    title: 'Disaster Relief Operations',
    description: 'Emergency relief distribution during natural disasters',
    category: 'relief',
    date: '2024-03-10',
    location: 'Odisha, India',
    beneficiaries: 2000
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Beneficiary Mother',
    content: 'Umeed Foundation changed my daughter\'s life by providing quality education. She is now pursuing her dreams of becoming a doctor.',
    image: '/api/placeholder/80/80',
    location: 'Maharashtra'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Village Head',
    content: 'The clean water initiative by Umeed Foundation has transformed our entire village. No more water-borne diseases.',
    image: '/api/placeholder/80/80',
    location: 'Gujarat'
  },
  {
    id: 3,
    name: 'Sunita Devi',
    role: 'Women Empowerment Program Graduate',
    content: 'Through the skill development program, I learned tailoring and now run my own small business to support my family.',
    image: '/api/placeholder/80/80',
    location: 'Rajasthan'
  },
  {
    id: 4,
    name: 'Dr. Amit Patel',
    role: 'Volunteer Doctor',
    content: 'Working with Umeed Foundation in healthcare camps has been incredibly rewarding. We\'ve been able to help thousands of people.',
    image: '/api/placeholder/80/80',
    location: 'Uttar Pradesh'
  }
]

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All', count: galleryItems.length },
    { id: 'education', label: 'Education', count: galleryItems.filter(item => item.category === 'education').length },
    { id: 'healthcare', label: 'Healthcare', count: galleryItems.filter(item => item.category === 'healthcare').length },
    { id: 'empowerment', label: 'Women Empowerment', count: galleryItems.filter(item => item.category === 'empowerment').length },
    { id: 'environment', label: 'Environment', count: galleryItems.filter(item => item.category === 'environment').length },
    { id: 'relief', label: 'Relief Work', count: galleryItems.filter(item => item.category === 'relief').length }
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const getCategoryColor = (category) => {
    const colors = {
      education: 'bg-blue-100 text-blue-800',
      healthcare: 'bg-green-100 text-green-800',
      empowerment: 'bg-purple-100 text-purple-800',
      environment: 'bg-emerald-100 text-emerald-800',
      relief: 'bg-orange-100 text-orange-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact Gallery</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Witness the transformation and hope we bring to communities across India
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">50,000+</div>
              <div className="text-blue-200">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-blue-200">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="gallery">Photo & Video Gallery</TabsTrigger>
              <TabsTrigger value="testimonials">Success Stories</TabsTrigger>
            </TabsList>

            <TabsContent value="gallery">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    {category.label}
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <Card 
                    key={item.id} 
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      )}
                      <Badge className={`absolute top-3 left-3 ${getCategoryColor(item.category)}`}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {item.beneficiaries}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="testimonials">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="p-8">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4 mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                          <p className="text-blue-600 text-sm">{testimonial.role}</p>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                            <MapPin className="w-3 h-3" />
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Modal for enlarged view */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold pr-8">
                  {selectedItem.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="relative">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  {selectedItem.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <Badge className={getCategoryColor(selectedItem.category)}>
                    {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                  </Badge>
                  <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Date:</span>
                      {new Date(selectedItem.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Location:</span>
                      {selectedItem.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Beneficiaries:</span>
                      {selectedItem.beneficiaries}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in creating more success stories and transforming lives across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-blue-600">
              Volunteer With Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Make a Donation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}