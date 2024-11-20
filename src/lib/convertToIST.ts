import { format, parse } from "date-fns"; // Install date-fns for easier parsing and formatting

/**
 * Converts a date-time string to IST time zone.
 *
 * @param dateTimeString - The input date-time string to convert.
 * @param formatString - The format of the input date-time string (e.g., "dd/MM/yyyy, HH:mm:ss").
 * @returns A formatted IST date-time string or "Invalid Date" on failure.
 */
const convertToIST = (dateTimeString: string, formatString: string): string => {
  try {
    // Parse the date-time string into a Date object
    const parsedDate = parse(dateTimeString, formatString, new Date());

    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date-time string");
    }

    // Create a new Date object adjusted for IST offset
    const istOffset = 5 * 60 + 30; // IST offset in minutes
    const istDate = new Date(parsedDate.getTime() + istOffset * 60 * 1000);

    // Format the IST date-time string
    return format(istDate, "dd/MM/yyyy, HH:mm:ss");
  } catch (error) {
    console.error("Error converting to IST:", error);
    return "Invalid Date";
  }
};

export default convertToIST;
