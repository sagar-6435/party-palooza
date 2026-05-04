import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary font-body">Get in Touch</p>
        <h1 className="mb-12 text-center font-display text-4xl font-bold text-foreground md:text-5xl">
          Contact <span className="text-gradient-gold">Us</span>
        </h1>

        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-2xl border border-primary/30 bg-card p-10 transition-all hover:border-primary/50 hover:glow-pink">
            <h3 className="mb-6 font-display text-2xl font-bold text-gradient-gold">Party Palooza — Vijayawada</h3>

            <div className="space-y-6 text-sm text-muted-foreground font-body">
              <div className="space-y-4">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed">Vijayawada, Andhra Pradesh</span>
                </p>
                <a
                  href="tel:+919912710932"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 98765 43210</span>
                </a>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@partypalooza.in</span>
                </p>
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">Connect With Us</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/party__palooza_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-3 rounded-full border border-border transition-all hover:border-primary hover:text-primary hover:glow-pink"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/919912710932"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="p-3 rounded-full border border-border transition-all hover:border-[#25D366] hover:text-[#25D366]"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
