import { Leaf, Heart, Shield, Bot, Users, Droplets, Sparkles, Zap, CheckCircle, Lock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
// Import your custom images
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
      {/* Hero Section - reduced padding */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-emerald-100/80 via-emerald-50/70 to-green-100/60">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-medium text-emerald-700 uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h1 className="heading-xl text-foreground mb-5">
              The Future of Dairy is Here
            </h1>
            <p className="text-xl text-foreground font-medium mb-4">
              100% Automated • Zero Human Touch • Maximum Hygiene
            </p>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Welcome to Vizhis Dairy Farm - where cutting-edge automation ensures 
              the most hygienic dairy products ever produced.
            </p>
          </div>
        </div>
      </section>

      {/* Hygiene Highlight Section - reduced padding */}
      <section className="py-12 bg-gradient-to-br from-emerald-700 to-teal-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                100% AUTOMATED
              </h3>
              <p className="text-white/90 text-sm">
                Every single process handled by advanced machinery
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                ZERO HUMAN TOUCH
              </h3>
              <p className="text-white/90 text-sm">
                Complete elimination of human contact in production
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                MAXIMUM HYGIENE
              </h3>
              <p className="text-white/90 text-sm">
                Hospital-grade standards through automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - images smaller + tighter grid */}
      <section className="py-12 bg-emerald-50/40">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Images - now 3-column on large screens, smaller */}
            <div className="lg:col-span-2 grid grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md col-span-2">
                <img
                  src={aboutImage1}
                  alt="Automated dairy facility"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={aboutImage2}
                  alt="Modern dairy processing"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md col-span-3">
                <img
                  src={aboutImage3}
                  alt="Pure milk bottle"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-3">
              <SectionHeading
                badge="Our Philosophy"
                title="Redefining Dairy Purity"
                align="left"
              />
              <p className="body-lg text-muted-foreground mb-4">
                At Vizhis Dairy Farm, we believe the cleanest milk comes from the cleanest process. 
                That's why we've invested in full automation — not just for efficiency, but for 
                uncompromising hygiene and consistency.
              </p>
              <p className="body-lg text-muted-foreground">
                Every bottle carries our guarantee: zero human touch, zero compromise on quality, 
                and maximum safety for your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - reduced padding */}
      <section className="py-12 bg-gradient-to-br from-emerald-100/60 via-emerald-50/70 to-green-100/50">
        <div className="container-custom">
          <SectionHeading
            badge="How It Works"
            title="Our Automated Journey"
            subtitle="From pasture to package – every step is touchless and precisely controlled"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 text-center border border-emerald-200/40 hover:shadow-md transition-shadow"
              >
                <div className="text-5xl font-bold text-emerald-200/60 mb-3">{step.number}</div>
                <h3 className="font-serif font-semibold text-lg mb-2 text-emerald-800">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features - tighter grid */}
      <section className="py-12 bg-emerald-50/50">
        <div className="container-custom">
          <SectionHeading
            badge="Technology"
            title="Automation That Matters"
            subtitle="Advanced systems working together to deliver unmatched hygiene and consistency"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-soft border border-emerald-200/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">
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

      {/* Hygiene Standards - compact */}
      <section className="py-12 bg-emerald-50/40">
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
                className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-emerald-200/40"
              >
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">{standard}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - tighter */}
      <section className="py-12 bg-emerald-50/50">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            subtitle="The principles behind every decision we make"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-soft border border-emerald-200/50 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">
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

      {/* Quality Promise - reduced padding */}
      <section className="py-12 bg-gradient-to-br from-emerald-700 to-teal-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-lg mb-5">
              The Cleanest Dairy You'll Ever Find
            </h2>
            <p className="text-xl opacity-90 mb-6">
              We don't just meet hygiene standards - we've redefined them through complete automation.
            </p>
            <p className="body-lg opacity-85 mb-8">
              Every bottle carries our guarantee: processed entirely by machines in a sealed, 
              sterilized environment, monitored continuously, and delivered with unmatched purity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Bot, label: "100% Machine Processed" },
                { icon: Sparkles, label: "Zero Human Contact" },
                { icon: Shield, label: "Maximum Safety" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-3">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-base">{item.label}</p>
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