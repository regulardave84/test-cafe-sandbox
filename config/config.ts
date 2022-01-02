function getConfig(env: any) {
    if (env) {
        return require(`./${env}.json`)
    }

    return require("./prod.json");
}

export var Config = getConfig(process.env.testEnv);