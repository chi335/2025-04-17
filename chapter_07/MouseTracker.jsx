import React, { useState, useEffect } from "react";
function MouseTracker() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        constupdatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updatePosition);
        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);
    return (
        <div>
            <h1>마우스위치</h1>
            <p>X: {position.x}, Y: {position.y}</p>
        </div>
    );
}
export default MouseTracker;