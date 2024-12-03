import React, { useEffect, useState } from 'react'


type typeWriterTypes = {
    text: string,
    speed: number
}
const useTypeWriter = ({ text, speed }: typeWriterTypes): string => {
    const [displayText, setDisplayText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayText((prev) => prev + text.charAt(currentIndex));
                setCurrentIndex((prev) => prev + 1);
            } else {

                clearTimeout(timer);
            }
        }, speed);
        return () => {
            clearTimeout(timer);
        }

    }, [text, currentIndex])

    return displayText;
}

export default useTypeWriter
