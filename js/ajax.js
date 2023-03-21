(() => {
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//     console.log(res)
//     return res.ok ? res.json() : Promises.reject(res);
// })
.then((res) => (res.ok ? res.json() : Promise.reject(res)))
.then(json => {
//  console.log(json);
json.forEach((el) => {
    const $li = document.createElement("li");
    $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
    $fragment.appendChild($li);
});
$fetch.appendChild($fragment)
})
.catch(err => {

//   console.log(err);
  let message = err.statusText || "Ocurrió un error";
  $fetch.innerHTML = `Error ${err.status}: ${message}`

})
// .finally(() => 

//    console.log("Esto se ejecutara independientemente de el resultado fetch")
  
//   )

})();

(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();
    
    


    async function getData() {  
        try {
          let res = await fetch("https://jsonplaceholder.typicode.com/users"),
          json = await res.json();

          //console.log(res, json);

          //if (!res.ok) throw new Error("Ocurrió un erro  al solicitar los datos")
          if (!res.ok) throw {status:res.status,statusText:res.statusText}
          json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
            $fragment.appendChild($li);
        });


        $fetchAsync.appendChild($fragment)
        } catch (err) {
          // console.log(err); 
           let message = err.statusText || "Ocurrió un error";
           $fetchAsync.innerHTML = `Error ${err.status}: ${message}`

        } finally {
            //console.log("Esto se ejecutara independientemente de el resultado try-catch")
        }
       
    }
  
    getData();
})();

(() => {
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        //console.log(res);
         let json = res.data;
        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
            $fragment.appendChild($li);
        });

            $axios.appendChild($fragment);
    })
    
    .catch(err => {
        //console.log(err.response);
        let message = err.response.statusText || "Ocurrió un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`
    })
    .finally(() => {
       // console.log("Esto se ejecutará independientemente del resultado Axios");
    })
})();

(() => {
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

   
    
    async function getData() {
      try {
        let res = await  axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;
        
        //console.log(res, json);
        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
            $fragment.appendChild($li);
        });

            $axiosAsync.appendChild($fragment);
      } catch (err) {
        console.log(err.response);
        let message = err.response.statusText || "Ocurrió un error";
        $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`
        
      } finally {
        console.log("Esto se ejecutara independientement del try... catch");
      }
    }

    getData();
})()