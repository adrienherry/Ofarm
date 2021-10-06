const { Garden } = require("../../models");

module.exports = {
    gardens: async () => {
        gardens = await Garden.findAll({
            include: [{
                association: "species",
                include: {
                    association: "events",
                    include: "eventType"
                }
            }]
        });

        return gardens;
    }
}
