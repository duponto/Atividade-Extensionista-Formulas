const startDate = new Date(2022, 0); // Janeiro de 2022
const endDate = new Date(2024, 11); // Dezembro de 2024
const objValues = {
    dates: [],
    values: [],
};
const currentDate = new Date(startDate);
while (currentDate <= endDate) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    objValues.dates.push(`${year}-${month.toString().padStart(2, '0')}`);

    objValues.values.push(Math.floor(Math.random() * 50) + 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
}

console.log(objValues)

export default objValues;