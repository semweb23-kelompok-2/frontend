import { default as NextImage } from "next/image";
import { Image, Img, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { axiosGet } from "@/utils/axios";
import { MainLayout } from "@/components/layout";

export default function Home() {
  const [hello, setHello] = useState<any[]>([]);

  useEffect(() => {
    axiosGet({
      url: `/v2/list`,
      params: {
        page: 2,
      },
    }).then((res) => {
      setHello(res.data);
    });
  }, []);

  return (
    <MainLayout title="KukusanFinder - Find">
      <NextImage
        key="Test from steamcdn"
        alt="Test"
        src="https://steamcdn-a.akamaihd.net/steam/apps/500580/page_bg_generated_v6b.jpg?t=1478753158"
        layout="fill"
        objectFit="cover"
      />
      <Flex
        w="full"
        bg="white"
        position="relative"
        flexDirection="column"
        p="2"
      >
        <Heading py="2">
          List of Unsplash Images <br />
          Testing the New Next.js 14 Images Handling
        </Heading>
        <Flex w="full" flexWrap="wrap" gap="2">
          {hello.length > 0 &&
            hello.map((image: any) => (
              <Image
                key={image.download_url}
                alt={`Author: ${image.author}`}
                src={image.download_url}
                width={400}
                aspectRatio="auto"
                objectFit="cover"
              />
            ))}
        </Flex>
      </Flex>
    </MainLayout>
  );
}
