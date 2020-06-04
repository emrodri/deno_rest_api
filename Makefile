WORKSPACE_DIRTY = $(shell if `git diff-index --quiet HEAD --`; then echo false; else echo true;  fi)

run:
	deno run --allow-net server.ts

test:
	deno test --allow-net


push:
	@echo "Launching tests"
	deno test --allow-net
	@echo "Checking format";
	deno fmt --check;
	@echo "Checking clean Workspace"
ifeq (${WORKSPACE_DIRTY},true)
	@echo "Workspace not clean. Aborting";
	@exit 1;
endif
	@echo "Push to remote"
	git push
	