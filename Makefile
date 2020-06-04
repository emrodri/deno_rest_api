run:
	deno test --allow-net
	deno run --allow-net server.ts

test:
	deno test --allow-net

push:
	@echo "Launching tests"
	deno test --allow-net
	@echo "Checking clean Workspace"
	@if git diff-index --quiet HEAD; then \
		echo "Checking format"; \
		deno fmt; \
		git add .; \
		git commit --amend --no-edit; \
		git push; \
	else \
		echo "Workspace not clean. Aborting"; \
	fi;
new:
	@if git diff-index --quiet HEAD; then \
		echo "hola"; \
	else \
		echo "hola2"; \
	fi
