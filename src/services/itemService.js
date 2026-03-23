const itemModel = require('../models/itemModel');

const fetchItems = async () => {
  return itemModel.getAllItems();
};

const addItem = async (payload) => {
  return itemModel.createItem(payload);
};

const editItem = async (id, payload) => {
  return itemModel.updateItemById(id, payload);
};

module.exports = {
  fetchItems,
  addItem,
  editItem
};
