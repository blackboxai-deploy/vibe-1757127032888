import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, BarChart3, Camera, Users, Calendar, ExternalLink, Shield } from 'lucide-react';

export default function ResourcesPage() {
  const annualReports = [
    {
      year: '2023',
      title: 'Annual Report 2023',
      description: 'Comprehensive overview of our achievements, programs, and financial statements for 2023.',
      size: '2.4 MB',
      pages: 48,
      featured: true
    },
    {
      year: '2022',
      title: 'Annual Report 2022',
      description: 'Complete documentation of our impact and activities throughout 2022.',
      size: '2.1 MB',
      pages: 44
    },
    {
      year: '2021',
      title: 'Annual Report 2021',
      description: 'Annual summary of programs, beneficiaries, and organizational growth in 2021.',
      size: '1.9 MB',
      pages: 40
    }
  ];

  const impactReports = [
    {
      title: 'Education Impact Assessment 2023',
      description: 'Detailed analysis of our education programs reaching 15,000+ children across rural India.',
      category: 'Education',
      date: 'March 2024',
      size: '1.8 MB'
    },
    {
      title: 'Healthcare Initiative Outcomes',
      description: 'Comprehensive report on mobile health clinics and community health programs.',
      category: 'Healthcare',
      date: 'February 2024',
      size: '2.2 MB'
    },
    {
      title: 'Women Empowerment Program Results',
      description: 'Success stories and statistical analysis of our women empowerment initiatives.',
      category: 'Women Empowerment',
      date: 'January 2024',
      size: '1.5 MB'
    },
    {
      title: 'Community Development Impact Study',
      description: 'Long-term impact assessment of infrastructure and community development projects.',
      category: 'Community Development',
      date: 'December 2023',
      size: '3.1 MB'
    }
  ];

  const financialReports = [
    {
      title: 'Financial Transparency Report 2023',
      description: 'Detailed breakdown of fund utilization, expenses, and financial accountability.',
      period: 'FY 2023-24',
      audited: true,
      size: '1.2 MB'
    },
    {
      title: 'Quarterly Financial Summary Q4 2023',
      description: 'Latest quarterly financial performance and fund allocation details.',
      period: 'Q4 2023',
      audited: false,
      size: '0.8 MB'
    },
    {
      title: 'Donor Fund Utilization Report',
      description: 'Transparent reporting on how donor contributions are being utilized across programs.',
      period: '2023',
      audited: true,
      size: '1.5 MB'
    }
  ];

  const mediaKit = [
    {
      title: 'Umeed Foundation Logo Pack',
      description: 'Official logos in various formats (PNG, SVG, EPS) for media and partnership use.',
      type: 'Design Assets',
      size: '5.2 MB'
    },
    {
      title: 'Press Release Template',
      description: 'Standard press release format and recent announcements for media coverage.',
      type: 'Media',
      size: '0.3 MB'
    },
    {
      title: 'Fact Sheet & Statistics',
      description: 'Key facts, figures, and impact statistics about Umeed Foundation.',
      type: 'Information',
      size: '0.5 MB'
    },
    {
      title: 'High-Resolution Photos',
      description: 'Professional photos of our programs, team, and beneficiaries for media use.',
      type: 'Photography',
      size: '15.8 MB'
    }
  ];

  const certifications = [
    {
      title: '12A Registration Certificate',
      description: 'Income Tax Act Section 12A registration for tax exemption status.',
      authority: 'Income Tax Department',
      validUntil: 'Permanent',
      verified: true
    },
    {
      title: '80G Certification',
      description: 'Section 80G approval enabling tax deduction for donors.',
      authority: 'Income Tax Department',
      validUntil: 'March 2027',
      verified: true
    },
    {
      title: 'FCRA Registration',
      description: 'Foreign Contribution Regulation Act registration for international funding.',
      authority: 'Ministry of Home Affairs',
      validUntil: 'December 2026',
      verified: true
    },
    {
      title: 'NGO Darpan Registration',
      description: 'Government of India NGO partnership system registration.',
      authority: 'NITI Aayog',
      validUntil: 'Active',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Resources & Reports</h1>
            <p className="text-xl mb-8 opacity-90">
              Access our comprehensive reports, financial statements, and resources that demonstrate 
              our commitment to transparency and accountability in serving communities across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                100% Transparent
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <FileText className="w-4 h-4 mr-2" />
                Audited Reports
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <BarChart3 className="w-4 h-4 mr-2" />
                Impact Verified
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Annual Reports */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Annual Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive yearly reports showcasing our programs, achievements, and financial transparency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {annualReports.map((report, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${report.featured ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{report.title}</CardTitle>
                    {report.featured && <Badge className="bg-blue-500">Latest</Badge>}
                  </div>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{report.pages} pages</span>
                    <span>{report.size}</span>
                  </div>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Reports */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Impact Reports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed assessments of our program outcomes and community impact across different sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {impactReports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{report.title}</CardTitle>
                    <Badge variant="outline">{report.category}</Badge>
                  </div>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{report.date}</span>
                    <span>{report.size}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Financial Reports */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Financial Transparency</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Audited financial statements and transparent reporting of fund utilization and organizational expenses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {financialReports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{report.period}</span>
                    {report.audited && (
                      <Badge className="bg-green-500">
                        <Shield className="w-3 h-3 mr-1" />
                        Audited
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">{report.size}</div>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Legal Certifications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Legal Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official registrations and certifications that validate our legal status and operational compliance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    {cert.verified && (
                      <Badge className="bg-green-500">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Issuing Authority:</span>
                      <span className="font-medium">{cert.authority}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Valid Until:</span>
                      <span className="font-medium">{cert.validUntil}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Media Kit */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Media Kit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resources for media, partners, and stakeholders including logos, press materials, and official photography.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mediaKit.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge variant="outline">{item.type}</Badge>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-500 mb-4">{item.size}</div>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact for More Resources */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Additional Resources?</h2>
          <p className="text-xl mb-8 opacity-90">
            Looking for specific reports, data, or documentation? Our team is here to help with any additional information you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              <Users className="w-5 h-5 mr-2" />
              Contact Our Team
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Meeting
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}