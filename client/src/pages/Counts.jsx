import React, { useState, useEffect } from 'react';

const Counters = ({ initialValue, targetValue, autoPlayInterval, symbol }) => {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count < targetValue) {
                setCount((prevCount) => prevCount + 1);
            } else {
                clearInterval(intervalId);
            }
        }, autoPlayInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [autoPlayInterval, count, targetValue]);

    return <span className="purecounter">{count}{symbol}</span>;
};

const Counts = () => {
return (
        <>
            <section id="counts" className="counts section-bg" style={{ backgroundColor: "#ffffff", padding: "50px 0px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 text-center">
                        <span style={{color: "#ffa700", fontSize: "40px", fontWeight: "700"}}>
                            <Counters initialValue={1} targetValue={3} autoPlayInterval={220} symbol="+" /></span>
                          <p style={{ color: "#000000", fontSize: "22px", fontWeight: "700" }}>Years of Experience</p>
                        </div >
                        <div className="col-lg-3 col-6 text-center">
                        <span style={{color: "#ffa700", fontSize: "40px", fontWeight: "700"}}>
                            <Counters initialValue={1} targetValue={15} autoPlayInterval={80} /></span>
                          <p style={{ color: "#000000", fontSize: "22px", fontWeight: "700" }}>Project delivered</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                          <span style={{color: "#ffa700", fontSize: "40px", fontWeight: "700"}}>
                            <Counters initialValue={1} targetValue={350} autoPlayInterval={10} /></span>        
                          <p style={{ color: "#000000", fontSize: "22px", fontWeight: "700" }}>Happy client</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                        <span style={{color: "#ffa700", fontSize: "40px", fontWeight: "700"}}>
                            <Counters initialValue={1} targetValue={250} autoPlayInterval={10} /></span>
                          <p style={{ color: "#000000", fontSize: "22px", fontWeight: "700" }}>Coffee</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Counts;