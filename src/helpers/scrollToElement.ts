export const scrollToElement = (pageName: string) => {
  const elementRef = document.getElementById(pageName);

  if (elementRef) {
    // elementRef.scrollIntoView({ behavior: "smooth" });

    const yOffset = -90; // Header height
    const y = elementRef.getBoundingClientRect().top + window.scrollY + yOffset;

    console.log(pageName, " y: ", y);
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
