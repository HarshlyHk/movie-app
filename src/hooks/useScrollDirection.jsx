import { useEffect, useState } from "react";

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (
                direction !== scrollDirection &&
                Math.abs(scrollY - lastScrollY) > 10
            ) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", updateDirection);

        return () => {
            window.removeEventListener("scroll", updateDirection);
        };
    }, [scrollDirection]);

    return scrollDirection;
};

export default useScrollDirection;
