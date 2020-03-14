.PHONY: test run

build:
	ng build
test:
	ng test --watch=false
run:
	ng serve --host 0.0.0.0 --disable-host-check
