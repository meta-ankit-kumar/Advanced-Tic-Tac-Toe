FROM node:alpine as ui-build
WORKDIR /usr/src/app
COPY ./package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=ui-build /usr/src/app/build /usr/share/nginx/html
# COPY ./server/package*.json ./api/
# RUN cd api && yarn install
# RUN echo "hello there"
# COPY ./server ./api/
# CMD ["node", "./api/server.js"]
