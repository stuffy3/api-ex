


let residentBtn = document.querySelector("button")
const baseURL = 'https://swapi.dev/api/'

let clickBtn = axios.get(`${baseURL}/planets/?search=alderaan`).then((response) => {
    let residentsArr =  response.data.results[0].residents
    for(let i = 0; i < residentsArr.length; i++) {
        axios.get(residentsArr[i]).then((response) =>{
            console.log(residentsArr[i])
            let residentDisplay = document.createElement('h2')
            residentDisplay.innerHTML = response.data.name
            document.body.appendChild(residentDisplay)
        })
           
        
    }
    // for(let i = 0; i < response.data.length; i++) {
    //     if(response.data[i].includes(residents))
    //}

    
})


residentBtn.addEventListener('click',  clickBtn)


