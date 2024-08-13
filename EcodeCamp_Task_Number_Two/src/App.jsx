import React from "react";
import {
    Nav,
    Footer,
    Articles,
    LatestNews,
    FeaturedStories,
    Search,
} from "./components/index.js";

function App() {
    return (
        <>
            <Nav />
            <div className="m-4 lg:grid gap-4 lg:grid-cols-12 hidden grid-cols-1">
                <LatestNews />
                <Articles />
                <FeaturedStories />
                <Search />
            </div>
            <div className="m-4 grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:hidden">
                <LatestNews />
                <FeaturedStories /> 
                <Articles />
                <Search />
            </div>
            <Footer />
        </>
    );
}

export default App;
