import React, { useEffect, useRef, useState } from 'react';
import "./productShowcase.css";

const ProductShowcase = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    const ref = useRef(null);

    const toggleAnimation = (e) => {
        if (e[0].isIntersecting) {
            setShowAnimation(true);
        }
    };

    const options = {
        root: null, //frame of reference
        rootMargin: '0px',
        threshold: 0.5, //part of ur div visible
    }
    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options);
        if (!showAnimation) {
            if (ref.current) {
                observer.observe(ref.current);
            }
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    });
    return <div className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
        ref={ref}
    >
        {
            showAnimation && (
            <div className='showcase-wrapper'>
            <img className='showcase-ui showcase-mockup-1' src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png' alt='image1' />
            <img className='showcase-ui showcase-mockup-2' src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png' alt='image2' />
            <img className='showcase-ui showcase-mockup-3' src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png' alt='image3' />
            <img className='showcase-ui showcase-mockup-4' src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png' alt='image4' />
            <img className='showcase-ui showcase-mockup-5' src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png' alt='image5' />
        </div>)
        }
    </div>;
};

export default ProductShowcase;
