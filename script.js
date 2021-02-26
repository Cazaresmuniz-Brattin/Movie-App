const url = "https://ghibliapi.herokuapp.com/films"
function displayLoading() {
    $("#loading-message").modal("show");
}
function toggleMovieHTML() {
    $("#movies-cards-container").toggleClass("d-none");
}
// todo: Function to build a movie card using a movie object
function buildMovieCard(movieObject) {
    let movieHTML = "";
    movieHTML += `<div class="card my-3 border border-primary rounded"><div class="card-body">`
    movieHTML += `<button type="button" data-id="${movieObject.id}" id="${movieObject.id}-button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i id="delete-button" class="fas fa-trash text-primary"></i></span></button>`
    movieHTML += `<h5 class="card-title" data-title="${movieObject.title}"><span class="heading-font-cards">Title:</span> ${movieObject.title}</h5>`
    movieHTML += `<p class="card-text" data-rating="${movieObject.description}"><span class="heading-font-cards">Description:</span> ${movieObject.description}</p>`
    movieHTML += `<p class="card-text" data-rating="${movieObject.rt_score}"><span class="heading-font-cards">Rating:</span> ${movieObject.rt_score}</p>`
    movieHTML += `<button type="button" data-id="${movieObject.id}" id="${movieObject.id}-edit-button" class="edit-btn btn btn-primary" data-dismiss="modal" aria-label="Edit"><span class="heading-font-cards" aria-hidden="true">Edit Movie</span></button>`
    movieHTML += `</div></div>`
    return movieHTML;
}
function buildModalHTML(modalObject){
    let modalHTML = "";
    modalHTML += `<div class="modal-dialog">`
    modalHTML += `<div class="modal-content">`
    modalHTML += `<div class="modal-header">`
    modalHTML += `<h5 class="modal-title"><span class="heading-font-cards">Editing:</span> ${modalObject.title}</h5>`
    modalHTML += `<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>`
    modalHTML += `</div>`
    modalHTML += `<div class="modal-body"><form>`
    modalHTML += `<div class="form-group">`
    modalHTML += `<label for="editModalMovieTitle"><span class="heading-font-cards">New Title: </span></label><input type="text" class="form-control" id="editModalMovieTitle" aria-describedby="emailHelp" value="${modalObject.title}"></div>`
    modalHTML += `<div class="form-group">`
    modalHTML += `<p data-rating="${modalObject.rating}"><span class="heading-font-cards">New Rating: </span> (Currently: ${modalObject.rating})</p>`
    modalHTML += `<div class="form-check form-check-inline" id="editModalMovieRating">`
    modalHTML += `<input class="form-check-input" type="radio" name="inlineRadioEditOptions" id="inlineEditRadio1" value="1"><label class="form-check-label" for="inlineEditRadio1"> 1</label></div>`
    modalHTML += `<div class="form-check form-check-inline">`
    modalHTML += `<input class="form-check-input" type="radio" name="inlineRadioEditOptions" id="inlineEditRadio2" value="2"><label class="form-check-label" for="inlineEditRadio2"> 2</label></div>`
    modalHTML += `<div class="form-check form-check-inline">`
    modalHTML += `<input class="form-check-input" type="radio" name="inlineRadioEditOptions" id="inlineEditRadio3" value="3"><label class="form-check-label" for="inlineEditRadio3"> 3</label></div>`
    modalHTML += `<div class="form-check form-check-inline">`
    modalHTML += `<input class="form-check-input" type="radio" name="inlineRadioEditOptions" id="inlineEditRadio4" value="4"><label class="form-check-label" for="inlineEditRadio4"> 4</label></div>`
    modalHTML += `<div class="form-check form-check-inline">`
    modalHTML += `<input class="form-check-input" type="radio" name="inlineRadioEditOptions" id="inlineEditRadio5" value="5"><label class="form-check-label" for="inlineEditRadio5"> 5</label></div>`
    modalHTML += `</div></form></div>`
    modalHTML += `<div class="modal-footer">`
    modalHTML += `<button id="save-edits-button" data-id="${modalObject.id}" type="button" class="btn btn-primary heading-font-cards">Save edits</button></div>`
    modalHTML += `</div></div>`
    return modalHTML;
}
