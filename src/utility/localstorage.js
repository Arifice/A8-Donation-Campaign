import Swal from "sweetalert2";
const getStoredDonationData=()=>{
    const storedDonationData=localStorage.getItem('donations');
    if(storedDonationData){
        return JSON.parse(storedDonationData);
    }
    return [];
}
const saveDonationData=id=>{
    const storedDonationData=getStoredDonationData();
    const isExist=storedDonationData.find(donationId=>donationId===id);
    if(!isExist){
        storedDonationData.push(id);
        localStorage.setItem('donations',JSON.stringify(storedDonationData));
        Swal.fire({
            icon: 'success',
            title: 'Yes.....',
            text: `You have successfully donated for this}`,            
          })
    }    
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops!!..',
            text: `You have allready donated for this}`,            
          })
    }


}
export {saveDonationData,getStoredDonationData}