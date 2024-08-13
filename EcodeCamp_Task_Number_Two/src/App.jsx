import React, { useState, useEffect } from "react";
import {
    Nav,
    Footer,
    Articles,
    LatestNews,
    FeaturedStories,
    Search,
} from "./components/index.js";

function App() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://newsapi.org/v2/everything?q=apple&from=2024-08-12&to=2024-08-12&sortBy=popularity&apiKey=5ad799d4273a483aba1b2741c4700899"
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
                console.log(data);
            });
    }, []);

    async function getTopArticles() {
        if (data.articles && data.articles.length > 0) {
            const news = [];
            for (let i = 0; i < data.articles.length; i++) {
                if (data.articles[i].urlToImage !== null) {
                    news.push(data.articles[i]);
                    if (news.length === 5) {
                        break;
                    }
                }
            }
            console.log(news);
            return news;
        } else {
            return [];
        }
    }

    return (
        <>
            <Nav />
            <div className="m-4 lg:grid gap-4 lg:grid-cols-12 hidden grid-cols-1">
                <div className="lg:col-span-8">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <LatestNews news={getTopArticles()} />
                            <FeaturedStories />
                        </>
                    )}
                </div>

                <Articles />
                <Search />
            </div>
            <div className="m-4 grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:hidden">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <LatestNews news={getTopArticles()} />
                        <FeaturedStories />
                        <Articles />
                        <Search />
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}

export default App;
