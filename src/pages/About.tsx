import { Leaf, Heart, Shield, Bot, Users, Droplets, Sparkles, Zap, CheckCircle, Lock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
// Import your custom images - replace with your actual image filenames
import aboutImage1 from "@/assets/img6.jpeg";
import aboutImage2 from "@/assets/img5.jpeg";
import aboutImage3 from "@/assets/milkbottle.png";

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
    title: "Automated Milking Systems",
    description: "State-of-the-art automated systems milk our cows gently and hygienically, monitored continuously 24/7.",
  },
  {
    icon: Lock,
    title: "Sealed Transfer Pipelines",
    description: "Milk flows through completely enclosed, sanitized pipelines directly from cow to processing unit.",
  },
  {
    icon: Zap,
    title: "Precision Temperature Control",
    description: "Advanced systems maintain ideal conditions throughout processing for consistent quality and safety.",
  },
  {
    icon: CheckCircle,
    title: "Continuous Quality Testing",
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
    description: "Automated systems fill, seal, and package products in a completely sterile, human-free environment.",
  },
];

const hygieneStandards = [
  "Zero Human Contact Throughout Processing",
  "Automated Cleaning Every 2 Hours",
  "UV Sterilization of All Surfaces",
  "HEPA Air Filtration Systems",
  "Real-Time Contamination Monitoring",
  "Sealed Production Environment",
  "Automated Quality Inspection",
  "Temperature-Controlled Storage",
];

const processSteps = [
  {
    number: "01",
    title: "Automated Collection",
    description: "Milk is collected using advanced automated systems that ensure gentle, stress-free extraction from our healthy cows.",
  },
  {
    number: "02",
    title: "Immediate Hygienic Processing",
    description: "Within minutes, milk enters our sealed facility where it undergoes careful, controlled treatment.",
  },
  {
    number: "03",
    title: "Quality Verification",
    description: "Multiple automated checks ensure every drop meets our strict purity and safety standards.",
  },
  {
    number: "04",
    title: "Sterile Packaging",
    description: "Products are packaged in a completely sealed environment, maintaining freshness from farm to fridge.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-100/80 via-emerald-50/70 to-green-100/60">
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
              Welcome to Vizhis Dairy Farm - where cutting-edge automation ensures 
              the most hygienic dairy products ever produced. Every step from milking 
              to packaging is handled entirely by machines, guaranteeing unprecedented purity.
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
                Complete elimination of human contact in production
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
                Hospital-grade standards through automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images Column */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutImage1}
                  alt="Automated dairy facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutImage2}
                  alt="Modern dairy processing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutImage3}
                  alt="Pure milk bottle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Column */}
            <div>
              <SectionHeading
                badge="Our Philosophy"
                title="Redefining Dairy Purity"
                align="left"
              />
              <p className="body-lg text-muted-foreground mb-6">
                At Vizhis Dairy Farm, we believe the cleanest milk comes from the cleanest process. 
                That's why we've invested in full automation — not just for efficiency, but for 
                uncompromising hygiene and consistency that hand-processing simply cannot achieve.
              </p>
              <p className="body-lg text-muted-foreground">
                Every bottle that leaves our facility carries the same guarantee: zero human touch, 
                zero compromise on quality, and maximum safety for your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <SectionHeading
            badge="How It Works"
            title="Our Automated Journey"
            subtitle="From pasture to package – every step is touchless and precisely controlled"
            className="text-primary-foreground"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="text-6xl font-bold text-white/30 mb-4">{step.number}</div>
                <h3 className="font-serif font-semibold text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Technology"
            title="Automation That Matters"
            subtitle="Advanced systems working together to deliver unmatched hygiene and consistency"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene Standards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <SectionHeading
            badge="Standards"
            title="Our Hygiene Commitment"
            subtitle="Non-negotiable rules that define every aspect of our production"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hygieneStandards.map((standard, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-soft"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{standard}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            subtitle="The principles behind every decision we make"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 text-center hover:shadow-card transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
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
              sterilized environment, monitored continuously, and delivered with unprecedented purity.
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