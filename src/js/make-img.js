export function makeImages(array) {
  return array
    .map(
      ({
        likes,
        views,
        comments,
        downloads,
        tags,
        largeImageURL,
        webformatURL,
      }) => `<div class="photo-card">
      <a class="gallery__link" href="${largeImageURL}">
        <img
          src="${webformatURL}"
          alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b> ${likes}
          </p>
          <p class="info-item">
            <b>Views</b> ${views}
          </p>
          <p class="info-item">
            <b>Comments</b> ${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b> ${downloads}
          </p>
        </div>
      </a>
    </div>`
    )
    .join('');
}
