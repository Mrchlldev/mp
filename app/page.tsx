import { ArrowUpRight, Brush, Camera, Layers, Mail, Palette, PenTool, Sparkles, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const works = [
  { title: "Brand Identity", type: "Visual Design", color: "bg-[#ff90e8]", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed augue vitae nibh posuere." },
  { title: "Poster Campaign", type: "Graphic Design", color: "bg-[#7df9ff]", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed augue vitae nibh posuere." },
  { title: "Social Media Kit", type: "Content Design", color: "bg-[#c9ff00]", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed augue vitae nibh posuere." },
  { title: "Packaging Concept", type: "Product Visual", color: "bg-[#ffa24c]", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed augue vitae nibh posuere." },
];

const services = ["Logo Design", "Brand Identity", "Poster Design", "Social Media Design", "Packaging Design", "Creative Direction", "Layout Design", "Campaign Visual"];
const skills = ["Typography", "Color System", "Visual Identity", "Editorial Layout", "Art Direction", "Creative Research"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-black">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,#ff90e8_0_120px,transparent_121px),radial-gradient(circle_at_88%_12%,#7df9ff_0_110px,transparent_111px),radial-gradient(circle_at_90%_84%,#c9ff00_0_140px,transparent_141px)]" />

      <section className="mx-auto max-w-7xl px-5 py-6 md:px-10 md:py-8">
        <nav className="mb-8 flex items-center justify-between rounded-base border-2 border-black bg-white px-5 py-4 shadow-shadow md:mb-12">
          <div>
            <h1 className="font-display text-xl md:text-2xl">Marcellino F.A</h1>
            <p className="text-xs font-black uppercase tracking-widest">Designer Portfolio</p>
          </div>
          <div className="hidden gap-6 font-black md:flex">
            <a href="#work" className="hover:underline">Work</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <Button asChild>
            <a href="mailto:hello@example.com">Hire Me <ArrowUpRight className="ml-2 size-4" /></a>
          </Button>
        </nav>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-base border-2 border-black bg-[#ff90e8] p-6 shadow-shadow md:p-10">
            <Badge variant="neutral" className="mb-5">Available for Design Projects</Badge>
            <h2 className="font-display max-w-4xl text-5xl leading-none md:text-7xl lg:text-8xl">Marcellino F.A — Designer</h2>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae neque euismod, pretium ipsum sed, posuere massa. Donec visual design yang kuat dimulai dari konsep yang jelas.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild><a href="#work">View Works</a></Button>
              <Button size="lg" variant="neutral" asChild><a href="#contact">Let’s Talk</a></Button>
            </div>
          </div>

          <Card className="bg-[#7df9ff]">
            <CardHeader><CardTitle className="flex items-center gap-2 text-3xl"><Sparkles /> About Me</CardTitle></CardHeader>
            <CardContent>
              <p className="text-base font-bold leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lorem sed volutpat finibus, risus turpis malesuada massa, non gravida lacus ipsum ut libero.</p>
              <Separator className="my-5" />
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-base border-2 border-black bg-white p-4 shadow-shadow"><h3 className="font-display text-4xl">25+</h3><p className="font-black">Projects</p></div>
                <div className="rounded-base border-2 border-black bg-white p-4 shadow-shadow"><h3 className="font-display text-4xl">3+</h3><p className="font-black">Years</p></div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="work" className="mt-12">
          <div className="mb-6 flex items-center gap-3"><Brush className="size-9" /><h2 className="font-display text-4xl md:text-5xl">Selected Works</h2></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {works.map((work) => (
              <Card key={work.title} className="bg-white">
                <CardHeader><Badge variant="pink" className="w-fit">{work.type}</Badge><CardTitle>{work.title}</CardTitle></CardHeader>
                <CardContent>
                  <div className={`mb-5 flex aspect-[4/3] items-center justify-center rounded-base border-2 border-black ${work.color}`}><Palette className="size-14" /></div>
                  <p className="font-bold leading-7">{work.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card id="services" className="bg-[#c9ff00]">
            <CardHeader><CardTitle className="flex items-center gap-2 text-3xl"><Layers /> Services</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-3">{services.map((service) => <Badge key={service} variant="neutral">{service}</Badge>)}</CardContent>
          </Card>

          <Card className="bg-[#ffa24c]">
            <CardHeader><CardTitle className="flex items-center gap-2 text-3xl"><PenTool /> Design Skills</CardTitle></CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">{skills.map((skill) => <div key={skill} className="rounded-base border-2 border-black bg-white p-3 font-black shadow-[3px_3px_0_0_#000]"><Star className="mr-2 inline size-4" />{skill}</div>)}</CardContent>
          </Card>
        </section>

        <section id="contact" className="mt-12 rounded-base border-2 border-black bg-white p-6 shadow-shadow md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <Badge className="mb-4">Contact</Badge>
              <h2 className="font-display text-4xl md:text-6xl">Let’s Create Something Bold</h2>
              <p className="mt-4 max-w-2xl text-lg font-bold leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id sapien ac erat posuere gravida.</p>
            </div>
            <div className="rounded-base border-2 border-black bg-[#7df9ff] p-5 shadow-shadow">
              <p className="mb-3 flex items-center gap-2 font-black"><Mail /> hello@example.com</p>
              <p className="mb-5 flex items-center gap-2 font-black"><Camera /> @yourinstagram</p>
              <Button size="lg" className="w-full">Start Project <ArrowUpRight className="ml-2 size-4" /></Button>
            </div>
          </div>
        </section>

        <footer className="mt-10 rounded-base border-2 border-black bg-white p-5 text-center font-black shadow-shadow">© 2026 Marcellino F.A — Designer</footer>
      </section>
    </main>
  );
}
