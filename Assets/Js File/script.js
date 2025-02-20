const handleTopBar = () => {
    const cancelTopBar = document.getElementById("cancelTopBar");
    if(!cancelTopBar){
        cancelTopBar.style.display = 'block';
    }
    else {
        cancelTopBar.style.display = 'none';
    }
};


const handleToggle = () => {
    let toggle =document.getElementById('toggle');
    if(toggle.classList.contains('show')){
        toggle.classList.remove("show");
    }
    else toggle.classList.add("show");
    
}
