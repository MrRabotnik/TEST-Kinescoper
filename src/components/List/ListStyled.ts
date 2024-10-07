import styled from "styled-components";

export const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
`;

export const ListItem = styled.li`
    margin: 10px 0;
    padding: 15px;
    background-color: #f9f9f9;
    border: 2px solid #ddd;
    border-radius: 8px;
    display: flex;
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
        gap: 10px;
    }
`;

export const Button = styled.button`
    padding: 8px 12px;
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
    padding-left: 20px;
    margin-top: 10px;
    border-left: 2px solid #ddd;
`;
