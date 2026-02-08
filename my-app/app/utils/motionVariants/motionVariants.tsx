import {Variants} from 'framer-motion';
import useMobile from '@/app/hooks/useMobile';

export const lineVariants: Variants = {
    hidden: { bottom: '25%', opacity: 0, transition: { duration: 0 } },
    show: { bottom: '50%', opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
};

export const itemVariants: Variants = {
    hidden: { color: '#ffffff' },
    show: { color: '#E5E548', transition: { duration: 0.4, ease: 'easeInOut' } },
};

export const getMenuVariants = () => {
    const isMobile:boolean = useMobile(640)
    return {open: {x: 0, y: 0, opacity: 0.96,}, closed: isMobile ? { y: '-100%', x: 0, opacity: 0 } : { x: '-100%', y: 0, opacity: 0 },};
};