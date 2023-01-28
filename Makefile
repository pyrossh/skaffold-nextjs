dev:
		skaffold dev --port-forward

setup:
		kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.4.0/deploy/static/provider/cloud/deploy.yaml

psql:
		kubectl exec -it deployment/postgres -- psql postgres://postgres:postgres@postgres:5432/postgres

psql-local:
	psql postgres://postgres:postgres@127.0.0.1:5433/postgres

generate:
	npx pgtyped -c config.json

#open http://demo.localdev.me:8080/
#open http://127.0.0.1:8080/
