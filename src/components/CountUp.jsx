import React, { useEffect, useRef, useState } from 'react';

/**
 * Animates a number counting up from 0 to `end` once it scrolls into view.
 * Usage: <CountUp end={10000} suffix="+" />  ->  renders "10,000+"
 */
const CountUp = ({ end, duration = 1800, prefix = '', suffix = '', separator = true }) => {
    const [value, setValue] = useState(0);
    const spanRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const node = spanRef.current;
        if (!node) return undefined;

        // Respect users who prefer reduced motion: jump straight to the final value.
        const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setValue(end);
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                        const startTime = performance.now();

                        const step = (now) => {
                            const progress = Math.min((now - startTime) / duration, 1);
                            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                            setValue(Math.floor(eased * end));
                            if (progress < 1) {
                                requestAnimationFrame(step);
                            } else {
                                setValue(end);
                            }
                        };
                        requestAnimationFrame(step);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [end, duration]);

    const formatted = separator ? value.toLocaleString('en-US') : value;

    return (
        <span ref={spanRef}>
            {prefix}
            {formatted}
            {suffix}
        </span>
    );
};

export default CountUp;