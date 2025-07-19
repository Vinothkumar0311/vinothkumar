import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!formData.name || !formData.email || !formData.message) {
  //     toast({
  //       title: "Error",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   toast({
  //     title: "Message Sent!",
  //     description: "Thank you for your message. I'll get back to you soon.",
  //   });

  //   setFormData({
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: '',
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!formData.name || !formData.email || !formData.message) {
  //     toast({
  //       title: "Error",
  //       description: "Fill required fields.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   emailjs
  //     .send("service_rn65mln", "template_40s6t4q", formData, "u0UCqQWluU-i22XL7")
  //     .then(() => {
  //       toast({ title: "Message Sent!", description: "I'll get back soon." });
  //       setFormData({ name: "", email: "", subject: "", message: "" });
  //     })
  //     .catch(() => {
  //       toast({
  //         title: "Error",
  //         description: "Sending failed.",
  //         variant: "destructive",
  //       });
  //     });
  // };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: "Error",
      description: "Please fill in all required fields.",
      variant: "destructive",
    });
    return;
  }

  emailjs.send(
    "service_rn65mln",      // Replace with your EmailJS service ID
    "template_40s6t4q",     // Replace with your EmailJS template ID
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    "u0UCqQWluU-i22XL7"       // Replace with your EmailJS public key
  )
  .then(() => {
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    toast({
      title: "Error",
      description: "Failed to send your message. Please try again later.",
      variant: "destructive",
    });
  });
};


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title gradient-text mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-left space-y-8">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <MessageSquare className="mr-3 text-primary" size={24} />
                Let's Talk
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and interesting
                projects. Whether you're a company looking to hire, or you're a
                fellow developer wanting to collaborate, I'd love to hear from
                you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/10 transition-colors group">
                  <div className="bg-primary/20 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail
                      className="text-primary group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">
                      svinothkumar0301@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/10 transition-colors group">
                  <div className="bg-primary/20 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone
                      className="text-primary group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91 6382169091</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/10 transition-colors group">
                  <div className="bg-primary/20 p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin
                      className="text-primary group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">
                      Tiruchengode, Namakkal, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary/20 p-3 rounded-xl hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  >
                    <Linkedin
                      className="text-primary group-hover:text-white"
                      size={20}
                    />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/20 p-3 rounded-xl hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  >
                    <Github
                      className="text-primary group-hover:text-white"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            {/* <div className="glass-effect rounded-2xl p-6 h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-primary mx-auto mb-2" size={32} />
                <p className="text-muted-foreground">Namakkal, Tamil Nadu</p>
                <p className="text-sm text-muted-foreground">India</p>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="glass-effect rounded-2xl p-8 hover-scale">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Send className="mr-3 text-primary" size={24} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-secondary/50 border-border focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-secondary/50 border-border focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    className="bg-secondary/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-secondary/50 border-border focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hover-scale hover-glow bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center animate-fade-in">
          <p className="text-muted-foreground">
            © 2024 VinothKumar Sakthivel. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
