
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <AnimatedSection className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl mb-6 font-light tracking-tight">
            Powerful <span className="text-primary">Features</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover how Xinetee's advanced features provide unmatched security, accessibility, and control over your data.
          </p>
        </div>
      </AnimatedSection>

      {/* Feature Sections */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-light mb-6">Advanced Encryption</h2>
              <p className="text-foreground/80 mb-6">
                Xinetee employs military-grade AES-256 encryption to secure your data before it leaves your device. 
                Only you hold the encryption keys, ensuring that not even Xinetee staff can access your sensitive information.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">End-to-end encryption for all files</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Zero-knowledge architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Client-side key generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Multi-factor authentication options</span>
                </li>
              </ul>
              <Button>Learn More</Button>
            </div>
            <GlassCard className="p-6 md:p-10 h-80 flex items-center justify-center bg-card/20">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z" fill="currentColor" className="text-primary" />
                </svg>
              </div>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <GlassCard className="p-6 md:p-10 h-80 flex items-center justify-center bg-card/20 md:order-1 lg:order-1">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13l6 9H6l6-9zm0-11L7 9h10l-5-7z" fill="currentColor" className="text-primary" />
                </svg>
              </div>
            </GlassCard>
            <div className="md:order-2 lg:order-2">
              <h2 className="text-3xl font-light mb-6">Decentralized Architecture</h2>
              <p className="text-foreground/80 mb-6">
                Unlike traditional cloud storage, Xinetee distributes your encrypted data across a network of nodes, 
                eliminating single points of failure and preventing data loss or service interruptions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Data sharded across multiple nodes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Automatic redundancy built-in</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Geographic distribution for resilience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Self-healing network capabilities</span>
                </li>
              </ul>
              <Button>Explore Architecture</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-light mb-6">Blockchain Verification</h2>
              <p className="text-foreground/80 mb-6">
                Every file transaction in Xinetee is verified and recorded on our private blockchain, 
                creating an immutable audit trail that proves ownership, integrity, and access history.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Immutable file history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Cryptographic proof of ownership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Tamper-evident file verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Decentralized access control</span>
                </li>
              </ul>
              <Button>View Blockchain Demo</Button>
            </div>
            <GlassCard className="p-6 md:p-10 h-80 flex items-center justify-center bg-card/20">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 16V4H8v12h12zm2 0a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h12a2 2 0 0 1 2 2v12zm-6 4v2H4a2 2 0 0 1-2-2V7h2v13h12zM10 6h8v2h-8V6zm0 4h8v2h-8v-2z" fill="currentColor" className="text-primary" />
                </svg>
              </div>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <GlassCard className="p-6 md:p-10 h-80 flex items-center justify-center bg-card/20 md:order-1 lg:order-1">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm2-2v2h6V4H9z" fill="currentColor" className="text-primary" />
                </svg>
              </div>
            </GlassCard>
            <div className="md:order-2 lg:order-2">
              <h2 className="text-3xl font-light mb-6">Total Data Ownership</h2>
              <p className="text-foreground/80 mb-6">
                Xinetee was built on the principle that your data belongs only to you. We provide the infrastructure, 
                but you maintain complete ownership and control of your information at all times.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Sovereign ownership of all data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">No data mining or analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Full export capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground/70">Custom retention policies</span>
                </li>
              </ul>
              <Button>Data Ownership Policy</Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Additional Features Grid */}
      <AnimatedSection className="py-16 px-4 bg-gradient-to-b from-background to-background/95">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="More Powerful Features"
            subtitle="Explore the complete suite of tools that make Xinetee the most advanced storage platform."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Collaboration Tools",
                description: "Securely share files with granular permissions and real-time collaboration features."
              },
              {
                title: "Media Streaming",
                description: "Stream videos and audio directly from storage with adaptive bitrate technology."
              },
              {
                title: "Version Control",
                description: "Access and restore previous versions of any file with complete history tracking."
              },
              {
                title: "Smart Search",
                description: "Find any file instantly with our powerful search engine that indexes file content."
              },
              {
                title: "Custom Metadata",
                description: "Add and search by custom metadata fields to organize your information."
              },
              {
                title: "Automated Workflows",
                description: "Create rules and triggers to automate file organization and processing."
              }
            ].map((feature, i) => (
              <GlassCard key={i} className="flex flex-col h-full">
                <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* CTA */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 font-light tracking-tight">
            Ready to experience these features?
          </h2>
          <p className="text-xl text-foreground/70 mb-10">
            Start with a free account and explore the future of secure storage.
          </p>
          <Button size="lg">Try Xinetee Free</Button>
        </div>
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default Features;
