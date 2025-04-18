let note = document.querySelector('.note')
let container = document.querySelector(".container")
let trash = document.createElement("img")
let save = document.createElement("img")
let title_note = document.createElement("input")    
let imgs = document.createElement("div")    
let n = 0 ;
imgs.classList.add('imgs')
imgs.appendChild(trash)
imgs.appendChild(save)
title_note.style = 'text-align:center;font-size:19px;font-weight:bold;width:240px;height:30px;border:0.2px dashed black;background-color:inherit;padding:0 8px;'
title_note.placeholder='Add title'
trash.src='imgs/spam.png'
save.src='imgs/images.png'
save.classList.add("save")
trash.classList.add("trash")

if(window.localStorage.length===0){
    console.log("empty")
}
else{
    for(let i =0;i<window.localStorage.length;i++){
        let value = window.localStorage[window.localStorage.key(i)]
        let title = window.localStorage.key(i)
        console.log(title)
        let newnote = document.createElement("textarea")
        newnote.textContent = value
        let content = document.createElement('div')
        let imgs_div = imgs.cloneNode(true)
        let t = title_note.cloneNode(true)
        t.value = title
        content.appendChild(t)
        newnote.placeholder='Add notes'
        newnote.classList.add("notediv")
        newnote.style = 'resize:none;'
        content.classList.add('content')
        content.appendChild(newnote)
        content.appendChild(imgs_div)
        note.before(content)
        imgs_div.firstChild.addEventListener('dblclick', (e)=>{
            container.removeChild(content)
            window.localStorage.removeItem(window.localStorage.key(i))
        })
        imgs_div.lastChild.addEventListener("click",()=>{
            if(newnote.value!=''){
            window.localStorage[t.value] = newnote.value 
        }
        })
    }
}
note.onclick =  ()=>{
    let newnote = document.createElement("textarea")
    let content = document.createElement('div')
    let imgs_div = imgs.cloneNode(true)
    let t = title_note.cloneNode()
    content.appendChild(t)
    newnote.placeholder='Add notes'
    newnote.classList.add("notediv")
    newnote.style = 'resize:none;'
    content.classList.add('content')
    content.appendChild(newnote)
    content.appendChild(imgs_div)
    note.before(content)
    imgs_div.firstChild.addEventListener('dblclick', ()=>{
        container.removeChild(content)
    })
    imgs_div.lastChild.addEventListener("click",()=>{
        if(newnote.value!=''){
        window.localStorage[t.value] = newnote.value 
    }
    })
}