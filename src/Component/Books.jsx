 
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

 
const Books = () => {

  
 
    const[datas,setDatas]=useState([]);

     useEffect(()=>{
        fetch("/Book.json")
       .then(res=>res.json())
       .then(data=>{setDatas(data)
       })
       },[])

       console.log(datas)
    
    return (
        <div className="grid gap-8 grid-cols-3 w-[90%] mx-auto text-center hover:">
            {
                datas.map((book)=><BookCard
                key={book.bookId}
                book={book} 
                ></BookCard>)
            }
        </div>
    
    );
};
// 

export default Books;