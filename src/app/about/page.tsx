import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Eye, Award, FileText } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Umeed Foundation of India</h1>
            <p className="text-xl leading-relaxed">
              Empowering communities, transforming lives, and building a better tomorrow for every Indian citizen through sustainable development and compassionate service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2020, Umeed Foundation of India emerged from a simple yet powerful belief: every individual deserves access to basic necessities like education, healthcare, and opportunities for growth. What started as a small community initiative has grown into a nationwide movement of hope and transformation.
                  </p>
                  <p>
                    Our journey began when our founders witnessed the stark inequalities in rural and urban communities across India. Driven by compassion and a vision for inclusive development, we established Umeed Foundation to bridge these gaps and create sustainable solutions for India's most pressing challenges.
                  </p>
                  <p>
                    Today, we operate across 15 states in India, touching the lives of over 50,000 individuals annually through our comprehensive programs in education, healthcare, women empowerment, and community development.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Building Hope Since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-800">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To empower underprivileged communities across India by providing access to quality education, healthcare, and sustainable livelihood opportunities, fostering inclusive growth and social transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-800">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To create an equitable society where every individual has the opportunity to realize their full potential, contributing to a prosperous and harmonious India free from poverty and inequality.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-800">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Compassion:</strong> Serving with empathy and care</p>
                    <p><strong>Integrity:</strong> Transparent and ethical practices</p>
                    <p><strong>Excellence:</strong> Quality in all our initiatives</p>
                    <p><strong>Sustainability:</strong> Long-term impact focus</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600">Dedicated leaders driving positive change across India</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Dr. Rajesh Kumar</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">Founder & Chairman</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    With over 20 years of experience in social development, Dr. Kumar leads our strategic vision and community outreach initiatives across India.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Ms. Priya Sharma</CardTitle>
                  <CardDescription className="text-green-600 font-medium">Executive Director</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A passionate advocate for women's empowerment and education, Ms. Sharma oversees our program implementation and impact measurement.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Mr. Amit Patel</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">Operations Head</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    With expertise in project management and community development, Mr. Patel ensures efficient delivery of our programs nationwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl opacity-90">Transforming lives across India</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-lg opacity-90">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-lg opacity-90">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-lg opacity-90">Villages Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-lg opacity-90">Active Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Legal Information & Certifications</h2>
              <p className="text-gray-600">Transparency and accountability in all our operations</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <FileText className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle className="text-xl">Registration Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Registration Number:</span>
                    <span className="text-gray-600">NGO/2020/0001234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">PAN Number:</span>
                    <span className="text-gray-600">AABTU1234C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">12A Registration:</span>
                    <span className="text-gray-600">Valid</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">80G Certification:</span>
                    <span className="text-gray-600">Valid</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Award className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle className="text-xl">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">FCRA Registered</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">ISO 9001:2015</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Guidestar India</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">CSR Compliant</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Registered Office: 123 Gandhi Nagar, New Delhi - 110001, India<br />
                Email: info@umeedfoundation.org | Phone: +91-11-12345678
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}