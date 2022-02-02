#Makefile
start dev:
	npm run serve

start build:
	docker-compose up --build -d

stop build:
	docker-compose stop

restart build:
	docker-compose restart

migrate:
	docker-compose exec "server" sh -c "cd database && npx sequelize-cli db:migrate"

undo:
	docker-compose exec "server" sh -c "cd database && npx sequelize-cli db:migrate:undo:all"

seed:
	docker-compose exec "server" sh -c "cd database && npx sequelize-cli db:seed:all"