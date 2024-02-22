const NewsItem = ({title,source,url}) => {
    return ( 
        <div className="card m-4 bg-light d-inline-block" style={{width:"18rem",height:"15rem"}}>
            <div className="card-body">
                <h5 className="card-title">{source}</h5>
                <p className="card-text">{title.slice(0,150)}</p>
                <a href={url} className="card-link">Read more...</a>
            </div>
        </div>
     );
}
 
export default NewsItem;