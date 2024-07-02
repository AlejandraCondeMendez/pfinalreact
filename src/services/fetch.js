    const urlAPI = ('http://localhost:2929/')

//POST

async function postData(obj,endpoint) {
    try {
        const reponse = await fetch(urlAPI+endpoint,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        })
        const data = await reponse.json()
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export {postData}


//GET 
async function getData(endpoint,id="") {
    try {
        const response = await fetch(urlAPI+endpoint+"/"+id)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
        return null 
    }
}
export {getData}
