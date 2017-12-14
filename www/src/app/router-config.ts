import { DashboardComponent } from "./modules/dashboard/index";
import { Route } from "@angular/router";
import { logRouterConfig } from "./modules/log-analyzer/log-router.config";
import { helpRouterConfig } from "./modules/help/help-router.config";
import { routes  } from "./modules/favorite-instruments/route.config";



const indexRoute : Route = {
    path : '',
    component : DashboardComponent
};
const fallbackRoute : Route = {
    path : '**',
    component : DashboardComponent
};

export const routerConfig = [
    {
        path: 'home',
        component: DashboardComponent
    },
    ...logRouterConfig,
    ...helpRouterConfig,
    ...routes,
    indexRoute,
    fallbackRoute
]