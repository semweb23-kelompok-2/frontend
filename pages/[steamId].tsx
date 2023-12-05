import { useEffect, useState } from "react";
import { Text, Flex, Heading, Img, Button } from "@chakra-ui/react";
import { MainLayout } from "@/components/layout";
import { BoxedText, TextWithHeading, TextWithIcon } from "@/components/text";
import { Player, BigPlayButton } from "video-react";
import "node_modules/video-react/dist/video-react.css";
import { axiosGet } from "@/utils/axios";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { GameDetail, GameDetailBinding, TypeVal } from "@/types/detail";
import { platform } from "os";
import { toTitleCase } from "@/utils/stringFormatter";

function Detail() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<GameDetailBinding>({} as GameDetailBinding);
  const router = useRouter();

  useEffect(() => {
    if (!!router.query.steamId) {
      axiosGet(`/${router.query.steamId}`)
        .then((res: AxiosResponse<GameDetail, any>) => {
          const gameDetail = res.data.results.bindings[0];
          setData(
            gameDetail.app_name
              ? {
                  ...gameDetail,
                  categories: {
                    ...gameDetail.categories,
                    value:
                      typeof gameDetail.categories.value === "string"
                        ? (gameDetail.categories.value.split(", ") as string[])
                        : gameDetail.categories.value,
                  },
                }
              : ({} as GameDetailBinding)
          );
        })
        .then(() => setIsLoading(false));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [router.query]);

  const video: string =
    "https://cdn.akamai.steamstatic.com/steam/apps/80467/movie480.webm?t=1591894384";

  const imgs: string[] = [
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_ae0308877700b0339f7ee8e41bcc03656861d35d.1920x1080.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_b8af772596e0093da432d9774a2b904e3955c631.1920x1080.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_6692ebaff0e5a0786db7483c834ca879ebcaa09f.600x338.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_b5c1687fab65c7ac25c74a4b7b6d42bc6e585cff.600x338.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_631d8a42e34ef0592949a9dc449d39be7d3a6227.600x338.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_ac00f9b0d76233c12cf43ee5e916e5736890cacf.600x338.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_2abc532120ae0f8fb354cd38b362b1c1c3165b66.600x338.jpg?t=1682701509",
    "https://cdn.akamai.steamstatic.com/steam/apps/24960/ss_62f25fb704fcb28c85f66ce30c4c007214342395.600x338.jpg?t=1682701509",
  ];

  const contentScrollStyle = {
    "&::-webkit-scrollbar": {
      height: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "white",
      backgroundClip: "content-box",
      borderRadius: "24px",
    },
  };
  return (
    <MainLayout
      title="KukusanFinder - Detail"
      isLoading={isLoading}
      bg={
        !data.app_name
          ? "linear-gradient(122deg, #121B30 6.7%, #0D3449 89.76%)"
          : `linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(${data.background?.value}), lightgray 50% / cover`
      }
      bgSize="cover"
      flexDirection="column"
      px="32"
      py="24"
      gap="8"
      color="white"
    >
      {!data.app_name ? (
        <Heading m='auto'>Tidak ada game yang ditemukan</Heading>
      ) : (
        <>
          <Flex gap="8">
            <Img
              w="440px"
              h="fit-content"
              borderRadius="md"
              boxShadow="4px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              src={data.header_image?.value}
            />
            <Flex flexDirection="column" gap="4">
              <Heading fontSize="5xl">{data?.app_name?.value}</Heading>
              <Flex gap="4" flexWrap="wrap">
                {data.categories &&
                  (data.categories?.value as string[]).map(
                    (category: string) => (
                      <BoxedText key={category}>{category}</BoxedText>
                    )
                  )}
              </Flex>
              <Flex gap="4">
                {data.in_english?.value && (
                  <BoxedText bg="green.700">English available</BoxedText>
                )}
                <BoxedText
                  bg={
                    parseInt(data.req_age?.value) === 0
                      ? "green.700"
                      : "red.700"
                  }
                >
                  {parseInt(data.req_age?.value) === 0
                    ? "Semua umur"
                    : `Umur ${data.req_age?.value}+`}
                </BoxedText>
                <TextWithIcon icon="prime:thumbs-up-fill">
                  {data.positive_ratings?.value}
                </TextWithIcon>
                <TextWithIcon icon="prime:thumbs-down-fill">
                  {data.negative_ratings?.value}
                </TextWithIcon>
              </Flex>
              <Flex gap="8">
                <Flex flexDirection="column" gap="2">
                  <Text>Game genre :</Text>
                  <Flex>
                    <Button
                      textDecoration="underline"
                      colorScheme="red"
                      size="sm"
                      px="6"
                      key={data.genres?.value}
                    >
                      {data.genres?.value.split("/")[3]}
                    </Button>
                  </Flex>
                </Flex>
                <Flex flexDirection="column" gap="2">
                  <Text>This game is available on :</Text>
                  <Flex gap="4">
                    {data.platforms?.value
                      .split(", ")
                      .map((platform: string) => (
                        <BoxedText key={platform}>
                          {toTitleCase(platform)}
                        </BoxedText>
                      ))}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <TextWithHeading heading="Release Date">
              {data.release_date?.value}
            </TextWithHeading>
            <TextWithHeading
              heading="Publisher"
              onClick={() => console.log("T")}
            >
              {data.publisher?.value.split("/")[3]}
            </TextWithHeading>
            <TextWithHeading
              heading="Developer"
              onClick={() => console.log("T")}
            >
              {data.developer?.value.split("/")[3]}
            </TextWithHeading>
            <TextWithHeading heading="Average Playtime">
              {`${data.avg_playtime?.value} Hours`}
            </TextWithHeading>
            <TextWithHeading heading="Total Owners">
              {data.owners?.value}
            </TextWithHeading>
          </Flex>
          <Text>{/* {data.} */}</Text>

          {data.movies && (
            <Player src={data.movies.value}>
              <BigPlayButton position="center" />
            </Player>
          )}

          {/* <Flex pb="2" gap="4" overflowX="auto" css={contentScrollStyle}>
        {data.screenshots &&
          (JSON.parse(data.screenshots?.value as string) as any[]).map((img: any) => (
            <Img key={img} src={img} w="360px" />
          ))}
      </Flex> */}
          <Flex justifyContent="space-between" gap="32">
            {data.minimum_requirements?.value && (
              <TextWithHeading
                isSwap
                w={
                  data.recommended_requirements?.value
                    ? "calc(50% - 4px)"
                    : "100%"
                }
                heading="Minimum requirements :"
                gap="2"
              >
                {data.minimum_requirements.value}
              </TextWithHeading>
            )}
            {data.recommended_requirements?.value && (
              <TextWithHeading
                isSwap
                w={
                  data.minimum_requirements?.value ? "calc(50% - 4px)" : "100%"
                }
                heading="Recommended requirements :"
                gap="2"
              >
                {data.recommended_requirements.value}
              </TextWithHeading>
            )}
          </Flex>
          <Flex flexDirection="column" gap="4">
            {data.support_url?.value && (
              <TextWithHeading isUrl isSwap heading="Support email :" gap="2">
                {data.support_url.value}
              </TextWithHeading>
            )}
            {data.website?.value && (
              <TextWithHeading isUrl isSwap heading="Support link :" gap="2">
                {data.website.value}
              </TextWithHeading>
            )}
          </Flex>
        </>
      )}
    </MainLayout>
  );
}

export default Detail;
