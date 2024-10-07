import React, { useState } from "react";
import List from "./components/List/List";
import { Container } from "./AppStyled";

const App: React.FC = () => {
    const [data, setData] = useState<any[]>([
        { id: 1, name: "Item 1", children: [] },
        { id: 2, name: "Item 2", children: [] },
    ]);

    const addChild = (parentId: number) => {
        const newChild = { id: Date.now(), name: `Child of ${parentId}`, children: [] };
        const newData = [...data];
        const addToParent = (items: any[]): any[] => {
            return items.map((item) => {
                if (item.id === parentId) {
                    return { ...item, children: [...item.children, newChild] };
                }
                if (item.children) {
                    return { ...item, children: addToParent(item.children) };
                }
                return item;
            });
        };
        setData(addToParent(newData));
    };

    const deleteItem = (id: number) => {
        if (data.some((item) => item.id === id)) {
            alert("You cannot delete a main parent item.");
            return;
        }

        const newData = data.filter((item) => item.id !== id);
        const removeFromParent = (items: any[]): any[] => {
            return items.map((item) => {
                if (item.children) {
                    return {
                        ...item,
                        children: removeFromParent(item.children.filter((child: any) => child.id !== id)),
                    };
                }
                return item;
            });
        };
        setData(removeFromParent(newData));
    };

    return (
        <Container>
            <h1>Nested List</h1>
            <List
                items={data}
                addChild={addChild}
                deleteItem={deleteItem}
            />
        </Container>
    );
};

export default App;
