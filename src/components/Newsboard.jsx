import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        console.log(url);
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
    },[category])

    return ( 
        <div>
            <h2 className="text-center mt-4">Latest <span className="badge bg-danger">News</span></h2>
            <div className="m-4">
            {articles.map((article,index)=>{
                return <NewsItem key = {index} 
                    title = {article.title} 
                    source = {article.source.name}
                    url = {article.url}
                    />
            })}</div>
        </div>
     );
}
 
export default Newsboard;