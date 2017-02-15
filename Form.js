/**
 * Created by Administrator on 2017/2/13.
 */
function postDate(){
    var date = {};
    date.useremail = $('#user_email').val();
    date.password = $('#password').val();
    if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(date.useremail))
        &ajax.("http://localhost:3000",{
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
