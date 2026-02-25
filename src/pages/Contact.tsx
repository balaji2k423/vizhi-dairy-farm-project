// src/pages/Contact.tsx
import { useSearchParams, useLocation } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Truck,
  Award,
  Calendar,
  Navigation,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";
import SampleRequestForm from "@/components/SampleRequestForm";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // Detect sample request mode via query param OR hash
  const isSampleFromQuery = searchParams.get("sample") === "true";
  const isOrderFromQuery = searchParams.get("order") === "true";
  const isSampleFromHash = location.hash === "#sample-request";

  const isSampleMode = isSampleFromQuery || isSampleFromHash;
  const isOrderMode = isOrderFromQuery && !isSampleMode;

  // Determine displayed form type and content
  let formType: "contact" | "sample" | "order" = "contact";
  let badgeText = "Send a Message";
  let titleText = "Contact Form";
  let heroTitle = "We'd Love to Hear From You";
  let heroSubtitle =
    "Have questions about our products, delivery, or anything else? Reach out to us and we'll get back to you within 24 hours.";

  if (isSampleMode) {
    formType = "sample";
    badgeText = "Free Sample Request";
    titleText = "Request Free Sample";
    heroTitle = "Try Our Products Risk-Free";
    heroSubtitle =
      "Fill out the form below to request a free sample of our fresh dairy products. We'll send your request details via WhatsApp for quick processing.";
  } else if (isOrderMode) {
    formType = "order";
    badgeText = "Place Order";
    titleText = "Order Form";
    heroTitle = "Order Fresh Dairy Products";
    heroSubtitle =
      "Place your order for fresh, hygienic dairy products. Fill in your details and we'll confirm your order via WhatsApp.";
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-soft">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              {badgeText}
            </span>
            <h1 className="heading-xl text-foreground mb-6">{heroTitle}</h1>
            <p className="body-lg text-muted-foreground">{heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Form + Schedule Visit */}
            <div className="space-y-12">
              {/* Sample / Order / Contact Form Section */}
              <div id="sample-request">
                <SectionHeading badge={badgeText} title={titleText} align="left" />

                {formType === "sample" || formType === "order" ? (
                  <SampleRequestForm />
                ) : (
                  <ContactForm />
                )}
              </div>

              {/* Schedule a Visit Card */}
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 text-primary-foreground shadow-soft">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-serif font-bold text-2xl mb-2">Schedule a Visit</h3>
                    <p className="text-primary-foreground/90 text-sm mb-4 leading-relaxed">
                      See our automated dairy processing in action. Visit our farm to witness the zero human touch technology firsthand.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-primary-foreground/80 bg-white/10 px-3 py-1.5 rounded-lg">
                        <Clock className="w-4 h-4" />
                        <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
                      </div>
                      <a
                        href="tel:+918680050504"
                        className="inline-flex items-center px-4 py-2 bg-white text-primary rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call to Schedule
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info + Map */}
            <div>
              <SectionHeading badge="Contact Information" title="Reach Out to Us" align="left" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* Location - Updated with Hopes, Coimbatore address */}
                <a
                  href="https://maps.app.goo.gl/search/Hope+College+Peelamedu+Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-3 flex items-center gap-2">
                    Visit Us
                    <Navigation className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Hope College, Peelamedu <br />
                    Avinashi Road <br />
                    Coimbatore, Tamil Nadu
                  </p>
                  <span className="inline-block mt-3 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to navigate →
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918680050504"
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-3">Call Us</h3>
                  <p className="text-foreground font-medium text-lg mb-1">+91 86800 50504</p>
                  <p className="text-muted-foreground text-sm">Available 6:00 AM - 8:00 PM</p>
                  <span className="inline-block mt-3 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to call now →
                  </span>
                </a>

                {/* Email */}
                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-3">Email Us</h3>
                  <p className="text-muted-foreground text-sm break-all">support@cow2home.in</p>
                </div>

                {/* Hours */}
                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-3">Working Hours</h3>
                  <p className="text-muted-foreground text-sm">Mon - Sat: 6:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground text-sm">Sunday: 6:00 AM - 12:00 PM</p>
                </div>
              </div>

              {/* Embedded Map - Centered on Hope College, Peelamedu */}
              <div className="aspect-[16/9] bg-card rounded-2xl overflow-hidden shadow-soft relative">
                <iframe
                  src="https://maps.google.com/maps?q=Hope+College,+Peelamedu,+Avinashi+Road,+Coimbatore,+Tamil+Nadu+641004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vizhis Dairy Farm Location - Hope College, Coimbatore"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-foreground">Farm Location</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
            <h3 className="font-serif font-semibold text-2xl mb-8 text-center">
              Why Choose Vizhis Dairy?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 justify-center p-4 rounded-xl bg-sage-light">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-lg">100% Automated</span>
              </div>
              <div className="flex items-center gap-4 justify-center p-4 rounded-xl bg-sage-light">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-lg">Free Delivery</span>
              </div>
              <div className="flex items-center gap-4 justify-center p-4 rounded-xl bg-sage-light">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-lg">Zero Human Touch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding">
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
                  a: "You can place orders through WhatsApp, phone call at +91 86800 50504, or by filling out our order form. We'll confirm your order within an hour.",
                },
                {
                  q: "What are your delivery areas?",
                  a: "We currently deliver within a 20km radius of our farm in Karumathampatti / Sulur area, Coimbatore. Contact us to check if your area is covered.",
                },
                {
                  q: "What time do you deliver?",
                  a: "Our delivery runs from 6 AM to 10 AM daily. Evening deliveries are available for bulk orders.",
                },
                {
                  q: "How hygienic are our products?",
                  a: "All our products are processed with 100% automation and zero human contact. Every step from milking to bottling is handled by machines in a sealed, sterile environment.",
                },
              ].map((faq, index) => (
                <details key={index} className="bg-card rounded-xl p-6 shadow-soft group">
                  <summary className="font-serif font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <span className="text-primary transition-transform group-open:rotate-180">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-muted-foreground mt-4 pt-4 border-t border-border">{faq.a}</p>
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