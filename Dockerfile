# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10.8.0 as build-stage
WORKDIR /app
RUN rm -rf node_modules
RUN npm cache clean --force 
RUN npm install
COPY package*.json /app/
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/parkingangular 

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist/parkingangular/ /usr/share/nginx/html
#Copy default nginx configuration
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx-custom.conf /etc/nginx/conf.d
EXPOSE 80