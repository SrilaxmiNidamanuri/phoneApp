import styled from "styled-components";

/* Styled components allows css code in JS file */
/* Styled components can also receive PROPS */
export const ButtonContainer=styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props=>props.cartProperty ? "var(--mainYellow)" : "var(--lightBlue)"};
color:${props=>props.cartProperty ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
background:${props=>props.cartProperty ? "var(--mainYellow)" :"var(--lightBlue)"};
color: var(--mainBlue);
}
&:focus{
outline:none;
};
`