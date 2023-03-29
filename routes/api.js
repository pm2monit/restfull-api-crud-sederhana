const app = require('express').Router()
const { v4: uuidv4 } = require('uuid')
const db = require("../models");
let Tugas = db.tugas;
const { Op } = require("sequelize");

const TugasGet = async(req, res) => {
    let method = req.method;
    try {
        let message = '';
        let uuid = await uuidv4()
        let data = [];

        switch(method) {
            case 'GET':
                    let param_id = req.params.id;
                    let data_get = [];
                    if(param_id === null || param_id === undefined) {
                        data_get = await Tugas.findAll();
                    } else {
                        data_get = await Tugas.findOne({
                            where: {
                                id: param_id
                            }
                        });
                    }

                    console.log(data_get);
                    
                    message = `Success ${method}`;
                    data = data_get
                    console.log(data);
                break;
            case 'POST':
                    let inputData = {
                        kode_tugas: uuid,
                        judul: req.body.judul,
                        deskripsi: req.body.desc ? '': req.body.desc, 
                        status: false
                    }
                    let data_input = await Tugas.create(inputData)
                    data = data_input
                    message = `Success ${method} - ${uuid}`;
                break;
            case 'PUT':
                    let where = {
                        where: {
                            id: parseInt(req.params.id)
                        }    
                    } 

                    let update = ({
                        status: true
                    })

                    let data_update = await Tugas.update(update,  where)
                    message = `Success ${method}`;
                    let check = '';
                    if(data_update == 0 ) {
                        check = 'Failed update, please check your id'
                    } else {
                        check = 'Success update, thank you'
                    }
                    data = check
                break;
            case 'DELETE':
                    let where_del = {
                        where: {
                            id: parseInt(req.params.id)
                        }    
                    } 

                    let data_hapus = await Tugas.destroy(where_del);
                    let check_ = '';
                    if(data_hapus == 0 ) {
                        check_ = 'Failed delete, please check your id'
                    } else {
                        check_ = 'Success delete, thank you'
                    }
                    
                    message = `Success ${method}`;
                    data = check_
                    
                break;
            default:
                data = []
                message = `Failed no method ${method}`;

        }

        return await res.json({
            'code': '200',
            'message': message,
            'data': data
        })
    }
    catch(err) {
        return await res.json({
            'code': '500',
            'message': err.message || "Some error occurred while retrieving database.",
            'method': method

        })
    }
}

app.all('/tugas', TugasGet)
app.all('/task/:id', TugasGet)

module.exports = app;