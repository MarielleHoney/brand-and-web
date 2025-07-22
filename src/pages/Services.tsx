import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Palette, Globe, Heart, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Brand Identity Design",
      icon: Palette,
      price: "Starting at $2,500",
      description: "Complete visual identity that captures your essence and speaks to your ideal clients",
      features: [
        "Logo design & variations",
        "Brand color palette & typography",
        "Brand voice & messaging",
        "Business card & stationery design",
        "Brand guidelines document",
        "Social media templates"
      ],
      popular: false
    },
    {
      title: "Website Design",
      icon: Globe,
      price: "Starting at $3,500",
      description: "Beautiful, conversion-focused websites that showcase your brand and grow your business",
      features: [
        "Custom website design",
        "Mobile-responsive development",
        "SEO optimization",
        "Content management system",
        "Contact forms & integrations",
        "30 days of support"
      ],
      popular: true
    },
    {
      title: "Custom Branding Package",
      icon: Heart,
      price: "Starting at $4,500",
      description: "The complete brand experience - everything you need to launch with confidence",
      features: [
        "Complete brand identity",
        "Custom website design",
        "Marketing materials",
        "Social media strategy",
        "Brand photoshoot direction",
        "Launch strategy & support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thoughtfully crafted design solutions that help your business shine and connect with your ideal clients
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative p-8 hover:shadow-elegant transition-all duration-300 ${
                    service.popular 
                      ? 'border-gold bg-gradient-to-b from-gold/5 to-background' 
                      : 'bg-gradient-to-b from-cream to-background border-blush/20'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gold text-primary px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="mb-6 flex justify-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        service.popular ? 'bg-gold/20' : 'bg-gradient-gold'
                      }`}>
                        <IconComponent className={`h-8 w-8 ${service.popular ? 'text-gold' : 'text-gold'}`} />
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="text-2xl font-semibold text-gold mb-6">
                      {service.price}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={service.popular ? "premium" : "elegant"} 
                    className="w-full" 
                    asChild
                  >
                    <Link to="/contact" className="group">
                      Inquire Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              My Design Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A thoughtful, collaborative approach that ensures your brand truly represents you
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We'll dive deep into your story, values, and vision for your brand"
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Together we'll define your brand positioning and visual direction"
              },
              {
                step: "03",
                title: "Design",
                description: "I'll craft your visual identity with attention to every detail"
              },
              {
                step: "04",
                title: "Launch",
                description: "You'll receive everything you need to confidently share your brand"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-xl font-semibold text-gold">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Let's schedule a consultation to discuss your project and see if we're a perfect fit
          </p>
          <Button variant="premium" size="lg" asChild>
            <Link to="/contact" className="group">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
