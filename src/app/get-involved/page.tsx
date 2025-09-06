import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Users, Building2, Handshake, Calendar, MapPin, Clock, Mail, Phone, CheckCircle } from "lucide-react"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our Mission of Hope
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Together, we can create lasting change in communities across India. 
            Your involvement makes the difference between hope and despair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Volunteer Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose how you want to contribute to our mission of bringing hope and positive change to communities in need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our team of dedicated volunteers and directly impact lives in your community.
                </p>
                <Button className="w-full">Join as Volunteer</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Corporate Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Partner with us for CSR initiatives and create meaningful social impact together.
                </p>
                <Button className="w-full">Become Partner</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Community Ambassador</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Spread awareness and mobilize support in your local community and networks.
                </p>
                <Button className="w-full">Become Ambassador</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Handshake className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Professional Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Contribute your professional skills in areas like legal, medical, or technical support.
                </p>
                <Button className="w-full">Offer Skills</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Current Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect way to contribute your time and skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  Education Support
                </CardTitle>
                <CardDescription>Teaching and mentoring children</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    Delhi, Mumbai, Bangalore
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    Weekends, 4-6 hours
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Help underprivileged children with basic education, homework assistance, and life skills development.
                </p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Healthcare Camps
                </CardTitle>
                <CardDescription>Medical assistance and awareness</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    Rural areas across India
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    Monthly camps, 1-2 days
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Support medical professionals in conducting health checkups and awareness programs in rural communities.
                </p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  Community Development
                </CardTitle>
                <CardDescription>Infrastructure and skill development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    Various locations
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    Flexible timing
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Participate in community building projects, skill development workshops, and infrastructure improvements.
                </p>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Volunteer Application Form
              </h2>
              <p className="text-lg text-gray-600">
                Fill out this form to start your journey with Umeed Foundation
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Join Our Volunteer Team</CardTitle>
                <CardDescription>
                  Please provide your details and preferences to help us match you with the right opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="Your city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="mumbai">Maharashtra</SelectItem>
                          <SelectItem value="bangalore">Karnataka</SelectItem>
                          <SelectItem value="chennai">Tamil Nadu</SelectItem>
                          <SelectItem value="kolkata">West Bengal</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Areas of Interest *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education Support</SelectItem>
                        <SelectItem value="healthcare">Healthcare Camps</SelectItem>
                        <SelectItem value="community">Community Development</SelectItem>
                        <SelectItem value="women">Women Empowerment</SelectItem>
                        <SelectItem value="environment">Environmental Conservation</SelectItem>
                        <SelectItem value="disaster">Disaster Relief</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekends">Weekends Only</SelectItem>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                        <SelectItem value="monthly">Monthly Commitment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Professional Skills/Experience</Label>
                    <Textarea 
                      id="skills" 
                      placeholder="Tell us about your professional background, skills, or any relevant experience..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to volunteer with us?</Label>
                    <Textarea 
                      id="motivation" 
                      placeholder="Share your motivation and what you hope to achieve through volunteering..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and privacy policy *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      I would like to receive updates about volunteer opportunities and foundation activities
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Partnership */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Corporate Social Responsibility
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Partner with Umeed Foundation to fulfill your CSR objectives while creating meaningful social impact across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  Strategic Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Long-term collaborations aligned with your company's values and our mission for sustainable development.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Customized CSR programs</li>
                  <li>• Employee engagement opportunities</li>
                  <li>• Impact measurement and reporting</li>
                  <li>• Brand visibility and recognition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  Project Sponsorship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Fund specific projects and see direct impact of your contribution in communities across India.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Education infrastructure development</li>
                  <li>• Healthcare facility establishment</li>
                  <li>• Skill development centers</li>
                  <li>• Environmental conservation projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  Employee Volunteering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Engage your employees in meaningful volunteer activities that build team spirit and social consciousness.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Team building through social service</li>
                  <li>• Skill-based volunteering programs</li>
                  <li>• Corporate volunteer days</li>
                  <li>• Leadership development through service</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Mail className="h-5 w-5 mr-2" />
              Contact for Partnership
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600">
              Contact us today to begin your journey of making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Send us your queries and we'll get back to you within 24 hours.
                </p>
                <p className="font-semibold">volunteer@umeedfoundation.org</p>
                <p className="font-semibold">partnerships@umeedfoundation.org</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Speak directly with our volunteer coordination team.
                </p>
                <p className="font-semibold">+91 98765 43210</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Visit our office to learn more about our work and opportunities.
                </p>
                <p className="font-semibold">123 Hope Street</p>
                <p className="font-semibold">New Delhi - 110001</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}