import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Server, Star, Brain } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Software Solutions</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Transforming ideas into intelligent digital experiences</p>
        <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center">
          Get Started <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About TechNova Solutions</h2>
            <p className="text-lg mb-6">We are a team of AI specialists, passionate developers, and innovative designers dedicated to creating cutting-edge software solutions for businesses of all sizes.</p>
            <Link href="/about" className="text-primary hover:underline inline-flex items-center">
              Learn More <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          <div className="relative h-80">
            <Image
              src="data:image/jpeg;base64,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"
              alt="About TechNova"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-12 text-center">Our AI-Powered Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Brain size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
            <p>Seamlessly integrate AI capabilities into your existing systems.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Code size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Intelligent Web Apps</h3>
            <p>Build smart web applications with AI-driven features and insights.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Smartphone size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Mobile Apps</h3>
            <p>Create mobile experiences enhanced by artificial intelligence.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="text-primary hover:underline inline-flex items-center">
            View All Services <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* AI Showcase Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">AI in Action</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-64 md:h-96">
            <Image
              src="https://media.licdn.com/dms/image/D5612AQEZbmCS0ooJjA/article-cover_image-shrink_720_1280/0/1675933559300?e=2147483647&v=beta&t=2FePvbX_9hCDqaleulj5GUwCaPBkdUwFZNB7UsGbbbE"
              alt="AI Visualization"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Visualizing AI Potential</h3>
            <p className="text-lg mb-6">See how our AI solutions can transform your data into actionable insights and drive innovation in your business.</p>
            <Link href="/portfolio" className="text-primary hover:underline inline-flex items-center">
              Explore Our Portfolio <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
            </div>
            <p className="mb-4">"TechNova Solutions delivered an outstanding AI-powered web application that has significantly improved our business processes. Their team was professional, responsive, and a pleasure to work with."</p>
            <p className="font-semibold">- John Doe, CEO of TechCorp</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
            </div>
            <p className="mb-4">"The AI-enhanced mobile app developed by TechNova has revolutionized how we interact with our customers. It's user-friendly, feature-rich, and exactly what we needed to stay ahead in our industry."</p>
            <p className="font-semibold">- Jane Smith, Marketing Director at InnovateCo</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
        <p className="text-xl mb-8">Let's discuss how our AI-driven solutions can help you achieve your business goals and stay ahead of the competition.</p>
        <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
          Contact Us <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>
    </div>
  )
}

