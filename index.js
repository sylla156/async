let get =    (url,re,ej) => {
    return  fetch(url).then(re).then(ej)
      
}


let dd = get('http://localhost:8080/get',res => {
    const response = res.json();
    console.log(response);
    return response;
},data => console.log(data))
