import { useEffect } from "react";

export function GetData(url,token,setItems,setIsLoading,isLoading){
    useEffect(()=>{
        fetch(url, {
            method:'GET',
            headers: {'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`}
            }).then(resp => resp.json())
            .then( json => {setItems(json);setIsLoading(true)})
        },[isLoading])
}

export function DeleteItem(id,url,token,setIsLoading){
    useEffect(()=>{
            if(id!=undefined){
                setIsLoading(false)
                fetch(url+"/"+id, {
                    method:'DELETE',
                    headers: {'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`}
                    }).then(setIsLoading(false))
                    .then(setIsLoading(false))     
            }
    },[id])
    
}