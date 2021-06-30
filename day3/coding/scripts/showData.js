async function getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
}
  
function append(d,container) {
    d.forEach(({ title, image }) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = title;
        
        let img = document.createElement("img");
        img.src = image;
        div.appendChild(img);
        div.appendChild(p);
        
        container.appendChild(div);
    }
    )
}

export { getData, append };