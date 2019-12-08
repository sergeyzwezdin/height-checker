const initHeightChecker: (logLevel?: 'log' | 'warn' | 'info' | 'error') => void = (logLevel = 'warn') => {
    const checkRootHeights = () => {
        const elements: HTMLElement[] = Array.from(document.querySelectorAll('[data-check-height]'));

        elements.forEach((element) => {
            const style = window.getComputedStyle(element);
            const marginTop = parseFloat(style.marginTop || '0') || 0;
            const marginBottom = parseFloat(style.marginBottom || '0') || 0;
            const elementHeight = element.offsetHeight + marginTop + marginBottom;
            const multiplier = Number(element.getAttribute('data-check-height')) || 8;

            if (elementHeight % multiplier !== 0) {
                const message = `Element height is not multiple of ${multiplier}px (${elementHeight}px).`;

                if (logLevel === 'log') {
                    console.log(message, element);
                } else if (logLevel === 'warn') {
                    console.warn(message, element);
                } else if (logLevel === 'info') {
                    console.info(message, element);
                } else if (logLevel === 'error') {
                    console.error(message, element);
                } else {
                    console.warn(message, element);
                }
            }
        });
    };

    const throttleEvent = function(type: string) {
        let running = false;
        window.addEventListener(type, () => {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(() => {
                checkRootHeights();
                running = false;
            });
        });
    };
    throttleEvent('resize');

    const observer = new MutationObserver(checkRootHeights);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    checkRootHeights();
};

export { initHeightChecker };
