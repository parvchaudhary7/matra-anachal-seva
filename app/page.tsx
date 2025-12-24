"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Heart,
  Menu,
  X,
  Shield,
  Building2,
  Users,
  Phone,
  Mail,
  Check,
  Copy,
  FileText,
  ExternalLink,
  ChevronRight,
  Award,
  Lock,
  Settings2,
  FileCheck,
  UserPlus,
  Briefcase,
  CreditCard,
  Smartphone,
  Building,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Target,
  MessageCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScroll, useTransform } from "framer-motion"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [quickLinksOpen, setQuickLinksOpen] = useState(false)

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 100])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const copyToClipboard = useCallback((text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }, [])

  const upiLink = "upi://pay?pa=4694000100058186@pnb&pn=Matra%20Anchal%20Seva%20Sansthan&cu=INR"

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const quickLinks = [
    { icon: FileCheck, label: "Tax Benefits (80G)", href: "/80g.pdf" },
    { icon: FileText, label: "Annual Reports", href: "/12a.pdf" },
    { icon: UserPlus, label: "Volunteer Portal", href: "#volunteer" },
    { icon: Briefcase, label: "Media Kit", href: "/media-kit.pdf" },
  ]

  const paymentMethods = [
    {
      id: "upi",
      title: "UPI Payment",
      description: "PhonePe, GPay, Paytm",
      icon: Smartphone,
      recommended: true,
    },
    {
      id: "razorpay",
      title: "Card Payment",
      description: "Credit/Debit Cards",
      icon: CreditCard,
      recommended: false,
    },
    {
      id: "netbanking",
      title: "Net Banking",
      description: "All Major Banks",
      icon: Building,
      recommended: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav shadow-lg" : "bg-white/50 backdrop-blur-md border-b border-[#0F172A]/10"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-12 w-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center shadow-sm">
                <Heart className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h1 className="font-serif text-lg md:text-xl font-bold text-[#0F172A] leading-tight">Matra Anchal</h1>
                <p className="text-xs text-[#64748B] font-medium">Sewa Sansthan Trust</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              <a
                href="#home"
                className="text-[#0F172A] hover:text-[#10B981] transition-colors font-medium text-sm"
                aria-label="Navigate to home section"
              >
                Home
              </a>
              <a
                href="#impact"
                className="text-[#0F172A] hover:text-[#10B981] transition-colors font-medium text-sm"
                aria-label="Navigate to impact section"
              >
                Impact
              </a>
              <a
                href="#projects"
                className="text-[#0F172A] hover:text-[#10B981] transition-colors font-medium text-sm"
                aria-label="Navigate to projects section"
              >
                Projects
              </a>
              <a
                href="#compliance"
                className="text-[#0F172A] hover:text-[#10B981] transition-colors font-medium text-sm"
                aria-label="Navigate to compliance section"
              >
                Compliance
              </a>

              <Popover open={quickLinksOpen} onOpenChange={setQuickLinksOpen}>
                <PopoverTrigger asChild>
                  <button
                    className="p-2 hover:bg-[#10B981]/10 rounded-lg transition-colors"
                    aria-label="Open quick links menu"
                  >
                    <Settings2 className="h-5 w-5 text-[#64748B]" aria-hidden="true" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-2" align="end">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-1"
                  >
                    <div className="px-2 py-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                      Quick Links
                    </div>
                    {quickLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.endsWith(".pdf") ? "_blank" : undefined}
                        rel={link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#10B981]/10 transition-colors group"
                        aria-label={link.label}
                      >
                        <link.icon className="h-4 w-4 text-[#64748B] group-hover:text-[#10B981]" aria-hidden="true" />
                        <span className="text-sm text-[#0F172A] font-medium flex-1">{link.label}</span>
                        <ChevronRight
                          className="h-4 w-4 text-[#64748B] opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </motion.div>
                </PopoverContent>
              </Popover>

              <motion.a
                href="#donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#10B981] hover:bg-[#059669] text-white px-6 py-2.5 rounded-xl transition-colors font-semibold text-sm shadow-md"
                aria-label="Go to donate section"
              >
                Donate Now
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#0F172A] p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-[#0F172A]/10 bg-white/95 backdrop-blur-xl"
            >
              <nav className="flex flex-col gap-4 p-6" aria-label="Mobile navigation">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#0F172A] hover:text-[#10B981] transition-colors font-medium"
                  aria-label="Navigate to home section"
                >
                  Home
                </a>
                <a
                  href="#impact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#0F172A] hover:text-[#10B981] transition-colors font-medium"
                  aria-label="Navigate to impact section"
                >
                  Impact
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#0F172A] hover:text-[#10B981] transition-colors font-medium"
                  aria-label="Navigate to projects section"
                >
                  Projects
                </a>
                <a
                  href="#compliance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#0F172A] hover:text-[#10B981] transition-colors font-medium"
                  aria-label="Navigate to compliance section"
                >
                  Compliance
                </a>

                <div className="pt-4 border-t border-[#0F172A]/10">
                  <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wide mb-3">Quick Links</div>
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.endsWith(".pdf") ? "_blank" : undefined}
                        rel={link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#10B981]/10 transition-colors"
                        aria-label={link.label}
                      >
                        <link.icon className="h-4 w-4 text-[#64748B]" aria-hidden="true" />
                        <span className="text-sm text-[#0F172A] font-medium">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href="#donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#10B981] hover:bg-[#059669] text-white px-6 py-3 rounded-xl transition-colors font-semibold text-center mt-2"
                  aria-label="Go to donate section"
                >
                  Donate Now
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 opacity-5">
          <Image src="/mata-ji.png" alt="" fill className="object-cover" priority sizes="100vw" quality={75} />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-[#10B981] text-white hover:bg-[#059669] text-sm px-4 py-2 rounded-xl">
                  <Sparkles className="h-4 w-4 inline mr-2" />
                  Serving Humanity Since 2000
                </Badge>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-[1.1] tracking-tight"
              >
                Empowering Your
                <br />
                Journey with
                <br />
                <span className="text-[#10B981]">Precision & Care</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-xl text-[#64748B] leading-relaxed max-w-xl">
                From the spiritual heart of Haridwar to the modern landscape of Faridabad. Join our mission to build the
                Matra-Anchal Sewa Dham—a sanctuary of hope for the elderly, children, and women.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={upiLink}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-xl transition-all font-semibold text-lg shadow-md group"
                  aria-label="Donate for construction project"
                >
                  Donate for Construction
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/80g.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white px-8 py-4 rounded-xl transition-all font-semibold text-lg"
                  aria-label="View 80G tax exemption certificate"
                >
                  View 80G Certificate
                </motion.a>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-[#0F172A]">100%</div>
                  <div className="text-sm text-[#64748B]">Tax Exempt</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0F172A]">25+</div>
                  <div className="text-sm text-[#64748B]">Years Service</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0F172A]">₹5.77 Cr</div>
                  <div className="text-sm text-[#64748B]">Project Goal</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-md aspect-[3/4]">
                <Image
                  src="/mata-ji.png"
                  alt="Sadhvi Kamlesh Bharti Mata Ji - Founder and Spiritual Guide of Matra Anchal Sewa Sansthan Trust"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-serif text-2xl font-bold mb-2">Sadhvi Kamlesh Bharti</p>
                  <p className="text-sm opacity-90">Founder & Spiritual Guide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        id="impact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 px-4 bg-white"
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge className="bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20 text-sm px-4 py-2 rounded-xl mb-4">
              <Award className="h-4 w-4 inline mr-2" />
              Our Impact
            </Badge>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Building a Compassionate Future
            </h3>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Three floors. One mission. Transforming lives through shelter, education, and empowerment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Card 1 - Vridhashram */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2 bg-white rounded-xl p-8 border border-[#0F172A]/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0F172A] mb-3">Bhav-Setu Vridhashram</h4>
              <p className="text-lg text-[#64748B] mb-6">
                Ground Floor: 13 Rooms dedicated to providing shelter, dignity, and care for destitute elderly who have
                nowhere else to turn.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#64748B] font-medium">Construction Progress</span>
                  <span className="font-bold text-[#0F172A] text-lg">₹1.84 Cr</span>
                </div>
                <div className="relative w-full h-2 bg-[#0F172A]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "25%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full"
                  />
                </div>
                <div className="text-sm text-[#64748B]">25% Complete</div>
              </div>
            </motion.div>

            {/* Card 2 - School */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 border border-[#0F172A]/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0F172A] mb-3">Vidya Mandir School</h4>
              <p className="text-[#64748B] mb-6">1st Floor: Education for 300+ underprivileged children</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-[#64748B]">Cost</span>
                  <span className="font-bold text-[#0F172A]">₹1.90 Cr</span>
                </div>
                <div className="relative w-full h-2 bg-[#0F172A]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "15%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full"
                  />
                </div>
                <div className="text-sm text-[#64748B]">15% Complete</div>
              </div>
            </motion.div>

            {/* Card 3 - Women's Center */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 border border-[#0F172A]/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0F172A] mb-3">Women's Center</h4>
              <p className="text-[#64748B] mb-6">2nd Floor: Skill labs & health clinic</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-[#64748B]">Cost</span>
                  <span className="font-bold text-[#0F172A]">₹2.03 Cr</span>
                </div>
                <div className="relative w-full h-2 bg-[#0F172A]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "10%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full"
                  />
                </div>
                <div className="text-sm text-[#64748B]">10% Complete</div>
              </div>
            </motion.div>

            {/* Founder Vision Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2 bg-gradient-to-br from-[#0F172A] to-[#1e293b] text-white rounded-xl p-8 border border-[#0F172A]/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Target className="h-12 w-12 mb-6 opacity-80" />
              <blockquote className="space-y-4">
                <p className="font-serif text-3xl md:text-4xl font-semibold leading-relaxed">
                  "True service is not just charity—it is restoring the dignity that every soul deserves."
                </p>
                <footer className="text-lg opacity-90">— Sadhvi Kamlesh Bharti, Founder</footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 px-4 bg-white"
        aria-labelledby="features-heading"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge className="bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20 text-sm px-4 py-2 rounded-xl mb-4">
              <Sparkles className="h-4 w-4 inline mr-2" />
              Why Choose Us
            </Badge>
            <h3 id="features-heading" className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Built on Trust & Transparency
            </h3>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Every aspect of our organization is designed for accountability, impact, and lasting change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "100% Tax Exempt",
                description: "Full 80G certification for maximum tax benefits on your donation",
              },
              {
                icon: Award,
                title: "NITI Aayog Registered",
                description: "Official government recognition and Darpan ID for transparency",
              },
              {
                icon: FileCheck,
                title: "Fully Compliant",
                description: "12A registered trust with complete legal documentation",
              },
              {
                icon: Users,
                title: "25+ Years Service",
                description: "A proven track record of serving humanity since 2000",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-6 border border-[#0F172A]/10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-14 w-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="font-semibold text-[#0F172A] text-lg mb-2">{feature.title}</h4>
                <p className="text-[#64748B] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="compliance"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 px-4 bg-[#F8FAFC]"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge className="bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20 text-sm px-4 py-2 rounded-xl mb-4">
              <Shield className="h-4 w-4 inline mr-2" />
              Full Transparency
            </Badge>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Certified & Compliant</h3>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Every rupee you donate is 100% tax-deductible under 80G. Fully registered and transparent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "80G Tax Exemption", number: "AABTS1726GF20221", file: "/80g.pdf", icon: FileCheck },
              { title: "12A Registration", number: "AABTS1726GE20221", file: "/12a.pdf", icon: FileCheck },
              { title: "NITI Aayog Darpan", number: "HR/2017/0152816", file: "/niti.pdf", icon: Building2 },
              { title: "Trust Registration", number: "1726 / 2000", file: "/trust-deed.pdf", icon: Award },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-6 border border-[#0F172A]/10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <cert.icon className="h-6 w-6 text-[#10B981]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0F172A] text-lg mb-2">{cert.title}</h4>
                    <p className="text-[#64748B] text-sm mb-4 font-mono">{cert.number}</p>
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#10B981] hover:text-[#059669] font-medium text-sm transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 px-4 bg-[#F8FAFC]"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge className="bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20 text-sm px-4 py-2 rounded-xl mb-4">
              <Heart className="h-4 w-4 inline mr-2" />
              Community Impact
            </Badge>
            <h3 id="testimonials-heading" className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Stories of Hope & Transformation
            </h3>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Hear from donors and beneficiaries about the impact of our work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh Kumar",
                role: "Monthly Donor",
                text: "I've been donating to Matra Anchal for 5 years. Their transparency and dedication to serving the elderly is unmatched. The 80G certificate makes it easy to contribute more.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Corporate Sponsor",
                text: "Our company partnered with Matra Anchal for CSR activities. The professionalism and impact measurement they provide gives us confidence in every rupee spent.",
                rating: 5,
              },
              {
                name: "Anita Devi",
                role: "Beneficiary Family",
                text: "My mother-in-law found shelter and dignity at their Vridhashram. The care and respect shown to elderly residents is truly remarkable. May God bless this organization.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 border border-[#0F172A]/10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-[#10B981]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#64748B] mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[#0F172A]">{testimonial.name}</p>
                  <p className="text-sm text-[#64748B]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="donate"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 px-4 bg-gradient-to-b from-[#10B981]/5 to-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge className="bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20 text-sm px-4 py-2 rounded-xl mb-4">
              <Heart className="h-4 w-4 inline mr-2" aria-hidden="true" />
              Support Our Mission
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Choose Your Payment Method
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Secure, fast, and transparent. Every rupee directly supports our construction projects.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
            {paymentMethods.map((method) => (
              <motion.button
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-6 rounded-xl border-2 transition-all shadow-sm hover:shadow-md ${
                  selectedPayment === method.id
                    ? "border-[#10B981] bg-[#10B981]/5"
                    : "border-[#0F172A]/10 bg-white hover:border-[#10B981]/50"
                }`}
                aria-label={`Select ${method.title}`}
                aria-pressed={selectedPayment === method.id}
              >
                {method.recommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#10B981] text-white text-xs px-3 py-1">
                    Recommended
                  </Badge>
                )}
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className={`h-16 w-16 rounded-xl flex items-center justify-center transition-colors ${
                      selectedPayment === method.id ? "bg-[#10B981]" : "bg-[#0F172A]/5"
                    }`}
                  >
                    <method.icon
                      className={`h-8 w-8 transition-colors ${
                        selectedPayment === method.id ? "text-white" : "text-[#0F172A]"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-1">{method.title}</h3>
                    <p className="text-sm text-[#64748B]">{method.description}</p>
                  </div>
                  {selectedPayment === method.id && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                      <Check className="h-6 w-6 text-[#10B981]" aria-hidden="true" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#0F172A]/10 shadow-sm">
              <Lock className="h-4 w-4 text-[#10B981]" aria-hidden="true" />
              <span className="text-sm font-medium text-[#0F172A]">Secure SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#0F172A]/10 shadow-sm">
              <FileCheck className="h-4 w-4 text-[#10B981]" aria-hidden="true" />
              <span className="text-sm font-medium text-[#0F172A]">80G Tax Exempt</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#0F172A]/10 shadow-sm">
              <Shield className="h-4 w-4 text-[#10B981]" aria-hidden="true" />
              <span className="text-sm font-medium text-[#0F172A]">100% Transparent</span>
            </div>
          </motion.div>

          {/* Banking Details Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] rounded-xl p-8 shadow-md text-white"
          >
            <div className="space-y-6">
              <div>
                <label className="text-sm opacity-70 uppercase tracking-wide">Account Name</label>
                <p className="text-xl font-semibold mt-1">Matra Anchal Sewa Sansthan Trust</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm opacity-70 uppercase tracking-wide">Account Number</label>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xl font-mono font-semibold">4694000100058186</p>
                    <button
                      onClick={() => copyToClipboard("4694000100058186", "account")}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      aria-label="Copy account number to clipboard"
                    >
                      {copiedField === "account" ? (
                        <Check className="h-5 w-5 text-[#10B981]" aria-hidden="true" />
                      ) : (
                        <Copy className="h-5 w-5" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm opacity-70 uppercase tracking-wide">IFSC Code</label>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xl font-mono font-semibold">PUNB0469400</p>
                    <button
                      onClick={() => copyToClipboard("PUNB0469400", "ifsc")}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      aria-label="Copy IFSC code to clipboard"
                    >
                      {copiedField === "ifsc" ? (
                        <Check className="h-5 w-5 text-[#10B981]" aria-hidden="true" />
                      ) : (
                        <Copy className="h-5 w-5" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm opacity-70 uppercase tracking-wide">Bank Name</label>
                  <p className="text-lg font-semibold mt-1">Punjab National Bank</p>
                </div>

                <div>
                  <label className="text-sm opacity-70 uppercase tracking-wide">Branch</label>
                  <p className="text-lg font-semibold mt-1">Sector 10, Faridabad</p>
                </div>
              </div>

              <div>
                <label className="text-sm opacity-70 uppercase tracking-wide">UPI ID</label>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xl font-mono font-semibold">4694000100058186@pnb</p>
                  <button
                    onClick={() => copyToClipboard("4694000100058186@pnb", "upi")}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Copy UPI ID to clipboard"
                  >
                    {copiedField === "upi" ? (
                      <Check className="h-5 w-5 text-[#10B981]" aria-hidden="true" />
                    ) : (
                      <Copy className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <motion.a
                  href={selectedPayment === "upi" ? upiLink : "#"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-[#10B981] hover:bg-[#059669] text-white text-center py-4 rounded-xl font-semibold text-lg transition-colors relative overflow-hidden group"
                  aria-label="Donate now"
                >
                  <span className="relative z-10">Donate Now</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#059669] to-[#10B981]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
                <p className="text-center text-sm opacity-70">Your donation is eligible for 80G tax benefits</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 px-4 bg-[#F8FAFC]"
      >
        <div className="container mx-auto max-w-3xl">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-[#64748B]">Everything you need to know about donating</p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "How is your donation used?",
                  a: "100% of your donation goes directly to construction costs for the Matra-Anchal Sewa Dham. No administrative overhead is deducted from your contribution.",
                },
                {
                  q: "Is my donation tax-deductible?",
                  a: "Yes! We have 80G certification, which means you can claim 100% tax exemption on your donation under Section 80G of the Income Tax Act.",
                },
                {
                  q: "Will I receive a donation receipt?",
                  a: "Absolutely. We will issue an 80G receipt for tax purposes immediately after receiving your donation.",
                },
                {
                  q: "Can I donate from outside India?",
                  a: "Currently, we only accept domestic donations. We are working on FCRA approval for international donations.",
                },
                {
                  q: "How can I track the project progress?",
                  a: "We provide regular updates through our website and social media channels. You can also visit our construction site in Faridabad.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-[#0F172A]/10 px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#0F172A] hover:text-[#10B981] py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748B] pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.section>

      <footer className="bg-[#0F172A] text-white py-16 px-4" role="contentinfo">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold">Matra Anchal</h4>
                  <p className="text-xs text-white/70">Sewa Sansthan Trust</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Building a compassionate future through shelter, education, and empowerment since 2000. Every
                contribution makes a lasting impact.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/919468979488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-white/10 hover:bg-[#10B981] rounded-xl flex items-center justify-center transition-colors"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="mailto:matraanchal1@gmail.com"
                  className="h-10 w-10 bg-white/10 hover:bg-[#10B981] rounded-xl flex items-center justify-center transition-colors"
                  aria-label="Send us an email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="tel:+919468979488"
                  className="h-10 w-10 bg-white/10 hover:bg-[#10B981] rounded-xl flex items-center justify-center transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links & Sitemap */}
            <div>
              <h5 className="font-semibold text-lg mb-6">Quick Links</h5>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#home"
                      className="text-white/70 hover:text-[#10B981] transition-colors text-sm flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#impact"
                      className="text-white/70 hover:text-[#10B981] transition-colors text-sm flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      Our Impact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-white/70 hover:text-[#10B981] transition-colors text-sm flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#compliance"
                      className="text-white/70 hover:text-[#10B981] transition-colors text-sm flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      Compliance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#donate"
                      className="text-white/70 hover:text-[#10B981] transition-colors text-sm flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      Donate Now
                    </a>
                  </li>
                  <li>
                    <a
                      href="/80g.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-[#10B981] transition-colors text-sm flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      80G Certificate
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="mt-8">
                <h6 className="font-semibold text-sm mb-3">Addresses</h6>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-white/50 mb-1">Registered Office</p>
                    <p className="text-white/70 text-sm">Kankhal, Haridwar, Uttarakhand</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-1">Project Site</p>
                    <p className="text-white/70 text-sm">Sector 10A, Faridabad, Haryana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Newsletter Signup */}
            <div>
              <h5 className="font-semibold text-lg mb-4">Stay Updated</h5>
              <p className="text-white/70 text-sm mb-6">
                Subscribe to receive construction updates, impact stories, and tax-saving opportunities.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#10B981] text-sm"
                  aria-label="Email address for newsletter"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white px-6 py-3 rounded-xl transition-colors font-semibold text-sm"
                >
                  Subscribe Now
                </motion.button>
              </form>

              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-xs text-white/70 mb-2">Contact Us</p>
                <a href="tel:+919468979488" className="text-white font-semibold text-sm flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4" />
                  +91 94689 79488
                </a>
                <a
                  href="mailto:matraanchal1@gmail.com"
                  className="text-white/70 text-sm break-all hover:text-[#10B981] transition-colors"
                >
                  matraanchal1@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} Matra Anchal Sewa Sansthan Trust. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm">
                <a
                  href="/80g.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#10B981] transition-colors"
                >
                  80G Certificate
                </a>
                <span className="text-white/30">|</span>
                <a
                  href="/12a.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#10B981] transition-colors"
                >
                  12A Registration
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-40 lg:hidden"
      >
        <motion.a
          href={upiLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center h-14 w-14 bg-[#10B981] hover:bg-[#059669] text-white rounded-full shadow-lg"
        >
          <Heart className="h-6 w-6" />
        </motion.a>
      </motion.div>
    </div>
  )
}
