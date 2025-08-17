'use client';

import { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Stethoscope, 
  Award, 
  Users, 
  Heart, 
  Mail, 
  Phone, 
  MapPin,
  ChevronDown,
  Star,
  BookOpen,
  Activity,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Aiman Riaz</h1>
            <div className="hidden md:flex space-x-8">
              {['About', 'Academic', 'Experience', 'Skills', 'Leadership', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="mb-4">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  MBBS Student | 4th Year
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Aiman <span className="text-blue-600">Riaz</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Medical student at <strong>Nishtar Medical University</strong> passionate about 
                  advancing healthcare and serving communities through evidence-based medicine.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-blue-600 hover:bg-blue-700 px-8"
                >
                  Get In Touch
                  <Mail className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('academic')}
                  className="px-8"
                >
                  View Portfolio
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1084/1100</div>
                  <div className="text-sm text-slate-600">FSc Marks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">4th Year</div>
                  <div className="text-sm text-slate-600">MBBS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">Top Merit</div>
                  <div className="text-sm text-slate-600">MDCAT</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl flex items-center justify-center">
                <div className="text-6xl text-blue-200">
                  <Activity className="w-32 h-32" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">Currently studying at Nishtar Medical University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Background */}
      <section id="academic" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Academic Excellence</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A journey marked by consistent high performance and dedication to medical education
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: "MBBS - 4th Year",
                institution: "Nishtar Medical University, Multan",
                description: "One of Pakistan's most prestigious medical institutes",
                status: "In Progress",
                color: "blue",
                icon: <Stethoscope className="w-6 h-6" />
              },
              {
                title: "MDCAT Examination",
                institution: "High Merit Achievement",
                description: "Successfully cleared with exceptional performance",
                status: "Completed",
                color: "teal",
                icon: <Award className="w-6 h-6" />
              },
              {
                title: "FSc (Pre-Medical)",
                institution: "1084/1100 Marks",
                description: "Among the top achievers in pre-medical studies",
                status: "Completed",
                color: "emerald",
                icon: <BookOpen className="w-6 h-6" />
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`p-3 rounded-xl bg-${item.color}-100`}>
                      <div className={`text-${item.color}-600`}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                        <Badge variant={item.status === 'In Progress' ? 'default' : 'secondary'}>
                          {item.status}
                        </Badge>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{item.institution}</p>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Activity className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Clinical Experience</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hands-on medical training across multiple specialties with real patient care experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Clinical Rotations",
                areas: ["Medicine", "Surgery", "Pediatrics", "Gynecology"],
                description: "Comprehensive exposure to major medical specialties",
                icon: <Stethoscope className="w-8 h-8" />
              },
              {
                title: "Patient Care",
                areas: ["History Taking", "Diagnosis Support", "Ward Duties"],
                description: "Direct patient interaction and clinical skill development",
                icon: <Heart className="w-8 h-8" />
              },
              {
                title: "Medical Research",
                areas: ["Case Studies", "Research Writing", "Presentations"],
                description: "Active participation in academic research activities",
                icon: <BookOpen className="w-8 h-8" />
              },
              {
                title: "Team Collaboration",
                areas: ["Case Discussions", "Medical Teams", "Peer Learning"],
                description: "Working effectively in healthcare team environments",
                icon: <Users className="w-8 h-8" />
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-teal-600 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.areas.map((area, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Achievements */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Achievements</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Core competencies and recognition earned throughout the academic journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Core Medical Knowledge</h3>
              <div className="space-y-6">
                {[
                  { skill: "Anatomy & Physiology", level: 95 },
                  { skill: "Pathology", level: 92 },
                  { skill: "Pharmacology", level: 88 },
                  { skill: "Clinical Skills", level: 90 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">{item.skill}</span>
                      <span className="text-slate-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Key Achievements</h3>
              <div className="space-y-4">
                {[
                  "Top performer in FSc Pre-Medical (1084/1100)",
                  "High merit MDCAT qualification",
                  "Consistent top rankings in MBBS",
                  "Excellence in research presentations",
                  "Outstanding clinical performance reviews",
                  "Active medical society participation"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Extracurricular */}
      <section id="leadership" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership & Service</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Commitment to community service and healthcare advocacy beyond academics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Medical Students' Society",
                role: "Active Member",
                description: "Contributing to student welfare and academic initiatives at Nishtar",
                icon: <GraduationCap className="w-6 h-6" />,
                color: "blue"
              },
              {
                title: "Community Health Camps",
                role: "Volunteer",
                description: "Providing free medical services to underprivileged communities",
                icon: <Heart className="w-6 h-6" />,
                color: "red"
              },
              {
                title: "Blood Donation Drives",
                role: "Organizer",
                description: "Leading initiatives to support local blood banks and emergency needs",
                icon: <Activity className="w-6 h-6" />,
                color: "emerald"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-full bg-${item.color}-100 mb-6`}>
                    <div className={`text-${item.color}-600`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <Badge variant="secondary" className="mb-4">{item.role}</Badge>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Aspirations */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Future Vision</h2>
          
          <div className="space-y-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Professional Goals</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Aspiring to specialize in <strong>Internal Medicine or Surgery</strong> while contributing 
                  to advanced medical research that can improve patient outcomes and healthcare delivery systems.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800">Clinical Excellence</h4>
                    <p className="text-sm text-slate-600">Advanced specialization in chosen medical field</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800">Research Impact</h4>
                    <p className="text-sm text-slate-600">Contributing to medical literature and innovation</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800">Community Service</h4>
                    <p className="text-sm text-slate-600">Improving healthcare access for underserved populations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or professional networking? 
            I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Mail className="w-6 h-6" />, title: "Email", value: "aiman.riaz@example.com" },
              { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "+92 XXX XXXXXXX" },
              { icon: <MapPin className="w-6 h-6" />, title: "Location", value: "Multan, Pakistan" }
            ].map((item, index) => (
              <div key={index} className="text-white">
                <div className="inline-flex p-3 bg-white/10 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.value}</p>
              </div>
            ))}
          </div>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8"
          >
            Start a Conversation
            <Mail className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Aiman Riaz. Dedicated to advancing healthcare through knowledge and compassion.
          </p>
        </div>
      </footer>
    </div>
  );
}