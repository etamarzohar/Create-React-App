import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

class Func extends React.Component {
  render() {
    return (
        <script>
    {function showInput() {
var MyName = document.getElementById("name");
var MyImg = document.getElementById("image");
var MyEmail = document.getElementById("email");
var MyAge = document.getElementById("age");
        document.getElementById('dis_name').innerHTML = " "+MyName.value+" ";

	document.getElementById('person').innerHTML = MyName.value;

	MyImg.src = "https://images.pexels.com/photos/"+MyName.value+"/pexels-photo-"+MyName.value+".jpeg";

	if(MyEmail.value.match("@gmail.com"))
{
	document.getElementById('dis_email').innerHTML = " "+MyEmail.value+" ";
}
	else
{
	document.getElementById('dis_email').innerHTML = "Invaild Email address: Please use Gmail account!";
}
	if(MyAge.value>=18 && MyAge.value<120)
{
	document.getElementById('dis_age').innerHTML = " "+MyAge.value+" ";
}
	else
{
	document.getElementById('dis_age').innerHTML = "invaild age: 18 <= Age < 120 ";
}
	if(MyName.value.match("Menahem")){
		MyImg.src = "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/21740453_1367954483322600_1532604359894555927_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=imCmRO5IckkAX9InSYt&_nc_ht=scontent.fsdv3-1.fna&oh=c111f209f7a57ee2d582f765d57da67d&oe=5F0E03B6";
	}
	if(MyName.value.match("Itamar")){
		MyImg.src = "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/62491689_109842716948240_6887919866699841536_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=1vl9yy05sfQAX-biaL1&_nc_ht=scontent.fsdv3-1.fna&oh=e60517ceefe013af1b241c07eb16882d&oe=5F111473";
	}
	if(MyName.value.match("Rachel")){
		MyImg.src = "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/83384611_865760840521586_8690188027860877312_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=gd4yNoETl3MAX-PuFlW&_nc_ht=scontent.fsdv3-1.fna&oh=7bfa8b9c75a3c2f30a22bce54c8b1198&oe=5F0EFD57";
	}
	if(MyName.value.match("Yosef")){
		MyImg.src = "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/82213780_4042023315823535_8109930417093607424_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=Fz16mD1AvWQAX9Bds3k&_nc_ht=scontent.fsdv3-1.fna&oh=08068179c0f0bceb460a833b6c3cdb64&oe=5F0E1773";
	}
  }
}
    </script>
    );
  }
}

export default Func;