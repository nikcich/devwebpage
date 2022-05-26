import React, { useState, useEffect } from 'react';

function Pathfind(props) {

    const [grid, setGrid] = useState(
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    );

    const [finding, setFinding] = useState(false);


    const generatePath = async (row, col) => {
        const start = [6, 6];

        let pathSteps = [];

        let current = start;
        let gridClone = [...grid];

        let visited = [

        ];

        let visMap = {
            '6x6': true
        };

        let queue = [];

        queue.push(current);

        while (queue.length > 0) {
            let v = queue.shift();

            if (v[0] == row && v[1] == col) {
                break;
            }

            //Get neighbors
            let neighbors = [
                [v[0] - 1, v[1]],
                [v[0] + 1, v[1]],
                [v[0], v[1] - 1],
                [v[0], v[1] + 1]
            ];

            for (let i = 0; i < neighbors.length; i++) {
                let currNeighbor = neighbors[i];

                if (currNeighbor[0] < 0 || currNeighbor[0] > grid.length - 1 || currNeighbor[1] < 0 || currNeighbor[1] > grid[0].length - 1) {
                    continue;
                } else if (gridClone[currNeighbor[0]][currNeighbor[1]] !== 1) {
                    if (!(`${currNeighbor[0]}x${currNeighbor[1]}` in visMap)) {
                        visited.push({ indecies: currNeighbor });
                        queue.push([...currNeighbor]);
                        visMap[`${currNeighbor[0]}x${currNeighbor[1]}`] = v;
                    } else {
                        continue
                    }

                }


            }
        }

        return [visited, visMap];
    }

    useEffect(() => {
        if (!finding) {
            setFinding(true);
            let originalGrid = [...grid];
            generatePath(0, 0).then(res => {
                let visitedorder = res[0];
                let keyTable = res[1];

                console.log(visitedorder);
                let tmpgrid = [...grid];

                let current = [0, 0];
                let path = [];

                while (current[0] !== 6 || current[1] !== 6) {
                    path.push(current);
                    current = keyTable[`${current[0]}x${current[1]}`];
                }

                for (let i = 0; i < visitedorder.length; i++) {
                    let curr = visitedorder[i];
                    let indecies = curr.indecies;
                    let tmpgrid = [...grid];

                    setTimeout(() => {
                        tmpgrid[indecies[0]][indecies[1]] = 3;
                        setGrid(tmpgrid);
                    }, 20 * i);
                }

                for (let i = 0; i < path.length; i++) {
                    let curr = path[i];
                    let tmpgrid = [...grid];

                    setTimeout(() => {
                        tmpgrid[curr[0]][curr[1]] = 4;
                        setGrid(tmpgrid);
                    }, 20 * visitedorder.length + 100 * i);
                }
            });


        }

    });

    return (
        <React.Fragment>
            <div style={{height: '90vh', width: '90%', display: 'flex', alignItems: 'center', position: 'absolute', top: '5rem', left: '100px', zIndex: 0, flexDirection: 'column' }}>
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', flexDirection: 'row', width: '100vh', height: (100 / grid.length) + 'vh' }}>
                        {row.map((item, index) => (
                            <div key={index} className={"pathCell" + (item === 3 ? ' visitedNode': (item === 4? ' pathNode': ''))} style={{
                                height: '100%', width: '100%', 
                                background: (item === 0 ? '#161616' : (item === 1 ? '#08bdba' : (item === 2 ? '#0043ce' : (item === 3 ? '#6929c4' : '#a2191f')))),
                                borderStyle: 'solid solid solid solid', borderWidth: '1px', borderColor: '#393939'
                            }}></div>
                        ))}
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Pathfind;