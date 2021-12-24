import React, { useState } from "react";
import api from "./api";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

function App() {
    const [people, setPeople] = useState(api.users.fetchAll());

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
            <SearchStatus length={people.length} />
            <Users
                people={people}
                onDelete={handleDelete}
                onToggle={handleToggleBookMark}
            />
        </div>
    );
}

export default App;
