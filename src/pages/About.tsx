
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import VideoSection from '@/components/VideoSection';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <AnimatedSection className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl mb-6 font-bold tracking-tight">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Learn about our mission to revolutionize digital storage and return data ownership to users worldwide.
          </p>
        </div>
      </AnimatedSection>
      
      {/* Story Section */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">How It All Began</h2>
              <p className="text-foreground/80 mb-4">
                We began with a clear intention, to build something that truly matters. What started as curiosity in VR and AR quickly evolved into a deeper exploration of blockchain and Web3, where we saw the power to drive real change.
              </p>
              <p className="text-foreground/80">
                Seeing the problems and lack of transparency in systems like the textile supply chain, we knew there had to be a better way. 
                <br />That vision became a platform, seamlessly blending blockchain, e-commerce, and developer tools to tackle real-world problems and put control back into the hands of users like you.
              </p>
            </div>
            <GlassCard className="p-6 md:p-10 h-80 flex items-center justify-center bg-card/20">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-full object-cover rounded-lg"
              />
            </GlassCard>
          </div>
          
          {/* Mission Video Section */}
          <VideoSection 
            title="Our Mission"
            description="Data storage, in our opinion, should be a right rather than merely a service. a right to privacy, security, and actual control over your online environment.Our goal is to create technology that prioritizes users, removes single points of failure, and opens up a new level of security that is available to everyone."
            youtubeVideoId="dQw4w9WgXcQ"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 mt-12">
            <GlassCard className="p-6 md:p-10 h-80 flex items-center justify-center bg-card/20 md:order-1 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop" 
                alt="Code on screen" 
                className="w-full h-full object-cover rounded-lg"
              />
            </GlassCard>
            <div className="md:order-2 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-foreground/80 mb-4">
               In our ideal future, neither people nor organizations should have to decide between control and convenience.
              </p>
              <p className="text-foreground/80">
                With the help of cutting-edge technology and a strong dedication to user sovereignty, we are creating a future in which data is always available, unaltered, and fully owned by its creators.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">The Technology</h2>
              <p className="text-foreground/80 mb-4">
                By fusing three revolutionary technologies blockchain for unchangeable verification, IPFS for distributed storage, and secure virtual machines for computation our platform reimagines the future of data ownership.
              </p>
              <p className="text-foreground/80">
                Our engineering team is laying the groundwork for a more secure, independent digital future by developing decentralized identity, scalable consensus protocols, and quantum-resistant encryption with an innovative mindset. In addition to infrastructure, we also handle data and advanced analytics, giving users insights they can act upon while retaining complete control and openness.
              </p>
            </div>
            <GlassCard className="p-6 md:p-10 h-80 flex items-center justify-center bg-card/20">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop" 
                alt="Abstract technology" 
                className="w-full h-full object-cover rounded-lg"
              />
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Team Section */}
      <AnimatedSection className="py-16 px-4 bg-gradient-to-b from-background to-background/95">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the experts behind Xinetee's revolutionary storage technology."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "ASHUTOSH AIANULE",
                role: "Founder & CEO",
                bio: "Visionary leader with good of experience in blockchain and decentralized systems",
                image: "https://res.cloudinary.com/dagr9t409/image/upload/IEEE_eyoivo.jpg"
              },
              {
                name: "Swipnil Dhiware",
                role: "Chief Of Research & Development",
                bio: "Innovative technologist with a passion for building secure, user-centric applications.",
                image: "https://res.cloudinary.com/dagr9t409/image/upload/v1749247306/1747456776180_laoyaw.jpg"
              },
              {
                name: "Sanket",
                role: "Head of Marketing",
                bio: "Marketing strategist with a focus on community building and user engagement in tech.",
                image: "https://res.cloudinary.com/dagr9t409/image/upload/v1749247432/Sanket_pb3bbm.jpg"
              },
              {
                name: "Aditya Akolkar",
                role: "UX Developer",
                bio: "UX specialist focused on making complex technology accessible through intuitive interfaces.",
                image: "https://res.cloudinary.com/dagr9t409/image/upload/v1749247538/Aditya_pto3tj.jpg"
              },
              {
                name: "Shruti Lokhande",
                role: "Product Director",
                bio: "UX specialist focused on making complex technology accessible through intuitive interfaces.",
                image: "https://res.cloudinary.com/dagr9t409/image/upload/v1749247704/Shruti_rl5tow.jpg"
              },
              {
                name: "Hiring",
                role: "CTO",
                bio: "Can Contact us if you are interested in the position",
                image: "https://res.cloudinary.com/dagr9t409/image/upload/CTO_Hiring_rjt2xi.jpg"
              }
            ].map((member, i) => (
              <GlassCard key={i} className="flex flex-col h-full">
                <div className="h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-foreground/70 mb-6">{member.bio}</p>
                
                {/* Social Media Icons */}
                <div className="team-social-icons mt-auto">
                  <a 
                    href="https://www.linkedin.com/company/xinetee/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-icon"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://x.com/Xinetee_Network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-icon"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/xinetee/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-icon"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Values */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do at Xinetee."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">Privacy by Design</h3>
              <p className="text-foreground/70">
                We believe privacy shouldn't be an afterthought. Every feature, product decision, and line of code 
                is evaluated through the lens of user privacy to ensure we're always protecting your data.
              </p>
            </GlassCard>
            
            <GlassCard className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">User Sovereignty</h3>
              <p className="text-foreground/70">
                Your data belongs to you, not us. We build technology that empowers users to maintain control 
                over their information without compromising on convenience or features.
              </p>
            </GlassCard>
            
            <GlassCard className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">Radical Transparency</h3>
              <p className="text-foreground/70">
                We operate with complete openness about our technology, business practices, and roadmap. Our code is 
                open-source, our security is independently audited, and our communication is always honest.
              </p>
            </GlassCard>
            
            <GlassCard className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">Continuous Innovation</h3>
              <p className="text-foreground/70">
                The status quo is never good enough. We constantly push the boundaries of what's possible 
                in data storage, security, and user experience to stay ahead of threats and user needs.
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>
      
      {/* CTA */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-background/95 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 font-semibold tracking-tight">
            Join Us on Our Mission
          </h2>
          <p className="text-xl text-foreground/70 mb-10">
            Be part of the movement to revolutionize data storage and return control to users.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Join Our Team</Button>
          </div>
        </div>
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default About;
