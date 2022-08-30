import { stock } from "../data/data"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(stock)
        }, 1500)
    })
}

// setTimeout(() => {
//     if (param) {
//         resolve("Promesa resuelta")
//     } else {
//         reject("Promesa rechazada")
//     }
// }, 3000)