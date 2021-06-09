import express from 'express'
const app = express()

/**
 * @module api
 */

/**
 * Ruta indice
 * @name index
 * @path {GET} /
 */
app.get('/', (req, res) => res.send('Bienvenido'));

/**
 * Ruta indice
 * @name users
 * @path {POST} /users
 */
app.post('/users', (req, res) => res.send('Bienvenido'));

/**
 * Ruta indice
 * @name productos
 * @path {DELETE} /products
 */
app.delete('/products', (req, res) => res.send('Bienvenido'));

/**
 * Ruta indice
 * @name logeo
 * @path {POST} /sign
 */
app.post('/sign', (req, res) => res.send('Bienvenido'));
