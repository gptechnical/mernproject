import { useState, useEffect } from 'react';
import bgImg from '../assets/images/bg-count.jpg'; // Replace with your actual image path

const Counters = ({ initialValue, targetValue, autoPlayInterval, symbol }) => {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < targetValue) return prevCount + 1;
                clearInterval(intervalId);
                return prevCount;
            });
        }, autoPlayInterval);

        return () => clearInterval(intervalId);
    }, [autoPlayInterval, targetValue]);

    return <span className="purecounter">{count}{symbol}</span>;
};

const Counts = () => {
    return (
        <section
            id="counts"
            className="counts position-relative mt-4"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '50px 0px',
                position: 'relative',
                zIndex: 1
            }}
        >
            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // black overlay with 50% opacity
                zIndex: 2
            }} />

            {/* Content */}
            <div className="container position-relative" style={{ zIndex: 3 }}>
                <div className="row">
                    <div className="col-lg-3 col-6 text-center">
                        <span style={{ color: "#ff8429", fontSize: "40px", fontWeight: "700" }}>
                            <Counters initialValue={1} targetValue={3} autoPlayInterval={220} symbol="+" />
                        </span>
                        <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: "700" }}>Years of Experience</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span style={{ color: "#ff8429", fontSize: "40px", fontWeight: "700" }}>
                            <Counters initialValue={1} targetValue={15} autoPlayInterval={80} />
                        </span>
                        <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: "700" }}>Project delivered</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span style={{ color: "#ff8429", fontSize: "40px", fontWeight: "700" }}>
                            <Counters initialValue={1} targetValue={350} autoPlayInterval={10} />
                        </span>
                        <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: "700" }}>Happy client</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span style={{ color: "#ff8429", fontSize: "40px", fontWeight: "700" }}>
                            <Counters initialValue={1} targetValue={250} autoPlayInterval={10} />
                        </span>
                        <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: "700" }}>Coffee</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counts;
