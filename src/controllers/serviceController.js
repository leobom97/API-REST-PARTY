const {Service: ServiceModel} = require("../models/Service")

const serviceController = {
    create: async(req, res) =>{
        try{
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };
            const response = await ServiceModel.create(service)
            res.status(201).json({response, mensagem: 'Serviço criado com Sucesso!!!'})
        }catch(error){
            console.log(error)
        }
    },

    getAll: async(req, res) =>{
        try{
            const services = await ServiceModel.find();
            res.status(200).json(services)
        }catch(error){
            console.log(`Error: ${error}`)
        }
    },

    getService: async(req, res) => {
        try{
            const id = req.params.id
            const service = await ServiceModel.findById(id)

            if(!service){
                res.status(404).json({msg: "Serviço não encotrado!!!"})
                return
            }

            res.status(200).json(service)
        }catch(error){
            console.log(`Erro: ${error}`)
        }
    },

    deleteService: async(req, res) =>{
        try{
            const id = req.params.id
            const service = await ServiceModel.findById(id)

            if(!service){
                res.status(404).json({msg: "Serviço não encotrado!!!"})
                return
            }

            const deleteService = await ServiceModel.findByIdAndDelete(id)

            res.status(200).json({deleteService, mensagem: 'Serviço excluído com Sucesso'})
        }catch(error){
            console.log(error)
        }
    },

    updateService: async(req, res)=>{

        const id = req.params.id

        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        };

        const updatedService = await ServiceModel.findByIdAndUpdate(id, service)

        if(!service){
            res.status(404).json({msg: "Serviço não encotrado!!!"})
            return
        };

        res.status(200).json({service, mensagem: 'Serviço atualizado com Sucesso'})

    }
}

module.exports = serviceController;