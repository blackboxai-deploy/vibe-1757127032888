import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, GraduationCap, Stethoscope, TreePine, HandHeart, ArrowRight, Star, Quote } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Umeed Foundation</h1>
                <p className="text-xs text-gray-600">of India</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/programs" className="text-gray-700 hover:text-blue-600">Programs</Link>
              <Link href="/get-involved" className="text-gray-700 hover:text-blue-600">Get Involved</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
            <Button asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bringing Hope to Every Life
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Umeed Foundation of India is dedicated to transforming lives through education, healthcare, and community development across rural and urban India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact So Far</h2>
            <p className="text-lg text-gray-600">Making a difference across India, one life at a time</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25,000+</div>
              <div className="text-gray-700">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-700">Villages Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <div className="text-gray-700">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">12+</div>
              <div className="text-gray-700">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Programs</h2>
            <p className="text-lg text-gray-600">Comprehensive initiatives addressing India's most pressing challenges</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Education for All</CardTitle>
                <CardDescription>
                  Providing quality education to underprivileged children in rural and urban areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Free primary and secondary education</li>
                  <li>• Digital literacy programs</li>
                  <li>• Scholarship programs</li>
                  <li>• Adult education initiatives</li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/programs#education">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Healthcare Access</CardTitle>
                <CardDescription>
                  Bringing essential healthcare services to underserved communities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Mobile health clinics</li>
                  <li>• Maternal and child health</li>
                  <li>• Health awareness campaigns</li>
                  <li>• Medicine distribution</li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/programs#healthcare">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Women Empowerment</CardTitle>
                <CardDescription>
                  Empowering women through skill development and entrepreneurship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Vocational training programs</li>
                  <li>• Microfinance initiatives</li>
                  <li>• Self-help group formation</li>
                  <li>• Leadership development</li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/programs#women-empowerment">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Environmental Conservation</CardTitle>
                <CardDescription>
                  Protecting our environment for future generations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Tree plantation drives</li>
                  <li>• Water conservation projects</li>
                  <li>• Waste management programs</li>
                  <li>• Renewable energy initiatives</li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/programs#environment">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <HandHeart className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Disaster Relief</CardTitle>
                <CardDescription>
                  Rapid response and rehabilitation during natural disasters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Emergency relief supplies</li>
                  <li>• Temporary shelter setup</li>
                  <li>• Medical aid distribution</li>
                  <li>• Community rehabilitation</li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/programs#disaster-relief">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Community Development</CardTitle>
                <CardDescription>
                  Building stronger, self-reliant communities across India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Infrastructure development</li>
                  <li>• Livelihood programs</li>
                  <li>• Community centers</li>
                  <li>• Social awareness campaigns</li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/programs#community">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Hope</h2>
            <p className="text-lg text-gray-600">Real stories from the communities we serve</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-4">
                  "Thanks to Umeed Foundation's education program, my daughter is now the first in our family to attend college. She dreams of becoming a doctor to serve our village."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                    <p className="text-sm text-gray-600">Farmer, Uttar Pradesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-700 mb-4">
                  "The mobile health clinic saved my newborn's life. Now I volunteer to help other mothers in our community access healthcare services."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Priya Sharma</p>
                    <p className="text-sm text-gray-600">Mother, Rajasthan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-purple-600 mb-4" />
                <p className="text-gray-700 mb-4">
                  "The skill development program helped me start my own tailoring business. I now employ 5 other women from my village."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Sunita Devi</p>
                    <p className="text-sm text-gray-600">Entrepreneur, Bihar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Updates</h2>
              <p className="text-lg text-gray-600">Stay informed about our recent activities and achievements</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/news">View All News</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <Badge className="mb-3">Education</Badge>
                <h3 className="text-xl font-semibold mb-2">New School Inaugurated in Rural Maharashtra</h3>
                <p className="text-gray-600 mb-4">We're proud to announce the opening of our 50th school, providing education to 300+ children in remote villages.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">March 15, 2024</span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">Healthcare</Badge>
                <h3 className="text-xl font-semibold mb-2">Free Health Camp Serves 1000+ Patients</h3>
                <p className="text-gray-600 mb-4">Our recent health camp in West Bengal provided free medical checkups and medicines to over 1000 patients.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">March 10, 2024</span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Environment</Badge>
                <h3 className="text-xl font-semibold mb-2">10,000 Trees Planted in Himachal Pradesh</h3>
                <p className="text-gray-600 mb-4">Our environmental conservation drive successfully planted 10,000 saplings with local community participation.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">March 5, 2024</span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every contribution, big or small, helps us bring hope and positive change to communities across India. 
            Together, we can build a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/get-involved">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Umeed Foundation</h3>
                  <p className="text-sm text-gray-400">of India</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Bringing hope and positive change to communities across India through education, healthcare, and sustainable development.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/programs" className="hover:text-white">Our Programs</Link></li>
                <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
                <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/donate" className="hover:text-white">Donate</Link></li>
                <li><Link href="/get-involved" className="hover:text-white">Volunteer</Link></li>
                <li><Link href="/get-involved#partner" className="hover:text-white">Partner with Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>123 Hope Street, New Delhi - 110001</p>
                <p>Phone: +91 11 2345 6789</p>
                <p>Email: info@umeedfoundation.org</p>
                <p>Registration: 12A/80G Certified</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Umeed Foundation of India. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}