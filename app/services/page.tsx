import Image from 'next/image'
import { Code, Smartphone, Server, Database, Cloud, Lock } from 'lucide-react'

const services = [
  {
    icon: <Code size={48} />,
    title: 'Web Development',
    description: 'Custom web applications tailored to your business needs, built with the latest technologies and best practices.',
  },
  {
    icon: <Smartphone size={48} />,
    title: 'Mobile App Development',
    description: 'Engaging mobile experiences for iOS and Android platforms, designed to captivate and retain users.',
  },
  {
    icon: <Server size={48} />,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to support your applications and business processes.',
  },
  {
    icon: <Database size={48} />,
    title: 'Database Management',
    description: 'Efficient database design, optimization, and management to ensure your data is secure and easily accessible.',
  },
  {
    icon: <Cloud size={48} />,
    title: 'DevOps & CI/CD',
    description: 'Streamline your development process with our DevOps practices and continuous integration/deployment pipelines.',
  },
  {
    icon: <Lock size={48} />,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive cybersecurity solutions and best practices.',
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Development Process</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          <div className="space-y-12">
            {['Requirements Gathering', 'Design & Planning', 'Development', 'Testing & QA', 'Deployment', 'Maintenance & Support'].map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>
                <div className="w-1/2 p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-2">{step}</h4>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

