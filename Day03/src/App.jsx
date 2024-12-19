import React from "react";
import categories from "./utility/data.js";
import ListComponent from "./components/ListComponent.jsx";

const App = () => {
    return (
        <div className="flex flex-wrap h-screen gap-6 p-20 bg-gradient-to-t from-slate-800 to-slate-900">
            <ListComponent categories={categories} />
        </div>
    );
};

export default App;