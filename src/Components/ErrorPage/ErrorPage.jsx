import Swal from "sweetalert2";
const ErrorPage = () => {
    const sweetAtert=()=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Not Found ! ',            
        })
    }
    return (
        <div>
            {
              sweetAtert()  
            }
        </div>
    );
};

export default ErrorPage;