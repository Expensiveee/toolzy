import Text from "@web/components/ui/Text";

const Footer = () => {
  return (
    <div className="bg-dark-700 z-50 flex w-full flex-row items-center justify-evenly gap-6 p-6">
      <div className="flex flex-col items-start">
        <Text size="body1" weight={"semibold"} tag="p">
          © 2023 Toolzy. All rights reserved.
        </Text>
      </div>
      <div className="flex flex-col items-start">
        <Text className="mb-3" tag="p" size="body1" weight={"bold"}>
          Idrissi Industries LLC
        </Text>
        <Text size="caption" tag="p">
          5830 E 2nd St, Ste 7000 #11015
        </Text>
        <Text size="caption" tag="p">
          Casper, Wyoming 82609
        </Text>
        <Text size="caption" tag="p">
          idrissi.indutries@gmail.com
        </Text>
      </div>
    </div>
  );
};

export default Footer;
