export const getCurrentDate = () => {
  const today = new Date(),
    date = String(today.getDate()).padStart(2, "0"),
    month = today.getMonth(),
    year = today.getFullYear(),
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

  return `${date} ${months[month]} ${year}`;
};
