export default defineNuxtPlugin(() => {
  return {
    provide: {
      scrollTo: (elementId) => {
        let element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
})