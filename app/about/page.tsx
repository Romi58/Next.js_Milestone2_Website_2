import Image from 'next/image'

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=DtB4a1dFa3A7aCqgvRB5NXEqH3ZI-KoNXtqduWv982g=',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: 'https://media.istockphoto.com/id/2157394121/photo/portrait-of-confident-businesswoman-standing-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=eK6hSqdHlfABi60Ipge_SkS1NsHGNf8Lnm0WSrZFGgA=',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: 'https://media.istockphoto.com/id/1949501832/photo/handsome-hispanic-senior-business-man-with-crossed-arms-smiling-at-camera-indian-or-latin.webp?a=1&b=1&s=612x612&w=0&k=20&c=myjjInVm75nzuTTvwn1i7NjJm2hfdGIOuXW6LO1Idy4=',
  },
  {
    name: 'Sarah Brown',
    role: 'UX Designer',
    image: 'https://media.istockphoto.com/id/2072805054/photo/futuristic-office-with-asian-mature-businesswoman-using-digital-tablet-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=g9haqRWOWhuBDZN5gJJT4eHYrgbuzKMTvC2tC8G0ycw=',
  },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">About TechNova Solutions</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Founded in 2010, TechNova Solutions has been at the forefront of digital innovation for over a decade. 
            Our journey began with a simple mission: to help businesses harness the power of technology to achieve their goals.
          </p>
          <p className="text-lg">
            Today, we&apos;re proud to be a leading software development company, trusted by clients around the world to deliver 
            cutting-edge solutions that drive growth and efficiency.
          </p>
        </div>
        <div className="relative h-80">
          <Image
            src="https://media.istockphoto.com/id/1276435469/photo/woman-using-her-laptop-for-working-from-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=b6xSYQ9OPiYENhSFlLOx4bCWgZjdU_CBZSGZ7Iqn1H0="
            alt="TechNova Solutions Office"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          To empower businesses with innovative software solutions that solve complex challenges, 
          drive digital transformation, and create lasting value for our clients and their customers.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Innovation', 'Quality', 'Collaboration', 'Integrity', 'Client-Centric', 'Continuous Learning'].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{value}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

