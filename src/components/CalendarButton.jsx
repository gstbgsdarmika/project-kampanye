import React from "react";
import moment from "moment";

export default function CalendarButton() {
  const BASE_URL = "https://calendar.google.com/calendar/render";

  const eventDetails = {
    text: "Pemilihan Calon DPRD Kota Denpasar Tahun 2024",
    dates: "20240214T070000/20240214T080000",
    details:
      "Mari bergabung dalam pemilihan Calon Anggota Dewan Perwakilan Rakyat Daerah (DPRD) Kota Denpasar untuk masa jabatan tahun 2024-2029. Suara Anda adalah suara perubahan!",
    location: "Denpasar, Denpasar City, Bali, Indonesia",
  };

  const addToGoogleCalendar = () => {
    const startDate = moment(eventDetails.dates.split("/")[0]).format(
      "YYYYMMDDTHHmmss[Z]"
    );
    const endDate = moment(eventDetails.dates.split("/")[1]).format(
      "YYYYMMDDTHHmmss[Z]"
    );

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
