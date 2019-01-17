FROM nginx

WORKDIR /app

# Copy in the static build assets
COPY build/ /app/

# Copy in the nginx config file
COPY nginx.conf /etc/nginx/nginx.conf

# All files are in, start the web server
CMD ["nginx"]
