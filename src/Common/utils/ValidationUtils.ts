interface ValidationInputProps{
    errorMessage:string
    showError:boolean
}

function ValidationInput<ValidationInputProps>(value:any){
    if(value===""){
       return {
           errorMessage :"Required",
           showError:false
        }
    }
    else{
        return {
            errorMessage :"",
            showError:true
        }
    }
}

export default  ValidationInput