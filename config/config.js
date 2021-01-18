function getConfig(env) {
    if (env) {
        return require(`./config.${env}.json`)
    }

    return require("./config.prod.json");
}

export var Config = getConfig(process.env.testEnv);