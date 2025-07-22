import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Coffee, Sparkles } from 'lucide-react';
import mariellePortrait from '@/assets/marielle-portrait.jpg';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                Hello, I'm Marielle
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A brand designer who believes every business has a beautiful story waiting to be told. 
                I'm passionate about creating visual identities that not only look stunning but also 
                connect deeply with your ideal clients.
              </p>
              <Button variant="premium" size="lg" asChild>
                <Link to="/contact" className="group">
                  Let's Work Together
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={mariellePortrait}
                  alt="Marielle Honey"
                  className="w-full h-auto rounded-2xl shadow-elegant"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-gold rounded-2xl opacity-20 z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              My Story
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              My journey into design began with a simple belief: that every business, no matter how small, 
              deserves to look and feel as beautiful as the passion behind it. After years of working with 
              entrepreneurs who had incredible stories but struggled to communicate their value visually, 
              I knew I had found my calling.
            </p>
            
            <p>
              What started as a love for typography and color has evolved into a deep understanding of how 
              strategic design can transform a business. I don't just create pretty logos—I craft complete 
              visual systems that help my clients attract their dream customers and charge their worth.
            </p>
            
            <p>
              When I'm not designing, you'll find me exploring local coffee shops for inspiration, 
              tending to my ever-growing plant collection, or planning my next travel adventure. 
              I believe that life experiences fuel creativity, and I bring that same sense of wonder 
              and authenticity to every project I work on.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              My Design Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Great design isn't just about making things look beautiful—it's about creating meaningful 
              connections between your brand and your ideal clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-b from-cream to-background border-blush/20">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Heart className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Heart-Centered Design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every project starts with understanding your story, values, and the heart behind your business. 
                Authentic brands connect on an emotional level.
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-b from-cream to-background border-blush/20">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Strategic Beauty
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Beautiful design that doesn't serve a purpose is just decoration. I create visuals that 
                are both stunning and strategically designed to attract your ideal clients.
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-b from-cream to-background border-blush/20">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Collaborative Process
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The best designs happen when we work together. I believe in creating a collaborative, 
                enjoyable experience that feels more like working with a friend than a vendor.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12">
            A Few Fun Facts About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 mr-4 flex-shrink-0" />
                <p className="text-muted-foreground">
                  I have over 50 houseplants and counting (yes, I name them all)
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 mr-4 flex-shrink-0" />
                <p className="text-muted-foreground">
                  My design inspiration comes from vintage typography and nature walks
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 mr-4 flex-shrink-0" />
                <p className="text-muted-foreground">
                  I believe the perfect workspace includes natural light, fresh flowers, and good coffee
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 mr-4 flex-shrink-0" />
                <p className="text-muted-foreground">
                  I've traveled to 15 countries and find design inspiration everywhere I go
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 mr-4 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Weekend mornings are for farmers markets and discovering new local artisans
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 mr-4 flex-shrink-0" />
                <p className="text-muted-foreground">
                  I'm obsessed with color psychology and how it affects our emotions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'd love to learn about your business and explore how we can bring your brand vision to life
          </p>
          <Button variant="premium" size="lg" asChild>
            <Link to="/contact" className="group">
              Start the Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
