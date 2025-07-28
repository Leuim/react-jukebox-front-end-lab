const BASE_URL = `${import.meta.env.VITE_BACK_END_URL}/tracks`
const index = async ()=>{
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        if (data.length === 0){
            return 'No tracks found'
        }
        return data
    } catch (error) {
        console.log(error)
    }
}

const create = async (formData)=>{
    try {
        const res = await fetch(BASE_URL, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const show = async (id)=>{
    try {
        const res = await fetch(`${BASE_URL}/${id}`)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const update = async (formData, trackId)=>{
    try {
        const res = await fetch(`${BASE_URL}/${trackId}`, {
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const deleteTrack = async (trackId)=>{
    try {
        const res = await fetch(`${BASE_URL}/${trackId}`, {
            method:'DELETE'
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
// console.log(await index())
// console.log(await create({
//     title:"Hi",
//     artist:"Tame Impala"
// }))
// console.log(await show('68870b72ed8599877ad6f384'))
// console.log(await update({
//      title:"Hello",
//      artist:"Jassim algallaf"
//  }, '68871b31e9bbb797e6c0fdee'))
export {index, create, show, update, deleteTrack}