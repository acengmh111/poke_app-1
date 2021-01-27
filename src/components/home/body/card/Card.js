import React from 'react';
import styled from '@emotion/styled';



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--main-card);
    width: 100%;
    border-radius: 30px;
    padding: 20px;
    margin-bottom: 20px;
    align-items: center;
    box-shadow: 0px 9px 20px rgba(0,0,0,0.09);
    transition: .7s;
    &:hover{
        box-shadow: 0px 3px 12px rgba(0,0,0,0.09);
    };
`
const Name = styled.h4`
    font-family: s_bold;
    text-transform: capitalize;
    color: #fff;
    font-size: 19px;
    margin-bottom: 10px;
`
const Image = styled.img`
    height: 140px;
`
const Owned = styled.p`
    color: var(--main-color);
    font-size: 13px;
    font-family: s_bold;
    display:flex;
    flex-direction: column;
    text-align: center;
`



function Card({name, image, owned}) {
    return (
        <Wrapper>
            <Image src={image} />
            <Name>
                {name}
            </Name>
            <Owned>
                <span style={{color: 'rgb(146, 150, 171)', marginBottom: '10px'}}>Total Owned</span>
                {owned}
            </Owned>
        </Wrapper>
    );
}

export default Card;