export const scrollToElement = (pageName: string) => {
  const elementRef = document.getElementById(pageName);

  if (elementRef) {
    elementRef.scrollIntoView({ behavior: "smooth" });
  }
};
