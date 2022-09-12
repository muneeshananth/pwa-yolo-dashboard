import axios from "axios";

export async function getCountry() {
    console.log("getAllCountry using axios");
    try{
        const response = await axios.get('http://34.233.121.200:5000/country');
        console.log(response.data);
        return response.data;
    }catch(error) {
        console.log(error);
        return [];
    }    
}

export async function getCountryById(id) {
    console.log("getAllCountry using axios");
    try{
        const response = await axios.get('http://34.233.121.200:5000/country/'+id);
        console.log(response.data);
        return response.data;
    }catch(error) {
        console.log(error);
        return [];
    }    
}

export async function createContry(data) {
    console.log("createCountry using axios");
    console.log("data");
    console.log(data);
    
    const response = await fetch('http://34.233.121.200:5000/country', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
      return await response.json();
  }