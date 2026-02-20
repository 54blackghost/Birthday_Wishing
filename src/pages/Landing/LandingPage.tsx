import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { landingPricing } from "@/services/mockPricing";
import {
  Cake, Share2, PartyPopper, Gift, Image, Video, Mic, Star,
  ChevronLeft, ChevronRight, Check
} from "lucide-react";
import { useState } from "react";

const steps = [
  { icon: Cake, title: "Create Account", desc: "Sign up and set your birthday date" },
  { icon: Share2, title: "Share Your Link", desc: "Send your unique link to friends & family" },
  { icon: PartyPopper, title: "Celebrate!", desc: "Watch wishes pour in and enjoy your album" },
];

const features = [
  { icon: Gift, title: "Collect Wishes", desc: "Receive heartfelt messages from loved ones" },
  { icon: Image, title: "Photo Memories", desc: "Friends can upload photos and images" },
  { icon: Video, title: "Video Messages", desc: "Accept short video birthday messages" },
  { icon: Mic, title: "Voice Notes", desc: "Record and receive voice messages" },
  { icon: Star, title: "Digital Album", desc: "Auto-generated beautiful album of wishes" },
  { icon: PartyPopper, title: "Video Montage", desc: "AI-generated birthday celebration video" },
];

const testimonials = [
  { name: "Jessica M.", text: "This made my birthday so special! All my friends' wishes in one beautiful place. 😍", avatar: "JM" },
  { name: "Ryan K.", text: "The video montage brought me to tears. Best birthday gift ever! 🎂", avatar: "RK" },
  { name: "Priya S.", text: "So easy to use! I shared my link and got 50+ wishes in a day! 🎉", avatar: "PS" },
];

const LandingPage = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              🎂 The #1 Birthday Wishing Platform
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
              Make Every Birthday{" "}
              <span className="text-gradient">Unforgettable</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
              Collect birthday wishes from friends and family — text, photos, videos, and voice notes.
              We'll create a stunning digital album and video montage for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gradient-primary rounded-full text-lg px-8 animate-pulse-glow">
                <Link to="/signup">Get Started — It's Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/wish/demo123">See a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">Three simple steps to create your birthday celebration</p>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <Card className="glass rounded-2xl border-0 hover:scale-105 transition-transform duration-300">
                  <CardContent className="flex flex-col items-center p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="mb-1 text-sm font-semibold text-primary">Step {i + 1}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">Packed with features to make your birthday celebration perfect</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, i) => (
              <Card key={i} className="glass rounded-2xl border-0 text-left hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground">{feat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Loved by Thousands</h2>
          <div className="relative mx-auto max-w-xl">
            <Card className="glass rounded-2xl border-0">
              <CardContent className="p-8">
                <div className="mb-4 flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
                </div>
                <p className="text-lg mb-6 italic">"{testimonials[testimonialIdx].text}"</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                    {testimonials[testimonialIdx].avatar}
                  </div>
                  <span className="font-semibold">{testimonials[testimonialIdx].name}</span>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 flex justify-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => setTestimonialIdx((p) => (p - 1 + testimonials.length) % testimonials.length)}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {testimonials.map((_, i) => (
                <button key={i} className={`h-2 w-2 rounded-full transition-colors ${i === testimonialIdx ? "bg-primary" : "bg-muted-foreground/30"}`} onClick={() => setTestimonialIdx(i)} />
              ))}
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => setTestimonialIdx((p) => (p + 1) % testimonials.length)}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">Start free. Upgrade when you're ready.</p>
          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            {landingPricing.map((tier) => (
              <Card key={tier.id} className={`glass rounded-2xl border-0 relative ${tier.popular ? "ring-2 ring-primary" : ""}`}>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold mb-6 text-gradient">{tier.price}</div>
                  <ul className="space-y-3 text-left mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full rounded-full ${tier.popular ? "gradient-primary" : ""}`} variant={tier.popular ? "default" : "outline"}>
                    <Link to="/signup">{tier.popular ? "Get Started" : "Start Free"}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl rounded-3xl gradient-primary p-12">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Celebrate?</h2>
            <p className="text-primary-foreground/80 mb-8">Create your birthday page in seconds and start collecting wishes!</p>
            <Button asChild size="lg" variant="secondary" className="rounded-full text-lg px-8">
              <Link to="/signup">Create Your Birthday Page</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
