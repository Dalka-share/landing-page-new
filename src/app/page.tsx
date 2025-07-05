"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  TrendingUp,
  Shield,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  PieChart,
  Home,
  Download,
} from "lucide-react";
import Image from "next/image";

export default function DalkaLanding() {
  const [language, setLanguage] = useState<"en" | "so">("en");

  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        howItWorks: "How It Works",
        invest: "Invest",
        contact: "Contact",
        getApp: "Get App",
      },
      hero: {
        title: "Invest in Somalia's Real Estate Future",
        subtitle:
          "Secure fractional ownership in Somali properties. Earn rental income and capital gains through our trusted diaspora investment platform.",
        downloadIOS: "Download for iOS",
        downloadAndroid: "Download for Android",
      },
      stats: {
        investors: "5M+ Diaspora",
        properties: "100+ Properties",
        returns: "Attractive Returns",
        countries: "Global Access",
      },
      problem: {
        title: "The Challenge Diaspora Investors Face",
        subtitle: "Investing back home shouldn't be complicated or risky",
        points: [
          "Lack of trust and transparency in local investments",
          "Risk of fraud and mismanagement of funds",
          "Limited access to structured development projects",
          "Difficulty tracking returns and performance",
        ],
      },
      solution: {
        title: "Our Solution: Trusted, Transparent, Profitable",
        subtitle:
          "Dalka bridges the gap between diaspora capital and Somali real estate opportunities",
        features: [
          {
            icon: Shield,
            title: "Dubai-Registered Security",
            description:
              "International legal structure ensures compliance and investor protection",
          },
          {
            icon: Users,
            title: "Local Partnerships",
            description:
              "Trusted local partners provide on-ground execution and market expertise",
          },
          {
            icon: PieChart,
            title: "Fractional Ownership",
            description:
              "Invest from $1,000-$10,000 in individual property projects",
          },
          {
            icon: TrendingUp,
            title: "Dual Income Streams",
            description: "Earn from rental income and property appreciation",
          },
        ],
      },
      howItWorks: {
        title: "How Dalka Works",
        subtitle: "Simple, transparent, and profitable real estate investing",
        steps: [
          {
            step: "1",
            title: "Choose Your Investment",
            description:
              "Browse available properties on our mobile app and select projects that match your investment goals",
          },
          {
            step: "2",
            title: "Purchase Fractional Shares",
            description:
              "Invest securely through our Dubai-registered platform with full legal protection",
          },
          {
            step: "3",
            title: "Earn Rental Income",
            description:
              "Receive monthly dividends from rental income while properties appreciate",
          },
          {
            step: "4",
            title: "Profit from Sales",
            description:
              "Track your portfolio and receive payments through the app when properties are sold at optimal market conditions",
          },
        ],
      },
      investment: {
        title: "Investment Opportunities",
        subtitle:
          "Diversified portfolio of residential properties across Somalia",
        types: [
          {
            title: "New Developments",
            description:
              "Ground-up construction projects in growing urban areas",
            minInvestment: "$2,000",
            expectedReturn: "Attractive",
            timeline: "Rent until optimal sale",
          },
          {
            title: "Existing Properties",
            description:
              "Acquire and rent established homes for immediate income",
            minInvestment: "$1,000",
            expectedReturn: "Competitive",
            timeline: "Immediate rental income",
          },
        ],
      },
      trust: {
        title: "Built on Trust & Transparency",
        subtitle:
          "Multiple layers of security and oversight protect your investment",
        features: [
          "Dubai legal structure with international compliance",
          "Local partnerships for trusted execution",
          "Monthly multimedia project updates",
          "Detailed financial reporting and audits",
          "Secure international payment processing",
        ],
      },
      cta: {
        title: "Ready to Invest in Somalia's Future?",
        subtitle:
          "Join thousands of diaspora investors building wealth through real estate",
        button: "Get Started Now",
      },
      footer: {
        company: "Dalka Real Estate Investment Platform",
        description:
          "Connecting diaspora capital with Somali real estate opportunities through trusted, transparent investment solutions.",
        links: {
          about: "About Us",
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          contact: "Contact",
        },
      },
      appShowcase: {
        title: "Get Started with the Dalka App",
        description:
          "Download our mobile app to start investing in Somali real estate. Track your portfolio, receive dividends, and manage your investments on the go.",
      },
    },
    so: {
      nav: {
        home: "Guriga",
        about: "Naga",
        howItWorks: "Sida Uu U Shaqeeyo",
        invest: "Maalgashi",
        contact: "Xiriir",
        getApp: "Hel App-ka",
      },
      hero: {
        title: "Ku Maalgashi Mustaqbalka Dhismaha Soomaaliya",
        subtitle:
          "Hel qayb dhismo ah oo aad ku leedahay guryaha Soomaaliya. Kasoo hel dakhli kiro iyo faa'iido dheeraad ah iyada oo loo marayo barnamijka maalgashiga ee diaspora-da.",
        downloadIOS: "Soo dejiso iOS-ka",
        downloadAndroid: "Soo dejiso Android-ka",
      },
      stats: {
        investors: "5M+ Diaspora",
        properties: "100+ Guri",
        returns: "Dakhli Soo Jiidasho Leh",
        countries: "Helitaan Caalami ah",
      },
      problem: {
        title: "Caqabadaha Maalgashayaasha Diaspora-du La Kulmaan",
        subtitle:
          "Maalgashiga dalkii hooyo ma aha in uu ahaado mid adag ama khatar leh",
        points: [
          "La'aanta kalsoonida iyo hufnaanta maalgashiga maxalliga ah",
          "Khatarta khiyaanada iyo maamulka xun ee lacagta",
          "Helitaan xaddidan oo mashruucyo dhismo ah oo habaysan",
          "Adkaynta la socodka dakhliga iyo waxqabadka",
        ],
      },
      solution: {
        title: "Xalkeenna: Kalsooni, Hufnaan, Faa'iido",
        subtitle:
          "Dalka wuxuu isku xira lacagta diaspora-da iyo fursadaha dhismaha Soomaaliya",
        features: [
          {
            icon: Shield,
            title: "Ammaanka Diiwaan-gashan Dubai",
            description:
              "Qaab-dhismeedka sharciga caalamiga ah ayaa hubinaya waafaqsanaanta iyo ilaalinta maalgashayaasha",
          },
          {
            icon: Users,
            title: "Iskaashi Maxalli ah",
            description:
              "La-hawlgalayaasha maxalliga ah ee la aamini karo waxay bixiyaan fulinta dhulka iyo khibrad suuqeed",
          },
          {
            icon: PieChart,
            title: "Lahaanshaha Qayb-qayb",
            description: "Ku maalgashi $1,000-$10,000 mashruucyo guri kasta",
          },
          {
            icon: TrendingUp,
            title: "Laba Dariiq oo Dakhli",
            description: "Kasoo hel dakhli kiro iyo kororka qiimaha hantida",
          },
        ],
      },
      howItWorks: {
        title: "Sida Dalka U Shaqeeyo",
        subtitle: "Fudud, hufan, oo faa'iido leh maalgashiga dhismaha",
        steps: [
          {
            step: "1",
            title: "Dooro Maalgashigaaga",
            description:
              "Ka baadho guryaha la heli karo app-keena mobile-ka oo dooro mashruucyada ku habboon yoolalkaaga maalgashiga",
          },
          {
            step: "2",
            title: "Iibso Qaybo Qayb-qayb ah",
            description:
              "Si ammaan ah ugu maalgashi barnamijkeenna diiwaan-gashan Dubai oo leh ilaalin sharci oo dhamaystiran",
          },
          {
            step: "3",
            title: "Kasoo Hel Dakhliga Kiraha",
            description:
              "Hel qayb-qayb bishii mid ah dakhliga kiraha marka hantidu kordho",
          },
          {
            step: "4",
            title: "Faa'iido ka Hel Iibinta",
            description:
              "La soco portfolio-gaaga oo hel lacag-bixinnada adiga oo isticmaalaya app-ka marka hantida la iibiyo xaaladaha suuqa ugu wanaagsan",
          },
        ],
      },
      investment: {
        title: "Fursadaha Maalgashiga",
        subtitle:
          "Portfolio kala duwan oo ah guryaha degaanka ee Soomaaliya oo dhan",
        types: [
          {
            title: "Dhismayaal Cusub",
            description:
              "Mashruucyo dhismo ah oo ka bilaabma dhulka magaalooyinka koraya",
            minInvestment: "$2,000",
            expectedReturn: "Soo Jiidasho Leh",
            timeline: "Kiro ilaa iibka ugu fiican",
          },
          {
            title: "Hanti Jirta",
            description:
              "Hel oo kiro guryo la dhisay si aad dakhli degdeg ah u hesho",
            minInvestment: "$1,000",
            expectedReturn: "Tartame",
            timeline: "Dakhli degdeg ah",
          },
        ],
      },
      trust: {
        title: "Ku Dhisan Kalsoonida & Hufnaanta",
        subtitle:
          "Lakabyo badan oo ammaan ah iyo kormeer ayaa ilaalinaya maalgashigaaga",
        features: [
          "Qaab-dhismeedka sharciga Dubai oo leh waafaqsanaanta caalamiga ah",
          "Iskaashiga qolooyinka maxalliga ah ee fulinta la kalsoon yahay",
          "Cusboonaysiinta mashruuca ee multimedia-da bishii mid",
          "Warbixinta dhaqaalaha ee faahfaahsan iyo baaritaannada",
          "Habaynta lacag-bixinta caalamiga ah ee ammaan ah",
        ],
      },
      cta: {
        title: "Diyaar u tahay inaad ku maalgeliso Mustaqbalka Soomaaliya?",
        subtitle:
          "Ku biir kumanaan maalgashayaal oo diaspora ah oo dhisaya maal iyada oo loo marayo dhismaha",
        button: "Bilow Hadda",
      },
      footer: {
        company: "Dalka Barnamijka Maalgashiga Dhismaha",
        description:
          "Isku xirida lacagta diaspora-da iyo fursadaha dhismaha Soomaaliya iyada oo loo marayo xalalka maalgashiga ee la kalsoon yahay oo hufan.",
        links: {
          about: "Naga",
          privacy: "Siyaasadda Sirta",
          terms: "Shuruudaha Adeegga",
          contact: "Xiriir",
        },
      },
      appShowcase: {
        title: "Ku Bilow App-ka Dalka",
        description:
          "Soo dejiso app-keenna mobile-ka si aad u bilowdo maalgashiga dhismaha Soomaaliya. La soco portfolio-gaaga, hel qayb-qayb, oo maamul maalgashigaaga meel kasta oo aad tagto.",
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">Dalka</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600">
                {t.nav.home}
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600">
                {t.nav.about}
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-orange-600"
              >
                {t.nav.howItWorks}
              </a>
              <a href="#invest" className="text-gray-700 hover:text-orange-600">
                {t.nav.invest}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-600"
              >
                {t.nav.contact}
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "so" : "en")}
                className="text-sm"
              >
                {language === "en" ? "SO" : "EN"}
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Download className="mr-2 h-4 w-4" />
                {t.nav.getApp}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-orange-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
                Dubai Registered • Local Partners • Mobile First
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Download className="mr-2 h-5 w-5" />
                  {t.hero.downloadIOS}
                </Button>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t.hero.downloadAndroid}
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                width={600}
                height={400}
                alt="Modern Real Estate Development"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-semibold">
                    Attractive Average Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {t.stats.investors}
              </div>
              <div className="text-gray-600">Potential Investors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {t.stats.properties}
              </div>
              <div className="text-gray-600">Target Portfolio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {t.stats.returns}
              </div>
              <div className="text-gray-600">Expected Returns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {t.stats.countries}
              </div>
              <div className="text-gray-600">Investment Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.problem.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.problem.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.problem.points.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.solution.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.solution.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.solution.features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-orange-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section id="invest" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.investment.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.investment.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.investment.types.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Home className="h-5 w-5 text-orange-600" />
                    <span>{type.title}</span>
                  </CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Min Investment:</span>
                    <span className="font-semibold">{type.minInvestment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Return:</span>
                    <span className="font-semibold text-green-600">
                      {type.expectedReturn}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold">{type.timeline}</span>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.trust.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.trust.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.trust.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {t.appShowcase.title}
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                {t.appShowcase.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t.hero.downloadIOS}
                </Button>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t.hero.downloadAndroid}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="Investment Portfolio Mobile App"
                  width={300}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <Image
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="Real Estate Investment App"
                  width={300}
                  height={600}
                  className="rounded-2xl shadow-2xl mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-orange-400" />
                <span className="text-2xl font-bold">Dalka</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Dubai, UAE</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white">
                    {t.footer.links.about}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {t.footer.links.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {t.footer.links.terms}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    {t.footer.links.contact}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@dalka.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+971 XX XXX XXXX</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {t.footer.company}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
