import { Text, Flex, Heading, Img } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout";
import { BoxedText, TextWithHeading, TextWithIcon } from "@/components/text";
import { Icon } from "@iconify/react";

function Detail() {
  const bgImg: string =
    "https://steamcdn-a.akamaihd.net/steam/apps/24960/page_bg_generated_v6b.jpg?t=1447352806";
  const headerImg: string =
    "https://steamcdn-a.akamaihd.net/steam/apps/24960/header.jpg?t=1447352806";

  const imgs: string[] = [
    "https://cdn.akamai.steamstatic.com/steam/apps/80467/movie480.webm?t=1591894384",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_ae0308877700b0339f7ee8e41bcc03656861d35d.1920x1080.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_b8af772596e0093da432d9774a2b904e3955c631.1920x1080.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_6692ebaff0e5a0786db7483c834ca879ebcaa09f.600x338.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_b5c1687fab65c7ac25c74a4b7b6d42bc6e585cff.600x338.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_631d8a42e34ef0592949a9dc449d39be7d3a6227.600x338.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_ac00f9b0d76233c12cf43ee5e916e5736890cacf.600x338.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_2abc532120ae0f8fb354cd38b362b1c1c3165b66.600x338.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_62f25fb704fcb28c85f66ce30c4c007214342395.600x338.jpg?t=1682701509",
  ];
  return (
    <MainLayout
      title="KukusanFinder - Detail"
      bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(${bgImg}), lightgray 50% / cover no-repeat`}
      flexDirection="column"
      px="32"
      py="24"
      gap="8"
      color="white"
    >
      <Flex gap="8">
        <Img
          w="440px"
          h="fit-content"
          borderRadius="md"
          boxShadow="4px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          src={headerImg}
        />
        <Flex flexDirection="column" gap="4">
          <Heading fontSize="5xl">Battlefield: Bad Company™ 2</Heading>
          <Flex gap="4" flexWrap="wrap">
            <BoxedText>Action</BoxedText>
            <BoxedText>First person shooter</BoxedText>
            <BoxedText>Adventure</BoxedText>
          </Flex>
          <Flex gap="4">
            <BoxedText bg="green.700">English available</BoxedText>
            <BoxedText bg="red.700">Only for 16+</BoxedText>
            <TextWithIcon icon="prime:thumbs-up-fill">400</TextWithIcon>
            <TextWithIcon icon="prime:thumbs-down-fill">20</TextWithIcon>
          </Flex>
          <Flex flexDirection="column" gap="2">
            <Text>This game is available on :</Text>
            <Flex gap="4">
              <BoxedText>Windows</BoxedText>
              <BoxedText>Linux</BoxedText>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <TextWithHeading heading="Release Date" text="26-12-2001" />
        <TextWithHeading heading="Publisher" text="DICE" />
        <TextWithHeading heading="Developer" text="Electronic Arts" />
        <TextWithHeading heading="Average Playtime" text="3.4 Hours" />
        <TextWithHeading heading="Total Owners" text="100000 - 500000" />
      </Flex>
      <Text>
        Lorem ipsum dolor sit amet consectetur. Vestibulum justo mi id in id
        tincidunt risus. Arcu tellus enim in ridiculus ultricies facilisis. Nunc
        netus cursus aliquam a sociis neque lacinia. Suspendisse fermentum et
        sagittis sollicitudin aliquet facilisis. Lorem ipsum dolor sit amet
        consectetur. Vestibulum justo mi id in id tincidunt risus. Arcu tellus
        enim in ridiculus ultricies facilisis. Nunc netus cursus aliquam a
        sociis neque lacinia. Suspendisse fermentum et sagittis sollicitudin
        aliquet facilisis.Lorem ipsum dolor sit amet consectetur. Vestibulum
        justo mi id in id tincidunt risus. Arcu tellus enim in ridiculus
        ultricies facilisis. Nunc netus cursus aliquam a sociis neque lacinia.
        Suspendisse fermentum et sagittis sollicitudin aliquet facilisis.Lorem
        ipsum dolor sit amet consectetur. Vestibulum justo mi id in id tincidunt
        risus. Arcu tellus enim in ridiculus ultricies facilisis. Nunc netus
        cursus aliquam a sociis neque lacinia. Suspendisse fermentum et sagittis
        sollicitudin aliquet facilisis.
      </Text>
    </MainLayout>
  );
}

export default Detail;
