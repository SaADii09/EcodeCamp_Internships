import React from "react";

function LatestNews({ news }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="rounded-lg lg:min-h-[700px] min-h-[500px] bg-teal-500">
            <Slider {...settings}>
                {news &&
                    news.length > 0 &&
                    news.map((article, index) => (
                        <div key={index} className="px-4 py-6">
                            <h2 className="text-xl font-bold">
                                {article.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {article.author}
                            </p>
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="w-full h-auto mt-2"
                            />
                            <p className="mt-2">{article.description}</p>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 mt-2 inline-block">
                                Read more
                            </a>
                        </div>
                    ))}
            </Slider>
        </div>
    );
}

export default LatestNews;
