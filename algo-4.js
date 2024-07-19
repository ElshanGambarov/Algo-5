
// Funksiya: Verilmiş arraydəki ən böyük ədədi tapır
function findMax(arr) {
    // Array boşdursa, null qaytarır
    if (arr.length === 0) {
        return null;
    }

    // İlk elementi ən böyük ədəd olaraq qəbul edir
    let max = arr[0];

    // Arraydəki digər ədədləri yoxlayır
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Ən böyük ədədi qaytarır
    return max;
}

// Nümunə array və funksiyanın istifadəsi
const numbersArray = [3, 7, 2, 8, 5];
const maxNumber = findMax(numbersArray);
console.log("Max Number:", maxNumber);