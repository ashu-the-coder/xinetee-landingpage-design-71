
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <AnimatedSection className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl mb-6 font-light tracking-tight">
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
              <h2 className="text-3xl font-light mb-6">How It All Began</h2>
              <p className="text-foreground/80 mb-4">
                Xinetee was founded in 2020 by a team of cryptographers, blockchain engineers, and privacy advocates 
                who shared a vision: to create storage infrastructure that users could truly own.
              </p>
              <p className="text-foreground/80">
                After witnessing numerous data breaches and privacy violations from traditional cloud providers, 
                our founders decided to build a solution that would leverage the power of blockchain and 
                decentralized technologies to create a fundamentally different approach to data storage.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <GlassCard className="p-6 md:p-10 h-80 flex items-center justify-center bg-card/20 md:order-1 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop" 
                alt="Code on screen" 
                className="w-full h-full object-cover rounded-lg"
              />
            </GlassCard>
            <div className="md:order-2 lg:order-2">
              <h2 className="text-3xl font-light mb-6">Our Mission</h2>
              <p className="text-foreground/80 mb-4">
                We believe that data storage should be more than just a service—it should be a right. A right to privacy, 
                security, and true ownership of your digital information.
              </p>
              <p className="text-foreground/80">
                Our mission is to build technology that puts users first, eliminates central points of failure, 
                and makes unprecedented security accessible to everyone. We envision a world where individuals 
                and organizations no longer have to choose between convenience and control.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">The Technology</h2>
              <p className="text-foreground/80 mb-4">
                Xinetee combines three powerful technologies—virtual machines for secure computation, IPFS for distributed 
                storage, and blockchain for verification—into a seamless platform that redefines what's possible in data storage.
              </p>
              <p className="text-foreground/80">
                Our engineering team continues to push the boundaries of what's possible, with research into 
                quantum-resistant encryption, scalable consensus mechanisms, and innovative approaches to 
                decentralized identity that will shape the future of our platform.
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
                name: "Dr. Elena Rodriguez",
                role: "Founder & CEO",
                bio: "Former cryptography professor with 15+ years of research in secure systems and blockchain technologies.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop"
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                bio: "Blockchain architect who previously led distributed systems development at major tech companies.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
              },
              {
                name: "Sophia Nguyen",
                role: "Head of Security",
                bio: "Security researcher with expertise in zero-knowledge proofs and privacy-preserving computation.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop"
              },
              {
                name: "David Okafor",
                role: "Lead Engineer",
                bio: "Full-stack engineer specializing in decentralized applications and peer-to-peer networks.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop"
              },
              {
                name: "Aisha Patel",
                role: "Product Director",
                bio: "UX specialist focused on making complex technology accessible through intuitive interfaces.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop"
              },
              {
                name: "James Wilson",
                role: "Business Development",
                bio: "Strategic partnership expert with background in enterprise technology and privacy advocacy.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop"
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
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-foreground/70">{member.bio}</p>
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
              <h3 className="text-xl font-medium mb-4">Privacy by Design</h3>
              <p className="text-foreground/70">
                We believe privacy shouldn't be an afterthought. Every feature, product decision, and line of code 
                is evaluated through the lens of user privacy to ensure we're always protecting your data.
              </p>
            </GlassCard>
            
            <GlassCard className="flex flex-col h-full">
              <h3 className="text-xl font-medium mb-4">User Sovereignty</h3>
              <p className="text-foreground/70">
                Your data belongs to you, not us. We build technology that empowers users to maintain control 
                over their information without compromising on convenience or features.
              </p>
            </GlassCard>
            
            <GlassCard className="flex flex-col h-full">
              <h3 className="text-xl font-medium mb-4">Radical Transparency</h3>
              <p className="text-foreground/70">
                We operate with complete openness about our technology, business practices, and roadmap. Our code is 
                open-source, our security is independently audited, and our communication is always honest.
              </p>
            </GlassCard>
            
            <GlassCard className="flex flex-col h-full">
              <h3 className="text-xl font-medium mb-4">Continuous Innovation</h3>
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
          <h2 className="text-3xl md:text-4xl mb-6 font-light tracking-tight">
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
