import express from 'express';

/**
 * express app
 * @param {*} app 
 */
const configViewEngine = (app) => {
    app.use(express.static('./src/public'));

    app.set("view engine", "ejs"); //su dung thu vien ejs viet html
    app.set("views", "./src/views"); //chi dinh noi luu file
}

export default configViewEngine;