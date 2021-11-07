const style = {
    width: "100px",
    padding: "6px",
};

export const EditButton = props => {
    const { isAdmin } = props;

    return (
        <button style={style} disabled={!isAdmin}>
            Edit
        </button>
    );
};