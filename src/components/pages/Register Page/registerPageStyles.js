import styled from "styled-components";
import {Card} from "react-bootstrap";

export const RegisterCard = styled(Card)`
    width: 400px;
    justify-content: center;
    margin: 100px auto;

    @media screen and (max-width: 960px){
        width: 300px;
    }
`