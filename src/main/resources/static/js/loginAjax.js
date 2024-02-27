const userAjax = {
    joinMemeberAjax : (data,callback) => {
        $.ajax({
            url : "userInfo",
            type : "post",
            data,
            success: (reuslt) => {
                callback(reuslt)
            },
            error: (err) => {
                console.log(err)
            }
        })
    },
}