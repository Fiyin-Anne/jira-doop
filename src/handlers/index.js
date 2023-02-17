const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const JRDRouter = require('../helpers/jrdrouter');

const basename = path.basename(__filename);
const routes = [];

fs
  .readdirSync(__dirname) // returns an array with all the file names or objects in the directory
  .filter(file => {
    // filter by file is not a config/hidden file, is not this file, and is a js file
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const route = require(path.join(__dirname, file));
    routes.push(...route);
  });

const routeHandler = () => {

    let newrouter = router;
    for (const route of routes) {
        let r_item = route;
        r_item.router = newrouter;
        newrouter = new JRDRouter(r_item); //JRDRouter returns the router object
    }

    return newrouter;
}

module.exports = routeHandler();
