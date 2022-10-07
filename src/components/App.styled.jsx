import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px auto;
    padding: 30px 40px;
    width: 480px;
    background-color: ${p => p.theme.colors.pink};
    border-radius: 6px;
`;

export const Head = styled.h1`
    margin-bottom: 20px;
    font-size: 46px;
    line-height: 1.8;
    letter-spacing: 0.03em;
    text-align: center;
    color: ${p=>p.theme.colors.darkBlue};
`;

export const SubHead = styled.h2`
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 1.8;
    letter-spacing: 0.03em;
    text-align: center;
    color: ${p=>p.theme.colors.blue};
`;