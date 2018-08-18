'use strict';

// had enabled by egg
// exports.static = true;

exports.mysql = {
    enabled: true,
    package: 'egg-mysql'
}
exports.passport = {
    enabled: true,
    package: 'egg-passport'
}
exports.passportGithub = {
    enabled: true,
    package: 'egg-passport-github'
}
exports.cors = {
    enabled: true,
    package: 'egg-cors'
}
exports.nunjucks = {
    enabled: true,
    package: 'egg-view-nunjucks'
}
exports.jwt = {
    enabled: true,
    package: 'egg-jwt'
}