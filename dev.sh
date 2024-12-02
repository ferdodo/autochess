#!/bin/bash
STATE=`mktemp -d`
touch $STATE/src
touch $STATE/build

function sync-containers {
    docker cp . autochess-sandbox-1:/autochess
    docker cp . autochess-offline-1:/autochess
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
	echo "docker compose down" >> .git/hooks/pre-commit
	echo "docker compose up -d --build" >> .git/hooks/pre-commit
	chmod +x .git/hooks/pre-commit
}

set -e
setup_pre_commit_hook
docker compose down -t 1
docker compose up -d --build offline sandbox
echo "╭────────────────────────────────╮"
echo "│ Sandbox: http://localhost:2437 │"
echo "│ Offline: http://localhost:5423 │"
echo "╰────────────────────────────────╯"
set +e

while true
do 
	set-state src

	if diff-state src build; then
		set-state build && sync-containers
	fi

	sleep 1
done