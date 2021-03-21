import React from 'react'
import Bar from '../../dist/Bar'

const dataset = {
    dataEntries: [
        {
            entry: .3
        },
        {
            entry: .4
        },
        {
            entry: .2
        },
        {
            entry: .7
        }
    ]
}

export const App = () => {
    return (
        <React.Fragment>
            <Bar height={200} maxWidth={300} margin={[0, 'auto']} heading='test' datasets={[dataset]}/>
        </React.Fragment>
    )
}