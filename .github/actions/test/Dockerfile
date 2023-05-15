FROM node:18-alpine3.17

WORKDIR /app

# Installs Orca Security CLI scanning tool
RUN apk update \
  && apk upgrade \
  && apk add curl bash \
  && curl -sfL 'https://raw.githubusercontent.com/orcasecurity/orca-cli/main/install.sh' | bash -s

# github action runner executes the action container with the repository source
# code mounted in /github/workspace volume
CMD ["sh", "/github/workspace/bin/scan.sh"]
