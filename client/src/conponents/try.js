import Axios from 'axios'

Axios.get('https://catfact.ninja/fact').then(res=>{
console.log(res.data)
})