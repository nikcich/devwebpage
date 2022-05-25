import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import SideBar from './SideBar';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Container from './Container';
import { useEffect, useState } from 'react';
import React from 'react';
import SortVisual from './SortVisual';


function HomePage() {

    const { text } = useTypewriter({
        words: ['Hello, welcome to my website!', 'Open the left navigation menu to view projects.'],
        loop: true,
        onLoopDone: () => console.log(`loop completed after loop.`),
    });

    const [data, setData] = useState(Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)));
    const [sorting, setSorting] = useState(false);
    

    function merge(left, right) {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) {
                arr.push(left.shift())
            } else {
                arr.push(right.shift())
            }
        }

        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [...arr, ...left, ...right]
    }

    function mergeSort(array) {
        const half = array.length / 2

        // Base case or terminating case
        if (array.length < 2) {
            return array
        }

        const left = array.splice(0, half)
        return merge(mergeSort(left), mergeSort(array))
    }

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


        for (let i = 0; i < swaps.length; i++) {
            let curr = swaps[i];
            let timeout = i * 25;

            setTimeout(() => {
                let dtemp = curr[2];
                setData(dtemp);
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
        <div>
            <SideBar />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div style={{ marginLeft: '100px', color: 'white' }}>
                    <span style={{ fontSize: '2.5rem' }}>{text}</span>
                    <Cursor cursorStyle="_" />
                </div>


                <SortVisual data={data} />
            </div>

        </div>
    )
}

export default HomePage;