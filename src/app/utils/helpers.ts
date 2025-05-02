export const capitalize = (input: string) => {
  if (!input || input.length === 0) {
    return input;
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
};

const MONTH_MAP = new Map<number, string>([
  [1, "Jan"],
  [2, "Feb"],
  [3, "Mar"],
  [4, "Apr"],
  [5, "May"],
  [6, "Jun"],
  [7, "Jul"],
  [8, "Aug"],
  [9, "Sep"],
  [10, "Oct"],
  [11, "Nov"],
  [12, "Dec"],
]);

export const formatYearMonth = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => `${MONTH_MAP.get(month)} ${year}`;
