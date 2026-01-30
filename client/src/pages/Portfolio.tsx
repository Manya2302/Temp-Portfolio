import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowDown, ExternalLink, Github, Send, Star, Code2, Rocket, Brain, ChevronRight } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { MagneticButton } from "@/components/MagneticButton";
import { SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA } from "@/lib/data";
import { useSubmitContact } from "@/hooks/use-contact";
import { insertMessageSchema } from "@shared/schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- HERO SECTION ---
function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      
      {/* Abstract Background Shapes */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float-delayed"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for freelance work
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 font-display"
          >
            CRAFTING <br />
            <span className="text-gradient">DIGITAL</span>
            <br /> EXPERIENCES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-body leading-relaxed"
          >
            I'm a full-stack creative engineer building next-generation web applications where performance meets premium aesthetics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <ScrollLink to="projects" smooth={true} duration={500}>
              <MagneticButton className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-white/90 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
                View Projects
              </MagneticButton>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <MagneticButton className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all font-bold text-lg backdrop-blur-sm">
                Contact Me
              </MagneticButton>
            </ScrollLink>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}

// --- ABOUT SECTION ---
function About() {
  const cards = [
    { title: "Background", icon: Code2, content: "Self-taught developer with a passion for physics-based animation and interactive design." },
    { title: "Philosophy", icon: Brain, content: "I believe that code is an art form. Every interaction should feel intentional and organic." },
    { title: "Goal", icon: Rocket, content: "To bridge the gap between heavy functionality and fluid, joyful user experiences." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="glass-card p-8 rounded-3xl h-full flex flex-col items-start gap-4 hover:border-primary/50 group">
                <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-primary/20 text-primary transition-colors">
                  <card.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold font-display">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SKILLS SECTION ---
function Skills() {
  return (
    <section id="skills" className="py-24 bg-background/50 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My arsenal of tools for building robust, scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {SKILLS_DATA.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((skill, j) => (
                  <div key={j} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 + (j * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- PROJECTS SECTION ---
function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Featured Work</h2>
            <p className="text-muted-foreground">A selection of my favorite projects.</p>
          </div>
          <Button variant="outline" className="rounded-full gap-2 border-white/10 hover:bg-white/5">
            View Github <Github size={16} />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Image Container with Overlay */}
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5 shadow-2xl">
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90">
                      <ExternalLink size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full border-white/20 bg-black/50 text-white hover:bg-black/70">
                      <Github size={20} />
                    </Button>
                 </div>
                 {/* Descriptive comment for dynamic image */}
                 {/* Project thumbnail image */}
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 text-xs font-normal border-transparent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- EXPERIENCE SECTION ---
function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-display mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />

          {EXPERIENCE_DATA.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 md:pl-24"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-[27px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background shadow-[0_0_10px_hsl(250,100%,70%)]" />
              
              <div className="glass-card p-6 md:p-8 rounded-2xl border-l-4 border-l-primary/20 hover:border-l-primary transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold font-display text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit border-primary/30 text-primary/80 bg-primary/5">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- CONTACT SECTION ---
function Contact() {
  const { mutate, isPending } = useSubmitContact();
  
  const form = useForm<z.infer<typeof insertMessageSchema>>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof insertMessageSchema>) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black font-display mb-6 tracking-tighter">
              LET'S WORK <br />
              <span className="text-gradient">TOGETHER</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind? I'm always looking for new challenges and opportunities to create something unique.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Send size={20} />
                </div>
                <span>hello@developer.com</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Github size={20} />
                </div>
                <span>github.com/developer</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Project Inquiry" className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell me about your project..." className="bg-white/5 border-white/10 min-h-[150px] rounded-xl focus:border-primary/50 resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_hsl(250,100%,70%)]"
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-white/5 text-sm">
        <p>© 2026 Developer Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
