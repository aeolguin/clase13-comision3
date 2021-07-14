let inicio = document.getElementById('inicio')
let listarPais = document.getElementById('listar')
let agregarPais = document.getElementById('crear')
let borrarPais = document.getElementById('borrar')

inicio.addEventListener('click', async ()=>{
    console.log('Boton Inicio')

    let result = await fetch('http://localhost:3000')
    let resultado = await result.json()
    console.log(resultado)
})

listarPais.addEventListener('click', async ()=>{
    console.log('Boton Listar')

    let result = await fetch('http://localhost:3000/pais')
    let resultado = await result.json()
    console.log(resultado)

})

agregarPais.addEventListener('click', async ()=>{
    console.log('Boton Agregar')
    let nombreAgregado = prompt('Ingresa un nombre de pais para dar de alta');
    let codigoPaisAgregado = prompt('Ingrese un codigo de pais para dar de alta')

    let result = await fetch('http://localhost:3000/pais', {
        method: 'post',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "nombre" : nombreAgregado,
            "codigo_pais": codigoPaisAgregado
        })
    })
    let resultado = await result.json()
    console.log(resultado)
})

borrarPais.addEventListener('click', async ()=>{
    console.log('Boton Borrar')
    let paisABorrar = prompt('Ingresa el nombre del pais que deseas borrar')

    let result = await fetch(`http://localhost:3000/pais/${paisABorrar}`, {
        method: 'delete',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
    })

    let resultado = await result.json()
    console.log(resultado)
})