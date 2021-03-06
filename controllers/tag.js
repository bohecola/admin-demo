const { Tag, Article } = require('../models');
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

      Tag
        .paginate(filter, {
          sort: { createdAt: -1 },
          populate: [
            { path: 'creator', select: 'username avatar' },
            { path: 'articles', select: 'title -_id' }
          ],
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
      Tag
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
  }

  Common.autoFn(tasks, res, resObj);
}

exports.one = (req, res) => {
  const resObj = Common.clone(Constant.DEFAULT_SUCCESS);

  let tasks = {
    query: cb => {
      Tag
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
    checkParams: cb => {
      Common.checkParams(req.body, ['name'], cb);
    },
    add: ['checkParams', (results, cb) => {
      req.body.creator = req.user._id;
      new Tag(req.body)
        .save()
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

exports.update = (req, res) => {
  const resObj = Common.clone(Constant.DEFAULT_SUCCESS);

  let tasks = {
    checkParams: cb => {
      Common.checkParams(req.body, ['name'], cb);
    },
    update: ['checkParams', (results, cb) => {
      req.body.creator = req.user._id;
      Tag
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
    }]
  };

  Common.autoFn(tasks, res, resObj);
}

exports.delete = (req, res) => {
  const resObj = Common.clone(Constant.DEFAULT_SUCCESS);

  let tasks = {
    remove: cb => {
      Tag
        .findByIdAndRemove(req.params.id)
        .then(ret => {
          resObj.data = ret;
          cb(null, ret);
        })
        .catch(err => {
          console.log(err);
          cb(Constant.DEFAULT_ERROR);
        });
    },
    removeRef: ['remove', (results, cb) => {
      const { remove } = results;
      Article.updateMany(
        { _id: { $in: remove?.articles } },
        { $pull: { tags: ret._id } }
      )
      .then(() => {
        cb(null);
      })
      .catch(err => {
        console.log(err);
        cb(Constant.DEFAULT_ERROR);
      });
    }],
  };

  Common.autoFn(tasks, res, resObj);
}
