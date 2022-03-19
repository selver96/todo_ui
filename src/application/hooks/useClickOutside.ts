import { useEffect, useRef } from "react"

export const useClickOutside = (handler: any) => {
    const domNode = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        let close = (event: any) => {
            if (!domNode.current?.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", close);

        return () => {
            document.removeEventListener("mousedown", close);
        };
    });

    return domNode;
} 