import React from "react";
import "./ListItems.css";
import Flipmove from "react-flip-move";

function ListItems1 (props){
    const items = props.items
    const listItems = items.map(item =>
        {
            return <div className="List" key={item.key}>
                <p>{item.text}
                <span onClick={ ()=> props.deleteItem(item.key)}>X</span></p>
            </div>
        }) 
    return(
        <div>
            <Flipmove duration={300} easing="ease-in-out">
                {listItems}
                </Flipmove>
                </div>
    )
}
export default ListItems1