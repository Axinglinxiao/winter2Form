/**
 * Created by Axing on 2017/2/13.
 */
function ps(){
    if (this.forms.password.type="password")
        box.innerHTML="<input type=\"html\" name=\"password\" placeholder=\"密码\" size=\"20\" value="+this.forms.password.value+">";
    click.innerHTML="<button type=\"button\" onclick=\"javascript:txt()\">隐藏密码</button>"}
function txt(){
    if (this.forms.password.type="text")
        box.innerHTML="<input type=\"password\" name=\"password\" placeholder=\"密码\" size=\"20\" value="+this.forms.password.value+">";
    click.innerHTML="<button type=\"button\" onclick=\"javascript:ps()\">显示密码</button>"}
function postData() {
    var data = {};
    data.username = $('#user_name').val();
    data.useremail = $('#user_email').val();
    data.password = $('#password').val();
    function name() {
        if(/^[A-Z][a-zA-Z0-9]{5,16}$/.test(data.username))
            return true;
    }
    function email() {
        if(/^[a-zA-Z0-9_-]+@[qQ]+(\.com+)+$/.test(data.useremail))
            return true;
    }
    function checkpwd() {
        var p1 = document.forms.password.value;
        var p2 = document.forms.cfm.value;
        if(p1 === p2)
            return true;
    }
    function  pwd() {
        if(/^[a-zA-z0-9]{5,20}$/.test(data.password))
            return true;
    }
    if (name() && email() && checkpwd() && pwd())
        $.ajax("http://localhost:3000", {
            type: "POST",
            data: data,
            dataType: 'text',
            success: function (response) {
                $('#res').text(response.toString());
            },
            error: function (req, err) {
                $('#res').text('Error');
            }
        });
    else{
        $('#res').text('用户名不符合规范');
    }
}
function checkpwd(){
    var p1 = document.forms.password.value;
    var p2 = document.forms.cfm.value;

    if(p1 !== p2){
        document.getElementById("dif").innerHTML = "两次输入密码不一致，请重新输入";
        checkpwd();
    }
    else
        document.getElementById("dif").innerHTML = "";
        return true;
}
function checkname() {
    var data = {};
    data.username = $('#user_name').val();
    if(/^[A-Z][a-zA-Z0-9]{5,16}$/.test(data.username) !== true){
        document.getElementById("err").innerHTML = "5-16个字母或数字、首字母大写";
        checkname();
    }
    else{
        document.getElementById("err").innerHTML = "";
        return true;
    }
}