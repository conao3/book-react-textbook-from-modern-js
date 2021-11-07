import { EditButton } from "./EditButton"

const style = {
    width: "300px",
    height: "200px",
    margin: "20px",
    backgroundColor: "lightblue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}

export const Card = props => {
    const { isAdmin, name } = props

    return (
        <div style={style}>
            <h1>{name}</h1>
            <EditButton isAdmin={isAdmin} />
        </div>
    );
};
