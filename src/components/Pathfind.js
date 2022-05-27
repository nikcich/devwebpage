import React, { useState, useEffect } from 'react';

function Pathfind(props) {

    const [grid, setGrid] = useState(
        []
    );

    const [startPoint, setStartPoint] = useState([]);
    const [endPoint, setEndPoint] = useState([]);
    const [completed, setCompleted] = useState(false);

    const generateGrid = (size) => {
        let gengrid = [];

        let n1 = Math.floor(Math.random() * size);
        let n2 = Math.floor(Math.random() * size);

        let e1 = Math.floor(Math.random() * size);
        let e2 = Math.floor(Math.random() * size);

        while (e1 == n1 && e2 == n2) {
            e1 = Math.floor(Math.random() * size);
            e2 = Math.floor(Math.random() * size);
        }

        for (let i = 0; i < size; i++) {
            let rw = [];
            for (let j = 0; j < size; j++) {
                if ((i == n1 && j == n2) || (i == e1 && j == e2)) {
                    rw.push(2);
                } else {
                    let rn = Math.floor(Math.random() * 100);

                    if (rn <= 5) {
                        rw.push(1);
                    } else {
                        rw.push(0);
                    }
                }
            }
            gengrid.push(rw);
        }

        

        setGrid(gengrid);
        setStartPoint([n1, n2]);
        setEndPoint([e1, e2]);
    }

    const [finding, setFinding] = useState(false);


    const generatePath = async (row, col) => {
        const start = [...startPoint];

        let pathSteps = [];

        let current = start;
        let gridClone = [...grid];

        let visited = [

        ];

        let stK = `${startPoint[0]}x${startPoint[1]}`
        let visMap = {

        };

        visMap[stK] = true;

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
        if (!finding && grid.length > 0 && endPoint.length > 0 && startPoint.length > 0) {
            setFinding(true);
            let originalGrid = [...grid];

            generatePath(endPoint[0], endPoint[1]).then(res => {
                let visitedorder = res[0];
                let keyTable = res[1];

                let tmpgrid = [...grid];

                let current = endPoint;
                let path = [];

                while (current[0] !== startPoint[0] || current[1] !== startPoint[1]) {
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

                        if (i == path.length - 1) {
                            setCompleted(true);
                        }
                    }, 20 * visitedorder.length + 100 * i);
                }
            });


        } else if (grid.length === 0) {
            generateGrid(20);
        } else if (completed) {
            setCompleted(false);
            setTimeout(() => {
                setEndPoint([]);
                setStartPoint([]);
                setFinding(false);
                generateGrid(20);
            }, 2000);
        }

    });

    return (
        <React.Fragment>
            <div style={{ overflow: 'hidden', height: '75%', width: '90%', display: 'flex', alignItems: 'center', position: 'absolute', top: '20%', left: '100px', zIndex: 0, flexDirection: 'column' }}>
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', flexDirection: 'row', width: '75vh', height: (100 / grid.length) + 'vh' }}>
                        {row.map((item, index) => (
                            <div key={index} className={"pathCell" + (item === 3 ? ' visitedNode' : (item === 4 ? ' pathNode' : ''))} style={{
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