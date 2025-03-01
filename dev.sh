#!/bin/bash
STATE=`mktemp -d`
touch $STATE/src
touch $STATE/build

function sync-containers {
	for container in sandbox offline back ingame back-b back-c back-d back-e; do
		docker cp core "autochess-$container-1:/autochess"
		docker cp interface "autochess-$container-1:/autochess"
	done

	docker cp ingame "autochess-ingame-1:/autochess"
	docker cp offline "autochess-offline-1:/autochess"
	docker cp back "autochess-back-1:/autochess"
	docker cp back "autochess-back-b-1:/autochess"
	docker cp back "autochess-back-c-1:/autochess"
	docker cp back "autochess-back-d-1:/autochess"
	docker cp back "autochess-back-e-1:/autochess"
	docker cp sandbox "autochess-sandbox-1:/autochess"
}

function at-least-5GB-free-space {
	[ $(df --output=avail / | tail -n1) -gt 5000000 ] || (echo "Not enough free space" && exit 1)
}

function set-state {
	find . -type f -not -path '*/\.*' -printf "%T+\t%M\t%p\n" | md5sum > $STATE/$1
}

function diff-state {
	cmp -s $STATE/$1 $STATE/$2 || return 0
	return 1
}

function setup_pre_commit_hook {
	if [ -f ".git/hooks/pre-commit" ]; then
        return 0
    fi

	ls .git/hooks/pre-commit.sample
	echo "#!/bin/sh" > .git/hooks/pre-commit
	echo "docker compose down -v -t 1" >> .git/hooks/pre-commit
	echo "docker compose up -d --build" >> .git/hooks/pre-commit
	chmod +x .git/hooks/pre-commit
}


function rebuild {
	set -e
	echo ""
	echo "╭────────────────────────────╮"
	echo "│ Rebuilding containers..    │ "
	echo "│ press ctrl-c again to stop │ "
	echo "╰────────────────────────────╯"
	set +e
	docker compose down -v --remove-orphans -t 1
	set -e
	docker compose up -d --build offline sandbox back ingame back-b back-c back-d back-e
	print_startup
	set +e
}

function print_startup {
	echo ""
	echo "╭──────────────────────────────────────────────────╮"
	echo "│ Sandbox: http://localhost:2437                   │"
	echo "│ Offline: http://localhost:5423                   │"
	echo "│ Ingame:  http://localhost:53015                  │"
	echo "│                                                  │"
	echo "│ Live feedback:                                   │"
	echo "│   docker compose logs -f --no-log-prefix back    │"
	echo "│   docker compose logs -f --no-log-prefix ingame  │"
	echo "│   docker compose logs -f --no-log-prefix sandbox │"
	echo "│   docker compose logs -f --no-log-prefix offline │"
	echo "╰──────────────────────────────────────────────────╯"
}

set -e
setup_pre_commit_hook
at-least-5GB-free-space
docker compose up -d --build offline sandbox back ingame back-b back-c back-d back-e
trap rebuild SIGINT
print_startup
set +e

while true
do 
	set-state src

	if diff-state src build; then
		set-state build && sync-containers
	fi

	sleep 1
done
