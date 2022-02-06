import React, { useEffect, useState } from 'react';
import './Search.css';
import { API_URL } from "../../config/Constants";
import { useParams } from 'react-router-dom';

export default function Search(props) {
    
    const [articlesList, setArticlesList] = useState([]);
    const { query } = useParams();
    console.log(query)
    
    useEffect(() => {
        try {
            const getArticlesList = async () => {
                const response = await fetch(API_URL + '/api/articles/search', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: undefined,
                    },
                    body: JSON.stringify({query: query})
                });
                const json = await response.json();
                setArticlesList(json.data);
                console.log(articlesList)
            }
            getArticlesList();

        } catch (e) {
            console.log(e)
        }
    }, []);

    return (
        <div className="content">
            <div>
                <div className="align">
                    <div className="zone-heading">
                        Kết quả tìm kiếm cho từ khóa "{query}"
                    </div>
                    <div className="timeline">
                        {articlesList.map((item, idx) => {
                            if (idx < 50) {
                                return (
                                    <article key={idx} className="story">
                                        <a className="story-thumb" href={item.link}>
                                            <img src={item.thumbnail} alt=""/>
                                        </a>
                                        <h2>
                                            <a className="story-title" href={articlesList[0].link}>
                                                {item.title}
                                            </a>
                                        </h2>
                                        <p className="story-sapo">
                                            {item.sapo}
                                        </p>
                                        <div className="meta">
                                            <span className="story-logo">
                                                {item.source}
                                            </span>
                                            <span className="story-time">
                                                {item.release_time}
                                            </span>
                                        </div>
                                    </article>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}