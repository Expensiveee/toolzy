import Container from "@web/components/Container";
import Text from "@web/components/ui/Text";
import DynamicText from "@web/components/DynamicText";
import Input from "@web/components/ui/Input";
import Button from "@web/components/ui/Button";
import { Crop, Search, Users, RefreshCcw } from "react-feather";
import Hashtag from "@web/components/ui/Hashtag";

const words = ["developers", "designers", "Marketers", "Innovators", "You"];

export default async function Index() {
  return (
    <Container className="flex flex-col items-center justify-center">
      <main className="relative flex flex-col items-center bg-[url('/hero-blur.svg')] bg-cover bg-center bg-no-repeat py-20 text-center">
        <Text className="mb-8 capitalize" tag="h1" size="display">
          Hub of <span className="text-primary-500 font-bold">free online tools</span>
          <span className="block">
            made for <DynamicText className="font-black" words={words} />
          </span>
        </Text>

        <Text className="mb-20" tag="h2" size={"h6"} weight={"light"} color="gray">
          We are a community of developers, designers, and product managers
          <span className="block">who are passionate about building products that people love.</span>
        </Text>

        <div className="bg-dark-700 mb-12 flex items-center rounded-xl p-1">
          <Search size={18} className="m-2 shrink-0 grow-0 text-neutral-400" />
          <Input placeholder="Find the perfect tool" theme="none" />
          <Button className="w-28 justify-center py-2">Search</Button>
        </div>

        <div className="mb-12 flex gap-6">
          <Hashtag text="Design" emoji={"palette"} />
          <Hashtag text="Free" emoji={"unicorn"} />
          <Hashtag text="Easy" emoji={"cool"} />
        </div>

        <div className="flex items-stretch justify-center gap-6">
          <div className="bg-dark-700 border-dark-400/40 flex h-[220px] max-w-[380px] flex-col items-start justify-between rounded-xl border px-8 py-8 text-left">
            <Crop className="text-primary-500 shrink-0 grow-0" size={32} />

            <Text tag="h3" size="h5" weight="bold">
              Over 10+ <span className="text-primary-500">free</span> online tools
            </Text>

            <Text weight={"light"} className="capitalize" color="gray" tag="p" size="caption">
              Empower Your Creativity with a Suite of <span className="font-semibold text-white">Over 10+</span> free
              Online Tools!"
            </Text>
          </div>
          <div className="bg-dark-700 border-dark-400/40 flex h-[220px]  max-w-[380px]  flex-col items-start justify-between rounded-xl border px-8 py-8 text-left">
            <Users className="text-primary-500 shrink-0 grow-0" size={32} />

            <Text tag="h3" size="h5" weight="bold">
              1,000+ <span className="text-primary-500">active</span> users
            </Text>

            <Text weight={"light"} className="capitalize" color="gray" tag="p" size="caption">
              Join A Thriving Community of <span className="font-semibold text-white">1,000+ Active </span> users!
            </Text>
          </div>
          <div className="bg-dark-700 border-dark-400/40 flex h-[220px]  max-w-[380px]  flex-col items-start justify-between rounded-xl border px-8 py-8 text-left">
            <RefreshCcw className="text-primary-500 shrink-0 grow-0" size={32} />

            <Text tag="h3" size="h5" weight="bold">
              New tools <span className="text-primary-500">regularly</span>
            </Text>

            <Text weight={"light"} className="capitalize" color="gray" tag="p" size="caption">
              Discover Our Latest Tool Released Just <span className="font-semibold text-white">1 Day Ago!</span>
            </Text>
          </div>
        </div>
      </main>
      <section className="bg-primary-500 h-screen w-full"></section>
    </Container>
  );
}
