import { Leaf, Heart, Shield, Bot, Users, Droplets, Sparkles, Zap, CheckCircle, Lock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import galleryCare from "@/assets/gallery-care.jpg";
import galleryCows from "@/assets/gallery-cows.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";

const values = [
  {
    icon: Bot,
    title: "100% Automated",
    description: "Every process from milking to packaging is handled by advanced machinery with zero human intervention.",
  },
  {
    icon: Sparkles,
    title: "Maximum Hygiene",
    description: "Hospital-grade cleanliness maintained through automated sanitization systems at every stage.",
  },
  {
    icon: Shield,
    title: "No Human Touch",
    description: "Your milk never comes in contact with human hands, ensuring complete safety and purity.",
  },
  {
    icon: Heart,
    title: "Animal Welfare",
    description: "Our cows receive the best care with spacious pastures, while processing remains fully automated.",
  },
];

const automationFeatures = [
  {
    icon: Bot,
    title: "Robotic Milking Systems",
    description: "State-of-the-art robotic arms milk our cows gently and hygienically, monitored 24/7 by AI systems.",
  },
  {
    icon: Lock,
    title: "Sealed Transfer Pipelines",
    description: "Milk flows through completely enclosed, sanitized pipelines directly from cow to processing unit.",
  },
  {
    icon: Zap,
    title: "Automated Pasteurization",
    description: "Computer-controlled temperature and timing ensure perfect pasteurization without any manual intervention.",
  },
  {
    icon: CheckCircle,
    title: "AI Quality Testing",
    description: "Advanced sensors continuously monitor quality parameters, rejecting any batch that doesn't meet standards.",
  },
  {
    icon: Sparkles,
    title: "Auto-Sanitization",
    description: "All equipment undergoes automated cleaning and sterilization cycles between every production batch.",
  },
  {
    icon: Droplets,
    title: "Touchless Bottling",
    description: "Robotic arms fill, seal, and package products in a completely sterile, human-free environment.",
  },
];

const hygieneStandards = [
  "Zero Human Contact Throughout Processing",
  "Automated Cleaning Every 2 Hours",
  "UV Sterilization of All Surfaces",
  "HEPA Air Filtration Systems",
  "Real-Time Contamination Monitoring",
  "Sealed Production Environment",
  "Robotic Quality Inspection",
  "Temperature-Controlled Storage",
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-soft">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              The Future of Dairy is Here
            </h1>
            <p className="text-2xl text-foreground font-medium mb-4">
              100% Automated • Zero Human Touch • Maximum Hygiene
            </p>
            <p className="body-lg text-muted-foreground">
              Welcome to Vizhis Dairy Farm - where cutting-edge robotics and AI ensure 
              the most hygienic dairy products ever produced. Every step from milking to 
              packaging is handled entirely by machines, guaranteeing unprecedented purity.
            </p>
          </div>
        </div>
      </section>

      {/* Hygiene Highlight Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
                <Bot className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                100% AUTOMATED
              </h3>
              <p className="text-primary-foreground/90">
                Every single process handled by advanced machinery
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                ZERO HUMAN TOUCH
              </h3>
              <p className="text-primary-foreground/90">
                No human hands ever contact your dairy products
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                MAXIMUM HYGIENE
              </h3>
              <p className="text-primary-foreground/90">
                Hospital-grade cleanliness standards maintained 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                    <img
                      src={galleryCare}
                      alt="Automated dairy farm"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                    <img
                      src={galleryCows}
                      alt="Happy cows at Vizhi Dairy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                    <img
                      src={galleryNature}
                      alt="Modern dairy facility"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <SectionHeading
                badge="Revolutionary Technology"
                title="Machines, Not Hands"
                align="left"
              />
              <div className="space-y-6 text-muted-foreground">
                <p className="body-md">
                  Vizhis Dairy Farm represents a complete revolution in dairy production. 
                  We've eliminated all human contact from our processing chain through 
                  <strong className="text-foreground"> advanced robotics and artificial intelligence</strong>.
                </p>
                <p className="body-md">
                  From the moment milk leaves the cow to when it arrives at your doorstep, 
                  <strong className="text-foreground"> not a single human hand touches your product</strong>. 
                  Our facility operates like a high-tech laboratory, with machines handling every step 
                  under constant AI monitoring.
                </p>
                <p className="body-md">
                  This isn't just automation - it's a <strong className="text-foreground">complete reimagining 
                  of dairy safety</strong>. While our cows live naturally in open pastures, our processing 
                  facility maintains hospital-grade hygiene through continuous automated sanitization.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">0</p>
                  <p className="text-muted-foreground text-sm mt-1">Human Touch</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">100%</p>
                  <p className="text-muted-foreground text-sm mt-1">Automated</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">24/7</p>
                  <p className="text-muted-foreground text-sm mt-1">AI Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Features - Detailed */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom">
          <SectionHeading
            badge="Fully Automated Process"
            title="How We Ensure Zero Human Contact"
            subtitle="Six stages of completely automated, touchless dairy processing that guarantee maximum hygiene."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-3xl font-bold text-primary/20">0{index + 1}</span>
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene Standards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <SectionHeading
                badge="Hygiene Standards"
                title="Beyond Human Capability"
                align="left"
              />
              <p className="body-md text-muted-foreground mb-8">
                Our automated systems maintain hygiene standards that are impossible for 
                traditional manual processing to achieve. Every surface, every pipeline, 
                every contact point is continuously monitored and sanitized by machines.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {hygieneStandards.map((standard) => (
                  <div 
                    key={standard}
                    className="flex items-center gap-4 bg-sage-light rounded-xl p-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{standard}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-8 text-center shadow-soft">
                <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-primary mb-2">12+</p>
                <p className="text-sm text-muted-foreground">Robotic Systems</p>
              </div>

              <div className="bg-card rounded-2xl p-8 text-center shadow-soft">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-primary mb-2">200+</p>
                <p className="text-sm text-muted-foreground">Daily Sanitization Cycles</p>
              </div>

              <div className="bg-card rounded-2xl p-8 text-center shadow-soft">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-primary mb-2">99.99%</p>
                <p className="text-sm text-muted-foreground">Purity Rate</p>
              </div>

              <div className="bg-card rounded-2xl p-8 text-center shadow-soft">
                <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Sealed Environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom">
          <SectionHeading
            badge="Our Core Principles"
            title="What Drives Us"
            subtitle="These values are embedded in every automated process and every decision we make."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="The Vizhis Advantage"
            title="Why Automation Matters for Your Health"
            subtitle="Understanding how our touchless technology protects you and your family."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="font-serif font-semibold text-xl">Complete Contamination Prevention</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Human hands, even when gloved, can carry bacteria and contaminants. Our robotic 
                systems are sterilized after every cycle, ensuring zero contamination risk.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  No bacterial transmission from workers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  No cross-contamination between batches
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  No airborne particle exposure
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="font-serif font-semibold text-xl">Consistent Quality Every Time</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Machines don't have bad days. Our automated systems maintain exact temperatures, 
                timings, and handling procedures with perfect consistency.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Precise temperature control to 0.1°C
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Exact timing for every process
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Uniform quality in every bottle
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-8 h-8 text-primary" />
                <h3 className="font-serif font-semibold text-xl">Sealed From Nature to Bottle</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our milk travels through completely sealed pipelines from milking to bottling. 
                It never comes in contact with air, surfaces, or any external environment.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Closed-loop transfer system
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  No environmental exposure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Sterile packaging environment
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
                <h3 className="font-serif font-semibold text-xl">Real-Time Quality Monitoring</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                AI-powered sensors continuously test every parameter. Any deviation, no matter 
                how small, triggers immediate rejection of that batch.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Continuous bacterial count monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Instant contamination detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Automated quality certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-lg text-primary-foreground mb-6">
              The Cleanest Dairy You'll Ever Find
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We don't just meet hygiene standards - we've redefined them through complete automation. 
              No human touch means no human error, no contamination, no compromise.
            </p>
            <p className="body-lg text-primary-foreground/85 mb-12">
              Every bottle carries our guarantee: processed entirely by machines in a sealed, 
              sterilized environment, monitored by AI, and delivered with unprecedented purity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Bot, label: "100% Machine Processed" },
                { icon: Sparkles, label: "Zero Human Contact" },
                { icon: Shield, label: "Maximum Safety" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                    <item.icon className="w-10 h-10 text-gold" />
                  </div>
                  <p className="text-primary-foreground font-semibold text-lg">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;