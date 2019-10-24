var config = {
    development: {
        databases:[]
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

config.staging = {};
config.default_stuff =  ['red','green','blue','apple','yellow','orange','politics'];

module.exports = config;