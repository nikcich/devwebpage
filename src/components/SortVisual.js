import React, { useEffect, useState } from 'react';

function SortVisual(props) {

    const [data, setData] = useState(Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)));
    const [sorting, setSorting] = useState(false);

    const sortData = async () => {
        let dtemp = [...data];
        let swaps = [];
        for (let i = 0; i < dtemp.length; i++) {
            for (let j = 0; j < dtemp.length; j++) {
                if (dtemp[i] < dtemp[j]) {
                    let temp = dtemp[i];
                    dtemp[i] = dtemp[j];
                    dtemp[j] = temp;
                    swaps.push([i, j, [...dtemp]]);
                }
            }
        }

        let original = [...data];

        for (let i = 0; i < swaps.length; i++) {
            let curr = swaps[i];
            let timeout = i * 25;

            setTimeout(() => {
                let dtemp = curr[2];
                setData(dtemp);
                if (i == swaps.length - 1) {
                    setTimeout(() => {
                        setData(Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)));
                        setTimeout(() => {
                            setSorting(false);
                        }, 500);
                    }, 500);
                }

            }, timeout);
        }
    }

    useEffect(() => {
        if (!sorting) {
            setSorting(true);
            sortData();
        }
    });

    return (
        <React.Fragment>
            <div style={{ height: '90vh', width: '90%', display: 'flex', gap: '10px', alignItems: 'center', position: 'absolute', top: '110vh', left: '100px', zIndex: 0 }}>
                {data.map((item, index) => (
                    <div key={index} className="sortBar" style={{ width: (100 / 40 + '%'), height: ((item * 100 / 40) + 1 + '%') }}></div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default SortVisual;