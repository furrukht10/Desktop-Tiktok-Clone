import Videos from "../models/dbModel.js";

export const getAllVideos = async (req, res) => {
  const videos = await Videos.find({});

  if (!videos) {
    res.status(500).send(err);
  } else {
    res.status(200).send(videos);
  }
};

export const postVideo = async (req, res) => {
  const dbVideos = await Videos.create(req.body);
  if (err) {
    res.status(500).send(err);
  } else {
    res.status(201).send(dbVideos);
  }
};
