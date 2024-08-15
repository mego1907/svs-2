import {
  AboutSvsCoin,
  BlogsSection,
  BuyAndSellSvsSection,
  FooterSection,
  Form,
  GetStartedSection,
  Header,
  Map,
  MediaSection,
  NewsSection,
  OurTeamSection,
  ParticlesBackrgound,
  PartnersAndSuporters,
  RoadMap,
  SecureComponent,
  SingleNewSection,
  SubscribeSection,
  TheSvsCoin,
  TokenSVSSection,
  VideoSection,
  WhitePaperSection,
  WhyChooseUs,
} from "@/components";
import SEO from "@/components/SEO";
import TheSVSProject from "@/components/TheSVSProject";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVS ",
  description: "SVS coin",
  icons: ["/assets/images/logo.png"],
  keywords: ["SVS", "coin", "blockchain"],
  openGraph: {
    url: "https://svscoin.org/",
    title: "SVS",
    description: "SVS coin",
    images: ["https://svscoin.org/assets/images/logo-share.jpg"],
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full items-center justify-between bg-mainBg text-white">
      {/* <SEO
        url="https://svs-v1.vercel.app"
        title={"SVS"}
        image="https://svs-v1.vercel.app/assets/images/logo-share.jpg"
        description="SVS coin"
      /> */}
      <Header />
      <SecureComponent />
      <GetStartedSection />
      <BuyAndSellSvsSection />
      <AboutSvsCoin />
      <WhyChooseUs />
      {/* <VideoSection /> */}
      <TheSvsCoin />
      <RoadMap />
      <WhitePaperSection />
      <TheSVSProject />
      <TokenSVSSection />
      <OurTeamSection />
      <PartnersAndSuporters />
      <NewsSection />
      <BlogsSection />
      <MediaSection />
      <SingleNewSection />
      <SubscribeSection />
        
      <FooterSection />
    </main>
  );
}
