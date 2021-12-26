import React, { useState, useEffect } from "react";
import api from "./api";
import Users from "./components/users";

function App() {
    const [people, setPeople] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setPeople(data));
    }, []);
    const handleDelete = (elemId) => {
        setPeople((prevState) =>
            prevState.filter((elem) => elem._id !== elemId)
        );
    };

    const handleToggleBookMark = (id) => {
        setPeople((people) =>
            people.map((user) =>
                user._id === id ? { ...user, bookmark: !user.bookmark } : user
            )
        );
    };

    return (
        <div>
            {people && (
                <Users
                    people={people}
                    onDelete={handleDelete}
                    onToggle={handleToggleBookMark}
                />
            )}
        </div>
    );
}

export default App;
