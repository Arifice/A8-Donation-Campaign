/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationData} from "../../utility/localstorage";



const Donation = () => {
    const [totalDonaton,setDonation]=useState([]);
    const [dataLength,setDataLength]=useState(4);
    const alldata=useLoaderData();      
    useEffect(()=> {
        const storedIds=getStoredDonationData();
        if(alldata.length>0){
            const donatedData=alldata.filter(data=>storedIds.includes(data.id));       
            setDonation(donatedData);
            console.log('donation',alldata,donatedData);
            
        }
    }, [])    
    
    console.log('totalDonation',alldata, totalDonaton);
    return (
         
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4 gap-2 lg:gap-8">
                {
                    totalDonaton.slice(0,dataLength).map(data=>(
                        <div key={data.id} className="grid grid-cols-8">
                            <div className="col-span-3">
                                <img className="w- h-full rounded-lg" src={data.img} alt="" />
                            </div>
                            <div className="col-span-5 text-left p-2 md:p-4 lg:p-6" style={{backgroundColor:data.bg_color.card_color}}> 
                                <h1 className="lg:font-semibold text-[18px] lg:text-2xl p-1 md:p-3 lg:p-4" style={{backgroundColor:data.bg_color.category_color,color:data.bg_color.text_color}} > {data.category}</h1>
                                <h1 className="font-[500] " >{data.title}</h1>
                                <p className="font-semibold text-xl" style={{color:data.bg_color.text_color}}>$ {data.price}</p>
                            <button style={{backgroundColor:data.bg_color.text_color}} className="lg:text-xl text-white rounded-lg font-semibold px-2 lg:px-5 py-1 lg:py-2">View Details</button>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <div className={dataLength===alldata.length ? 'hidden':'flex justify-center my-10' }>
            <button onClick={()=>setDataLength(alldata.length)} className="text-3xl font-bold px-10 py-2 rounded-lg text-white bg-[#FF444A]">See All</button>
            </div>    
        </div>
    );    

};

export default Donation;