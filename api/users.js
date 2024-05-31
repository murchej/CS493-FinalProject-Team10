const { Router } = require('express')
const { User } = require("../models/user")
const { ValidationError } = require("sequelize")

const jsonwebtoken = require("jsonwebtoken")

const router = Router()