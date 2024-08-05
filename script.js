
function handleSubmit() {
    // Get form values
    const lifePhase = document.getElementById('life-phase').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;
    const favorites = document.getElementById('favorites').value;
    const aesthetic = document.getElementById('aesthetic').value;

    
    if (isNaN(age) || age <= 0) {
        document.getElementById('age-error').style.display = 'block';
        return false;
    } else {
        document.getElementById('age-error').style.display = 'none';
    }


    let recommendation;
    let aestheticClass;
    let newImageSrc;
    switch (aesthetic) {
        case 'dark-academia':
            recommendation = "The Picture of Dorian Gray";
            aestheticClass = 'dark-academia';
            newImageSrc = 'book3.jpg';
            break;
        case '2000s-core':
            recommendation = "Looking for Alaska";
            aestheticClass = 'twenty-hundreds-core';
            newImageSrc = 'book4.jpg';
            break;
        case 'tech-cyber':
            recommendation = "Do Androids Dream of Electric Sheep?";
            aestheticClass = 'tech-cyber';
            newImageSrc = 'book5.jpg';
            break;
        case 'artsy':
            recommendation = "Lolita";
            aestheticClass = 'artsy';
            newImageSrc = 'book6.jpg';
            break;
    }

   
    const recommendationBox = document.getElementById('recommendation-box');
    recommendationBox.innerHTML = `<div class="book-cover">${recommendation}</div>`;

  
    const initialImage = document.getElementById('initial-image');
    initialImage.src = newImageSrc;
    initialImage.alt = recommendation;

    
    document.body.className = aestheticClass;

    
    const table = document.getElementById('visitors-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${lifePhase}</td><td>${age}</td><td>${city}</td><td>${favorites}</td><td>${aesthetic}</td><td>${recommendation}</td>`;

    
    return false;
}




