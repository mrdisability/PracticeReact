import './MyCard.css'

//Class name card can clash with bootstrapcss card
function MyCard(props) {
    //We get all classes in a string
    const classes = "mycard " + props.className;

    //Use props.children to allow this component to the root element like div
    return <div className={classes}>{props.children}</div>;
}

export default MyCard;