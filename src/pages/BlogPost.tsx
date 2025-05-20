
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { Clock, ArrowLeft, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Blog posts data
// This would typically come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Future of Decentralized Storage: Beyond Traditional Cloud",
    excerpt: "How blockchain-based storage solutions are fundamentally changing the way we think about data ownership and security.",
    date: "May 15, 2025",
    readTime: "8 min read",
    category: "Technology",
    author: "Dr. Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop",
    content: `
      <p>In the rapidly evolving landscape of digital storage, a revolution is taking place that extends far beyond mere technological improvements. Decentralized storage systems powered by blockchain technology are fundamentally reimagining the relationship between users and their data.</p>
      
      <h2>The Problem with Traditional Cloud Storage</h2>
      
      <p>For over a decade, cloud storage has dominated the market, offering convenience and scalability that on-premise solutions couldn't match. However, this convenience came with hidden costs:</p>
      
      <ul>
        <li>Centralized control by major corporations</li>
        <li>Vulnerability to data breaches affecting millions simultaneously</li>
        <li>Opaque terms of service allowing providers to analyze and monetize your data</li>
        <li>Risk of service discontinuation or arbitrary policy changes</li>
      </ul>
      
      <p>The fundamental issue is simple: when your data resides on someone else's servers, you're never truly in control.</p>
      
      <h2>Enter Decentralized Storage</h2>
      
      <p>Blockchain-based storage systems like Xinetee function on an entirely different model. Instead of consolidating data in massive server farms owned by a single entity, these systems distribute encrypted fragments of data across a global network of nodes.</p>
      
      <p>The key innovations making this possible include:</p>
      
      <h3>Content Addressing</h3>
      <p>Unlike traditional systems that organize files by location ("fetch the file at this address"), decentralized systems use content addressing, where files are identified by their cryptographic hash. This creates a tamper-evident system where any change to a file results in a completely different identifier.</p>
      
      <h3>Consensus Mechanisms</h3>
      <p>Blockchain technology enables agreement among untrusting parties, allowing a network of independent operators to function as a reliable storage medium without central coordination.</p>
      
      <h3>Cryptographic Proofs</h3>
      <p>Advanced mathematics allows storage providers to prove they're storing your data correctly without actually accessing its contents, preserving privacy while ensuring reliability.</p>
      
      <h2>The Paradigm Shift</h2>
      
      <p>This technical infrastructure enables a philosophical transformation in how we think about digital ownership. In the decentralized model:</p>
      
      <ul>
        <li>You maintain cryptographic ownership of your data, not just a contractual right to access it</li>
        <li>Storage becomes a commodity market rather than a walled garden</li>
        <li>Privacy is guaranteed by mathematics, not corporate policies</li>
        <li>Data persistence doesn't depend on any single company's success</li>
      </ul>
      
      <h2>Looking Forward</h2>
      
      <p>As decentralized storage matures, we're seeing the emergence of entirely new possibilities:</p>
      
      <ul>
        <li>Self-sovereign digital identity systems</li>
        <li>Truly portable application data across platforms</li>
        <li>Censorship-resistant publishing and communication</li>
        <li>Data marketplaces where users control and monetize their own information</li>
      </ul>
      
      <p>The transition won't happen overnight—traditional cloud providers offer convenience and established integration that decentralized alternatives are still developing. But the direction is clear: we're moving toward a future where data storage isn't just a service you rent, but an extension of digital property you genuinely own.</p>
      
      <p>At Xinetee, we're proud to be at the forefront of this transformation, building tools that don't just store your data but truly secure your digital future.</p>
    `
  },
  {
    id: 2,
    title: "Understanding the 3-Layer Security Model for Blockchain Storage",
    excerpt: "An in-depth exploration of how virtual machines, IPFS, and blockchain verification work together to create unprecedented security.",
    date: "May 12, 2025",
    readTime: "10 min read",
    category: "Security",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1034&auto=format&fit=crop",
    content: `
      <p>In the world of digital storage, security models traditionally rely on perimeter defenses—building ever-higher walls around centralized data. But as breach after breach has demonstrated, this approach inevitably fails when a determined attacker finds a single weakness in the fortress.</p>
      
      <p>Xinetee's 3-layer security model takes a fundamentally different approach, leveraging the unique properties of three complementary technologies to create defense-in-depth that's greater than the sum of its parts.</p>
      
      <h2>Layer 1: Virtual Machine Isolation</h2>
      
      <p>At the foundation of our security model is the concept of computational isolation through virtual machines. When you upload a file to Xinetee:</p>
      
      <ol>
        <li>The file is processed within a dedicated virtual machine that has no persistent connection to other systems</li>
        <li>Encryption keys are generated and managed within a Trusted Execution Environment (TEE)</li>
        <li>All operations occur in an ephemeral environment that's destroyed after use, leaving no trace of unencrypted data or keys</li>
      </ol>
      
      <p>This approach means that even if an attacker somehow gained access to our infrastructure, they would find only encrypted data chunks with no access to the keys needed to decipher them.</p>
      
      <h2>Layer 2: IPFS Distributed Storage</h2>
      
      <p>Once encrypted, files aren't stored in a single location but are instead distributed across a network using a modified implementation of the InterPlanetary File System (IPFS) protocol.</p>
      
      <p>The security advantages of this approach include:</p>
      
      <ul>
        <li><strong>No single point of failure</strong> - Files are split into chunks and stored redundantly across multiple nodes</li>
        <li><strong>Content addressing</strong> - Files are identified by their cryptographic hash, making it impossible to tamper with data without detection</li>
        <li><strong>Geographic distribution</strong> - Data is stored across multiple regions and jurisdictions, protecting against regional outages or legal attacks</li>
      </ul>
      
      <p>This distribution mechanism means there's no central database to breach—an attacker would need to compromise multiple independent systems simultaneously to access even fragments of encrypted data.</p>
      
      <h2>Layer 3: Blockchain Verification</h2>
      
      <p>The final security layer leverages blockchain technology to create an immutable record of:</p>
      
      <ul>
        <li>File metadata and access permissions</li>
        <li>Cryptographic proofs that storage providers are maintaining data correctly</li>
        <li>Complete access history and audit trails</li>
      </ul>
      
      <p>By recording this information on a blockchain, we create a tamper-evident system that maintains integrity even if other security layers were compromised. Any unauthorized modification of permissions or access attempts creates a permanent, detectable record.</p>
      
      <h2>How the Layers Work Together</h2>
      
      <p>The true innovation in our approach is how these three technologies complement each other:</p>
      
      <ol>
        <li>Virtual machines provide secure processing and key management</li>
        <li>IPFS provides resilient, tamper-evident storage</li>
        <li>Blockchain provides verifiable access control and audit capabilities</li>
      </ol>
      
      <p>For an attack to succeed, all three layers would need to be compromised simultaneously—a scenario that would require breaking not just one system but three fundamentally different security paradigms.</p>
      
      <h2>Beyond Technical Security: The Human Element</h2>
      
      <p>Technology alone doesn't create security. Our model is completed by:</p>
      
      <ul>
        <li>Regular third-party security audits</li>
        <li>Open-source components allowing community review</li>
        <li>Bug bounty programs to identify and address vulnerabilities</li>
        <li>Comprehensive security training for all staff</li>
      </ul>
      
      <p>Through this comprehensive approach to security, Xinetee is setting a new standard for what users should expect from storage providers in the blockchain era: not just convenient access to files, but genuine protection of your most valuable digital assets.</p>
    `
  },
  {
    id: 3,
    title: "Data Sovereignty in the Digital Age: Why Ownership Matters",
    excerpt: "Exploring the ethical and practical implications of true data ownership in an increasingly digital world.",
    date: "May 8, 2025",
    readTime: "6 min read",
    category: "Privacy",
    author: "Sophia Nguyen",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop",
    content: `
      <p>In an age where the majority of our professional work, creative output, and personal memories exist primarily as digital files, a critical question emerges: do we truly own our data?</p>
      
      <p>This question isn't merely philosophical—it has profound implications for privacy, innovation, and even democracy in the digital era.</p>
      
      <h2>The Illusion of Digital Ownership</h2>
      
      <p>When the average person speaks of "my files" or "my photos," they're expressing a sense of ownership that often doesn't align with legal and technical reality. In most cloud storage arrangements:</p>
      
      <ul>
        <li>You're granted a license to access your data, not actual ownership of the storage medium</li>
        <li>Service terms often grant providers broad rights to analyze, scan, and sometimes share your data</li>
        <li>Your access can be revoked if you violate sometimes vague terms of service</li>
        <li>The actual infrastructure decisions remain entirely outside your control</li>
      </ul>
      
      <p>This arrangement has been normalized to the point that many don't question it, but it represents a significant departure from physical ownership models we've relied on for centuries.</p>
      
      <h2>Why True Ownership Matters</h2>
      
      <h3>Privacy as a Fundamental Right</h3>
      <p>When you don't control the infrastructure storing your data, meaningful privacy becomes nearly impossible. Even with encryption, metadata—who accessed what, when, and from where—remains exposed to service providers. True data sovereignty means the ability to keep private matters genuinely private.</p>
      
      <h3>Protection Against Platform Risk</h3>
      <p>Companies change policies, get acquired, or shut down entirely. When your digital life depends on these platforms, you're vulnerable to decisions made in distant boardrooms. True ownership creates resilience against these business fluctuations.</p>
      
      <h3>Freedom from Surveillance Capitalism</h3>
      <p>The dominant business model of the internet relies on extracting value from user data through surveillance and behavioral prediction. Data sovereignty provides an alternative path where users, not their behaviors, are the customers.</p>
      
      <h2>Blockchain's Role in Restoring Ownership</h2>
      
      <p>Blockchain technology offers a radical reimagining of digital ownership through several key innovations:</p>
      
      <ul>
        <li><strong>Self-custody:</strong> Cryptographic ownership that doesn't depend on any third party's permission or systems</li>
        <li><strong>Transparent rules:</strong> Smart contracts that execute predictably and can't be unilaterally changed</li>
        <li><strong>Censorship resistance:</strong> Data that can't be removed or altered without proper cryptographic authorization</li>
      </ul>
      
      <p>These properties form the foundation for true digital ownership, where possession isn't just "nine-tenths of the law" but is mathematically guaranteed.</p>
      
      <h2>The Sovereignty Spectrum</h2>
      
      <p>Data sovereignty isn't binary but exists on a spectrum. At Xinetee, we recognize that different users have different needs, which is why our systems allow for personalized sovereignty choices:</p>
      
      <ol>
        <li><strong>Full self-sovereignty:</strong> Complete control over all keys and infrastructure choices</li>
        <li><strong>Managed sovereignty:</strong> Ownership of keys with delegated infrastructure management</li>
        <li><strong>Custodial with transparency:</strong> Convenience-focused options that still provide verification and portability</li>
      </ol>
      
      <p>This flexibility acknowledges that sovereignty comes with responsibility—the freedom to control your data also means the responsibility to manage it appropriately.</p>
      
      <h2>The Path Forward</h2>
      
      <p>As we build the next generation of digital infrastructure, the question of data sovereignty must be central to our designs, not an afterthought. This means:</p>
      
      <ul>
        <li>Creating user-friendly tools that make self-sovereignty accessible to non-technical users</li>
        <li>Developing interoperability standards that prevent new forms of lock-in</li>
        <li>Educating users about the importance and implications of true digital ownership</li>
      </ul>
      
      <p>The transition to sovereign data won't happen overnight, but each step toward user control creates a digital ecosystem that's more resilient, more private, and more aligned with our intuitive understanding of what ownership should mean.</p>
      
      <p>In a world where more of our lives and value moves online each year, the question isn't whether we can afford to pursue true data sovereignty—it's whether we can afford not to.</p>
    `
  },
  {
    id: 4,
    title: "Integrating Blockchain Storage: A Developer's Guide",
    excerpt: "Technical insights into working with decentralized storage APIs, addressing common challenges, and optimizing performance.",
    date: "May 5, 2025",
    readTime: "12 min read",
    category: "Development",
    author: "David Okafor",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1389&auto=format&fit=crop",
    content: `
      <p>As decentralized storage systems mature, more developers are looking to integrate them into applications. This guide walks through practical considerations for working with blockchain-based storage like Xinetee from a developer's perspective.</p>
      
      <h2>Fundamental Differences from Traditional Storage</h2>
      
      <p>Before diving into implementation details, it's important to understand how decentralized storage fundamentally differs from traditional cloud services:</p>
      
      <table>
        <tr>
          <th>Traditional Storage</th>
          <th>Blockchain Storage</th>
        </tr>
        <tr>
          <td>Location-based addressing</td>
          <td>Content-based addressing</td>
        </tr>
        <tr>
          <td>Mutable by default</td>
          <td>Immutable by default</td>
        </tr>
        <tr>
          <td>Centralized access control</td>
          <td>Cryptographic access control</td>
        </tr>
        <tr>
          <td>Traditional API authentication</td>
          <td>Cryptographic request signing</td>
        </tr>
      </table>
      
      <p>These differences require adjustments to common development patterns, particularly around how data is updated, versioned, and accessed.</p>
      
      <h2>Getting Started: API Basics</h2>
      
      <p>Xinetee's API is designed to be familiar to developers who've worked with RESTful services, while incorporating the unique aspects of decentralized storage. Here's a simple example of uploading a file:</p>
      
      <pre><code>
const xinetee = require('xinetee-js');
const client = new xinetee.Client({ 
  apiKey: process.env.XINETEE_API_KEY 
});

async function uploadFile() {
  const fileStream = fs.createReadStream('./document.pdf');
  
  const uploadOptions = {
    fileName: 'document.pdf',
    encryption: 'client-side', // Use client-side encryption
    replicas: 3,               // Store 3 copies for redundancy
    persistence: 'permanent'   // Use permanent storage
  };
  
  try {
    const result = await client.files.upload(fileStream, uploadOptions);
    console.log('File CID:', result.cid);
    return result;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
}
      </code></pre>
      
      <p>The <code>cid</code> (Content Identifier) returned is crucial—it's the unique fingerprint of your file and the primary way you'll reference it in future operations.</p>
      
      <h2>Working with Mutable Data</h2>
      
      <p>Since content-addressed storage is inherently immutable, handling frequently changing data requires different approaches:</p>
      
      <h3>Option 1: Pointers</h3>
      <p>Maintain a mutable pointer (stored on-chain) that references the latest CID:</p>
      
      <pre><code>
// Update a user profile
async function updateProfile(userId, profileData) {
  // Upload the new data, getting a new CID
  const result = await client.files.uploadJson(profileData);
  
  // Update the pointer to the new CID
  await client.pointers.set({
    name: \`user-profile-\${userId}\`,
    target: result.cid
  });
}

// Retrieve the latest version
async function getProfile(userId) {
  const pointer = await client.pointers.get(\`user-profile-\${userId}\`);
  return client.files.getJson(pointer.target);
}
      </code></pre>
      
      <h3>Option 2: CRDT-Based Data</h3>
      <p>For collaborative applications, Conflict-free Replicated Data Types provide elegant solutions:</p>
      
      <pre><code>
const { createYDoc, encodeYDoc, decodeYDoc } = require('xinetee-js/y-doc');

async function setupCollaborativeDocument() {
  // Create initial document
  const ydoc = createYDoc();
  const ytext = ydoc.getText('content');
  ytext.insert(0, 'Welcome to collaborative editing!');
  
  // Store the initial state
  const encoded = encodeYDoc(ydoc);
  const result = await client.files.upload(encoded, { 
    persistence: 'permanent'
  });
  
  // Create a collaboration room linked to this document
  return client.collaboration.createRoom({
    documentCid: result.cid,
    schema: 'text',
  });
}
      </code></pre>
      
      <h2>Performance Optimization</h2>
      
      <p>Working with decentralized storage introduces different performance considerations:</p>
      
      <h3>1. Chunking Strategy</h3>
      <p>Customize how files are split to optimize for your access patterns:</p>
      
      <pre><code>
// For a video file where random access is important
const options = {
  chunker: {
    algorithm: 'fixed',
    size: 256 * 1024 // 256KB chunks for easy seeking
  }
};

// For a large file that will usually be read sequentially
const options = {
  chunker: {
    algorithm: 'buzhash',
    averageSize: 1024 * 1024 // ~1MB average chunks
  }
};
      </code></pre>
      
      <h3>2. Strategic Caching</h3>
      <p>Implement caching at various levels:</p>
      
      <ul>
        <li>Browser cache with Service Workers for client-side applications</li>
        <li>CDN integration for popular content</li>
        <li>Edge-node prioritization for location-specific performance</li>
      </ul>
      
      <h3>3. Progressive Loading</h3>
      <p>For large media, implement progressive loading:</p>
      
      <pre><code>
// Request only the needed chunks
const videoStream = await client.files.readStream(videoCid, {
  start: timeOffset * bytesPerSecond,
  end: (timeOffset + duration) * bytesPerSecond
});
      </code></pre>
      
      <h2>Security Best Practices</h2>
      
      <h3>1. Key Management</h3>
      <p>Never hardcode encryption or access keys. Use key derivation for user-specific keys:</p>
      
      <pre><code>
const userKey = await client.crypto.deriveKey({
  password: userPassword,
  salt: username,
  iterations: 100000,
  keyLength: 32
});

// Store files encrypted with user-specific key
const result = await client.files.upload(fileStream, {
  encryption: {
    type: 'aes-gcm',
    key: userKey
  }
});
      </code></pre>
      
      <h3>2. Access Control</h3>
      <p>Implement principle of least privilege with granular permissions:</p>
      
      <pre><code>
await client.access.grant({
  target: documentCid,
  identity: collaboratorId,
  permissions: ['read', 'comment'],  // But not 'write'
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
});
      </code></pre>
      
      <h2>Common Integration Challenges</h2>
      
      <h3>Challenge: Handling Network Variability</h3>
      <p>Decentralized systems have different latency characteristics:</p>
      
      <pre><code>
const result = await client.files.upload(largeFile, {
  onProgress: (progress) => {
    console.log(\`Uploaded \${progress.percent}%\`);
    updateProgressUI(progress.percent);
  },
  retries: 3,
  concurrency: 5
});
      </code></pre>
      
      <h3>Challenge: Offline Support</h3>
      <p>Implement offline-first capabilities:</p>
      
      <pre><code>
// In your service worker
import { createXineteeCache } from 'xinetee-js/sw';

const xineteeCache = createXineteeCache({
  pinRecent: true,   // Automatically pin recently used files
  maxSize: 500e6     // Use up to 500MB for cache
});

// Then in your application
const doc = await client.files.get(docCid, {
  offlineFirst: true  // Try cache before network
});
      </code></pre>
      
      <h2>Testing and Deployment</h2>
      
      <p>Xinetee provides several environments for development:</p>
      
      <ul>
        <li><strong>Local development:</strong> Use the Xinetee Desktop app with local-only mode</li>
        <li><strong>Staging:</strong> Test network with free test credits</li>
        <li><strong>Production:</strong> Mainnet with full reliability guarantees</li>
      </ul>
      
      <p>For CI/CD pipelines, use our Docker containers:</p>
      
      <pre><code>
# In your CI/CD pipeline
docker run --rm -v $(pwd):/app xinetee/cli:latest \\
  --token $CI_TOKEN \\
  --env staging \\
  deploy --directory ./build
      </code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Integrating blockchain storage into your applications requires some paradigm shifts, but the benefits—enhanced security, true user ownership, and censorship resistance—make it worth the effort.</p>
      
      <p>The examples in this guide are just starting points. For complete documentation, explore our <a href="#">Developer Hub</a>, join our <a href="#">Discord community</a>, or reach out to our developer relations team for personalized guidance.</p>
    `
  }
];

