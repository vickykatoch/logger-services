const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

class AppConfiguration {
    loadConfig() {
        console.info('Loading configuration from : appConfig.yaml');
        const configFilePath = path.join(__dirname,'../appConfigs/appConfig.yaml');
        var doc = yaml.safeLoad(fs.readFileSync(configFilePath, 'utf8'));
        this.config = doc;
        console.info('Application configuration loaded successfully');
    }
} 
module.exports = new AppConfiguration();