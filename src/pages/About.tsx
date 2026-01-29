import { Leaf, Heart, Shield, Award, Users, Droplets } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import galleryCare from "@/assets/gallery-care.jpg";
import galleryCows from "@/assets/gallery-cows.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We practice eco-friendly farming methods that protect our land for future generations.",
  },
  {
    icon: Heart,
    title: "Animal Welfare",
    description: "Our cows are treated as family, with spacious pastures and the best nutrition.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous testing to ensure purity and freshness.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every aspect of our dairy production process.",
  },
];

const milestones = [
  { year: "1985", title: "Foundation", description: "Vizhi Dairy Farm was established with just 10 cows" },
  { year: "1995", title: "Expansion", description: "Grew to 50 cows and started home delivery service" },
  { year: "2005", title: "Modernization", description: "Introduced modern dairy equipment while keeping traditional methods" },
  { year: "2015", title: "Certification", description: "Received FSSAI certification and organic certification" },
  { year: "2025", title: "Today", description: "Serving 10,000+ families with premium dairy products" },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-soft">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              A Legacy of Purity & Trust
            </h1>
            <p className="body-lg text-muted-foreground">
              For over four decades, Vizhi Dairy Farm has been committed to delivering 
              the purest dairy products while nurturing our animals and protecting our environment.
            </p>
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
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src={galleryCare}
                      alt="Farmer caring for cows"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src={galleryCows}
                      alt="Happy cows at Vizhi Dairy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src={galleryNature}
                      alt="Farm landscape"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <SectionHeading
                badge="Who We Are"
                title="From Humble Beginnings to Your Trusted Dairy"
                align="left"
              />
              <div className="space-y-6 text-muted-foreground">
                <p className="body-md">
                  In 1985, in the lush green valleys of Tamil Nadu, a young farmer named 
                  Vizhi Kumar started a small dairy farm with a dream: to provide his community 
                  with the purest, freshest milk possible.
                </p>
                <p className="body-md">
                  What began with just ten cows and a deep respect for traditional dairy 
                  practices has blossomed into one of the region's most trusted names in 
                  premium dairy products. Three generations later, the Kumar family continues 
                  to uphold those founding principles.
                </p>
                <p className="body-md">
                  Today, Vizhi Dairy Farm serves over 10,000 families daily, delivering 
                  not just products, but a promise of purity, freshness, and ethical farming 
                  practices that honor both our animals and our environment.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">40+</p>
                  <p className="text-muted-foreground text-sm mt-1">Years of Excellence</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">200+</p>
                  <p className="text-muted-foreground text-sm mt-1">Happy Cows</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">10K+</p>
                  <p className="text-muted-foreground text-sm mt-1">Families Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="These core values guide everything we do, from how we care for our cows to how we serve our customers."
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

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Journey"
            title="Milestones Along the Way"
            subtitle="A timeline of our growth and achievements over the decades."
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 md:left-1/2 md:-translate-x-1/2" />

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="font-serif font-semibold text-xl mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg text-primary-foreground mb-6">
              Our Promise to You
            </h2>
            <p className="body-lg text-primary-foreground/85 mb-12">
              Every product that leaves our farm carries our family's reputation. 
              We promise freshness, purity, and quality in every drop.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Droplets, label: "No Preservatives" },
                { icon: Users, label: "Ethical Sourcing" },
                { icon: Award, label: "FSSAI Certified" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <p className="text-primary-foreground font-medium">{item.label}</p>
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
