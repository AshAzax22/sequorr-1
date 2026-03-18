import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        // 1. Reveal Observer (from bottom)
        const revealOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px' 
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealVisible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, revealOptions);

        // 2. Header Exit Observer (fade out near top)
        const headerOptions = {
            threshold: 0,
            rootMargin: '-100px 0px 0px 0px' 
        };

        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting && entry.boundingClientRect.top < 100) {
                    entry.target.classList.add('headerFadeOut');
                } else {
                    entry.target.classList.remove('headerFadeOut');
                }
            });
        }, headerOptions);

        // Function to observe elements
        const observeElements = () => {
            const revealElements = document.querySelectorAll('.reveal:not(.revealVisible)');
            revealElements.forEach((el) => revealObserver.observe(el));

            const headers = document.querySelectorAll('.sectionHeader');
            headers.forEach((h) => headerObserver.observe(h));
        };

        // Initial observation
        observeElements();

        // 3. Mutation Observer for dynamic content
        const mutationObserver = new MutationObserver(() => {
            observeElements();
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => {
            revealObserver.disconnect();
            headerObserver.disconnect();
            mutationObserver.disconnect();
        };
    }, []);
};

export default useScrollAnimation;
