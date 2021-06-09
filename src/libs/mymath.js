/** 
 * Mi libreria personalizada - Aprende más en {@tutorial second-tutorial}
 * @module MyMath
 */

/**
 * Suma dos números
 * @param {number} x primer número
 * @param {number} y segundo número
 * @returns {number} Suma de los numeros
 */
const add = (x, y) => x + y;

/**
 * Resta dos números
 * @param {number} x Primer número
 * @param {number} y Segundo número
 * @returns {number} Resta de los numeros
 */
const substract = (x, y) => x - y;

module.exports = {
    add,
    substract
}