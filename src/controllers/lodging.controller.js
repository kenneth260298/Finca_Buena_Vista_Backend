const lodgingController = {}
var nodemailer = require('nodemailer');
const Lodging = require('../models/Lodging');

lodgingController.getBasicInformation = async (req, res) => {
    const lodging = await Lodging.find({}, ['name', 'description', 'internal_name', 'mainImage']);
    res.json(lodging);
}

lodgingController.getLodgingByInternalName = async (req, res) => {
    const lodging = await Lodging.find().where('internal_name').equals(req.params.internal_name);
    res.json(lodging);
}


lodgingController.saveInformation = async (req, res) => {
    const newLodging = new Lodging(req.body);

    await newLodging.save(function (err) {
        if (err) {
            res.send({
                message: err,
                code: '500'
            });
        } else {
            res.send({
                message: 'Lodging saved',
                code: '200'
            });
        }
    });
}

lodgingController.deleteLodging = async (req, res) => {
    await Lodging.findByIdAndDelete(req.params.id);

    res.send({ message: 'Lodging deleted', code: '200' });
}


lodgingController.editInformation = async (req, res) => {
    await Lodging.findByIdAndUpdate(req.params.id, req.body);

    res.send({ message: 'Lodging updated', code: '200' });
}

lodgingController.sendEmail = async (req, res) => {

    const data = req.body

    let flag = true

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'USE YOUR EMAIL',
            pass: 'USE YOUR EMAIL-PASSWORD'
        }
    });

    var mailOptionsToAdmin = {
        from: 'USE YOUR EMAIL',
        to: 'USE YOUR EMAIL',
        cc: 'USE YOUR EMAIL',
        subject: 'RESERVA FINCA BUENA VISTA',
        text: data.message
    };

    await transporter.sendMail(mailOptionsToAdmin, function (error, info) {
        if (error) {
            flag = false
        } else {
            flag = true
        }
    });
    if (flag) {

        var mailOptionsToClient = {
            from: 'USE YOUR EMAIL',
            to: data.to,
            subject: 'CONFIRMACION SOLICITUD RESERVA | FINCA BUENA VISTA',
            text: `
            Su solicitud de reservacion en Finca Buena Vista fue enviada satisfactoriamente, 
            pronto te enviaremos mediante Whatsapp, los números de cuentas bancarias y sinpe móvil  
            para que pueda depositar y confirmar la reservación. 
            Muchas gracias
            
            Finca Buena Vista | Servicio de hospedaje
            Whatsapp +506 ????????`
        };

        await transporter.sendMail(mailOptionsToClient, function (error, info) {
            if (error) {
                flag = false
            } else {
                flag = true
            }
        });

        if (flag == true) {
            res.send({ message: 'Request sent successfully', code: '200' });
        } else {
            res.send({ message: 'Error', code: '500' });
        }
    } else {
        res.send({ message: 'Error', code: '500' });
    }

}

module.exports = lodgingController;

