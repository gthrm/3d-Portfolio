import { useState, useEffect } from 'react';

/**
 * Custom React hook to check if the current device is mobile.
 * @param {number} mobileWidth - The maximum screen width to consider as a mobile device.
 * @returns {boolean} - True if the device is mobile, false otherwise.
 */
function useIsMobile(mobileWidth = 768) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mobileWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileWidth]);

    return isMobile;
}

export default useIsMobile;
