import PropTypes from 'prop-types';

export default function DataType(props) {
    return <div>{props.data}의 데이터 타입은 문자열 입니다.</div>;
}

DataType.propTypes = {
    name: PropTypes.string,
};