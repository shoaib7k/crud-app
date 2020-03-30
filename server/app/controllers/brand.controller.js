const db = require("../../models");
const Brand = db.brands;
const Product=db.products;
const Op = db.Sequelize.Op;



// Create and Save a new Brand
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    // Create a Brand
    const brand = {
        name: req.body.name,
        
    };

    // Save Brand in the database
    Brand.create(brand)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Brand."
        });
        });

  
};

// Retrieve all Brands from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Brand.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving brands."
        });
       });
};

// Find a single brand with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Brand.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
 };
// Update a Brand by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Brand.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Brand was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Brand with id=${id}. Maybe Brand was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Brand with id=" + id
        });
      });
  };
// Delete a Brand with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Brand.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Brand was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Brand with id=${id}. Maybe Brand was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Brand with id=" + id
        });
      });
  };
// Delete all Brands from the database.
exports.deleteAll = (req, res) => {
    Brand.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Brands were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all brands."
        });
      });
  };
