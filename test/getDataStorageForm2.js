$("document").ready(function () {
    $("#fa_title").val(sessionStorage.getItem('fa_title'));
    $("#fa_Fname").val(sessionStorage.getItem('fa_Fname'));
    $("#fa_Lname").val(sessionStorage.getItem('fa_Lname'));
    $("#fa_age").val(sessionStorage.getItem('fa_age'));

    $("#fa_Occ").val(sessionStorage.getItem('fa_Occ'));
    $("#fa_place").val(sessionStorage.getItem('fa_place'));
    $("#fa_tel").val(sessionStorage.getItem('fa_tel'));

    $("#ma_Fname").val(sessionStorage.getItem('ma_Fname'));
    $("#ma_Lname").val(sessionStorage.getItem('ma_Lname'));
    $("#ma_age").val(sessionStorage.getItem('ma_age'));

    $("#ma_title").val(sessionStorage.getItem('ma_title'));
    $("#ma_Occ").val(sessionStorage.getItem('ma_Occ'));
    $("#ma_place").val(sessionStorage.getItem('ma_place'));
    $("#ma_tel").val(sessionStorage.getItem('ma_tel'));


    $("#num_bro").val(sessionStorage.getItem('num_bro'));

    $("#DynamicTextBox_name").val(sessionStorage.getItem('DynamicTextBox_name'));
    $("#DynamicTextBox_age").val(sessionStorage.getItem('DynamicTextBox_age'));
    $("#DynamicTextBox_career").val(sessionStorage.getItem('DynamicTextBox_career'));
    $("#DynamicTextBox_where").val(sessionStorage.getItem('DynamicTextBox_where'));
    $("#DynamicTextBox_tel").val(sessionStorage.getItem('DynamicTextBox_tel'));

    $("#bro_name1").val(sessionStorage.getItem('bro_name1'));
    $("#bro_old1").val(sessionStorage.getItem('bro_old1'));
    $("#bro_career1").val(sessionStorage.getItem('bro_career1'));
    $("#bro_where1").val(sessionStorage.getItem('bro_where1'));
    $("#bro_tel1").val(sessionStorage.getItem('bro_tel1'));


});