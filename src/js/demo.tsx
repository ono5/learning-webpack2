// src/js/demo.tsx
import * as React from 'react'

const Demo: React.FC<{ message: string}> = ({ message }) => {
    return (
        <div>
            {message}
        </div>
    )
}

export default Demo

