import React, {Fragment} from 'react';
import './Person.css'
import PropTypes from 'prop-types';

const Person = (props) => {
    return (
        <Fragment>
            <div className="Person">
                <h1 onClick={props.click}>My name is {props.name} and age is {props.age}</h1>
                <p>{props.children}</p>
            </div>
        </Fragment>
    );
}

Person.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Person;