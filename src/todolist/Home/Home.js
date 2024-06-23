import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./Home.css"
import img1 from "../Images/img-1.jpg"
import { useDispatch, useSelector } from "react-redux";
import { IsArray } from "../Reducer";
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

const Home=()=>{

    const State=useSelector(
        ({data})=>data
    )
    // console.log(State)

    const dispatch=useDispatch()

    const[task,setTask]=useState("")
    const[edittask,seteditTask]=useState("")
    const[edit,setEdit]=useState(null)
    const[edited,setEdited]=useState(false)

    const Handle=(e)=>{
     if(e.target.name == "task"){
        setTask(e.target.value)
     }
     else if(e.target.name == "edittask"){
        seteditTask(e.target.value)
     }
    }
    const Click=(e)=>{
        e.preventDefault()
        if(edited){
            let x=State.Array.map((value,index)=>{
                return index == Number(edit) ?{...value,Task:edittask,Edit:false}:value
            })
            console.log(x)
            dispatch(IsArray(x))
            setEdited(false)
            seteditTask("")
        }
        else if(task == ""){
            alert("Please Enter The Task")
          }
        else{
            let Object={Task:task,Edit:false,Complete:false}
            dispatch(IsArray([...State.Array,Object]))
            setTask("")
        }
     }

     const Delete=(a,b)=>{
        let x=State.Array.filter((value,index)=>{
            return b==index ?"":value
        })
        dispatch(IsArray(x))
        // console.log(x)
     }

     const Edit=(value,index)=>{
        let x=Number(index)
        setEdit(x)
        // console.log(typeof(x))
     }
    //  console.log(edit)

     const Change=()=>{
        if(edit != null){
            let y=State.Array.map((value,index)=>{
                return index == Number(edit) ?{...value,Edit:true}:value
            })
            console.log(y)
            let x=y.find((value,index)=>{
                return index == Number(edit)
            })
            console.log(x)
            seteditTask(x.Task)
            setEdited(true)
            dispatch(IsArray(y))
        }
     }
     useEffect(Change,[edit])

     const Complete=(a,b)=>{
        let x=State.Array.map((value,index)=>{
            return index == b ? {...value,Complete:true}:value
        })
        dispatch(IsArray(x))
        // console.log(x)
     }

    return(
        <>
        <Box component="div" sx={{width:{xs:"100%",md:"100%",sx:"100%"},display:"flex",alignItems:"center",justifyContent:{md:"start",xs:"center",sm:"center"},height:{md:"100vh",xs:"100%",sm:"100%"},margin:"0px auto",flexWrap:"wrap"}} className="todo">
            <Box component="div" sx={{width:{xs:"90%",md:"90%",sx:"90%"},margin:"0px auto"}}>
            <Box component="div" sx={{width:{xs:"100%",md:"40%",sx:"100%"}}}>
                <Box component="div" sx={{backgroundColor:"#000000bd",height:"500px",boxShadow:"0px 0px 10px white"}}>
                    <Box component="h5" sx={{textAlign:"center",color:"white",fontWeight:"800",fontSize:"30px",paddingTop:"10px"}}> 
                         TODO-LIST
                    </Box>
                    <Box component="div" sx={{width:{xs:"90%",md:"90%",sx:"90%"},margin:"0px auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <Typography className="Input" component="input" name="task" value={task} onChange={Handle} placeholder="Enter The Task" type="text" sx={{width:{md:"60%",xs:"100%",sm:"60%"},borderRadius:"5px",backgroundColor:"transparent",color:"white",border:"1px solid white",padding:"10px 15px",fontWeight:800}}>
                        </Typography>
                        <Box sx={{width:{md:"30%",xs:"100%",sm:"30%"},textAlign:{xs:"center",sm:"none",md:"none"},marginTop:{xs:"20px",sm:"0px",md:"0px"}}}>
                            <Typography component="button" sx={{padding:"10px 15px",backgroundColor:"#a600ff",color:"white",fontWeight:800,borderRadius:"10px",border:"none",boxShadow:"0px 0px 1px white"}} onClick={Click}>
                                Add Task
                            </Typography>
                        </Box>
                    </Box>
                    <Box component="div" sx={{width:{xs:"90%",md:"90%",sx:"90%"},margin:"0px auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}}>
                    {
                    State.Array.map((value,index)=>{
                    return(
                    <>
                    {
                        value.Edit && edited ?
                    <Box component="div" sx={{width:{xs:"100%",md:"100%",sm:"95%"},display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",marginTop:"10px"}}>
                        <Typography className="Input" component="input" name="edittask" value={edittask} onChange={Handle} placeholder="Enter The Task" type="text" sx={{width:{md:"60%",xs:"100%",sm:"60%"},borderRadius:"5px",backgroundColor:"transparent",color:"white",border:"1px solid white",padding:"10px 15px",fontWeight:800}}>
                        </Typography>
                        <Box sx={{width:{md:"30%",xs:"100%",sm:"30%"},textAlign:{xs:"center",sm:"none",md:"none"},marginTop:{xs:"20px",sm:"0px",md:"0px"}}}>
                            <Typography component="button" sx={{padding:"10px 15px",backgroundColor:"#a600ff",color:"white",fontWeight:800,borderRadius:"10px",border:"none",boxShadow:"0px 0px 1px white"}} onClick={Click}>
                                Edit Task
                            </Typography>
                        </Box>
                    </Box>:     
                    
                    <Box sx={{width:{md:"96%",xs:"100%",sm:"95%"},backgroundColor:value.Complete?"#25bd09":"#a600ff",color:"white",height:"40px",display:"flex",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap",marginTop:"10px",borderRadius:"5px",boxShadow:"0px 0px 5px black"}}>
                    <Box sx={{width:{md:"60%",xs:"70%",sm:"60%"}}}>
                    <Typography sx={{fontWeight:800}}>  {value.Task}</Typography>
                    </Box>
                    <Box sx={{width:{md:"30%",xs:"25%",sm:"30%"},display:"flex",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}}>
                    <Typography component="i" onClick={()=>Complete(value,index)}>
                        <TiTick/>
                    </Typography>
                    <Typography component="i" onClick={()=>Edit(value,index)}>
                        <AiFillEdit/>
                    </Typography>
                    <Typography component="i" onClick={()=>Delete(value,index)}>
                        <AiFillDelete/>
                    </Typography>
                    </Box>
                    </Box>
                    }
                    </>
                    )
                    })
                    }
                    </Box>
                </Box>
            </Box>
            </Box>
        </Box>
        </>
    )
}

export default Home