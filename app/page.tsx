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
              src="https://media.istockphoto.com/id/2053337498/photo/asian-business-people-team-brainstorm-meeting-in-sustainable-office-at-night-using-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=TRHypdS9JoKG9wfFb4sfMJhg6S4b2wj2lzrTDkNcYd4="
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
              src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <p className="mb-4">&quot;TechNova Solutions delivered an outstanding AI-powered web application that has significantly improved our business processes. Their team was professional, responsive, and a pleasure to work with.&quot;</p>
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
            <p className="mb-4">&quot;The AI-enhanced mobile app developed by TechNova has revolutionized how we interact with our customers. It&apos;s user-friendly, feature-rich, and exactly what we needed to stay ahead in our industry.&quot;</p>
            <p className="font-semibold">- Jane Smith, Marketing Director at InnovateCo</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
        <p className="text-xl mb-8">Let&apos;s discuss how our AI-driven solutions can help you achieve your business goals and stay ahead of the competition.</p>
        <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
          Contact Us <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>
    </div>
  )
}

