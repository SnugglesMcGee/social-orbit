const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThought);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);
// .post(addReaction);

// POST at /api/thought/user/:id
router.route("/:userId").post(createThought);

// POST at /api/thought/:thoughtId/reaction
router.route("/:thoughtId/reaction").post(addReaction);

// DELETE at /:thoughtId/reactions/reactionId
router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);
// router.route("/:id/:reactionId").delete(deleteReaction);

module.exports = router;
