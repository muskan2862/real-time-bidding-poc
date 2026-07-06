import DOMPurify from "dompurify";

export const sanitizeInput = (text) => {
  return DOMPurify.sanitize(text);
};