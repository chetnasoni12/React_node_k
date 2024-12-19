import React from "react";

const ListComponent = ({ categories }) => {


    return (
        <>
            {categories.map((category, index) => (
                <div key={index} className="relative p-6 left-28">
                    <div className="flex h-24 bg-white w-80">
                        <h1 className="relative w-16 p-3 text-xl text-center text-white bg-black rounded-full h-14 top-4 left-3">
                            {category.id}
                        </h1>
                        <div className={`${category.bgcolor} w-full relative left-10`}>
                            <p className="relative text-xl font-bold text-white top-4 left-16">
                                {category.name}
                            </p>
                            <div className="relative flex gap-5 text-white top-4 left-5">
                                {category.items.map((x) => (
                                    <div>{x}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ListComponent;