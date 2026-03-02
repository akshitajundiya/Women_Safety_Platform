import axios from "../api/axios";

function SOS() {
  const handleSOS = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const token = localStorage.getItem("token");

      await axios.post(
        "/sos/send",
        {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("SOS Sent Successfully");
    });
  };

  return <button onClick={handleSOS}>Send SOS</button>;
}

export default SOS;
