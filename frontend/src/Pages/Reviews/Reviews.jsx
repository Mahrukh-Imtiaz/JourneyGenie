import React,  { useContext, useState }  from 'react'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import useFetch from "../../useFetch"
import { AuthContext } from '../../authContext'; 
import './Review.css'
import Card from '../../Components/Card/Card'; 


const Reviews = () => {

    const [query, setQuery] = useState(""); 
    const { user } = useContext(AuthContext) 
    const { data, loading } = useFetch( 
        `http://localhost:8080/api/entries/author/${user._id}`) 
  
    const keys = ["title", "location", "date"]; 
  
    const search = (data) => { 
        console.log(data);
        return data.filter((item) => 
            keys.some((key) => item[key] && 
                item[key].toLowerCase().includes(query.toLowerCase())) 
        ); 
    }; 
  return (
    <div> 
            <div className="search"> 
                <div className="searchBar"> 
                    <h2>Explore</h2> 
                    <div className="searchInput"> 
                        <input 
                            type="text"
                            placeholder="Search places or dates"
                            onChange={(e) => setQuery(e.target.value)} 
                        /> 
                        <FontAwesomeIcon 
                            className="icon"
                            icon={faMagnifyingGlass} /> 
                    </div> 
                </div> 
            </div> 
  
            <div className="searchedPosts"> 
                {loading ? ( 
                    <> 
                        <div className="p"
                            style={{ 
                                color: "white"
                            }}> 
                            Loading... 
                        </div> 
                    </> 
                ) : ( 
                    <> 
                        {search(data)?.map((item, i) => ( 
                            <Card 
                                key={i} 
                                _id={item._id} 
                                photos={item.photos} 
                                title={item.title} 
                                date={item.date} 
                                location={item.location} 
                                text={item.text} 
                            /> 
                        ))} 
                    </> 
                )} 
            </div> 
        </div> 
  )
}

export default Reviews;
