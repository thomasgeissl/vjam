# vjam

This is still very much a work in progress.

vjam is a virtual jam session platform. everyone can participate, active as well as passive. Currently there are only 4 instruments in each room, this will probably change. But there can be a unlimited number of people in the room.

It is hosted on github pages and for now it relies on a public mqtt broker by shiftr.io.

https://thomasgeissl.github.io/vjam/#/

## Development

vjam is written with react, redux and tonejs. instances communicate via mqtt and if everything goes right there is no need for a server in between tracking the state.

- install dependencies: `yarn install`
- run in dev mode: `yarn start`
- build production release: `yarn build`

There is a ci setup on travis, it automatically builds and deploys to github pages on every new tag.

## Build status

[![Build Status](https://travis-ci.com/thomasgeissl/vjam.svg?branch=master)](https://travis-ci.com/thomasgeissl/vjam)
