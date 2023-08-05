# Use the official Nginx image as the base image
FROM nginx:1.21

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration
COPY default.conf /etc/nginx/conf.d/

# Copy the built React app files to the Nginx static folder
COPY dist /usr/share/nginx/html

# Expose port 80 to allow incoming connections to Nginx
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]