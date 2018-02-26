export function scrollToElement(selector: string) {
    let el = document.querySelector(selector) as HTMLElement | null;
    while (el && window.getComputedStyle(el).display === 'none') {
        el = el.parentElement;
    }
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
