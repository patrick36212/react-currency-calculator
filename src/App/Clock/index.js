import { useState, useEffect } from "react/cjs/react.development";
import "./style.css";

const Clock = () => {

    const [date, setDate] = useState(new Date());
    const dateFormat = (date) =>
    date.toLocaleDateString("en-GB", {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p className="clock">
            {`${dateFormat(date)}`}
        </p>
    );
};

export default Clock;