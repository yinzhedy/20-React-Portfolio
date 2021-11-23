import {useEffect} from 'react';

export default function useSubmit(fn) {
    useEffect(() => {
        window.addEventListener('submit', fn)
        return () => window.removeEventListener('submit', fn)
    }, [fn])
}