# node-red-azure-webapp
A webapp wrapper for running node-red in an Azure Web App for Linux [Node.js].

Deploy to Azure with this button:

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fclysss%2Fnode-red-azure-webapp%2Fmaster%2Fwebapp-deploy.json" target="_blank"><img src="http://azuredeploy.net/deploybutton.png"/></a>

(postinstall.sh desactivé)
ajouté chmod 777 -R dans le postinstall pour que l'installation d'autres packages depuis Node-red se passe correctement




--21/12/24 : create webapp node 20
# config deployment :
Source
External Git
Repository
https://github.com/clysss/node-red-azure-webapp.git
Branch
master (!! pas main!)

# browse to
xxx/red-admin
