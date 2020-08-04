import React from 'react'
import {Card, Row} from 'react-bootstrap'
const Stats = () => {
    // initial stats arr, will need to fetch data from our API and update state accordingly using useEffect/ useState
    const stats = [
        {
            name: '',
            icon: '',
            stat: 0
        }
    ]
    return (
        <div>
                <Row className='py-5' style={{borderTop: '2px solid #ccc'}}>
                    {/* map through stats here rendering column icon and text */}
                </Row>

        </div>
    )
}

export default Stats
