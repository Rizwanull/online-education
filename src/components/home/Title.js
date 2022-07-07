import React from 'react'

const Title = ({ title, subtitle }) => {
    return (
        <>
            <div id='titles'>
                <h3>{title}</h3>
                <h1>{subtitle}</h1>
            </div>
        </>
    )
}

export default Title