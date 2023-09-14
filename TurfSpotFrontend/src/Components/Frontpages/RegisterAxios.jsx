import axios from 'axios';

const registerUser=(user)=>{

    const {data}=axios.post("http://localhost:8080/api/unauthuser/signUp",user);
    console.log("success");

}


const registerDoctor=(user)=>{
    const {data}=axios.post("http://localhost:3000/api/unauthuser/signUp",user);
}

const registerFoster=(user)=>{
    const {data}=axios.post("http://localhost:3000/api/unauthuser/signUp",user);
}

const getPost=async()=>{
    return await axios.get("http://localhost:8080/api/unauthuser/showimage");
}

export {registerUser,
        registerDoctor,
        registerFoster,
        getPost
}