const mongoose = require('mongoose');
const Tour = require('./tourModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review can not be empty'],
    },
    rating: {
      type: Number,
      min: [1, 'Rating must be above or equal to 1.'],
      max: [5, 'Rating must be below or equal to 5.'],
      // required: [true, 'Review can not be empty'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to an user.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

reviewSchema.index({ user: 1, tour: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  // this.populate({ path: 'tour', select: 'name' }).populate({
  //   path: 'user',
  //   select: 'name photo',
  // });
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

reviewSchema.statics.calcAverageRatings = async function (tourId) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingsAverage: 0,
    });
  }
};

reviewSchema.post('save', function () {
  //* this points to current review
  this.constructor.calcAverageRatings(this.tour);
});

// Not needed for post, you can get doc in post directly
// Pre-middleware to capture the document before findOneAndX operation
// reviewSchema.pre(/^findOneAnd/, async function (next) {
//   const filter = { _id: this._conditions._id }; // Assuming _id is the identifier for your document
//   this.r = await this.model.findOne(filter);
//   next();
// });

// // Post-middleware to calculate average ratings based on the captured document
// reviewSchema.post(/^findOneAnd/, async function () {
//   // Access the captured document as `this.r`
//   const tourId = this.r.tour;

//   // You can now use `this.r` to calculate average ratings or perform other actions
//   await this.r.constructor.calcAverageRatings(tourId);
// });

reviewSchema.post(/^findOneAnd/, async (doc) => {
  await doc.constructor.calcAverageRatings(doc.tour);
});

const Review = mongoose.model('Review', reviewSchema);

Review.on('index', (err) => {
  if (err) {
    console.error('Review index error: %s', err);
  } else {
    console.info('Review indexing complete');
  }
});

module.exports = Review;
