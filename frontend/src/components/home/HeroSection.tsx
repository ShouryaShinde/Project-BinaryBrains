import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Aurora from "../Aurora";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center">
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#F87014", "#B19EEF", "#F87014"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Overlays for readability and premium depth */}
      <div className="absolute inset-0 z-[1] bg-black/55" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(248,112,20,0.22),transparent_32%)]" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-black/55 to-black" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="container-tight section-padding relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F87014]/25 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md shadow-[0_0_30px_rgba(248,112,20,0.10)] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#F87014] shadow-[0_0_10px_rgba(248,112,20,0.8)]" />
            DIT Pune’s Tech Community
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[0.95] tracking-tight mb-6">
            Binary Brains
            <br />
            <span className="text-[#F87014] drop-shadow-[0_0_18px_rgba(248,112,20,0.30)]">
              Build. Learn. Lead.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed">
            A student-led tech community at DIT Pune where developers, designers,
            and problem solvers come together to build projects, host events,
            compete in hackathons, and grow through real collaboration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link to="/hackathon">
              <Button
                size="xl"
                className="bg-[#F87014] text-white hover:bg-[#df6412] border border-[#F87014]/60 shadow-[0_0_30px_rgba(248,112,20,0.28)]"
              >
                Register for AlgoHeist
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>

            <Link to="/sponsors">
              <Button
                size="xl"
                variant="outline"
                className="border-white/15 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
              >
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;