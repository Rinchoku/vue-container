build:
	docker compose down
	docker compose build
	docker compose up -d

up:
	docker compose up

down:
	docker compose down

bash:
	docker exec -it node bash

npm:
	docker exec -it node npm $(CMD)

eslint:
	docker exec -it node npx eslint ./

eslint-fix:
	docker exec -it node npx eslint --fix ./
