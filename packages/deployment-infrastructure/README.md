This project can deploy any number of node backends. It's also stubbed out to build any number of react frontends.
This should probably be the copy paste for when we eventually move everything into a mono repo properly. (Assuming that happens someday)

It uses AWS cloudformation. (awws-cdk-lib)
apps\deployment-infrastructure\src\app\deployment\projects-data.ts contains the list of backends to be deployed, along with deployment metadata.
To deploy a new project, add it to this list.