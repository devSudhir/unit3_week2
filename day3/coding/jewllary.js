import navbar from "./components/navbar.js";

import { getData, append } from "./scripts/showData.js";
  const navbar_data = navbar();
document.body.innerHTML = navbar_data;
  

let getJewllery_data = getData('https://fakestoreapi.com/products/category/jewelery')
getJewllery_data.then((res) => {
    
    append(res, data);
})
/* async function getData() {
    let response = await fetch('https://fakestoreapi.com/products/category/jewelery');
    let data = await response.json();
    console.log(data);
    append(data);
}
  
function append(d) {
    d.forEach(({ title, image }) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = title;
        
        let img = document.createElement("img");
        img.src = image;
        div.appendChild(img);
        div.appendChild(p);
        
        data.appendChild(div);
    }
    )
} */


