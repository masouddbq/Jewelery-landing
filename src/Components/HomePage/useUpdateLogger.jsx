import { useEffect, useState } from 'react'

const useUpdateLogger = (title) => {
    const [value, setValue] = useState(title)

    useEffect(() => {
        console.log('Value updated:', value);
    }, [value]);

    return [value, setValue]
}

export default useUpdateLogger