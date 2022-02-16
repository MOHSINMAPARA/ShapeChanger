import React from "react";
import styled from "styled-components";

const StyledComp = () => {

const Container = styled.div`
background:white;
border : 2px solid orange;
padding: 1rem;
margin :1rem;


& h1 {
    color: green;
    text-align: center;
}
`


    return(
        <Container>
            <h1>
                      hi from styled comp
            </h1>
        </Container>
    );
}
export default StyledComp;