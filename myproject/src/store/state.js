let dafaultCity = '上海'
try {
  if (localStorage.city) {
    dafaultCity = localStorage.city
  }
} catch (e) {}

export default{
  city: dafaultCity
}
