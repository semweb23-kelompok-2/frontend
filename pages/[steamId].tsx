import { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Heading,
  Img,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Player, BigPlayButton } from "video-react";
import "node_modules/video-react/dist/video-react.css";
import { axiosGet } from "@/utils/axios";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";

import { MainLayout } from "@/components/layout";
import { BoxedText, TextWithHeading, TextWithIcon } from "@/components/text";
import {
  Developer,
  GameDetail,
  GameDetailBinding,
  Publisher,
} from "@/types/detail";
import { toTitleCase } from "@/utils/stringFormatter";
import KukusanModal from "@/components/kukusan-modal";
import { modalDataType, modalType } from "@/types/modal";
import { processDetailFetchData } from "@/utils/apiProcessor";

function Detail() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalType, setModalType] = useState<modalType>("developer");
  const [modalData, setModalData] = useState<modalDataType>({} as Developer);
  const [data, setData] = useState<GameDetailBinding>({} as GameDetailBinding);
  const modalControl = useDisclosure();
  const router = useRouter();

  function handleModalType(type: modalType) {
    setModalType(type);
    setModalData(type === "developer" ? developerData : publisherData);
    modalControl.onOpen();
  }

  useEffect(() => {
    if (!!router.query.steamId) {
      axiosGet(`/${router.query.steamId}`)
        .then((res: AxiosResponse<GameDetail, any>) => {
          setData(processDetailFetchData(res.data));
        })
        .then(() => setIsLoading(false));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [router.query]);

  const developerData: Developer = {
    developerName: data?.developerName,
    developerAbstract: data?.developerAbstract,
    developerThumbnail: data?.developerThumbnail,
  };

  const publisherData: Publisher = {
    publisherName: data?.publisherName,
    publisherAbstract: data?.publisherAbstract,
    publisherThumbnail: data?.publisherThumbnail,
    publisherFoundDate: data?.publisherFoundDate,
    publisherLocation: data?.publisherLocation,
  };

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
      px={{ base: "8", lg: "32" }}
      py={!isLoading ? { base: "8", lg: "24" } : "0"}
      gap="8"
      color="white"
    >
      {!data.app_name ? (
        <Heading m="auto">Tidak ada game yang ditemukan</Heading>
      ) : (
        <>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            gap={{ base: "4", lg: "8" }}
          >
            <Img
              w={{ base: "full", lg: "calc(100vw / 3.2)" }}
              h="fit-content"
              borderRadius="md"
              boxShadow="4px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              src={data.header_image?.value}
            />
            <Flex flexDirection="column" gap="4">
              <Heading fontSize={{ base: "3xl", lg: "5xl" }}>
                {data?.app_name?.value}
              </Heading>
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
                  <Text>This game is available on :</Text>
                  <Flex gap="4">
                    {(data.platforms?.value as string[]).map(
                      (platform: string) => (
                        <BoxedText key={platform}>
                          {toTitleCase(platform)}
                        </BoxedText>
                      )
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDirection="column" gap="2">
            <Text>Game genre :</Text>
            <Flex gap="4" flexWrap="wrap">
              {(data.genres?.value as string[]).map((genre: string) => (
                <BoxedText key={genre}>{genre}</BoxedText>
              ))}
            </Flex>
          </Flex>

          <Flex flexWrap="wrap" justifyContent="space-between">
            <TextWithHeading heading="Release Date">
              {data.release_date?.value}
            </TextWithHeading>
            {data.publisherName?.value && (
              <TextWithHeading
                heading="Publisher"
                onClick={() => handleModalType("publisher")}
              >
                {data.publisherName.value}
              </TextWithHeading>
            )}
            {data.developerName?.value && (
              <TextWithHeading
                heading="Developer"
                onClick={() => handleModalType("developer")}
              >
                {data.developerName?.value}
              </TextWithHeading>
            )}
            <TextWithHeading heading="Average Playtime">
              {`${data.avg_playtime?.value} Hours`}
            </TextWithHeading>
            <TextWithHeading heading="Total Owners">
              {data.owners?.value}
            </TextWithHeading>
          </Flex>

          <Text>
            {!!data.gameAbstract
              ? data.gameAbstract.value
              : data.short_description?.value}
          </Text>

          {data.movies && (
            <Player src={data.movies.value}>
              <BigPlayButton position="center" />
            </Player>
          )}
          {data.screenshots && (
            <Flex pb="2" gap="4" overflowX="auto" css={contentScrollStyle}>
              {data.screenshots?.value.map((img: any) => (
                <Img key={img} src={img} w="360px" />
              ))}
            </Flex>
          )}
          <Flex justifyContent="space-between" gap={{ base: "4", lg: "32" }}>
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
              <TextWithHeading
                w="fit-content"
                isUrl
                isSwap
                heading="Support email :"
                gap="2"
              >
                {data.support_url.value}
              </TextWithHeading>
            )}
            {data.website?.value && (
              <TextWithHeading
                w="fit-content"
                isUrl
                isSwap
                heading="Support link :"
                gap="2"
              >
                {data.website.value}
              </TextWithHeading>
            )}
          </Flex>
          <KukusanModal
            type={modalType}
            modalControl={modalControl}
            data={modalData}
          />
        </>
      )}
    </MainLayout>
  );
}

export default Detail;
