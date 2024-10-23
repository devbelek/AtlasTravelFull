export const getPluralValues = (count: any, rules: any) => {
  const result = new Intl.PluralRules("ru-RU").select(count);
  switch (result) {
    case "one":
      return `${count} ${rules[0]}`;
    case "few":
      return `${count} ${rules[0]}`;
    default:
      return `${count} ${rules[2]}`;
  }
};
