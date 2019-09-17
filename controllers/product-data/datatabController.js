const DataTab = require('../../models/product-data/datatabModel');

exports.addDataTab = async (req, res) => {
  console.log(req.body);
  try {
    await DataTab.create({
      name: req.body.name
    });
    res.status(200).json({
      status: 'success'
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.showDataTab = async (req, res) => {
  try {
    const DataTabs = await DataTab.find({});
    res.status(200).json({
      status: 'success',
      results: DataTabs.length,
      data: {
        DataTabs
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.editDataTab = async (req, res) => {
  try {
    const DataTab = await DataTab.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        DataTab
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateDataTab = async (req, res) => {
  try {
    const newDataTab = await DataTab.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json({
      status: 'updated',
      data: {
        newDataTab
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteDataTab = async (req, res) => {
  try {
    await DataTab.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'deleted',
      data: null
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
