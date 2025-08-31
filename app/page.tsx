"use client";

import React, { useState } from 'react';
import { Monitor, Wrench, Users, Phone, Mail, MapPin, CheckCircle, Star, Menu, X } from 'lucide-react';

export default function ITServicesWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', name: 'Acasa', href: '#' },
    { id: 'about', name: 'Despre Noi', href: '#' },
    { id: 'services', name: 'Servicii', href: '#' },
    { id: 'contact', name: 'Contact', href: '#' }
  ];

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Mentenanta IT",
      description: "Intretinere si optimizare sisteme informatice pentru functionare optima"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Reparatii Hardware",
      description: "Diagnosticare si reparare componente hardware pentru PC-uri si laptopuri"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Suport si Training",
      description: "Asistenta tehnica si instruire utilizatori pentru folosirea eficienta a tehnologiei"
    }
  ];

  const testimonials = [1
/*    
    {

      name: "Maria Popescu",
      role: "Manager, SC TechCorp SRL",
      content: "Servicii profesionale si prompte. Echipa noastra IT functioneaza perfect datorita lor!",
      rating: 5
    },
    {
      name: "Ion Gheorghe",
      role: "Proprietar, Contabilitate Expert",
      content: "Reparatii hardware rapide si la preturi corecte. Recomand cu incredere!",
      rating: 5
    }*/
  ];

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Servicii IT Profesionale
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Solutii complete pentru mentenanta, suport si reparatii hardware. 
              Expertiza tehnica de incredere pentru afacerea dvs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contactati-ne
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
              >
                Serviciile Noastre
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Oferim</h2>
            <p className="text-xl text-gray-600">Servicii IT complete pentru toate nevoile dvs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">De Ce Sa Ne Alegeti</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experienta</h3>
              <p className="text-gray-600">Peste 10 ani in domeniul IT</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rapiditate</h3>
              <p className="text-gray-600">Interventii in maxim 24h</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calitate</h3>
              <p className="text-gray-600">Servicii de inalta calitate</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Suport 24/7</h3>
              <p className="text-gray-600">Asistenta permanenta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce Spun Clientii</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Despre Noi</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cine Suntem</h2>
            <p className="text-lg text-gray-600 mb-6">
              Suntem o echipa de profesionisti IT cu peste 10 ani de experienta in domeniul tehnologiei informatiei. 
              Ne dedicam sa oferim solutii complete si de incredere pentru toate nevoile dvs. tehnologice.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              De la mentenanta sistemelor existente pana la repararea hardware-ului defect si instruirea utilizatorilor, 
              suntem partenerii dvs. de incredere in transformarea digitala.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-6">Misiunea Noastra</h3>
            <p className="text-lg">
              Sa oferim servicii IT de cea mai inalta calitate, sa fim reactivi la nevoile clientilor si sa contribuim 
              la succesul afacerii lor prin tehnologie moderna si suport profesional.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Valorile Noastre</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profesionalism</h3>
              <p className="text-gray-600">Abordare profesionala in toate proiectele</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Incredere</h3>
              <p className="text-gray-600">Relatii pe termen lung cu clientii</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excelenta</h3>
              <p className="text-gray-600">Calitate superioara in tot ce facem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Serviciile Noastre</h1>
          <p className="text-xl text-gray-600">Solutii complete IT pentru afacerea dvs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {index === 0 && (
                  <>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Monitorizare sisteme 24/7
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Actualizari software automate
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Backup si recovery
                    </li>
                  </>
                )}
                {index === 1 && (
                  <>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Diagnosticare completa
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Reparatii la sediul clientului
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Piese de schimb originale
                    </li>
                  </>
                )}
                {index === 2 && (
                  <>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Instruire utilizatori
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Suport telefonic
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      Documentatie tehnica
                    </li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-12 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-6">Aveti nevoie de un serviciu personalizat?</h2>
          <p className="text-xl mb-8">Contactati-ne pentru o consultatie gratuita si o oferta adaptata nevoilor dvs.</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Obtineti o Oferta
          </button>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = () => {
      alert('Multumim pentru mesaj! Va vom contacta in cel mai scurt timp.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    };

    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact</h1>
            <p className="text-xl text-gray-600">Suntem aici sa va ajutam cu toate nevoile IT</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trimiteti-ne un Mesaj</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nume *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Numele dvs. complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@exemplu.ro"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0740 123 456"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Serviciu de Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selectati un serviciu</option>
                    <option value="mentenanta">Mentenanta IT</option>
                    <option value="reparatii">Reparatii Hardware</option>
                    <option value="suport">Suport si Training</option>
                    <option value="altele">Altele</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mesaj *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descrieti problema sau necesitatea dvs..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Trimite Mesajul
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Informatii de Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 mt-1 text-blue-200" />
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <p className="text-blue-100">+40 758 936 255</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 mt-1 text-blue-200" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-blue-100">elserv.services@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 mt-1 text-blue-200" />
                    <div>
                      <p className="font-semibold">Adresa</p>
                      <p className="text-blue-100">Str. Cantonului nr. 21<br />Livezi, Dolj</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Program de Lucru</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-semibold">Luni - Vineri:</span> 08:00 - 18:00</p>
                  <p><span className="font-semibold">Sambata:</span> 09:00 - 14:00</p>
                  <p><span className="font-semibold">Duminica:</span> Inchis</p>
                  <p className="text-sm text-blue-600 font-semibold mt-4">* Interventii urgente 24/7</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-orange-800 mb-2">Interventie Rapida</h3>
                <p className="text-orange-700 text-sm">
                  Pentru urgente tehnice, sunati la numarul de mai sus. 
                  Garantam interventia in maxim 24 de ore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">IT Services Pro</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      currentPage === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">IT Services Pro</h3>
              <p className="text-gray-300">
                Solutii IT profesionale pentru afacerea dvs. 
                Experienta, calitate si incredere.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">+40 758 936 255</p>
              <p className="text-gray-300">elserv.services@gmail.com</p>
              <p className="text-gray-300">Craiova, Dolj</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicii</h4>
              <ul className="text-gray-300 space-y-2">
                <li>Mentenanta IT</li>
                <li>Reparatii Hardware</li>
                <li>Suport si Training</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 IT Services Pro. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}