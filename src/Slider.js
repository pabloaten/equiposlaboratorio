import React, { useEffect, useRef, useState } from 'react'

const Slider = () => {
    const colors = ["http://www.taisl.com/pc/Imagenes/logotaisl.jpg", "http://www.taisl.com/pc/Draminski/Imagenes/draminski-gmm.jpg", "http://www.taisl.com/pc/Draminski/Imagenes/draminski-gmm.jpg"];
    const delay = 3500;


    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((background, index) => (
                    <div
                        className="slide uk-background-cover "
                        key={index}
                        style={{ backgroundImage : `url(${background})`}}
                    ></div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider