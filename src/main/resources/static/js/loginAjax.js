const userAjax = {
    joinMemeberAjax : (data,callback) => {
        $.ajax({
            url : "joinMember",
            type : "post",
            data ,
            success: (data) => {
                console.log(data)
                callback()
            },
            error: (err) => {
                console.log(err)
            }
        })
    },
}