FROM node:alpine as base
WORKDIR /usr/app 
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx as final
EXPOSE 80
COPY --from=base /usr/app/build /usr/share/nginx/html/Advanced-Tic-Tac-Toe