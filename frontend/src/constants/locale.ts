import { usePathname } from "next/navigation";

export const useLocale = (): string => {
  const pathname = usePathname();

  if (pathname.includes("ru")) {
    return "/ru";
  } else if (pathname.includes("en")) {
    return "/en";
  } else {
    return "/kg";
  }
};

export const decodeHTMLEntities = (str: string) => {
    if (typeof window === 'undefined') {
      return str;
    }
    
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };
  

export const cleanAndDecodeString = (str: string) => {
  const withoutPTags = str.replace(/<\/?p>/g, "");
  const decodedString = decodeHTMLEntities(withoutPTags);
  return decodedString;
};

export const translate = (
  ru: string,
  kg: string | undefined,
  en: string | undefined
) => {
  const locale = useLocale();

  if (locale === "/ru") {
    return cleanAndDecodeString(ru);
  }

  if (locale === "/kg" && kg) {
    return cleanAndDecodeString(kg);
  }

  if (locale === "/en" && en) {
    return cleanAndDecodeString(en);
  }

  return cleanAndDecodeString(ru);
};
