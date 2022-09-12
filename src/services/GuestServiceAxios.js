import axios from "axios";

export async function getGuestDashboard() {
    console.log("get guest_dashboard using axios");
    try{
        const response = await axios.get('http://34.233.121.200:8081/guest_dashboard');
        console.log(response.data);
        return response.data;
    }catch(error) {
        return [];
    }    
}

export async function getGuestDetails() {
    console.log("get guest_details using axios");
    try{
        const response = await axios.get('http://34.233.121.200:8081/guest_details');
        console.log(response.data);
        return response.data;
    }catch(error) {
        return [];
    }    
}

