import { StyledClock } from "./styled";
import { dateFormat, useCurrentDate } from "./useLocalCurrentDate";

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            {`${dateFormat(date)}`}
        </StyledClock>
    );
};

export default Clock;