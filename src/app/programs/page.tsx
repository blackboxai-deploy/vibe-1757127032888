import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Users, Leaf, Home, HandHeart, GraduationCap, Stethoscope, Hammer, TreePine, Shield, Gift } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: "Education for All",
    description: "Providing quality education to underprivileged children across rural and urban areas of India.",
    icon: <BookOpen className="h-8 w-8" />,
    category: "Education",
    beneficiaries: "15,000+ children",
    locations: "12 states",
    details: [
      "Free primary and secondary education",
      "Digital literacy programs",
      "Scholarship programs for higher education",
      "Teacher training and development",
      "Infrastructure development in schools"
    ],
    impact: "95% of our students complete their primary education successfully",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600"
  },
  {
    id: 2,
    title: "Healthcare Access Initiative",
    description: "Ensuring accessible and affordable healthcare services for marginalized communities.",
    icon: <Stethoscope className="h-8 w-8" />,
    category: "Healthcare",
    beneficiaries: "25,000+ patients",
    locations: "8 states",
    details: [
      "Mobile medical units for remote areas",
      "Free health check-up camps",
      "Maternal and child health programs",
      "Mental health awareness campaigns",
      "Medicine distribution programs"
    ],
    impact: "Reduced infant mortality rate by 40% in our operational areas",
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600"
  },
  {
    id: 3,
    title: "Women Empowerment Program",
    description: "Empowering women through skill development, entrepreneurship, and leadership training.",
    icon: <Users className="h-8 w-8" />,
    category: "Women Empowerment",
    beneficiaries: "8,500+ women",
    locations: "10 states",
    details: [
      "Vocational training and skill development",
      "Microfinance and entrepreneurship support",
      "Self-help group formation",
      "Legal awareness and rights education",
      "Leadership development programs"
    ],
    impact: "75% of trained women have started their own businesses",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600"
  },
  {
    id: 4,
    title: "Community Development",
    description: "Building sustainable communities through infrastructure development and capacity building.",
    icon: <Hammer className="h-8 w-8" />,
    category: "Community Development",
    beneficiaries: "50,000+ people",
    locations: "15 districts",
    details: [
      "Water and sanitation projects",
      "Rural road construction",
      "Community center development",
      "Livelihood enhancement programs",
      "Digital connectivity initiatives"
    ],
    impact: "100+ villages now have access to clean drinking water",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600"
  },
  {
    id: 5,
    title: "Environmental Conservation",
    description: "Protecting the environment through tree plantation, waste management, and awareness programs.",
    icon: <TreePine className="h-8 w-8" />,
    category: "Environment",
    beneficiaries: "200+ communities",
    locations: "20 states",
    details: [
      "Tree plantation drives",
      "Waste management systems",
      "Renewable energy promotion",
      "Water conservation projects",
      "Environmental education programs"
    ],
    impact: "1 million+ trees planted across India",
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600"
  },
  {
    id: 6,
    title: "Disaster Relief & Rehabilitation",
    description: "Providing immediate relief and long-term rehabilitation support during natural disasters.",
    icon: <Shield className="h-8 w-8" />,
    category: "Disaster Relief",
    beneficiaries: "30,000+ families",
    locations: "Pan India",
    details: [
      "Emergency relief distribution",
      "Temporary shelter arrangements",
      "Medical aid and support",
      "Livelihood restoration programs",
      "Community resilience building"
    ],
    impact: "Provided relief to 100+ disaster-affected areas",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600"
  }
];

const stats = [
  { label: "Active Programs", value: "6", icon: <Gift className="h-6 w-6" /> },
  { label: "Total Beneficiaries", value: "128,500+", icon: <Users className="h-6 w-6" /> },
  { label: "States Covered", value: "20", icon: <Home className="h-6 w-6" /> },
  { label: "Partner Organizations", value: "45", icon: <HandHeart className="h-6 w-6" /> }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs & Initiatives
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transforming lives through comprehensive development programs across India
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-blue-200">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Making a Difference Through Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each program is designed to address specific challenges faced by communities across India, 
              creating sustainable impact and empowering people to build better futures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className={`${program.color} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`${program.iconColor} bg-white p-3 rounded-lg shadow-sm`}>
                        {program.icon}
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {program.category}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {program.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-700 text-base mt-4">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-gray-900">{program.beneficiaries}</div>
                      <div className="text-sm text-gray-600">Beneficiaries</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-gray-900">{program.locations}</div>
                      <div className="text-sm text-gray-600">Locations</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {program.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Impact Highlight:</h4>
                    <p className="text-gray-700 italic">"{program.impact}"</p>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1">
                      Support This Program
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Creating Change
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Every contribution, whether through donations, volunteering, or partnerships, 
            helps us expand our reach and deepen our impact across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Become a Volunteer
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}