const BlogPost = () => {
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<typeof blogPosts[0] | undefined>(undefined);
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);
  
  useEffect(() => {
    // In a real app, you'd fetch this from an API
    const currentPost = blogPosts.find((post) => post.id === Number(id));
    setPost(currentPost);
    
    if (currentPost) {
      // Get posts in same category
      const related = blogPosts
        .filter((p) => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 2);
      setRelatedPosts(related);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h2 className="text-2xl">Post not found</h2>
          <Link to="/blog" className="text-primary mt-4 block">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Article URL copied to clipboard!",
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <AnimatedSection className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-foreground/60 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-primary/20 text-primary text-xs py-1 px-3 rounded-full">
              {post.category}
            </span>
            <span className="text-foreground/60 text-sm flex items-center">
              <Clock size={14} className="mr-1" />
              {post.readTime}
            </span>
            <span className="text-foreground/60 text-sm">
              {post.date}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl mb-6 font-light tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => {
                  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank');
                }}
                className="p-2 rounded-full bg-card/40 text-foreground/60 hover:text-foreground hover:bg-card/60 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter size={16} />
              </button>
              
              <button 
                onClick={() => {
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
                }}
                className="p-2 rounded-full bg-card/40 text-foreground/60 hover:text-foreground hover:bg-card/60 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook size={16} />
              </button>
              
              <button 
                onClick={() => {
                  window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`, '_blank');
                }}
                className="p-2 rounded-full bg-card/40 text-foreground/60 hover:text-foreground hover:bg-card/60 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={16} />
              </button>
              
              <button 
                onClick={copyToClipboard}
                className="p-2 rounded-full bg-card/40 text-foreground/60 hover:text-foreground hover:bg-card/60 transition-colors"
                aria-label="Copy link"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Featured Image */}
      <AnimatedSection className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </AnimatedSection>
      
      {/* Content */}
      <AnimatedSection className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-8 prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </GlassCard>
        </div>
      </AnimatedSection>
      
      {/* Related Posts */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-light mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="block group">
                <GlassCard className="h-full flex flex-col overflow-hidden">
                  <div className="h-48 overflow-hidden rounded-lg mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-primary/20 text-primary text-xs py-1 px-2 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-foreground/60 text-xs flex items-center">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-light mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button>View All Blog Posts</Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
