import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import toastResponsive from "react-hot-toast";
import dateFormat from "dateformat";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const numberSpacer = (amount: number) => {
  return parseInt(String(amount), 10).toLocaleString().replace(/,/g, " ");
};

export const customToast = (type: "SUCCESS" | "ERROR", message: string) => {
  switch (type) {
    case "SUCCESS":
      toastResponsive.success(`${message}`, {
        duration: 2000,
      });
      break;
    case "ERROR":
      toastResponsive.error(`${message}`, {
        duration: 3000,
      });
      break;
    default:
      toastResponsive("Something went wrong!");
      break;
  }
};

export const dateFormatter = (date: string) => {
  return {
    time: dateFormat(date, "HH:MM"),
    date: dateFormat(date, "dd.mm.yyyy"),
  };
};
