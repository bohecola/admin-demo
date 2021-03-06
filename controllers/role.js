const { Role } = require('../models');
const Common = require('./common');
const Constant = require('../constant');

exports.page = (req, res) => {
  const resObj = Common.clone(Constant.DEFAULT_SUCCESS);

  let tasks = {
    checkParams: cb => {
      Common.checkParams(req.query, ['page', 'limit'], cb);
    },
    query: ['checkParams', (results, cb) => {
      const { page, limit } = req.query;

      const filter = {};

      Role
        .paginate(filter, {
          sort: { createdAt: -1 },
          lean: true,
          leanWithId: false,
          page: parseInt(page),
          limit: parseInt(limit)
        })
        .then(ret => {
          resObj.data = ret;
          cb(null);
        })
        .catch(err => {
          console.log(err);
          cb(Constant.DEFAULT_ERROR);
        });
    }]
  };

  Common.autoFn(tasks, res, resObj);
}

exports.list = (req, res) => {
  const resObj = Common.clone(Constant.DEFAULT_SUCCESS);

  let tasks = {
    query: cb => {
      const filter = {};
      Role
        .find(filter)
        .sort({ createdAt: -1 })
        .lean()
        .then(ret => {
          resObj.data = ret;
          cb(null);
        })
        .catch(err => {
          console.log(err);
          cb(Constant.DEFAULT_ERROR);
        });
    }
  };

  Common.autoFn(tasks, res, resObj);
}

exports.one = (req, res) => {
  const resObj = Common.clone(Constant.DEFAULT_SUCCESS);

  let tasks = {
    query: cb => {
      Role
        .findById(req.params.id)
        .then(ret => {
          resObj.data = ret;
          cb(null);
        })
        .catch(err => {
          console.log(err);
          cb(Constant.DEFAULT_ERROR);
        });
    }
  };

  Common.autoFn(tasks, res, resObj);
}

exports.create = (req, res) => {
  const resObj = Common.clone(Constant.DEFAULT_SUCCESS);

  let tasks = {
    add: cb => {
      new Role(req.body)
        .save()
        .then(ret => {
          resObj.data = ret;
          cb(null);
        })
        .catch(err => {
          console.log(err);
          cb(Constant.DEFAULT_ERROR);
        });
    }
  };

  Common.autoFn(tasks, res, resObj);
}

exports.update = (req, res) => {
  const resObj = Common.clone(Constant.DEFAULT_SUCCESS);

  let tasks = {
    update: cb => {
      Role
        .findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        )
        .then(ret => {
          resObj.data = ret;
          cb(null);
        })
        .catch(err => {
          console.log(err);
          cb(Constant.DEFAULT_ERROR);
        });
    }
  };

  Common.autoFn(tasks, res, resObj);
}

exports.delete = (req, res) => {
  const resObj = Common.clone(Constant.DEFAULT_SUCCESS);

  let tasks = {
    remove: cb => {
      Role
        .findByIdAndRemove(req.params.id)
        .then(ret => {
          resObj.data = ret;
          cb(null);
        })
        .catch(err => {
          console.log(err);
          cb(Constant.DEFAULT_ERROR);
        });
    }
  };

  Common.autoFn(tasks, res, resObj);
}
