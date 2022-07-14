FROM node:alpine as ui-build
WORKDIR /usr/src/app
COPY ./tic-tac-toe/package.json ./tic-tac-toe/
RUN cd tic-tac-toe yarn install
COPY ./tic-tac-toe ./tic-tac-toe/
RUN cd tic-tac-toe yarn build
# WORKDIR /usr/src/app/tic-tac-toe
# CMD ["yarn", "start"]

FROM node:alpine as server-build 
WORKDIR /root/
COPY --from=ui-build /usr/src/app/tic-tac-toe/build ./build/
COPY ./server/package*.json ./api/
RUN cd api && yarn install
RUN echo "hello there"
COPY ./server ./api/
CMD ["node", "./api/server.js"]
EXPOSE 3001
