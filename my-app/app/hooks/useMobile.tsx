import {useEffect, useState} from 'react';

const useMobile = (breakpoint:number) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = ():void => setIsMobile(window.innerWidth < breakpoint);
        checkMobile();

        window.addEventListener('resize', checkMobile);
        return ():void => window.removeEventListener('resize', checkMobile);
    }, [breakpoint]);

    return isMobile;
};

export default useMobile