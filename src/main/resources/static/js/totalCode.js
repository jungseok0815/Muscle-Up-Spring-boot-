
//사용자에 입력중에 빈칸을 확인하는 함수
checkBlank = (checkInput) => {
    let check = true
    for (const i of checkInput) {
        if (i.value === "") {
            check = false;
        }
    }
    return check;
}

forInCheck = (arr) =>{
    let forInCheck = 1;
    for(let key in arr){
        if(arr[key] === true){
            forInCheck *= 1;
        }else{
            forInCheck *= 0;
        }
    }
    return forInCheck;
}

moveUrl = (url) =>{
    window.location.href = url
}

reloadUrl = () => {
    window.reloadUrl()
}


