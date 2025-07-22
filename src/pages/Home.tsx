import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Palette, Globe } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(250, 247, 244, 0.9), rgba(244, 228, 224, 0.9)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Crafting Brands with
            <span className="text-gold block mt-2">Heart & Strategy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium brand identity and web design that tells your story and connects with your ideal clients
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="premium" size="lg" asChild>
              <Link to="/contact" className="group">
                Work With Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button variant="elegant" size="lg" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Hello, I'm Marielle
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I believe every business has a beautiful story waiting to be told. Through thoughtful design 
              and strategic branding, I help passionate entrepreneurs create visual identities that not only 
              look stunning but also connect deeply with their ideal clients.
            </p>
          </div>

          {/* Services Preview */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 bg-gradient-to-b from-cream to-background border-blush/20">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Palette className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Brand Identity Design
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Complete visual identity systems that capture your essence and speak to your ideal clients
              </p>
              <Button variant="ghost" asChild>
                <Link to="/services" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 bg-gradient-to-b from-cream to-background border-blush/20">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Globe className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Website Design
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beautiful, conversion-focused websites that showcase your brand and grow your business
              </p>
              <Button variant="ghost" asChild>
                <Link to="/services" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 bg-gradient-to-b from-cream to-background border-blush/20">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Heart className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Custom Branding
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tailored brand experiences that tell your unique story and resonate with your audience
              </p>
              <Button variant="ghost" asChild>
                <Link to="/services" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Build Something Beautiful?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Let's create a brand that truly represents you and connects with your dream clients
          </p>
          <Button variant="premium" size="lg" asChild>
            <Link to="/contact" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
