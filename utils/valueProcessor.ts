export function getRatingName(
  positive_ratings: string,
  negative_ratings: string
): string {
  const percentage: number =
    parseInt(positive_ratings) /
    (parseInt(positive_ratings) + parseInt(negative_ratings));

  if (percentage < 0.1) return "Overwhelmingly negative";
  else if (percentage < 0.3) return "Very negative";
  else if (percentage < 0.45) return "Mostly negative";
  else if (percentage < 0.55) return "Mixed";
  else if (percentage < 0.7) return "Mostly positive";
  else if (percentage < 0.9) return "Very positive";
  else return "Overwhelmingly positive";
}
