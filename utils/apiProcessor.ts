import { GameDetail, GameDetailBinding } from "@/types/detail";
import { convertToArray } from "./stringFormatter";

export function processDetailFetchData(data: GameDetail) {
  const gameDetail: GameDetailBinding = data?.results.bindings[0];
  return gameDetail.app_name
    ? {
        ...gameDetail,
        genres: {
          ...gameDetail.genres,
          value: convertToArray(gameDetail.genres.value, ", "),
        },
        platforms: {
          ...gameDetail.platforms,
          value: convertToArray(gameDetail.platforms.value, ", "),
        },
        categories: {
          ...gameDetail.categories,
          value: convertToArray(gameDetail.categories.value, ", "),
        },
      }
    : ({} as GameDetailBinding);
}
