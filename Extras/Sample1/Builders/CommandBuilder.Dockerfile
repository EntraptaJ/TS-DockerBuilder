# syntax=docker/dockerfile:experimental
ARG BUILD_IMAGE='alpine'

FROM ${BUILD_IMAGE} as builder

ARG FIRST_CMD='echo "no first cmd"'
ENV FIRST_CMD=${FIRST_CMD}

RUN /bin/sh -c "${FIRST_CMD}"