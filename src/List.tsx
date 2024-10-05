// List.tsx
import React from "react";
import styled from "styled-components";

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    margin-left: 10px;
`;

interface Item {
    id: number;
    name: string;
    children: Item[];
}

interface ListProps {
    items: Item[];
    addChild: (parentId: number) => void;
    deleteItem: (id: number) => void;
}

const List: React.FC<ListProps> = ({ items, addChild, deleteItem }) => {
    return (
        <ListContainer>
            {items.map((item) => (
                <ListItem key={item.id}>
                    <span>{item.name}</span>
                    <div>
                        <Button onClick={() => addChild(item.id)}>Add Child</Button>
                        <Button onClick={() => deleteItem(item.id)}>Delete</Button>
                    </div>
                    {item.children.length > 0 && (
                        <List
                            items={item.children}
                            addChild={addChild}
                            deleteItem={deleteItem}
                        />
                    )}
                </ListItem>
            ))}
        </ListContainer>
    );
};

export default List;
