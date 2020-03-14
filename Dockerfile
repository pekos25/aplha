FROM nginx:alpine as env

# fetch dependencies

RUN apk add --no-cache nodejs nodejs-npm bash chromium nss chromium-chromedriver && \
apk upgrade --no-cache --available && \
npm config set unsafe-perm true && \
npm install -g @angular/cli npm-snapshot && \
npm cache clean --force

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_DRIVER=/usr/bin/chromedriver

# build step

FROM env as dev
COPY . src
WORKDIR src
RUN npm install --save-dev karma-chrome-launcher
RUN npm install --save intl jquery bootstrap
RUN npm install && \
npm rebuild node-sass && \
ng build

# lint and unit test

FROM dev as test
RUN ng lint && \
npm run test-headless

# release stage

FROM nginx:latest AS release
COPY --from=dev src/dist/alpha-frontend/ /usr/share/nginx/html/

