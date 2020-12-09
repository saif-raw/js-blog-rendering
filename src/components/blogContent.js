export const blogContent = (blogTitle, blogContent) => {
	
	
	const div = document.createElement("div");
	div.classList.add("blog-content");

	const title = document.createElement("h1");
	title.innerText = blogTitle;

	const content = document.createElement("p");
	content.innerText = blogContent;

	div.appendChild(title);
	div.appendChild(content);

	return div;
};
