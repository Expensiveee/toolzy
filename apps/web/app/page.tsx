import { Crop, Search, Users, RefreshCcw, FileText, Droplet, ArrowRight } from "react-feather";
import Container from "@web/components/Container";
import Text from "@web/components/ui/Text";
import DynamicText from "@web/components/DynamicText";
import Input from "@web/components/ui/Input";
import Button from "@web/components/ui/Button";
import Hashtag from "@web/components/ui/Hashtag";
import Section from "@web/components/Section";
import ToolCard from "@web/components/ui/ToolCard";
import Accordion from "@web/components/ui/Accordion";

const words = ["developers", "designers", "Marketers", "Innovators", "You"];
const statistics = [
  {
    name: (
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
    name: (
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
    name: (
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
const features = [
  {
    name: "Myriad Of Tools",
    description:
      "Step into a realm of boundless possibilities tailored just for you. Discover a dazzling collection of delightful tools that promise to elevate your daily experiences. Embrace the joy of effortless productivity as you immerse yourself in the brilliance of our toolkit",
  },
  {
    name: "The Art of Efficiency",
    description:
      "One of the standout features of Toolzy is its user-friendly interface and seamless user experience. The platform is designed with simplicity in mind, making it easy for users to navigate and use the tools effortlessly",
  },
  {
    name: "Tool-tastic Innovations",
    description:
      "Innovation is our heart! Discover fresh, cutting-edge tools that keep pace with your evolving needs. Stay ahead of the curve and unleash your full potential with trendy features",
  },
];
const topPicks = [
  {
    name: "Image Color Picker",
    description:
      "Pick the perfect color from any image with ease. Extract colors for your designs, artworks, or projects effortlessly. Upload an image, click on any spot, and get the precise color code you need. Create stunning visuals with this efficient tool.",
    href: "/tools/image-color-picker",
    rating: 4.5,
  },
  {
    name: "SVG to PNG Converter",
    description:
      "Convert SVG files to PNG format seamlessly. Transform scalable vector graphics into pixel-perfect PNG images. Perfect for web design or social media projects. Upload SVG, select the size, and let the converter work. Save time with this user-friendly tool.",
    href: "/tools/svg-to-png-converter",
    rating: 4.5,
  },
  {
    name: "Metadata tag viewer",
    description:
      "Explore hidden metadata tags of any website. Get insights into site structure, keywords, and more. Ideal for SEO specialists or curious web enthusiasts. Enter the URL, and the viewer displays relevant tags. Uncover website magic with this insightful tool.",
    href: "/tools/metatag-data-viewer",
    rating: 4.3,
  },
  {
    name: "PDF Merger",
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
        <main className="w-full">
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
        </main>

        <div className="mb-12 flex gap-6">
          <Hashtag emoji="🔧" theme="dark" text="Toolzy" />
          <Hashtag emoji="😍" theme="dark" text="Free" />
          <Hashtag emoji="🎂" theme="dark" text="Easy" />
        </div>

        <div className="flex w-full select-none flex-col items-stretch justify-center gap-6 lg:flex-row">
          {statistics.map((s, i) => (
            <div
              key={i}
              className="bg-dark-700 border-dark-400/40 flex h-auto w-full flex-col items-start justify-start rounded-xl border px-8 py-8 text-left"
            >
              {s.icon}

              <Text className="mt-4" tag="h3" size="h5" weight="bold">
                {s.name}
              </Text>

              <Text className="mt-2 capitalize" color="lightgray" tag="p" size="h6">
                {s.description}
              </Text>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-primary-500 flex-col-reverse items-center gap-20 lg:flex-row lg:gap-32">
        <div className="flex w-full flex-1 flex-col items-center lg:py-10">
          <div className="flex w-full flex-col items-stretch gap-4 rounded-2xl lg:w-max lg:bg-slate-50">
            {features.map((f, i) => (
              <div
                key={i}
                className="border-dark-200 flex w-full cursor-pointer flex-col items-center justify-center space-y-5 rounded-xl border bg-white px-4 py-8 shadow-xl lg:translate-x-12 lg:translate-y-12"
              >
                <div className="flex w-full items-start justify-start gap-8">
                  <div className={`bg-primary-500 flex h-10 w-10 shrink-0 items-center justify-center rounded-md`}>
                    {i + 1}
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <Text tag="h4" size="h6" weight="extrabold" color="black">
                      {f.name}
                    </Text>
                    <div className="mt-2 w-full lg:max-w-[350px] 2xl:max-w-[550px]">
                      <Text className="pr-4" color="darkgray" weight="medium" tag="p" size="body1">
                        {f.description}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col items-center">
          <Hashtag emoji="✨" className="mb-2 lg:self-start" theme="light" text="Features" />
          <Text tag="h3" className="mb-4 mt-6 w-full text-left capitalize" weight={"extrabold"} size={"h3"}>
            Where Magic Meets Efficiency
          </Text>
          <Text tag="p" className="mb-10" size="h6">
            Toolzy, your One-Stop hub for online tools. We&apos;ve got the essentials tailored for designers,
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
          <Hashtag emoji="🚀" className="mb-2 self-center lg:self-start" theme="dark" text="TryNow" />
          <Text
            tag="h3"
            className="mb-4 mt-6 flex w-full items-center text-left capitalize"
            weight={"extrabold"}
            size={"h3"}
          >
            Top Picks: The Fabulous Four
          </Text>
          <Text tag="p" className="mb-10" size="h5">
            Introducing <span className="font-black">Top Picks</span> - A carefully curated collection of our most
            popular and essential online tools. These handpicked gems are loved for their remarkable performance,
            versatility, and positive user reviews. Whether you&apos;re a design guru, coding wizard, or marketing
            maverick, these tools are your secret weapons to boost productivity and unleash your creative brilliance
          </Text>
        </div>

        <div className="flex w-full  flex-col items-center justify-center 2xl:w-3/5">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {topPicks.map((pick, i) => (
              <ToolCard
                theme={i % 3 ? "dark" : "primary"}
                key={i}
                title={pick.name}
                description={pick.description}
                href={pick.href}
                rating={pick.rating}
              />
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-primary-500 flex flex-col items-center gap-20 xl:flex-row">
        <div className="w-full lg:w-3/5">
          <Hashtag
            emoji="❓"
            className="mb-2 self-center lg:self-start"
            theme="light"
            text="FrequentlyAskedQuestions"
          />

          <Text
            tag="h3"
            className="mb-4 mt-6 flex w-full items-center text-left capitalize"
            weight={"extrabold"}
            size={"h3"}
          >
            FAQ - Answering Your Curiosities
          </Text>
          <Text tag="p" className="mb-10" size="h5">
            Find quick answers to your burning questions and discover the magic of your new favorite website. If youare
            more curious than or have any other inquires, feel free to contact us using the form below.
          </Text>

          {/* TODO: FAQ SERP */}

          <div className="flex flex-col gap-4 2xl:w-4/5">
            <Accordion
              title="Are all the tools on Toolzy really free to use?"
              description="Absolutely! All the tools available on Toolzy are completely free to use. There are no hidden charges or subscription fees."
            />

            <Accordion
              title="How often are new tools added to Toolzy?"
              description="We are constantly innovating and adding new tools to our platform. We strive to provide you with fresh and cutting-edge tools regularly, so you can stay updated with the latest trends and technologies."
            />

            <Accordion
              title="Is my data safe on Toolzy?"
              description="Absolutely! We take data privacy and security very seriously. Your information is protected with industry-standard encryption and security measures."
            />

            <Accordion
              title="Can I suggest a new tool idea to be added to Toolzy?"
              description="Of course! We welcome your suggestions and feedback. If you have an idea for a new tool or feature, feel free to reach out to us through our contact form. We love hearing from our users!"
            />

            <Accordion
              title="How can I contact customer support if I have a question or issue?"
              description="If you have any questions or encounter any issues while using Toolzy, you can reach out to our dedicated customer support team through the 'Contact Us' page. We are here to assist you and ensure you have a smooth experience on our platform."
            />
          </div>
        </div>
        <div className="flex w-full flex-col justify-center lg:w-2/5">
          <div className="flex w-full flex-col gap-6 rounded-2xl lg:aspect-square lg:w-max lg:bg-gray-100">
            <div className=" border-dark-200 flex w-full cursor-pointer flex-col items-center justify-between gap-y-10 space-y-5 rounded-xl border bg-white px-6 py-8 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 lg:translate-x-12 lg:translate-y-12">
              <div className="flex w-full items-start justify-start gap-8">
                <div className={`h-10 w-10 shrink-0 rounded-md bg-pink-500 shadow-lg`}></div>
                <div className="flex flex-1 flex-col gap-3">
                  <Text tag="h4" size="h6" weight={"extrabold"} color="black">
                    Image Color Picker
                  </Text>
                  <div className="mt-2 h-2.5 w-full rounded-xl bg-gray-300"></div>
                  <div className="h-2.5  w-4/5 rounded-xl bg-gray-300"></div>
                </div>
                <Droplet className="text-gray-400" size={22} />
              </div>
              <div className="flex w-full gap-12">
                <div className="bg-primary-500 h-32 w-32 shrink-0 rounded-md shadow-xl"></div>
                <div className="flex flex-col">
                  <Text tag="p" size="body1" weight={"extrabold"} color="darkgray">
                    Color Selected
                  </Text>
                  <Text className="mt-1" tag="p" size="body2" weight={"semibold"} color="darkgray">
                    #ff2148
                  </Text>
                  <div className="mt-3 flex gap-1">
                    <div className={`h-6 w-6 shrink-0 rounded-md bg-green-500`}></div>
                    <div className={`h-6 w-6 shrink-0 rounded-md bg-cyan-500`}></div>
                    <div className={`h-6 w-6 shrink-0 rounded-md bg-orange-500`}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-dark-200 flex w-full cursor-pointer flex-col items-center justify-center space-y-5 rounded-xl border bg-white px-6 py-8 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 lg:translate-x-12 lg:translate-y-12">
              <div className="flex w-full items-start justify-start gap-8">
                <div className="h-10 w-10 shrink-0 rounded-md bg-emerald-500 shadow-lg"></div>
                <div className="flex flex-1 flex-col gap-3">
                  <Text tag="h4" size="h6" weight={"extrabold"} color="black">
                    PDF Merger
                  </Text>
                  <div className="mt-2 h-2.5 w-full rounded-xl bg-gray-300"></div>
                  <div className="h-2.5  w-4/5 rounded-xl bg-gray-300"></div>
                </div>
                <FileText className="text-gray-400" size={22} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
