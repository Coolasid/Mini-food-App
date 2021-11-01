async function getData(url){
    let res = await fetch(url)

    let data = await res.json();
    let meal = data.meals;
    return meal;
}

function appendData(meal, container){
    // console.log(meal)
    
    meal.forEach(({ strMeal, strMealThumb, strInstructions}) =>{
        let Div = document.createElement("div");
        let p = document.createElement("p");
            p.innerText = strMeal;
            p.style.fontSize = "20px"
            p.style.fontWeight = "700"
            
        let img = document.createElement("img");
            img.src = strMealThumb;
            img.style.width = "30%"

        let pInst = document.createElement("p");
            pInst.innerText = "Inst:  "+ strInstructions;

             Div.append(img, p,pInst)

        container.append(Div);

    })
       
 
}

export { getData, appendData}