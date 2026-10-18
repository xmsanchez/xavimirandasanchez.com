.PHONY: help dev build clean

help: ## Show this help message
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-10s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev: ## Run the development server (Tailwind watch + Hugo)
	npm install
	npm run dev

build: ## Build the site for production into public/
	npm ci
	npm run build

clean: ## Remove build artifacts
	rm -rf public/ resources/ static/css/main.css
