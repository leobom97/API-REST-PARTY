const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) =>{
    const priceSum = services.reduce((sum, service)=> sum + service.price, 0)

    if(priceSum > budget){
        return false
    }

    return true;

}

const partyController = {
    create: async(req, res)=>{
        try{
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            }

            //Budget < Valor do Serviços => != Novo Serviço

            if(party.services && !checkPartyBudget(party.budget, party.services)){
                res.status(406).json({mensagem: 'O seu Orçamento não é o suficiente'})
                return
            }
            const response = await PartyModel.create(party)
            
            res.status(201).json({response,mensagem: 'Sua festa foi cadastrada no nosso sistema. Obrigado pela preferência!!!'})
        }catch(error){
            console.log(`Erro: ${error}`)
        }
    },

    getAll: async(req, res)=>{

        try{

            const parties = await PartyModel.find()


            res.json(parties)
        }catch(error){
            console.log(`Error: ${error}`)
        }
    },

    getParty: async(req, res)=>{
        try{
            const id = req.params.id

            const party = await PartyModel.findById(id)

            if(!party){
                res.status(404).json({mensagem: 'Festa não encontrada'})
            }else{
                res.status(201).json({party, mensagem: 'Festa encontrada'})
            }

        }catch(error){
            console.log(`Error: ${error}`)
        }
    },

    deleteParty: async(req, res)=>{
        const id = req.params.id
        
        const party = await PartyModel.findById(id)

        if(!party){
            res.status(404).json({mensagem: 'Festa não encontrada'});
            return
        }

        const deletedParty = await PartyModel.findByIdAndDelete(id);

        res.status(200).json({deletedParty,mensagem: 'Festa excluída do sistema'})
    },

    updateParty: async(req, res)=>{
        try{

            const id = req.params.id

            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            };

            if(party.services && !checkPartyBudget(party.budget, party.services)){
                res.status(406).json({mensagem: 'O seu Orçamento não é o suficiente'})
                return
            }

            const updatedParty = await PartyModel.findByIdAndUpdate(id, party)

            if(!updatedParty){
                res.status(404).json({mensagem: 'Festa não encontrada'});  
            }else{
                res.status(200).json({party, mensagem: 'Festa Atualizada com Sucesso'})
            }

        }catch(error){
            console.log(`Error: ${error}`)
        }
    }
}


module.exports = partyController