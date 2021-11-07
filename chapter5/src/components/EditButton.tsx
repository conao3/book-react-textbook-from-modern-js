import { useContext } from "react";

import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
};

export const EditButton = props => {
    // const { isAdmin } = props;

    const { isAdmin } = useContext(AdminFlagContext);

    return (
        <button style={style} disabled={!isAdmin}>
            Edit
        </button>
    );
};
