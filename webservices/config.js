var config = {
    development: {
        databases:[],
        templates:[]
    },
    staging:{}
};

config.development.databases = [
    {
        alias: "Development",
        username: "root",
        password: "1nf1n1ty",
        server: "10.239.2.79",
        port: "3322",
        databaseName: "lcu_dev"
    },
    {
        alias: "Staging",
        username: "root",
        password: "1nf1n1ty",
        server: "10.239.2.79",
        port: "3322",
        databaseName: "lcu_dev_avr"
    }
]; 

config.development.templates = [
    {
        name: "Login",
        revision_major: 11,
        revision_minor: 0,
        id: 25,
        revision_id: 10231
    },
    {
        name: "MasterNonAuth",
        revision_major: 5,
        revision_minor: 0,
        id: 20,
        revision_id: 2311
    },
    {
        name: "MasterAuth",
        revision_major: 3,
        revision_minor: 0,
        id: 21,
        revision_id: 5421
    },
    {
        name: "AccountSummary",
        revision_major: 29,
        revision_minor: 0,
        id: 26,
        revision_id: 3122
    },
]; 

config.staging = {};
config.default_stuff =  ['red','green','blue','apple','yellow','orange','politics'];

module.exports = config;