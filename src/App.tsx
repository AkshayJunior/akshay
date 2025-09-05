import React, { useEffect, useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Calendar, Briefcase, GraduationCap, Code, Star, ExternalLink, ChevronRight, Database, Brain, BarChart3, TrendingUp } from 'lucide-react';
import resume from "../assets/Akshay Resume.pdf.pdf";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ['hero', 'experience', 'education', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };




    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-slate-800">Akshay Suresh</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-all duration-300 hover:text-blue-600 ${activeSection === id ? 'text-blue-600 font-semibold' : 'text-slate-600'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={`pt-24 pb-16 px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                  Akshay Suresh
                </h1>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                  Data Analyst & AI/ML Professional specializing in IoT Data Engineering and Geographic Information Systems
                </p>
                <div className="flex flex-wrap gap-4 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>+91 7010290238</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>akshaysureshajr@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Kodaikanal, Tamil Nadu</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/akshaysuresh11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>

                <a
                  href={resume}
                  download="Akshay_JR_Resume.pdf"
                  className="flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-slate-50"
                >
                  <ExternalLink className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-12 h-12" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Current Role</h3>
                  <p className="text-blue-100">Data Analyst (IoTDE Analyst GIS)</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Experience</span>
                    <span className="font-semibold">2+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Projects</span>
                    <span className="font-semibold">5+ Completed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Specialization</span>
                    <span className="font-semibold">AI/ML & GIS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
            <p className="text-xl text-slate-600">Building solutions with data and technology</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-6">
                <div className="bg-blue-600 rounded-xl p-3">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Data Analyst (IoTDE Analyst GIS)</h3>
                      <p className="text-lg text-slate-600 mb-2">Current Position</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>Sept 2024 - Present</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-3 mb-3">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-slate-900">Data Processing</h4>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Specialized in data cleaning, fixing spelling errors, formatting inconsistencies,
                          and missing values in address fields for enhanced data quality.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-3 mb-3">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                          <h4 className="font-semibold text-slate-900">Standardization</h4>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Implementing formats like USPS, India Post, and ISO address standards
                          to ensure data uniformity across systems.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Responsibilities</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">Parsing addresses by breaking them into components (street name, number, city, postal code) for easier processing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">Address matching: Matching addresses with existing GIS layers to verify location accuracy</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">Error checking: Identifying mismatched or inaccurate geocoded points</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">Resolving ambiguous addresses (e.g., missing postal codes or duplicate street names)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
            <p className="text-xl text-slate-600">Academic foundation in cutting-edge technology</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Degree */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-indigo-600 rounded-xl p-3">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Bachelor of Science</h3>
                      <p className="text-lg text-slate-600 mb-2">Artificial Intelligence and Machine Learning</p>
                      <p className="text-slate-500">Bharathiar University of Arts and Science</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>Sep 2021 - May 2024</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-2">Relevant Coursework</h4>
                      <p className="text-slate-600 text-sm">Comprehensive study in Artificial Intelligence and Machine Learning fundamentals, algorithms, and applications.</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-2">Project Experience</h4>
                      <p className="text-slate-600 text-sm">Completed several projects on Machine Learning models and AI applications with real-world datasets.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-green-600 rounded-xl p-3">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Intermediate (12th) - ISC, ICSE Board</h3>
                      <p className="text-slate-600 mb-2">Kodaikanal Public School</p>
                      <p className="text-slate-500">Kodaikanal, Tamil Nadu</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>April 2020 - May 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-slate-600">Expertise across the data science stack</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Programming Languages</h3>
              </div>
              <div className="space-y-4">
                {['Python', 'R', 'SQL'].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-700 font-medium">{skill}</span>
                        <span className="text-slate-500 text-sm">Expert</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-slate-900">Development Tools</h3>
              </div>
              <div className="space-y-4">
                {['Jupyter Notebook', 'VS Code', 'Google Colab'].map((tool) => (
                  <div key={tool} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-700 font-medium">{tool}</span>
                        <span className="text-slate-500 text-sm">Advanced</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-slate-900">Core Competencies</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Data Analysis',
                  'ML Model Building',
                  'Data Pre-processing'
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-700 font-medium">{skill}</span>
                        <span className="text-slate-500 text-sm">Expert</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Internships & Projects</h2>
            <p className="text-xl text-slate-600">Applying AI/ML to solve real-world problems</p>
          </div>

          <div className="space-y-12">
            {/* Data Science Trainee */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-red-600 rounded-xl p-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Data Science Trainee</h3>
                      <p className="text-lg text-slate-600 mb-2">Christ Infotech, Pune, Lavasa</p>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span>Sept 2023 - Dec 2023</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-slate-900 mb-4">Cardiovascular Health Prediction Project</h4>
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-5 h-5 text-red-600" />
                        <span className="font-semibold text-slate-900">85-90% Accuracy Achievement</span>
                      </div>
                      <p className="text-slate-600 text-sm">
                        Successfully applied Random Forest and Gradient Boosting algorithms to predict cardiovascular disease risks
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-semibold text-slate-900">Key Accomplishments:</h5>
                    <ul className="space-y-3">
                      {[
                        'Led cardiovascular health prediction using patient demographics, medical histories, and lifestyle data',
                        'Pre-processed and engineered features from diverse healthcare dataset to improve model performance',
                        'Identified key risk factors (age, cholesterol, lifestyle) to support personalized preventive healthcare',
                        'Delivered actionable insights and recommendations for healthcare professionals'
                      ].map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:w-80">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h5 className="font-semibold text-slate-900 mb-4">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Random Forest', 'Gradient Boosting', 'Healthcare Analytics', 'Feature Engineering'].map((tech) => (
                        <span key={tech} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Telecom Churn Project */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-600 rounded-xl p-3">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Telecom Churn Prediction Project</h3>
                      <p className="text-lg text-slate-600 mb-2">Independent Research Project</p>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span>Sept 2023 - Oct 2023</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-slate-900">80-85% Prediction Accuracy</span>
                      </div>
                      <p className="text-slate-600 text-sm">
                        Implemented Logistic Regression and XGBoost models for customer churn prediction
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-semibold text-slate-900">Project Highlights:</h5>
                    <ul className="space-y-3">
                      {[
                        'Engineered telecom customer dataset with behavior, service usage, and demographic features',
                        'Identified key churn indicators such as contract type, tenure, and payment method',
                        'Enhanced skills in feature selection and model optimization for improved predictive performance',
                        'Translated predictive insights into actionable business decisions for targeted retention strategies'
                      ].map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:w-80">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h5 className="font-semibold text-slate-900 mb-4">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Logistic Regression', 'XGBoost', 'Feature Selection', 'Business Analytics'].map((tech) => (
                        <span key={tech} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to contribute to innovative projects in AI/ML and data analytics.
            Open to opportunities in big tech companies and data-driven organizations.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:akshaysureshajr@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/akshaysuresh11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-600 hover:border-slate-500 px-6 py-3 rounded-lg transition-all duration-300 hover:bg-slate-800"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 text-slate-400 text-center">
        <div className="max-w-6xl mx-auto">
          <p>&copy; 2024 Akshay Suresh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;