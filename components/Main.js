import React from "react";
import CardsHome from "./CardsHome";

export default function Main() {
    return (
        <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Dashboard
                </h2>
                <CardsHome/>
            </div>
        </main>
    );
}