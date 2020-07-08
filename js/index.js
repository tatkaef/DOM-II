// Change background color when scroll mouse 
    document.addEventListener('scroll', function(){    
    document.getElementsByTagName('body')[0].style.background = 'LightBlue'
    })

// Change text color when mouseover on Fun Bus
document.querySelector('.logo-heading').addEventListener('mouseover', () =>{
    for(i=0; i<2; i++){
        document.querySelectorAll('.text-content')[i].style.color = 'Green'
    }
})
document.querySelector('.logo-heading').addEventListener('mouseout', () =>{
    for(i=0; i<2; i++){
        document.querySelectorAll('.text-content')[i].style.color = 'Black'
    }
})

// Change Fun bus color on blue and back
// document.getElementsByClassName('logo-heading')[0].addEventListener('mouseover', function(){   
//     document.getElementsByClassName('logo-heading')[0].style.color = 'Blue'            
// })
// document.getElementsByClassName('logo-heading')[0].addEventListener('mouseout', function(){   
// document.getElementsByClassName('logo-heading')[0].style.color = 'Black'
// }) 

// put dots around nav when mouse move
document.getElementsByTagName('a')[0].addEventListener('mousemove',function(){  
document.getElementsByTagName('a')[0].style.border = 'green dotted 2px'    
})
document.getElementsByTagName('a')[1].addEventListener('mousemove',function(){   
document.getElementsByTagName('a')[1].style.border = 'red dotted 2px'
})

// main img hide when push any key
document.addEventListener('keydown', function(){    
document.querySelector('.intro img').style.display = 'none';  
document.querySelector('.intro').prepend(' Where is image?')

// this use for childelement. when you don't what that childelement do same like parantElemement
// you need use this inside childElement event:
// event.stopPropagation();
})

//change img when whell on it
document.getElementsByClassName('content-destination')[0].addEventListener('wheel', function(){    
document.querySelector('.content-destination img').src = 'https://live.staticflickr.com/7570/15909233902_87a9f6cdb1_b.jpg';
})

//change size img when pull it 
document.getElementsByClassName('img-content')[0].addEventListener('drag', function(){
document.getElementsByClassName('img-content')[0].style.width = '200px'
})
document.getElementsByClassName('img-content')[0].addEventListener('dragend', function(){
document.getElementsByClassName('img-content')[0].style.width = '50%'
})  

//on double click the text is underlined
const changeTxt = document.getElementsByClassName('text-content');
changeTxt[1].childNodes[1].addEventListener('dblclick', function(){  
changeTxt[1].childNodes[1].style.textDecoration = 'underline';
})

