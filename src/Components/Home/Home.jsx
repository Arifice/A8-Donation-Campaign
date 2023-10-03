import {  useEffect, useState } from "react";
import Banar from "../Banar/Banar";
import { NavLink, useLoaderData } from "react-router-dom";

const Home = () => {
    const allData=useLoaderData();
    const [inputdata,setInputData]=useState('');
    const [display, setdisplay]=useState(allData);
    useEffect(()=>{
        if(inputdata.toLowerCase()=='all'){
            setdisplay(allData);
        }
        
        else if(inputdata.toLowerCase()=='education'){
            
            const education=allData.filter(data=>data.category=='Education');
            // setdisplay(education);
            console.log('education',education);
            setdisplay(education);
        }
        else if(inputdata.toLowerCase()=='food'){
            
            const education=allData.filter(data=>data.category=='Food');
            // setdisplay(education);
            console.log('education',education);
            setdisplay(education);
        }
        else if(inputdata.toLowerCase()=='clothing'){
            
            const education=allData.filter(data=>data.category=='Clothing');
            // setdisplay(education);
            console.log('education',education);
            setdisplay(education);
        }
        else if(inputdata.toLowerCase()=='health'){
            
            const education=allData.filter(data=>data.category=='Health');
            // setdisplay(education);
            console.log('education',education);
            setdisplay(education);
        }             
        
    },[inputdata])
    
    
    console.log('home',inputdata);
    console.log(allData);

    return (
        <div>    
            <Banar setInputData={setInputData}></Banar>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-3 md:mt-8 lg:mt-16 max-w-full  mx-auto">
                {
                    display.map(data=>(                    
                        <NavLink to={`/home/${data.id}`} key={data.id} className={{}} >
                            <div  style={{backgroundColor:data.bg_color.card_color}} className=" shadow-xl">
                           <img className="w-full h-36 lg:h-56" src={data.img} />
                            <div className="text-left p-2 lg:p-4">
                                <h1 className="w-40  text-2xl font-semibold py-1 px-3 rounded-md " style={{backgroundColor:data.bg_color.category_color,color:data.bg_color.text_color}}>{data.category}</h1>
                                <h2 style={{color:data.bg_color.text_color}} className="text-2xl md:text-2xl lg:text-3xl font-semibold ">{data.title}</h2>                                                                
                            </div>
                        </div>      
                        </NavLink>               
                    ))
                }
            </div>
        </div>
    );
};

export default Home;