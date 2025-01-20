// export const scrollToElement = (elementRef: React.RefObject<HTMLElement>) => {
export const scrollToElement = (pageName: string) => {

    console.log('scrollToElement ------------ ')
    console.log('scrollToElement pageName: ', pageName)
    
    const elementRef = document.getElementById(pageName);
    
    console.log('scrollToElement elementRef: ', elementRef)
    if (elementRef) {
        console.log('scrollToElement scrollIntoView!!!! ')
        elementRef.scrollIntoView({ behavior: 'smooth' });
    }

    console.log('scrollToElement ------------ ')
}