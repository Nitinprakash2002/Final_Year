import React from 'react';
import './third.css'
function Transport({data2})
{
    return(
        <div>
            <div className="cards">
                <div className="pics">

                </div>
                <div className="Infos"><ul>
                    <li>Bus Number: {data2['Bus Route']}</li>
                    <li>Destination: {data2.Destination}</li>
                    <li>Starts From :{data2['Starting From']}</li>
                    <li>Places Covers:{data2.VIA}</li>
                </ul>

                </div>
            </div>
        </div>
    )
}
export default Transport
