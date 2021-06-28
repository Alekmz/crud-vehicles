const { Router } = require('express');
const models = require('../models');

const router = Router();

router.get('/', async(req, res) => {
    const vehicles = await models.Vehicle.findAll();
    res.status(200).json(vehicles);
});

router.get('/:id', async(req, res) => {
    const vehicles = await models.Vehicle.findByPk(req.params.id);
    res.status(200).json(vehicles);
});

router.post('/', async(req, res)=> {
    try{
        const { placa, chassi, renavam, modelo, marca, ano } = req.body;
        const newVehicle = await models.Vehicle.create({ placa, chassi, renavam, modelo, marca, ano });
        res.status(201).json({ message: "Cadastro efetuado!" });
    } catch( err ) {
        res.status(400).send({ error: err});
    }
    
    
});

router.put('/:id', async(req, res) => {
    try{
        const { placa, chassi, renavam, modelo, marca, ano } = req.body;

         await models.Vehicle.update(
            { placa, chassi, renavam, modelo, marca, ano },
            {
                where: {
                    id: req.params.id,
                },
            },
        )
        return res.status(200).json({ message: "Atualizado com sucesso"});
        
    } catch( err ) {
       return res.status(400).send({ error: err});
    }
    
});

router.delete('/:id', async(req, res) => {
    await models.Vehicle.destroy({
        where: {
            id: req.params.id,
        },
    });

    res.status(200).json({ message: "Exclusão efetuada!" });
});

module.exports = router;