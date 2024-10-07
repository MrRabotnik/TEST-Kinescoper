import React from "react";
import { ListContainer, ListItem, Button, ChildList } from "./ListStyled";

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
                        <ChildList>
                            <List
                                items={item.children}
                                addChild={addChild}
                                deleteItem={deleteItem}
                            />
                        </ChildList>
                    )}
                </ListItem>
            ))}
        </ListContainer>
    );
};

export default List;
