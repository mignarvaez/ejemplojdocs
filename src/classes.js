/**
 * Clase para crear un programador
 * @example
 * const newProgrammer = new Programmer({fullname: 'Ryan Rya', 'javascript'})
 * newProgrammer.getInfo();
 * 
 * @see https://docs.github.com/en/rest/reference/repos#create-a-repository-using-a-template
 * 
 * @todo Implementar el resto de métodos de la clase
 * @tutorial first-tutorial
 */
class Programmer{
    /**
     * @param {{fullname: string}} user Información del usuario
     * @param {string} language Un lenguaje de programación
     */
    constructor(user, language){
        this.fullname = user.fullname;
        this.language = language
    }

    /**
     * Obtiene información del programador
     * @returns {void} 
     */
    getInfo(){
        console.log(`I'm ${this.fullname} and my favorite programming language is ${this.language}`)
    }
}

/**
 * Conoce más en: {@link Programmer}
 */
const programmer1 = new Programmer({fullname: 'Rain Ray'}, 'java');
const programmer2 = new Programmer({fullname: 'Joe Ray'}, 'go');

programmer1.getInfo()
programmer2.getInfo()