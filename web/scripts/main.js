let myHeading=document.querySelector('h1');
let myButton = document.querySelector('button');


let myimage=document.querySelector('img');
myimage.onclick = function(){
    let mysrc=myimage.getAttribute('src');
    if(mysrc=='images/csdn.png'){
        myimage.setAttribute('src','images/index.jpeg');
    }
    else{
        myimage.setAttribute('src','images/csdn.png');
    }

}

function setUserName()
{
    let Name=prompt('请输入你的名字：');
    if(!Name)
    {
        setUserName();
    }
    else 
    {
        localStorage.setItem('name',Name);
        myHeading.textContent=Name;
    }
}
if(!localStorage.getItem('name'))
{
    setUserName();
}    
else{
    let storedName =localStorage.getItem('name');
    myHeading.textContent=storedName;
}

myButton.onclick=function()
{
    setUserName();
}

