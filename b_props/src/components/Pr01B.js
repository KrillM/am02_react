import PropTypes from 'prop-types'

export default function Pr01B(props){
    return(<>
        <h1>{props.position} {props.name}</h1>
        <p>name: {props.name}, age: {props.age}, gender: {props.gender}</p>
    </>)
}

Pr01B.defaultProps = {
    position: "크루",
    name: "크릴"
}

Pr01B.propTypes = {
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired
}