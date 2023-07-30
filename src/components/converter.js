export default function convertDates(date) {
  const dateVideo = new Date(date);
  const today = new Date();
  let text = '';
  const diffInMinutes = Math.floor((today - dateVideo) / (1000 * 60));
  if (diffInMinutes < 2) {
    text = '1 минута назад'
  } else if (diffInMinutes < 5) {
    text = `${diffInMinutes} минуты назад`
  } else if (diffInMinutes < 60) {
    text = `${diffInMinutes} минут назад`
  } else if (diffInMinutes < 120) {
    text = '1 час назад'
  } else if (diffInMinutes < 300) {
    text = `${Math.floor(diffInMinutes / 60)} часа назад`
  } else if (diffInMinutes < 1200) {
    text = `${Math.floor(diffInMinutes / 60)} часов назад`
  } else if (diffInMinutes < 1260) {
    text = `${Math.floor(diffInMinutes / 60)} час назад`
  } else if (diffInMinutes < 1440) {
    text = `${Math.floor(diffInMinutes / 60)} часа назад`
  } else {
    text = `${Math.floor(diffInMinutes / (60 * 24))} дней назад`
  }
  return text
}
