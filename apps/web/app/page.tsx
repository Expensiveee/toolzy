import Container from "@web/components/Container";
import Text from "@web/components/ui/Text";
import DynamicText from "@web/components/DynamicText";
import Input from "@web/components/ui/Input";
import Button from "@web/components/ui/Button";
import { Crop, Search, Users, RefreshCcw, Droplet, Camera, Image, ArrowRight } from "react-feather";
import Hashtag from "@web/components/ui/Hashtag";
import Section from "@web/components/Section";
import ToolCard from "@web/components/ui/ToolCard";

const words = ["developers", "designers", "Marketers", "Innovators", "You"];
const features = [
  {
    title: (
      <>
        Over 10+ <span className="text-primary-500">free</span> online tools
      </>
    ),
    description: (
      <>
        Empower Your Creativity with a Suite of <span className="font-semibold text-white">Over 10+</span> free Online
        Tools!
      </>
    ),
    icon: <Crop className="text-primary-500 shrink-0 grow-0" size={32} />,
  },
  {
    title: (
      <>
        1,000+ <span className="text-primary-500">active</span> users
      </>
    ),
    description: (
      <>
        Join A Thriving Community of <span className="font-semibold text-white">1,000+ Active </span> users!
      </>
    ),
    icon: <Users className="text-primary-500 shrink-0 grow-0" size={32} />,
  },
  {
    title: (
      <>
        New tools <span className="text-primary-500">regularly</span>
      </>
    ),
    description: (
      <>
        Discover Our Latest Tool Released Just <span className="font-semibold text-white">1 Day Ago!</span>
      </>
    ),
    icon: <RefreshCcw className="text-primary-500 shrink-0 grow-0" size={32} />,
  },
];
const tools = [
  {
    title: "Image Color Picker",
    square: <div className={`h-10 w-10 shrink-0 rounded-md bg-emerald-500`}></div>,
    icon: <Droplet className="text-gray-400" size={22} />,
  },
  {
    title: "SVG to PNG Converter",
    square: <div className={`h-10 w-10 shrink-0 rounded-md bg-violet-500`}></div>,
    icon: <Image className="text-gray-400" size={22} />,
  },
  {
    title: "Metadata tag viewer",
    square: <div className={`h-10 w-10 shrink-0 rounded-md bg-red-500`}></div>,
    icon: <Camera className="text-gray-400" size={22} />,
  },
];
const topPicks = [
  {
    title: "Image Color Picker",
    description:
      "Pick the perfect color from any image with ease. Extract colors for your designs, artworks, or projects effortlessly. Upload an image, click on any spot, and get the precise color code you need. Create stunning visuals with this efficient tool.",
    href: "/tools/image-color-picker",
    rating: 4.5,
  },
  {
    title: "SVG to PNG Converter",
    description:
      "Convert SVG files to PNG format seamlessly. Transform scalable vector graphics into pixel-perfect PNG images. Perfect for web design or social media projects. Upload SVG, select the size, and let the converter work. Save time with this user-friendly tool.",
    href: "/tools/svg-to-png-converter",
    rating: 4.5,
  },
  {
    title: "Metadata tag viewer",
    description:
      "Explore hidden metadata tags of any website. Get insights into site structure, keywords, and more. Ideal for SEO specialists or curious web enthusiasts. Enter the URL, and the viewer displays relevant tags. Uncover website magic with this insightful tool.",
    href: "/tools/metatag-data-viewer",
    rating: 4.3,
  },
  {
    title: "PDF Merger",
    description:
      "Merge multiple PDF files effortlessly. Say goodbye to scattered files. Combine reports, presentations, or documents. Upload PDFs, arrange order, and create a unified file with a click. Enhance productivity with this efficient PDF Merger.",
    href: "/tools/pdf-merger",
    rating: 4.8,
  },
];

