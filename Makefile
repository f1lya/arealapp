#Makefile
start:
	docker-compose up --build -d

stop:
	docker-compose stop

restart:
	docker-compose restart

migrate:
	cd database; \
	sequelize-cli db:migrate

undo:
	cd database; \
	sequelize-cli db:migrate:undo:all

seed:
	cd database; \
	sequelize-cli db:seed:all