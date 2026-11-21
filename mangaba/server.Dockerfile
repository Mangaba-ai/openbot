# The OpenBot server image with the Mangaba Bot interface: the same server, its app swapped for the
# one built from this fork (app/dist). BASE is the upstream image pinned by digest.
ARG BASE
FROM ${BASE}
COPY . /app/app/dist
