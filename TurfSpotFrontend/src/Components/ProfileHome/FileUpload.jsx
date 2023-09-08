import axios from 'axios';
import { contains } from 'jquery';
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const user={"userName": "Aadhi","userEmail" :"Sakthi",
"createdDate": "today","imagemessage":"testing for image content"}


function FileUpload() {
    const formData=new FormData();
    const email = useSelector(state => state.loginState.user.email)
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile,setuploadedFile]=useState({});
    const [userdata, setuserdata] = useState({});
    const [text, settext] = useState("");
    const onChangeHandler =async(e)=>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        try{
                    
        }catch(error){
            console.log(error.response);
        }
    }




    useEffect(async() => {
        const result = await axios.get(`http://localhost:8080/api/unauthuser/getuser/${email}`);
        let date=new Date();
        console.log(date);
        let curdate=date.toString;
        console.log(curdate);
        console.log(result);
        const obj={"userName": result.data.name,"userEmail" :email,"createdDate":"curdate","imagemessage":"testing for image content"}
       
        setuserdata(JSON.stringify(obj));
        
        console.log(result);
    }, [])




    const onSubmitHandler=async(e)=>{
        let obj={}
        e.preventDefault();
       
        console.log(file);
        console.log("in submit");
        formData.append('file',file);
   
        formData.append("user",userdata);
        try{                                                                                            
        const res=await axios({method:"post",url:'http://localhost:8080/api/unauthuser/upload',data:formData,headers:{
            'Content-Type': 'multipart/form-data'
        }})
        console.log(res);
    }catch(error){
        console.log(error);
    }
    
        


    }

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}>
                <div className='custom-file mb4'>
                    <input type='file' className='custom-file-label' id='customFile'
                    onChange={onChangeHandler}
                    />
                    <label className='custom-file-label' htmlFor="customFile">
                        {filename}
                    </label>
                </div>

                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
            </form>
            <div className="create">
      <div className="create__first">
        <div className="create__first-input">
          <input
            type="text"
            className="create__first-inputs"
            placeholder="Share what are your mind? "
            onChange={e=>settext(e.target.value) }  value={text}
          />
        </div>
      </div>
      </div>
        </Fragment>

    
    )
}

export default FileUpload
