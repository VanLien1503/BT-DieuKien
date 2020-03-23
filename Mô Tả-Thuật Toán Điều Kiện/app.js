function check() {
let input=document.getElementById("input").value;
if (input>100 || input<0){
    alert('Nhập lại điểm' );
}
    else if (input>=75){
        document.getElementById("resule").innerHTML=input +'Điểm'+'<br>'+"Đạt loại A";
    }else if (input>=60){
        document.getElementById("resule").innerHTML=input+'Điểm'+'<br>'+"Đạt loại B ";
    }else if (input>=45){
        document.getElementById("resule").innerHTML=input+'Điểm'+'<br>'+"Đạt loại C ";
    }else if (input>=35){
        document.getElementById("resule").innerHTML=input+'Điểm'+'<br>'+"Đạt loại D";
    }else {
        document.getElementById("resule").innerHTML=input+'Điểm'+'<br>'+"Đạt loại F"
    }
}