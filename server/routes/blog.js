const router = require("express").Router();
const Blog = require("../models/blog.model");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json({ status: 200, blogs: blogs });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

router.get("/:blogSlug", async (req, res) => {
  try {
    const blogSlug = req.params.blogSlug;
    const blog = await Blog.findOne({ slug: blogSlug });
    return res.status(200).json({ blog: blog });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

router.delete("/:blogSlug", async (req, res) => {
  try {
    const blogSlug = req.params.blogSlug;
    const blog = await Blog.findOne({ slug: blogSlug });
    if (blog) {
      blog.delete();
      return res.status(200).json({ status: 200, message: "Blog deleted" });
    } else {
      return res.status(404).json({ status: 404, message: "Blog not found" });
    }
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

router.post("/add", async (req, res) => {
  try {
    const category = req.body.category;
    const title = req.body.title;
    const slug = req.body.slug;
    const author = req.body.author;
    const text = req.body.text;

    const newBlog = new Blog({ category, title, slug, author, text });

    const newBlogSaved = await newBlog.save();
    return res.status(200).json({ status: 200, message: "blog added!" });
  } catch (err) {
    return res.status(400).json("Error: " + err);
  }
});

module.exports = router;
