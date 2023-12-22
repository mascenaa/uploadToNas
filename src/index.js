const { readFileSync } = require('fs')
const { Client } = require('ssh2')
const express = require('express')

const server = express()

server.post('/', (req, res) => {
     // const { body } = req
     // const conection = new Client()

     // conection.on('ready', () => {
     //      console.log('Client :: ready')
     //      conection.exec('uptime', (err, stream) => {
     //           if (err) throw err
     //           stream.on('close', (code, signal) => {
     //                console.log('Stream :: close :: code: ' + code + ', signal: ' + signal)
     //                conection.end()
     //           }).on('data', (data) => {
     //                console.log('STDOUT: ' + data)
     //           }).stderr.on('data', (data) => {
     //                console.log('STDERR: ' + data)
     //           })
     //      })
     // }).connect({
     //      host: process.env.SSH_HOST,
     //      port: process.env.SSH_PORT,
     //      username: process.env.SSH_USERNAME,
     //      password: process.env.SSH_PASSWORD,
     // })

     // res.send('')
})


server.listen(3000, () => {
     console.log('Rodando na porta 3000')
})

