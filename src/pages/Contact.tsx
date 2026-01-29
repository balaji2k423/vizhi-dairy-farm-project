import { MapPin, Phone, Mail, Clock, Shield, Truck, Award } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Farm Road, Green Valley", "Tamil Nadu, India - 600001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@vizhidairy.com", "orders@vizhidairy.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 6:00 AM - 8:00 PM", "Sunday: 6:00 AM - 12:00 PM"],
  },
];

const trustBadges = [
  { icon: Shield, label: "100% Secure" },
  { icon: Truck, label: "Free Delivery" },
  { icon: Award, label: "FSSAI Certified" },
];

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-soft">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Get in Touch
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              We'd Love to Hear From You
            </h1>
            <p className="body-lg text-muted-foreground">
              Have questions about our products or want to place an order? 
              Reach out to us and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionHeading
                badge="Send a Message"
                title="Contact Form"
                align="left"
              />
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading
                badge="Contact Information"
                title="Reach Out to Us"
                align="left"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="bg-card rounded-2xl p-6 shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-3">
                      {item.title}
                    </h3>
                    {item.details.map((detail, index) => (
                      <p key={index} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="bg-sage-light rounded-2xl p-8">
                <h3 className="font-serif font-semibold text-lg mb-6 text-center">
                  Why Trust Vizhi Dairy?
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {trustBadges.map((badge) => (
                    <div key={badge.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <badge.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-card rounded-2xl overflow-hidden shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6284580494!2d77.00!3d11.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vizhi Dairy Farm Location"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom">
          <SectionHeading
            badge="FAQs"
            title="Common Questions"
            subtitle="Find quick answers to frequently asked questions about our products and services."
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  q: "How do I place an order?",
                  a: "You can place orders through WhatsApp, phone call, or by filling out our contact form. We'll confirm your order within an hour.",
                },
                {
                  q: "What are your delivery areas?",
                  a: "We currently deliver within a 20km radius of our farm. Contact us to check if your area is covered.",
                },
                {
                  q: "What time do you deliver?",
                  a: "Our delivery runs from 6 AM to 10 AM daily. Evening deliveries are available for bulk orders.",
                },
                {
                  q: "How fresh are your products?",
                  a: "All our products are made fresh daily. Milk is delivered within 4 hours of milking, and other products are made the same day.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft group"
                >
                  <summary className="font-serif font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <span className="text-primary transition-transform group-open:rotate-180">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-muted-foreground mt-4 pt-4 border-t border-border">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
