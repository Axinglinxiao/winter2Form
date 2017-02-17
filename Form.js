/**
 * Created by Axing on 2017/2/13.
 */
function postDate(){
    var date = {};
    date.useremail = $('#user_email').val();
    date.password = $('#pwd').val();
    if(/^[A-Z][a-zA-Z0-9]{5,16}$/.test(date.useremail))
        $ajax.("http://localhost:3000",{
            type:"POST",
            data: date,
            dataType: 'text',
            success: function (response) {
                $('#res').text(response.toString());
            },
            error: function (req,err) {
                $('#res').text('Error');
            }
        });
    else{
        $('#res').text('用户输入不规范！请重新输入');
    }
}
function ps(){
    if (this.forms.password.type="password")
        box.innerHTML="<input type=\"html\" name=\"password\" size=\"20\" value="+this.forms.password.value+">";
    click.innerHTML="<button onclick=\"javascript:txt()\">隐藏密码</button>"}
function txt(){
    if (this.forms.password.type="text")
        box.innerHTML="<input type=\"password\" name=\"password\" size=\"20\" value="+this.forms.password.value+">";
    click.innerHTML="<button onclick=\"javascript:ps()\">显示密码</button>"}