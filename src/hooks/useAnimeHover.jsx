import { useEffect } from "react";
import { COLORS } from "../common/variables";

/**
 * 导航栏动画 Hook，引入 Anime.js。
 * @author Razorsax
 * @param {*} ref 
 * @param {*} isVisible 
 */
export default function useAnimeHover(ref) {
    useEffect(() => {
        if (!ref.current || !window.anime) return;

        const el = ref.current;
        const bg = el.querySelector(".bg");

        let anim;

        const enter = () => {
            anim?.pause();

            anim = window.anime.timeline()
                .add({
                    targets: bg,
                    opacity: 1,
                    scale: 1.1,
                    duration: 500,
                    easing: "easeOutExpo"
                })
                .add({
                    targets: el,
                    scale: 1.06,
                    duration: 400,
                    easing: "cubicBezier(.22,1,.36,1)"
                }, 0);
        };

        const leave = () => {
            anim?.pause();

            anim = window.anime.timeline()
                .add({
                    targets: bg,
                    opacity: 0,
                    scale: 1,
                    duration: 400,
                    easing: "easeOutQuad"
                })
                .add({
                    targets: el,
                    scale: 1,
                    duration: 500,
                    easing: "easeOutElastic(1, .7)"
                }, 0);
        };

        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);

        return () => {
            el.removeEventListener("mouseenter", enter);
            el.removeEventListener("mouseleave", leave);
        };
    }, [ref]);
}
