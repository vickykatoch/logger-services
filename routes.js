const userController = require('./controllers/user-controller');



class ApplicationRouter {
    
    registerRoutes(app) {
        app.use('/api/users',userController);
        // app.use('/api/appConfigs',appConfigController);
        // app.use('/api/userprefs',userPrefsController);
        // app.use('/api/workspaces',workspaceController);
    }

}

module.exports = new ApplicationRouter();