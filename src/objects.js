/**
 * Objeto de tipo persona
 * @typedef {Object} person
 * @property {number} id - El id de la persona
 * @property {string} firstName - El nombre de la persona
 * @property {string} lastName - El apellido de la persona
 * @property {number} age - La edad de la persona
 */
const person = {
    id: 1,
    firstName: 'Ryan',
    lastName: 'Ray',
    age: 30
}

/**
 * Objeto de tipo persona2
 * @type {{id: number | string, firstName:string, lastName:string, age: number}}
 */
const person2 = {
    id: 1,
    firstName: 'Ryan',
    lastName: 'Ray',
    age: 30  
}