import data from "../../../data/dataPayload";

export default function handler(req, res) {
  res.status(200).json(data);
}
