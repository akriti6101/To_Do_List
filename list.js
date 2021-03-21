 const text=document.getElementById("inputarea");
const btn=document.getElementById("button");
const list=document.getElementById("placelist");

 

  btn.addEventListener('click',()=>{

    var paragraph=document.createElement('p');
       paragraph.innerText=text.value;
       paragraph.classList.add('para_style')
       list.appendChild(paragraph);
  text.value="";

        paragraph.addEventListener('click',()=>{
       paragraph.style.textDecoration="line-through";

        })
        paragraph.addEventListener('dblclick',()=>{
            list.removeChild(paragraph);
        })



  })

 
