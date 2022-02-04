#Makefile
start dev:
	npm run serve

start:
	docker-compose up --build -d

stop:
	docker-compose stop

restart:
	docker-compose restart

migrate:
	docker-compose exec "server" sh -c "cd database && npx sequelize-cli db:migrate"

undo:
	docker-compose exec "server" sh -c "cd database && npx sequelize-cli db:migrate:undo:all"

seed:
	docker-compose exec "server" sh -c "cd database && npx sequelize-cli db:seed:all"