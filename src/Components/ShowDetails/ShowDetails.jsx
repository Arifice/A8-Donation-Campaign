import { useLoaderData, useParams } from "react-router-dom";
import { saveDonationData } from "../../utility/localstorage";

const ShowDetails = () => {
    const allData=useLoaderData();
    const {id}=useParams();
    console.log('show details',allData,id);
    const data=allData.filter(data=>data.id==id);
    console.log(data);
    const handleDonate=()=>{
        saveDonationData(data[0].id);       
    }
    
    return (   
        <div className="container max-w-6xl my-10 lg:my-24 md:my-16 mx-auto">            
            <div className="relative">
                <img className="w-full h-auto relative" src={data[0].img} alt="" />
                <button onClick={handleDonate} style={{backgroundColor:data[0].bg_color.text_color}} className="text-xl md:text-3xl lg:text-5xl absolute bottom-[30px] left-[30px] lg:bottom-[100px] lg:left-[100px] lg:font-semibold p-1 md:p-4 lg:p-6 text-white rounded-md">Donate $ {data[0].price}</button>
            </div>
            <h1 className="text-2xl lg:text-6xl mt-3 lg:mt-6 font-bold text-left ">{data[0].title}</h1>
            <p className=" lg:text-xl mt-4 lg:mt-6 text-justify">{data[0].description}</p>
        </div>  

    );
};

export default ShowDetails;