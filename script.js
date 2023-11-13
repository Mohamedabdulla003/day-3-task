fuction getData(){
    const url = "https://restcountries.com/v3.1/all"

    axies.get(url)
    .then(response => displaydata(response.Data))
    .catch(err => console.log(err)) 
}

getdata{}

fuction displaydata(countries){
    const root = document.getElementById("root")
    root.innerhTML = "  "
    countries.foreach(count=>{
        const{all country names,region,sup-region,papulation}=country      const div = document.createElement("div")
        div.setAttribute("class," "col-sm mt-2 mb-2")
        div.innerHTML =

        <div>"class," "col-sm mt-2 mb-2">
            <div class="card" style="width: 18rem;">
                <div class "badge bg-success text white position-absolute "style"-top:0,srem;right:0,srem;">&npsp;&nbsb;</div>
                <img classs  =card-img-top" src="${flage.pop()}" alt="card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${names.commen},${region.(SUp-rigion)},${population}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>

root.appendchild(div)
    })

    }






  

        
    }) 
}