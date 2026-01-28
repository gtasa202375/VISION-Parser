# 使用极简的 Nginx Alpine 镜像作为基础
FROM nginx:alpine

# 作者信息
LABEL maintainer="3657990021@qq.com"
LABEL description="VISION Parser - A minimalist VIP video parser"

# 将当前目录下的所有文件复制到 Nginx 的默认网页目录
COPY . /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
