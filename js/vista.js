getCities();
async function getCities() {
  const citiesCol = collection(app, 'personas');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => console.log(doc.data()));
  return cityList;
}


