import styled from "styled-components";
import {Card} from "react-bootstrap";

export const LoginCard = styled(Card)`
    width: 400px;
    justify-content: center;
    margin: 100px auto;

    @media screen and (max-width: 960px){
        width: 300px;
    }
`

export const H3 = styled.h3`
    align-items: center;
`

export const Title = styled(Card.Title)`
    justify-content: center;
`