window.onload = function () {
    let joinCheckBox = {
        blankCheck : false,
        regPasswordCheck : false,
        samePasswordCheck : false,
        emailRegCheck : false,
        phoneRegCheck : false
    }

    //로그인 회원가입 JS처리
    const addJoin = document.querySelector(".join-none-area > button")
    const addLogin = document.querySelector(".login-none-area > button")
    addJoin.addEventListener("click",  () =>{
        document.querySelector(".join-none-area").style.display = "none";
        document.querySelector(".join-area").style.display = "block"
        document.querySelector(".login-none-area").style.display = "flex"
        document.querySelector(".login-none-area").style.justifyContent = "center"
        document.querySelector(".login-none-area").style.alignItems = "center"
        document.querySelector(".login-area").style.display = "none"
    })

    addLogin.addEventListener("click", () =>{
        document.querySelector(".join-none-area").style.display = "flex";
        document.querySelector(".join-none-area").style.justifyContent = "center"
        document.querySelector(".join-none-area").style.alignItems = "center"
        document.querySelector(".join-area").style.display = "none"
        document.querySelector(".login-none-area").style.display = "none"
        document.querySelector(".login-area").style.display = "block"
    })


    //사용자가 맞게 회원정보를 입력하였는지 확인
    const joinUser = document.querySelector(".join-area > .join-btn");
    joinUser.addEventListener("click" , () =>{
        const joinInfo = document.querySelectorAll(".join-area >.form-floating>input")
        // 사용자가 입력에 빈칸이 있는지 확인
        if(!checkBlank(joinInfo))
            joinCheckBox.blankCheck = false
        else
            joinCheckBox.blankCheck = true
        if(forInCheck(joinCheckBox)){
            data = {
                userId : document.querySelector("#floatingInput2").value,
                userPwd : regPwd.value,
                userPhone : checkPhone.value,
                userEmail : checkEmail.value,
                userAddress : addressInupt.value

            }
            userAjax.joinMemeberAjax(data,reloadUrl)
        }
        else{
            console.log("회원가입 실패")
        }
    })

    reloadUrl = (joinResult) =>{
        location.reload()
        joinResult === "joinOk" ? console.log("회원가입 성공") : console.log("회원가입 Error") 
    }

    //비밀번호 유효성 검사
    const regPwd = document.querySelector(".join-area > .form-floating > .password")
    regPwd.addEventListener("keyup", () =>{ 
        let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
        if(reg.test(regPwd.value)){
            regPwd.classList.remove("is-invalid")
            joinCheckBox.regPasswordCheck = true
        }else{
            regPwd.classList.add("is-invalid")
            joinCheckBox.regPasswordCheck = false
        }
    })

    // 비밀번호 중복 검사
    const checkPwd = document.querySelector(".join-area > .form-floating > .checkPwd")
    checkPwd.addEventListener("keyup", () =>{
        if(regPwd.value === checkPwd.value){
            checkPwd.classList.remove("is-invalid")
            joinCheckBox.samePasswordCheck = true
        }else{
            checkPwd.classList.add("is-invalid")
            joinCheckBox.samePasswordCheck = false
        }
    })

    //핸드폰 유효성 검사
    const checkPhone = document.querySelector(".join-area > .form-floating > .checkPhone")
    checkPhone.addEventListener("keyup", () =>{
        const phoneNumberRegex = /^010[0-9]{8}$/;
        if(phoneNumberRegex.test(checkPhone.value)){
            checkPhone.classList.remove("is-invalid")
            joinCheckBox.phoneRegCheck = true
        }else{
            checkPhone.classList.add("is-invalid")
            joinCheckBox.phoneRegCheck = false
        }
    })

    //이메일 유효성 검사
    const checkEmail = document.querySelector(".join-area > .form-floating > .checkEmail")
    checkEmail.addEventListener("keyup", () =>{
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(emailRegex.test(checkEmail.value)){
            checkEmail.classList.remove("is-invalid")
            joinCheckBox.emailRegCheck = true
        }else{
            checkEmail.classList.add("is-invalid")
            joinCheckBox.emailRegCheck = false
        }
    })

    //주소를 검색하는 API
    const searchAddress = document.querySelector("#search-address")
    const addressInupt =  document.getElementById("sample5_address")
    searchAddress.addEventListener("click", () =>{
        new daum.Postcode({
            oncomplete: function(data) {
                var addr = data.address; // 최종 주소 변수
                // 주소 정보를 해당 필드에 넣는다.
                addressInupt.value = addr;
                // 주소로 상세 정보를 검색
            }
        }).open();
    })
}




