
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface ProjectInfo {
  name: string;
  year: string;
  tags: string[];
  description: string;
}

interface Project {
  id: string;
  info: ProjectInfo;
  images: string[];
}

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  // Mock project data with 12 examples
  useEffect(() => {
    const mockProjects: Project[] = [
      {
        id: 'porsche-911-classic',
        info: {
          name: 'Porsche 911 Classic',
          year: '1973',
          tags: ['Full Restoration', 'Engine'],
          description: 'Complete rebuild with original performance and modern finishes.'
        },
        images: [
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
          'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
          'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800'
        ]
      },
      {
        id: 'mercedes-300sl',
        info: {
          name: 'Mercedes 300SL Gullwing',
          year: '1955',
          tags: ['Frame Restoration', 'Paint'],
          description: 'Authentic restoration of this iconic gullwing masterpiece.'
        },
        images: [
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
          'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800'
        ]
      },
      {
        id: 'ferrari-250gt',
        info: {
          name: 'Ferrari 250 GT',
          year: '1962',
          tags: ['Interior', 'Mechanical'],
          description: 'Meticulous restoration preserving original character and performance.'
        },
        images: [
          'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
          'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800',
          'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=800'
        ]
      },
      {
        id: 'jaguar-e-type',
        info: {
          name: 'Jaguar E-Type',
          year: '1967',
          tags: ['Bodywork', 'Chrome'],
          description: 'Complete ground-up restoration of this British icon.'
        },
        images: [
          'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800',
          'https://images.unsplash.com/photo-1486326658981-ed68abe5868e?w=800'
        ]
      },
      {
        id: 'mustang-fastback',
        info: {
          name: 'Ford Mustang Fastback',
          year: '1967',
          tags: ['Engine Swap', 'Performance'],
          description: 'High-performance restoration with modern drivetrain upgrades.'
        },
        images: [
          'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800',
          'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800',
          'https://images.unsplash.com/photo-1552519507-37e9e5fa71a8?w=800'
        ]
      },
      {
        id: 'corvette-stingray',
        info: {
          name: 'Chevrolet Corvette Stingray',
          year: '1963',
          tags: ['Split Window', 'Numbers Matching'],
          description: 'Rare split-window Corvette restored to concours condition.'
        },
        images: [
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
          'https://images.unsplash.com/photo-1552519507-2d9e1b643748?w=800'
        ]
      },
      {
        id: 'aston-martin-db5',
        info: {
          name: 'Aston Martin DB5',
          year: '1965',
          tags: ['Luxury Restoration', 'Leather'],
          description: 'Bond-era elegance restored with period-correct craftsmanship.'
        },
        images: [
          'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
          'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800'
        ]
      },
      {
        id: 'bmw-2002',
        info: {
          name: 'BMW 2002 Turbo',
          year: '1974',
          tags: ['Turbo', 'European'],
          description: 'Rare factory turbo model with complete mechanical restoration.'
        },
        images: [
          'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800',
          'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800'
        ]
      },
      {
        id: 'lamborghini-miura',
        info: {
          name: 'Lamborghini Miura P400',
          year: '1969',
          tags: ['Supercar', 'Italian'],
          description: 'The original supercar restored to museum-quality standards.'
        },
        images: [
          'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=800',
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
          'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800'
        ]
      },
      {
        id: 'alfa-romeo-giulia',
        info: {
          name: 'Alfa Romeo Giulia Sprint',
          year: '1966',
          tags: ['Italian Classic', 'Sprint'],
          description: 'Bertone-designed beauty with matching numbers restoration.'
        },
        images: [
          'https://images.unsplash.com/photo-1486326658981-ed68abe5868e?w=800',
          'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800'
        ]
      },
      {
        id: 'triumph-tr6',
        info: {
          name: 'Triumph TR6',
          year: '1971',
          tags: ['British Roadster', 'Convertible'],
          description: 'Classic British roadster with comprehensive restoration and upgrade.'
        },
        images: [
          'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800',
          'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800'
        ]
      },
      {
        id: 'datsun-240z',
        info: {
          name: 'Datsun 240Z',
          year: '1970',
          tags: ['Japanese Classic', 'Sports Car'],
          description: 'First-generation Z-car restored with modern reliability improvements.'
        },
        images: [
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
          'https://images.unsplash.com/photo-1552519507-2d9e1b643748?w=800',
          'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800'
        ]
      }
    ];
    setProjects(mockProjects);
  }, []);

  const translations = {
    en: {
      title: 'Classic Car Restoration',
      subtitle: 'Precision craftsmanship for automotive excellence',
      about: 'About Us',
      contact: 'Contact',
      aboutTitle: 'Artisan Restoration',
      aboutText: 'We specialize in the complete restoration of classic automobiles, combining traditional craftsmanship with modern precision. Each project is approached with meticulous attention to detail and respect for automotive heritage.',
      contactTitle: 'Get In Touch',
      phone: 'Phone: +1 (555) 123-4567',
      email: 'Email: info@classicrestoration.com',
      address: '123 Workshop Street, Classic City, CC 12345',
      projectsIntro: 'some of our projects:'
    },
    pt: {
      title: 'Restauração de Carros Clássicos',
      subtitle: 'Artesanato de precisão para excelência automotiva',
      about: 'Sobre Nós',
      contact: 'Contato',
      aboutTitle: 'Restauração Artesanal',
      aboutText: 'Especializamo-nos na restauração completa de automóveis clássicos, combinando artesanato tradicional com precisão moderna. Cada projeto é abordado com atenção meticulosa aos detalhes e respeito pelo patrimônio automotivo.',
      contactTitle: 'Entre em Contato',
      phone: 'Telefone: +1 (555) 123-4567',
      email: 'Email: info@classicrestoration.com',
      address: '123 Workshop Street, Classic City, CC 12345',
      projectsIntro: 'alguns dos nossos projetos:'
    }
  };

  const t = translations[language];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-black">{t.title}</h1>
            <p className="text-sm text-gray-600">{t.subtitle}</p>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">{t.about}</a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors">{t.contact}</a>
            </nav>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm ${language === 'en' ? 'text-black font-semibold' : 'text-gray-500'}`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-2 py-1 text-sm ${language === 'pt' ? 'text-black font-semibold' : 'text-gray-500'}`}
              >
                PT
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-left text-2xl font-medium text-black mb-12">{t.projectsIntro}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => openProject(project)}
              >
                <div className="aspect-square overflow-hidden bg-gray-100 mb-4 rounded-xl">
                  <img
                    src={project.images[0]}
                    alt={project.info.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black mb-1">{project.info.name}</h3>
                <p className="text-gray-600">{project.info.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">{t.aboutTitle}</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t.aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">{t.contactTitle}</h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-700">{t.phone}</p>
                <p className="text-xl text-gray-700">{t.email}</p>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-gray-700 mt-1" />
                  <p className="text-xl text-gray-700">{t.address}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Google Maps Integration</p>
                  <p className="text-sm text-gray-500">Map would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">© 2024 Classic Car Restoration. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
          <div className="w-full h-full flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 text-white">
              <div>
                <h3 className="text-2xl font-bold">{selectedProject.info.name}</h3>
                <p className="text-gray-300">{selectedProject.info.year}</p>
              </div>
              <button
                onClick={closeProject}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Carousel */}
            <div className="flex-1 flex items-center justify-center relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.info.name}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className="absolute left-6 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors disabled:opacity-30"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={currentImageIndex === selectedProject.images.length - 1}
                    className="absolute right-6 p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors disabled:opacity-30"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 text-white">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-4">{selectedProject.info.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.info.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selectedProject.images.length > 1 && (
                  <p className="text-sm text-gray-400 text-center">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
