const startDateString = "2024-09-10";
const endDateString = "2024-09-16";

export function isDateInRange(dateString) {
  const date = new Date(dateString);
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  return date >= startDate && date <= endDate;
}

export function isDateSeptember(dateString) {
  const date = new Date(dateString);
  return date.getMonth() === 8;
}

