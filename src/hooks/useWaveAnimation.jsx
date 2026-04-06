import { useEffect } from "react";

export default function useWaveAnimation(ref) {
    useEffect(() => {
        if (!ref.current || !window.anime) return;

        const waves = ref.current.querySelectorAll("path");

        window.anime({
            targets: waves,
            translateX: [0, -200],
            easing: "linear",
            duration: 4000,
            loop: true
        });
    }, [ref]);
}