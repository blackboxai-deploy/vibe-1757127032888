'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Users, GraduationCap, Stethoscope, TreePine, Home, CreditCard, Smartphone, Building2 } from 'lucide-react'

export default function DonatePage() {
  const [donationType, setDonationType] = useState('one-time')
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [selectedCause, setSelectedCause] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000]

  const causes = [
    {
      id: 'education',
      title: 'Education for All',
      description: 'Support quality education for underprivileged children',
      icon: GraduationCap,
      impact: '₹500 can provide school supplies for 1 child for 3 months'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Access',
      description: 'Provide medical care and health services to rural communities',
      icon: Stethoscope,
      impact: '₹1000 can cover basic medical checkup for 5 people'
    },
    {
      id: 'women-empowerment',
      title: 'Women Empowerment',
      description: 'Skill development and entrepreneurship programs for women',
      icon: Users,
      impact: '₹2500 can fund vocational training for 1 woman for 1 month'
    },
    {
      id: 'environment',
      title: 'Environmental Conservation',
      description: 'Tree plantation and environmental awareness programs',
      icon: TreePine,
      impact: '₹100 can plant and maintain 5 trees for 1 year'
    },
    {
      id: 'disaster-relief',
      title: 'Disaster Relief',
      description: 'Emergency support during natural disasters and crises',
      icon: Home,
      impact: '₹5000 can provide emergency kit for 1 family'
    },
    {
      id: 'general',
      title: 'General Fund',
      description: 'Support our overall mission and operational needs',
      icon: Heart,
      impact: 'Flexible funding for our most urgent needs'
    }
  ]

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: Smartphone },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'netbanking', name: 'Net Banking', icon: Building2 }
  ]

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount.toString())
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setAmount('')
  }

  const getFinalAmount = () => {
    return customAmount || amount
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Difference Today</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous donation helps us continue our mission to create positive change in communities across India. 
            Every contribution, no matter the size, makes a meaningful impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  Donation Details
                </CardTitle>
                <CardDescription>
                  Choose your donation type, amount, and cause to support
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Type */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Donation Type</Label>
                  <RadioGroup value={donationType} onValueChange={setDonationType} className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time">One-time Donation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly">Monthly Donation</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Select Amount (₹)</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amt) => (
                      <Button
                        key={amt}
                        variant={amount === amt.toString() ? "default" : "outline"}
                        onClick={() => handleAmountSelect(amt)}
                        className="h-12"
                      >
                        ₹{amt.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="custom-amount" className="text-sm text-gray-600">Custom Amount</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Cause Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Choose a Cause</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {causes.map((cause) => {
                      const IconComponent = cause.icon
                      return (
                        <Card
                          key={cause.id}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            selectedCause === cause.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                          }`}
                          onClick={() => setSelectedCause(cause.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <IconComponent className="h-6 w-6 text-blue-600 mt-1" />
                              <div className="flex-1">
                                <h3 className="font-semibold text-sm">{cause.title}</h3>
                                <p className="text-xs text-gray-600 mt-1">{cause.description}</p>
                                <p className="text-xs text-green-600 mt-2 font-medium">{cause.impact}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="full-name">Full Name *</Label>
                    <Input id="full-name" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="pan">PAN Number (for 80G receipt)</Label>
                    <Input id="pan" placeholder="Enter PAN for tax exemption" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter your complete address" rows={3} />
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Payment Method</Label>
                  <div className="grid grid-cols-3 gap-4">
                    {paymentMethods.map((method) => {
                      const IconComponent = method.icon
                      return (
                        <Card
                          key={method.id}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            paymentMethod === method.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                          }`}
                          onClick={() => setPaymentMethod(method.id)}
                        >
                          <CardContent className="p-4 text-center">
                            <IconComponent className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                            <p className="text-sm font-medium">{method.name}</p>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="anonymous" />
                    <Label htmlFor="anonymous" className="text-sm">Make this donation anonymous</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">Subscribe to our newsletter for updates</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="receipt" />
                    <Label htmlFor="receipt" className="text-sm">I want to receive 80G tax exemption receipt</Label>
                  </div>
                </div>

                {/* Donate Button */}
                <Button 
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  disabled={!getFinalAmount() || !selectedCause || !paymentMethod}
                >
                  Donate ₹{getFinalAmount() ? parseInt(getFinalAmount()).toLocaleString() : '0'} Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Summary */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Your Impact</CardTitle>
              </CardHeader>
              <CardContent>
                {getFinalAmount() && selectedCause ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">₹{parseInt(getFinalAmount()).toLocaleString()}</div>
                      <div className="text-sm text-gray-600">
                        {donationType === 'monthly' ? 'Monthly Donation' : 'One-time Donation'}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Supporting:</h4>
                      <p className="text-sm text-gray-600">
                        {causes.find(c => c.id === selectedCause)?.title}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center">Select amount and cause to see your impact</p>
                )}
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Why Donate to Umeed?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-sm">80G Tax Exemption</h4>
                    <p className="text-xs text-gray-600">Get tax benefits under Section 80G</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-sm">100% Transparency</h4>
                    <p className="text-xs text-gray-600">Track how your donation is used</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-sm">Secure Payments</h4>
                    <p className="text-xs text-gray-600">Your payment information is safe</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-sm">Regular Updates</h4>
                    <p className="text-xs text-gray-600">Receive impact reports and updates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about your donation? Our team is here to help.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> donate@umeedindia.org</p>
                  <p><strong>Phone:</strong> +91-XXXX-XXXXXX</p>
                  <p><strong>Hours:</strong> Mon-Fri, 9 AM - 6 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Umeed Foundation of India is registered under Section 12A and 80G of the Income Tax Act. 
            Your donation is eligible for tax exemption. All payments are processed securely through our trusted payment partners.
          </p>
        </div>
      </div>
    </div>
  )
}