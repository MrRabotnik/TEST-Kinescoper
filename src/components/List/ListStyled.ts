import styled from "styled-components";

export const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    width: 90%;
    margin: 0 auto;
`;

export const ListItem = styled.li`
    margin: 10px 0;
    padding: 3px;
    background-color: #f9f9f9;
    border: 2px solid #bbb;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
        background-color: #f1f1f1;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    & > div {
        display: flex;
        gap: 5px;
    }
`;

export const Button = styled.button`
    padding: 4px 6px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        background-color: #003d7a;
    }
`;

export const ChildList = styled.ul`
    width: 90%;
    padding-left: 20px;
    margin-top: 10px;
`;
