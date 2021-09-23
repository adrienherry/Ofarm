const slugify = (str) =>
	String(str)
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
        
module.exports = slugify;