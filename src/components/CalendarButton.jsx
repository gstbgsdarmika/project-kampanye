import React from "react";
import moment from "moment";

export default function CalendarButton() {
  const BASE_URL = "https://calendar.google.com/calendar/render";

  const eventDetails = {
    text: "Pemilihan Calon DPRD Kota Denpasar Tahun 2024",
    startDateTime: "2024-02-14T07:00:00+08:00",
    endDateTime: "2024-02-14T08:00:00+08:00",
    details:
      "Mari bergabung dalam pemilihan Calon Anggota Dewan Perwakilan Rakyat Daerah (DPRD) Kota Denpasar untuk masa jabatan tahun 2024-2029. Suara Anda adalah suara perubahan!",
    location: "Denpasar, Denpasar City, Bali, Indonesia",
  };

  const addToGoogleCalendar = () => {
    const startDate = moment(eventDetails.startDateTime).format(
      "YYYYMMDDTHHmmss"
    );
    const endDate = moment(eventDetails.endDateTime).format("YYYYMMDDTHHmmss");

    const url = `${BASE_URL}?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.text
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      eventDetails.details
    )}&location=${encodeURIComponent(eventDetails.location)}`;

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={addToGoogleCalendar}
      className="w-[231px] md:py-2.5 py-3 bg-[#C73027] text-white text-center md:text-[22px] text-[19.266px] rounded-full"
    >
      Ingatkan Saya
    </button>
  );
}
