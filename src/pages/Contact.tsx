import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Build Something Beautiful
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'd love to learn about your project and explore how we can bring your brand vision to life. 
            Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-to-b from-cream to-background border-blush/20">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Send me a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-2 border-blush/30 focus:border-gold"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="mt-2 border-blush/30 focus:border-gold"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Tell me about your project
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd love to hear about your business, your goals, and how I can help bring your vision to life..."
                    rows={6}
                    required
                    className="mt-2 border-blush/30 focus:border-gold resize-none"
                  />
                </div>
                
                <Button variant="premium" type="submit" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Get in touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I typically respond within 24 hours and would love to schedule a consultation 
                  to discuss your project in detail. Whether you're just starting out or ready 
                  to rebrand, I'm here to help you create something beautiful.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <a 
                  href="mailto:hello@mariellehoney.com"
                  className="flex items-center p-4 rounded-lg bg-gradient-to-r from-cream to-blush/20 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      hello@mariellehoney.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/mariellehoney"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-gradient-to-r from-cream to-blush/20 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mr-4">
                    <Instagram className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Instagram</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      @mariellehoney
                    </p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/mariellehoney"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-gradient-to-r from-cream to-blush/20 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mr-4">
                    <Linkedin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">LinkedIn</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      Marielle Honey
                    </p>
                  </div>
                </a>
              </div>

              {/* FAQ */}
              <Card className="p-6 bg-gradient-primary border-blush/20">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-foreground">How long does a project take?</h4>
                    <p className="text-muted-foreground">Brand identity projects typically take 4-6 weeks, while websites take 6-8 weeks.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Do you offer payment plans?</h4>
                    <p className="text-muted-foreground">Yes! I offer flexible payment plans to make working together accessible.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">What's included in your services?</h4>
                    <p className="text-muted-foreground">Each package includes strategy, design, revisions, and all final files you need to launch.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm excited to learn about your business and help you create a brand that truly represents you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" asChild>
              <a href="mailto:hello@mariellehoney.com">
                Book a Consultation
              </a>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <a href="/services">
                View Services
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
