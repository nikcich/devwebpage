import React from "react";

function ProjectDisplay(props) {

    const { title, description, image, side, styles } = props;

    return (
        <React.Fragment>
            {side === 'left' ? (
                <React.Fragment>
                    <div style={{width: '100%', marginLeft: '12%'}}>
                        <h1 style={{ color: 'white', marginTop: '10rem' }}>{title}</h1>
                    </div>
                    
                    <hr style={{ color: 'white', width: '88%' }} />
                    <div style={{
                        display: 'flex', marginTop: '1rem', justifyContent: 'space-between',
                        alignItems: 'space-between', width: '90%', maxWidth: '1500px', height: '100%'
                    }}>

                        <div style={{ height: '30vw', width: '30vw', maxHeight: '500px', maxWidth: '500px', overflow: 'hidden', display: 'flex', alignItems: 'center'
                                        , justifyContent: 'center', borderRadius: '1rem', boxShadow: '5px 5px 5px #393939' }}>
                            <img src={image}
                                style={{ height: '100%' }}
                            />

                        </div>

                        <div style={{ width: '50vw', maxWidth: '900px' }}>
                            <p style={{ color: 'white', fontSize: '1.75rem' }}>
                                {description}
                            </p>
                        </div>
                    </div>
                </React.Fragment>
            ) : (

                <React.Fragment>
                    <div style={{width: '100%', marginLeft: '12%'}}>
                        <h1 style={{ color: 'white', marginTop: '10rem' }}>{title}</h1>
                    </div>
                    <hr style={{ color: 'white', width: '88%' }} />
                    <div style={{
                        display: 'flex', marginTop: '1rem', justifyContent: 'space-between',
                        alignItems: 'space-between', width: '90%', maxWidth: '1500px', height: '100%'
                    }}>



                        <div style={{ width: '50vw', maxWidth: '900px' }}>
                            <p style={{ color: 'white', fontSize: '1.75rem' }}>
                                {description}
                            </p>
                        </div>

                        <div style={{ height: '30vw', width: '30vw', maxHeight: '500px', maxWidth: '500px', overflow: 'hidden', display: 'flex', alignItems: 'center'
                                        , justifyContent: 'center', borderRadius: '1rem', boxShadow: '-5px 5px 5px #393939' }}>
                            <img src={image}
                                style={{ height: '100%' }}
                            />
                        </div>
                    </div>
                </React.Fragment>

            )}
        </React.Fragment>
    );
}

export default ProjectDisplay;