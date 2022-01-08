import Videos from "../models/dbModel.js";

export const getAllVideos = async (req, res) => {
  const videos = await Videos.find({});

  if (!videos) {
    res.status(500).send("");
  } else {
    res.status(200).send(videos);
  }
};

export const postVideo = async (req, res) => {
  const dbVideos = await Videos.create(req.body);
  res.status(201).send(dbVideos);
};
