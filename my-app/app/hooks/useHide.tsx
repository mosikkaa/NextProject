import {useEffect, useRef, useState} from 'react';

const useHide = ():boolean => {
    const [show, setShow] = useState<boolean>(true);
    const timeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = ():void => {
            setShow(false);

            if (timeout.current) clearTimeout(timeout.current);

            timeout.current = setTimeout(() => {
                setShow(true);
            }, 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return ():void => {
            window.removeEventListener('scroll', handleScroll);
            if (timeout.current) clearTimeout(timeout.current);
        };
    }, []);

    return show
};

export default useHide