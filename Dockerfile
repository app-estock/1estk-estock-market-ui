FROM node:17.6.0
WORKDIR /app
COPY package.json /app/package.json
COPY package-container.json /app/package-container.json
RUN npm install
RUN npm install -g @angular/cli
RUN npm install -g  guid-typescript --save
COPY . /app
EXPOSE 4200
CMD ng serve --host 0.0.0.0