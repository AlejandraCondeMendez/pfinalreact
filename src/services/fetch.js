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

//GET 
async function getFilter(filtro="", terminoBusqueda="") { //queryselector, propiedad de la API y el término de la propiedad
    try {
        const response = await fetch(`http://localhost:2929/libros?${filtro}=${terminoBusqueda}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
        return null 
    }
}
export {getFilter}

//DELETE
async function deleteData(endpoint,id) {

    try {
        const response = await fetch(urlAPI+endpoint+"/"+id,{
            method:"DELETE",
        })
        const data = await response.json()
        return data
        
    } catch (e) {
        console.log(e);
        return e
    }
}
export {deleteData}

//PUT

async function putData(obj, endpoint) {
    try {
        let response = await fetch(urlAPI+"/"+endpoint+obj.id, {
          method: "PUT",
          mode: "cors",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj)
        });
        let data = await response.json();
        return data;
      } catch(e) {
        console.log(e);
        return null;
      }
    
}
export default putData