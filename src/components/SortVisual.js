import React from 'react';

function SortVisual(props) {

    const { data } = props;

    return (
        <React.Fragment>
            <div style={{ height: '90vh', width: '90%', display: 'flex', gap:'10px', alignItems: 'end' }}>
                {data.map((item, index) => (
                    <div key={index} className="sortBar" style={{width: (100/40 + '%'), height: ((item*100/40)+1 + '%'), background: '#006699'}}></div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default SortVisual;