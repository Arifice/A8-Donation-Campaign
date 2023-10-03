// import { PieChart, Pie,  Cell,  } from 'recharts';
import { PieChart, Pie,  Cell,  } from 'recharts';

import { useEffect, useState } from "react";
import { getStoredDonationData } from "../../utility/localstorage";


// eslint-disable-next-line react/prop-types
const Statistics = () => {
    const id=getStoredDonationData();
    const [alldata,setAllData]=useState([]);

    useEffect(()=>{
        fetch('../data.json')
        .then(res=>res.json())
        .then(data=>setAllData(data));
    },[])
    console.log('statistics',alldata,id);
    const donatedData=alldata.filter(data=>id.includes(data.id));
    console.log(donatedData);
    const m=((donatedData.length)/(alldata.length))*100;
    const l=((alldata.length-donatedData.length)/(alldata.length))*100
    console.log(l,m);
    

      
         const COLORS = ['#FF444A', '#00C49F'];      
         const data = [
            { name: 'Group A', value: l },
            { name: 'Group B', value: m },
            
          ];
          
        
            return (
                <div className='flex flex-col justify-center items-center my-10 md:my-14 lg:py-24'>
                
                    <div>
                        
                    <PieChart  width={200} height={200}>
                            <Pie data={data} dataKey='value'
                             cx="50%"
                             cy="50%"
                             labelLine={true}
                            legendType='none'
                             outerRadius={80}
                            >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}   
                            </Pie>
                         </PieChart>   
                        </div>              
                
                     
                     <div>
                       <div className='flex justify-center items-center gap-5'>
                            <p className='lg:text-4xl font font-semibold' >Total Donation <span className='text-orange-500'> {l.toFixed(2)} %</span> </p>
                            <div className='bg-[#FF444A] w-10 h-5 my-8'></div>
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            <p className='lg:text-4xl font font-semibold '>My Donation <span className=' text-orange-500'>{m.toFixed(2)} %</span></p>
                            <div className='bg-[#00C49F] w-10 h-5 my-8'></div>
                        </div>     
                
                    </div>
                </div>
            );
        }

export default Statistics;