export default async function Index() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <Section className="relative flex flex-col items-center bg-[url('/assets/hero-blur.svg')] bg-cover bg-bottom text-center">
        <Text className="mb-8 capitalize" tag="h1" weight={"black"} size="display">
          Hub of <span className="text-primary-500">free online tools</span>{" "}
          <span className="inline lg:block">
            made for <DynamicText className="font-light" words={words} />
          </span>
        </Text>

        <Text className="mb-20" tag="h2" size={"h6"} weight={"light"} color="lightgray">
          We are a community of developers, designers, and product managers{" "}
          <span className="ineline lg:block">who are passionate about building products that people love.</span>
        </Text>

        <div className="mb-12 flex w-full items-center justify-center gap-2 px-4 lg:px-0">
          <div className="bg-dark-700 border-dark-400/40 flex w-full items-center rounded-xl border p-1 lg:w-2/5">
            <Search size={22} className="m-2 hidden shrink-0 grow-0 text-neutral-500 lg:inline" />
            <Input className="ml-3 py-2 lg:ml-0 lg:mr-2 lg:py-2" placeholder="Find the perfect tool" theme="none" />
            <Button className="lg:w-22 hidden lg:inline" size="large">
              Search
            </Button>
            <Button variant="icon" icon={<Search size={18} />} className="inline lg:hidden" size="medium" />
          </div>
        </div>

        <div className="mb-12 flex gap-6">
          <Hashtag theme="dark" text="Design" emoji={"palette"} />
          <Hashtag theme="dark" text="Free" emoji={"unicorn"} />
          <Hashtag theme="dark" text="Easy" emoji={"cool"} />
        </div>

        <div className="flex w-full select-none flex-col items-stretch justify-center gap-6 lg:flex-row">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-dark-700 border-dark-400/40 flex h-auto w-full flex-col items-start justify-start rounded-xl border px-8 py-8 text-left"
            >
              {feature.icon}

              <Text className="mt-4" tag="h3" size="h5" weight="bold">
                {feature.title}
              </Text>

              <Text className="mt-2 capitalize" color="lightgray" tag="p" size="body1">
                {feature.description}
              </Text>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-primary-500 flex-col-reverse items-center gap-20 lg:flex-row lg:gap-32">
        <div className="flex w-full flex-1 flex-col items-center lg:py-10">
          <div className="flex w-full flex-col gap-6 rounded-2xl lg:aspect-square lg:w-max lg:bg-gray-100">
            {tools.map((tool, i) => (
              <div
                key={i}
                className=" border-dark-200 flex w-full cursor-pointer flex-col items-center justify-center space-y-5 rounded-xl border bg-white px-4 py-8 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 lg:translate-x-12 lg:translate-y-12"
              >
                <div className="flex w-full items-start justify-start gap-8">
                  {tool.square}
                  <div className="flex flex-1 flex-col gap-3">
                    <Text tag="h4" size="h6" weight={"extrabold"} color="black">
                      {tool.title}
                    </Text>
                    <div className="mt-2 h-2.5 w-full rounded-xl bg-gray-300"></div>
                    <div className="h-2.5  w-4/5 rounded-xl bg-gray-300"></div>
                  </div>
                  {tool.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col items-center">
          <Hashtag className="mb-2 lg:self-start" theme="light" text="SimplifyYourWorkflow" emoji={"palette"} />
          <Text tag="h3" className="mb-4 mt-6 w-full text-left capitalize" weight={"extrabold"} size={"h3"}>
            Where Magic Meets Efficiency
          </Text>
          <Text tag="p" className="mb-10 capitalize" size="body1">
            Toolzy, your One-Stop Hub for Online Tools. We&apos;ve got the essentials tailored for designers,
            developers, marketers and much more. Simplify your workflow and achieve remarkable results by elevating your
            skills and your creativity.
          </Text>
          <Button
            variant="text-icon"
            icon={<ArrowRight className="shrink-0" size={18} />}
            direction="right"
            size={"large"}
            theme="outline"
            className="w-fit self-start border-white"
          >
            Learn More
          </Button>
        </div>
      </Section>
      <Section className="flex flex-col items-center gap-16 2xl:flex-row 2xl:gap-32">
        <div className="flex flex-col justify-start 2xl:w-2/5">
          <Hashtag className="mb-2 self-center lg:self-start" theme="dark" text="TryNow" />
          <Text
            tag="h3"
            className="mb-4 mt-6 flex w-full items-center text-left capitalize"
            weight={"extrabold"}
            size={"h3"}
          >
            Top Picks: The Fabulous Four
          </Text>
          <Text tag="p" className="mb-10 capitalize" size="body1">
            Introducing <span className="font-bold">Top Picks</span> - A Carefully Curated Collection of Our Most
            Popular and Essential Online Tools. These Handpicked Gems Are Loved for Their Remarkable Performance,
            Versatility, and Positive User Reviews. Whether You&apos;re a Design Guru, Coding Wizard, or Marketing
            Maverick, These Tools Are Your Secret Weapons to Boost Productivity and Unleash Your Creative Brilliance
          </Text>
        </div>

        <div className="flex flex-col  items-center justify-center w-full 2xl:w-3/5">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {topPicks.map((pick, i) => (
              <ToolCard
                theme={i % 3 ? "dark" : "primary"}
                key={i}
                title={pick.title}
                description={pick.description}
                href={pick.href}
                rating={pick.rating}
              />
            ))}
          </div>
          <Text className="mt-10" size="body1" color="lightgray">
            And much more
          </Text>
        </div>
      </Section>
    </Container>
  );
}
