import React from 'react';
import "./Pagination.css";
import PropTypes from 'prop-types';


function PaginationSerial(props) {
    let getClass = (status) => {
        let classNames = "noselect";
        if (status)
            classNames += " disable";
        return classNames;
    }

    let elements = [];
    let min = parseInt(props.min);
    let max = parseInt(props.max);
    if (min < max) {
        for (let i = min; i <= max; i++) {
            let e = (<a style={{ padding: "8px 16px" }} onClick={ () => {props.onPageChange(i)} }>{i}</a>);
            elements.push(e);
        }
    }
    console.log(elements);
    return (
        <div className="pagination">
            <a onClick={props.decrement} className={getClass(props.disableDecrement)}>❮</a>
            {elements}
            <a onClick={props.increment} className={getClass(props.disableIncrement)}>❯</a>
        </div>
    )
}

PaginationSerial.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    disableIncrement: PropTypes.bool.isRequired,
    disableDecrement: PropTypes.bool.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}


export default PaginationSerial;