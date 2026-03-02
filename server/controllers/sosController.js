import { encryptData } from "../utils/encryption.js";

export const sendSOS = async (req, res) => {
  const { latitude, longitude } = req.body;
  const encryptedLat = encryptData(latitude.toString());
  const encryptedLong = encryptData(longitude.toString());

  res.json({
    message: "SOS Sent Successfully",
    location: { encryptedLat, encryptedLong }
  });
};
