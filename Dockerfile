FROM node:lts-iron
 
WORKDIR /shaikh_asma_ui_garden/
 
COPY public/ /shaikh_asma_ui_garden/public
COPY src/ /shaikh_asma_ui_garden/src
COPY package.json /shaikh_asma_ui_garden/
COPY . /shaikh_asma_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]