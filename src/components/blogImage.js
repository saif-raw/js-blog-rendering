export const blogImage = (imageURL) => {
	
	const div = document.createElement("div");
	div.classList.add("blog-image");

	const img = document.createElement("img");
	img.src = imageURL;
	img.alt = "Images";

	div.appendChild(img);

	return div;
};
