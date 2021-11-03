/*
##########################################################################################################################
#                                                    TS-HOMERICO-AVBOT                                                   #
##########################################################################################################################
#                                                                                                                        #
#                                                   AVB Whatsapp Bot                                                     #
#                                          Multi-language API for Whatsapp Bot                                           #
#                                 ---------------- Python3 -- NodeJS ----------------                                    #
#                                                * Under Development *                                                   #
#                                     https://github.com/anthony-freitas/ts-avbot                                        #
#                                                                                                                        #
##########################################################################################################################
#                                                        MAIN CODE                                                       #
##########################################################################################################################
*/

// Import Homerico
import HomericoConexao from 'ts-homerico'

// Import Express
import express from 'express'

/*
##########################################################################################################################
#                                                          MAIN                                                          #
##########################################################################################################################
*/

// Instance Homerico
const homerico = new HomericoConexao()

// Homerico Authentication
homerico.validar(process.env.HOMERICO_GATEWAY)
homerico.login({
  usuario: process.env.HOMERICO_USER,
  senha: process.env.HOMERICO_PASSWORD
})

/*
##########################################################################################################################
#                                                          END                                                           #
##########################################################################################################################
*/