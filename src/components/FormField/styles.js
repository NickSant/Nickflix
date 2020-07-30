import styled from 'styled-components';

export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-right: 20px;
    margin-bottom: 20px;
`;

export const FieldInput = styled.input`
    height: 50px;
    min-width: 60px;
    font-size: 20px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid var(--white);
    color: var(--white);
    background-color: transparent;

`; 