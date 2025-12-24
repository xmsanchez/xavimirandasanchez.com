.PHONY: help dev build clean docker-dev docker-build docker-stop

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev: ## Run development server locally (requires Hugo and Node.js)
	npm install
	npm run dev

build: ## Build site for production locally
	npm install
	npm run build

clean: ## Clean build artifacts
	rm -rf public/ resources/ .hugo_build.lock

docker-dev: ## Start development server with Docker Compose
	docker-compose up

docker-build: ## Build site for production with Docker
	docker-compose -f docker-compose.build.yml up

docker-stop: ## Stop Docker containers
	docker-compose down

docker-rebuild: ## Rebuild and start Docker containers
	docker-compose up --build

docker-build-image: ## Build Docker image once (faster subsequent runs)
	docker build -t xavi-portfolio-hugo:latest .

