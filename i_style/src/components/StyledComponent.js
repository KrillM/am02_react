import styled from 'styled-components';

export default function StyledComponents() {
    return (
        <Container>
            <DivElem bgcolor='red' />
            <DivElem bgcolor='orange' />
            <DivElem bgcolor='yellow' />
            <DivElem bgcolor='green' />
            <DivElem bgcolor='blue' />
            <DivElem bgcolor='navy' />
            <DivElem bgcolor='purple' />
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    width: 700px;
`;

const DivElem = styled.div`
    width: 100px;
    height: 100px;
    background: ${(props) => props.bgcolor};
`;