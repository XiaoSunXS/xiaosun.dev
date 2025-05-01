export const capitalize = (input: string) => {
  if (!input || input.length === 0) {
    return input;
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
};
