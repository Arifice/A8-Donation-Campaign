/* eslint-disable react/prop-types */

const Banar = ({setInputData}) => {      

    const handleSearch=e=>{
        e.preventDefault();
        const inputText=('search',e.target.input.value);  
         setInputData(inputText);  
    }
    
    return (       
                <div className="hero md:h-[400px] lg:h-[600px] " style={{backgroundImage: 'url(https://i.postimg.cc/D09GmqXz/banar.png)'}}>
                    <div className="hero-overlay bg-[#FFFFFFF2] bg-opacity-10"></div>
                    <div className=" text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-2 lg:mb-5 text-black text-xl md:text-3xl lg:text-5xl font-[500] md:font-semibold lg:font-bold">I Grow By Helping People In Need</h1>
                            <form onSubmit={handleSearch}>
                                <input type="text" name="input" className="md:text-2xl text-xl lg:text-4xl bg-slate-300 md:font-semibold lg:font-semibold text-black p-2 lg:p-4 md:p-4" />
                                <input type="submit" name="submit" value='Search' className="md:text-2xl text-xl lg:text-4xl md:font-semibold lg:font-semibold bg-red-600 text-black p-2 lg:p-4 md:p-4" />
                            </form>
                        </div>
                    </div>            
                </div>        
        
    );
};

export default Banar;